"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import type { NapsterCompanionApiInstance, DataChannelMessageType } from "@touchcastllc/napster-companion-api";
import { updateTranscript, type KiraEvent, type TranscriptItem } from "../../lib/kira-transcript";

// The SDK is a singleton: serialize startup across rapid close/reopen cycles.
let startupQueue: Promise<void> = Promise.resolve();

export function useKira(mountRef: RefObject<HTMLDivElement | null>) {
  const instanceRef = useRef<NapsterCompanionApiInstance | null>(null);
  const cleanupRef = useRef<() => void>(() => {});
  const activityRef = useRef<() => void>(() => {});
  const [status, setStatus] = useState("Ready to meet you");
  const [phase, setPhase] = useState<"idle" | "connecting" | "connected">("idle");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<TranscriptItem[]>([]);
  const [micMuted, setMicMuted] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [playbackBlocked, setPlaybackBlocked] = useState(false);
  const [videoStalled, setVideoStalled] = useState(false);
  const resumeRef = useRef<() => void>(() => {});
  const generationRef = useRef(0);

  useEffect(() => {
    const stop = () => cleanupRef.current();
    const offline = () => { stop(); setPhase("idle"); setError("Connection lost. Please reconnect when you are online."); };
    window.addEventListener("pagehide", stop);
    window.addEventListener("offline", offline);
    return () => {
      stop();
      window.removeEventListener("pagehide", stop);
      window.removeEventListener("offline", offline);
    };
  }, []);

  function end() {
    cleanupRef.current();
    setPhase("idle");
    setStatus("Conversation ended");
    setPlaybackBlocked(false);
    setVideoStalled(false);
  }

  function start() {
    cleanupRef.current();
    const generation = ++generationRef.current;
    const container = mountRef.current;
    if (!container) return;
    const abort = new AbortController();
    let disposed = false;
    let instance: NapsterCompanionApiInstance | null = null;
    let micStream: MediaStream | null = null;
    let idleTimer: ReturnType<typeof setTimeout>;
    let observer: MutationObserver | undefined;
    const listeners: (() => void)[] = [];
    const bound = new WeakSet<HTMLMediaElement>();
    let avatarReady = false;

    const cleanup = () => {
      if (disposed) return;
      disposed = true;
      abort.abort();
      clearTimeout(idleTimer);
      clearTimeout(connectionTimer);
      observer?.disconnect();
      listeners.forEach((remove) => remove());
      micStream?.getTracks().forEach((track) => track.stop());
      try { instance?.destroy(); } catch { /* Release remaining tracks below. */ }
      container.querySelectorAll<HTMLMediaElement>("video, audio").forEach((element) => {
        element.pause();
        (element.srcObject as MediaStream | null)?.getTracks().forEach((track) => track.stop());
        element.srcObject = null;
      });
      container.replaceChildren();
      if (generationRef.current === generation) instanceRef.current = null;
    };
    cleanupRef.current = cleanup;
    const fail = (message: string) => {
      if (disposed) return;
      cleanup();
      setPhase("idle"); setStatus("Disconnected"); setError(message); setPlaybackBlocked(false); setVideoStalled(false);
    };
    const touch = () => {
      if (disposed) return;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => fail("Conversation ended after five minutes of inactivity. Start again whenever you’re ready."), 300_000);
    };
    activityRef.current = touch;
    const playbackError = (cause?: unknown) => {
      if (disposed) return;
      // Source replacement and teardown can interrupt play() without an autoplay failure.
      if (cause instanceof DOMException && cause.name === "AbortError") return;
      if (cause instanceof DOMException && cause.name !== "NotAllowedError") return;
      setPlaybackBlocked(true);
      setError("Your browser paused playback. Select Enable audio to continue.");
    };
    const bindMedia = () => {
      container.querySelectorAll<HTMLMediaElement>("video, audio").forEach((element) => {
        if (bound.has(element)) return;
        bound.add(element);
        if (element instanceof HTMLVideoElement) {
          // The SDK uses a separate audio node. Muting video avoids duplicate audio
          // and permits inline video playback on mobile without autoplay blocking.
          element.muted = true;
          element.playsInline = true;
          element.autoplay = true;
          let lastFrameAt = performance.now();
          let frameHandle = 0;
          let previousFrames = -1;
          let warned = false;
          const presented = () => {
            if (disposed) return;
            lastFrameAt = performance.now();
            if (warned) { warned = false; setVideoStalled(false); }
            frameHandle = element.requestVideoFrameCallback(presented);
          };
          if (typeof element.requestVideoFrameCallback === "function") frameHandle = element.requestVideoFrameCallback(presented);
          const watch = setInterval(() => {
            if (disposed || !element.isConnected) return;
            if (!avatarReady || document.visibilityState !== "visible") {
              lastFrameAt = performance.now();
              return;
            }
            if (typeof element.requestVideoFrameCallback !== "function") {
              const frames = element.getVideoPlaybackQuality?.().totalVideoFrames;
              if (frames === undefined) return;
              if (frames !== previousFrames) { previousFrames = frames; lastFrameAt = performance.now(); if (warned) { warned = false; setVideoStalled(false); } }
            }
            if (performance.now() - lastFrameAt > 8_000 && !warned) {
              warned = true;
              setVideoStalled(true);
              // Resume an accidentally paused element. A missing upstream stream
              // requires a new session; do not interrupt healthy audio automatically.
              if (element.paused && !element.ended) void element.play().catch(playbackError);
            }
          }, 2_000);
          const resumeVideo = () => {
            lastFrameAt = performance.now();
            if (document.visibilityState === "visible" && !disposed && element.paused) void element.play().catch(playbackError);
          };
          document.addEventListener("visibilitychange", resumeVideo);
          listeners.push(() => {
            clearInterval(watch);
            if (frameHandle) element.cancelVideoFrameCallback(frameHandle);
            document.removeEventListener("visibilitychange", resumeVideo);
          });
        }
        const play = () => { if (!disposed) void element.play().catch(playbackError); };
        element.addEventListener("loadedmetadata", play);
        listeners.push(() => element.removeEventListener("loadedmetadata", play));
        if (element.readyState >= 1) play();
      });
    };
    resumeRef.current = () => {
      if (disposed) return;
      const promises = Array.from(container.querySelectorAll<HTMLMediaElement>("video, audio"), (element) => element.play());
      void Promise.all(promises).then(() => {
        if (!disposed) { setPlaybackBlocked(false); setError(""); touch(); }
      }).catch(playbackError);
    };
    setPhase("connecting"); setStatus("Connecting…"); setError("");
    setMessages([]); setMicMuted(false); setAudioMuted(false); setPlaybackBlocked(false); setVideoStalled(false);
    const connectionTimer = setTimeout(() => fail("Connection timed out. Please try again."), 45_000);

    startupQueue = startupQueue.catch(() => {}).then(async () => {
      if (disposed) return;
      try {
        const { NapsterCompanionApiSdk: sdk } = await import("@touchcastllc/napster-companion-api");
        if (disposed) return;
        // Keep our own reference so permission granted after close cannot leak a mic.
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (disposed) { micStream?.getTracks().forEach((track) => track.stop()); return; }
        // Permission is now granted. Release the probe; the SDK owns its own stream.
        micStream.getTracks().forEach((track) => track.stop());
        const response = await fetch("/api/kira/connection", { method: "POST", signal: abort.signal, cache: "no-store" });
        const data = await response.json();
        if (disposed) return;
        if (!response.ok) { fail(data.error || "Kira could not connect. Please try again."); return; }
        observer = new MutationObserver(bindMedia);
        observer.observe(container, { childList: true, subtree: true });
        instance = await sdk.init(data.token, {
          mountContainer: container, layout: "inline",
          avatarStyle: { view: "rectangle", borderWidth: "0px" },
          persistence: { enabled: false }, analytics: { enabled: false }, debug: false,
          features: {
            controls: { enabled: false }, disclaimer: { enabled: false },
            showSDKLoader: { enabled: false }, inactiveTimeout: { enabled: false },
            backgroundRemoval: { enabled: false }, pictureInPicture: { enabled: false },
            screenShare: { enabled: false }, faceTracking: { enabled: false },
          },
          onAvatarReady: (ready) => {
            if (disposed || ready === false) return;
            avatarReady = true;
            clearTimeout(connectionTimer); touch(); bindMedia();
            setPhase("connected"); setStatus("Listening");
          },
          onData: (event) => {
            if (disposed) return;
            const message = event as KiraEvent;
            setMessages((previous) => updateTranscript(previous, message));
            if (message.event === "talk_state_changed") {
              setStatus(message.data?.state === "started" ? "Kira is speaking" : message.data?.state === "preparing" ? "Thinking…" : "Listening");
              touch();
            }
            if (message.data?.message?.role === "user") {
              touch();
              if (message.data.message.action === "speech_started") setStatus("Listening to you…");
            }
            if (message.data?.message?.action === "failed") setError("That message could not be processed. Please try again.");
          },
          onError: () => fail("The avatar connection failed. Check microphone access and your network, then reconnect."),
          onDestroy: () => fail("The conversation disconnected. Please reconnect."),
        });
        if (disposed) { instance.destroy(); micStream?.getTracks().forEach((track) => track.stop()); container.replaceChildren(); return; }
        instanceRef.current = instance;
        instance.unmuteMic(); instance.unmuteAudio(); bindMedia();
      } catch (cause) {
        if (disposed) return;
        fail(cause instanceof Error && ["NotAllowedError", "NotFoundError"].includes(cause.name)
          ? "Allow microphone access to start Kira. You can mute it and type after connecting."
          : "Kira could not start. Please check microphone access and try again.");
      }
    });
  }

  function send(text: string) {
    const instance = instanceRef.current;
    if (!instance || phase !== "connected" || !text.trim()) return false;
    instance.stopAvatarTalking();
    instance.sendCommand({ type: "send_message" as DataChannelMessageType.SEND_MESSAGE, data: { text: text.trim(), role: "user", trigger_response: true } });
    setMessages((previous) => [...previous, { id: `local-${crypto.randomUUID()}`, role: "user" as const, text: text.trim() }].slice(-100));
    setStatus("Thinking…"); setError(""); activityRef.current();
    return true;
  }
  function toggleMic() {
    const instance = instanceRef.current;
    if (!instance) return;
    if (micMuted) instance.unmuteMic(); else instance.muteMic();
    setMicMuted(!micMuted); activityRef.current();
  }
  function toggleAudio() {
    const instance = instanceRef.current;
    if (!instance) return;
    if (audioMuted) instance.unmuteAudio(); else instance.muteAudio();
    setAudioMuted(!audioMuted); activityRef.current();
  }
  return { phase, status, error, messages, micMuted, audioMuted, playbackBlocked, videoStalled,
    start, end, send, toggleMic, toggleAudio, resume: () => resumeRef.current(),
    interrupt: () => { instanceRef.current?.stopAvatarTalking(); activityRef.current(); } };
}
