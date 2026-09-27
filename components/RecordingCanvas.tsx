"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Keep the mobile layout and 9:16 composition while fitting browser chrome.
// A 1080 × 1920 full-screen viewport renders this at exactly 3×.
export default function RecordingCanvas() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  useEffect(() => {
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    const resize = () => {
      if (!dialog || !canvasRef.current || !frameRef.current) return;
      const scale = Math.min(dialog.clientWidth / 360, dialog.clientHeight / 640);
      canvasRef.current.style.width = `${360 * scale}px`;
      canvasRef.current.style.height = `${640 * scale}px`;
      frameRef.current.style.transform = `scale(${scale})`;
    };
    const observer = new ResizeObserver(resize);
    if (dialog) observer.observe(dialog);
    resize();
    // Apply before the frame's load event, which can wait for large 3D assets.
    const scrollbarTimer = window.setInterval(() => {
      const doc = frameRef.current?.contentDocument;
      if (!doc?.head || doc.URL === "about:blank" || doc.getElementById("recording-scrollbars")) return;
      const style = doc.createElement("style");
      style.id = "recording-scrollbars";
      style.textContent = "html, body { scrollbar-width: none !important; } html::-webkit-scrollbar, body::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }";
      doc.head.appendChild(style);
    }, 250);
    return () => { window.clearInterval(scrollbarTimer); observer.disconnect(); dialog?.close(); document.body.style.overflow = overflow; };
  }, []);
  return <dialog ref={dialogRef} aria-label="1080 by 1920 mobile recording canvas" onCancel={(event) => {
    event.preventDefault(); router.push("/");
  }} style={{ position: "fixed", inset: 0, margin: 0, padding: 0, border: 0, width: "100%", height: "100dvh", maxWidth: "none", maxHeight: "none", overflow: "hidden", background: "#000" }}>
    <div ref={canvasRef} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 360, height: 640, overflow: "hidden" }}>
      <iframe ref={frameRef} title="Kindforth mobile recording view" src="/" allow="microphone; autoplay; fullscreen" onLoad={() => {
        // Hide only the recording frame's scrollbars; wheel/touch scrolling still works.
        const doc = frameRef.current?.contentDocument;
        if (!doc || doc.getElementById("recording-scrollbars")) return;
        const style = doc.createElement("style");
        style.id = "recording-scrollbars";
        style.textContent = "html, body { scrollbar-width: none !important; } html::-webkit-scrollbar, body::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }";
        doc.head.appendChild(style);
      }} style={{ display: "block", width: 360, height: 640, border: 0, transformOrigin: "top left" }} />
    </div>
  </dialog>;
}
