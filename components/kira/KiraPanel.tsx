"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mic, MicOff, Volume2, VolumeX, X, Send, Sparkles, MessageSquare } from "lucide-react";
import { useKira } from "./useKira";
import { siteConfig } from "../../lib/seo";
import "@touchcastllc/napster-companion-api/styles";
import "./kira.css";

export default function KiraPanel({ onClose }: { onClose: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const kira = useKira(mountRef);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const connected = kira.phase === "connected";
  useEffect(() => {
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.kiraOpen = "true";
    window.dispatchEvent(new Event("kira-visibility"));
    return () => {
      dialog?.close(); document.body.style.overflow = overflow;
      delete document.documentElement.dataset.kiraOpen;
      window.dispatchEvent(new Event("kira-visibility"));
    };
  }, []);
  useEffect(() => {
    if (transcriptRef.current) transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
  }, [kira.messages, chatOpen]);

  return <dialog ref={dialogRef} aria-labelledby="kira-heading" className="kira-fullscreen" onCancel={(event) => { event.preventDefault(); onClose(); }}>
    <div ref={mountRef} className="kira-avatar-stage" />
    <div className="kira-video-shade" aria-hidden="true" />
    <header className="kira-topbar">
      <div><h2 id="kira-heading" className="text-xl font-semibold">Kira <span className="ml-2 text-xs font-normal text-blue-200">Kindforth AI</span></h2><p role="status" className="mt-1 text-xs text-white/70">{kira.status}</p></div>
      <button autoFocus onClick={onClose} aria-label="Close Kira and end conversation" className="kira-control"><X size={22}/></button>
    </header>
    {kira.phase !== "connected" && <div className="kira-intro pointer-events-none">
      <Sparkles className="mb-5 h-10 w-10 text-blue-300" aria-hidden="true"/>
      <h3 className="text-4xl font-semibold tracking-tight sm:text-6xl">Meet Kira</h3>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">A conversation about your next idea.<br/>Ask about Kindforth, our team, or what we can build together.</p>
    </div>}
    <div className="kira-bottom">
      {chatOpen && <section id="kira-chat" className="kira-chat" aria-label="Text conversation">
        <div className="flex items-center justify-between px-4 pt-3"><h3 className="text-sm font-medium">Conversation</h3><button onClick={() => setChatOpen(false)} aria-label="Hide conversation" className="rounded-full p-2"><X size={18}/></button></div>
        <div ref={transcriptRef} role="log" aria-label="Conversation transcript" aria-live="polite" aria-relevant="additions text" className="kira-transcript space-y-2 px-4">
          {kira.messages.filter((message) => message.text).map((message) => <div key={message.id} className={`rounded-xl p-3 text-sm ${message.role === "user" ? "ml-6 bg-blue-600/30" : "mr-6 bg-white/10"}`}><span className="mb-1 block text-xs font-semibold text-blue-200">{message.role === "user" ? "You" : "Kira"}</span><p className="whitespace-pre-wrap break-words">{message.text}</p></div>)}
          {kira.messages.length === 0 && <p className="py-3 text-sm text-white/50">Your conversation will appear here.</p>}
        </div>
        <form className="flex gap-2 p-3" onSubmit={(event) => { event.preventDefault(); if (kira.send(input)) setInput(""); }}>
          <input aria-label="Message Kira" value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} disabled={!connected} placeholder={connected ? "Ask Kira a question…" : "Start a conversation to chat"} className="min-w-0 flex-1 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-base outline-none focus:border-blue-400 disabled:opacity-50"/>
          <button disabled={!connected || !input.trim()} aria-label="Send message" className="kira-control disabled:opacity-40"><Send size={18}/></button>
        </form>
      </section>}
      {kira.error && <p role="alert" className="kira-notice">{kira.error}</p>}
      {kira.videoStalled && <div role="status" className="kira-notice">The avatar video has stalled. Audio may still be playing. <button onClick={kira.start} className="ml-2 font-semibold underline">Restart conversation</button></div>}
      {kira.playbackBlocked && <button onClick={kira.resume} className="rounded-full bg-blue-600 px-5 py-3 text-sm">Enable audio</button>}
      {kira.phase === "idle" ? <div className="mx-auto max-w-sm space-y-3 text-center">
        <button onClick={kira.start} className="w-full rounded-full bg-blue-600 px-8 py-4 font-medium shadow-lg hover:bg-blue-500">Start conversation</button>
        <p className="text-xs leading-relaxed text-white/60">Voice and chat are processed by Napster. Microphone permission is required to connect. <Link href="/privacy" onClick={onClose} className="text-blue-200 underline">Privacy details</Link></p>
      </div> : <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button disabled={!connected} onClick={kira.toggleMic} aria-label={kira.micMuted ? "Unmute microphone" : "Mute microphone"} aria-pressed={kira.micMuted} className="kira-control">{kira.micMuted ? <MicOff size={20}/> : <Mic size={20}/>}</button>
        <button disabled={!connected} onClick={kira.toggleAudio} aria-label={kira.audioMuted ? "Unmute speaker" : "Mute speaker"} aria-pressed={kira.audioMuted} className="kira-control">{kira.audioMuted ? <VolumeX size={20}/> : <Volume2 size={20}/>}</button>
        <button disabled={!connected} onClick={kira.interrupt} className="kira-control px-4 text-xs">Stop speaking</button>
        <button onClick={kira.end} className="kira-control kira-end px-5 text-sm">End</button>
      </div>}
      <div className="flex items-center justify-center gap-5 text-xs text-white/75">
        <button onClick={() => setChatOpen(!chatOpen)} aria-expanded={chatOpen} aria-controls="kira-chat" className="flex min-h-11 items-center gap-2"><MessageSquare size={16}/>{chatOpen ? "Hide chat" : "Chat & transcript"}</button>
        <Link href="/contact" onClick={onClose}>Contact</Link>
        <a href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>
  </dialog>;
}
