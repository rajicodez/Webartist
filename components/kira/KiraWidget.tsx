"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";

const Panel = dynamic(() => import("./KiraPanel"), { ssr: false, loading: () => <span role="status" className="fixed bottom-32 right-4 z-[10000] rounded-xl bg-slate-900 p-4 text-sm text-white">Loading Kira…</span> });

export default function KiraWidget() {
  const [open, setOpen] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const close = () => { setOpen(false); launcher.current?.focus(); };
  return <>
    {open && <Panel onClose={close}/>}
    <button ref={launcher} onClick={() => open ? close() : setOpen(true)} aria-expanded={open} aria-haspopup="dialog" aria-label={open ? "Close Kira" : "Talk to Kira"} className="fixed bottom-[4.5rem] right-2 z-[9999] flex h-12 items-center gap-2 rounded-full border border-white/20 bg-gradient-to-tr from-blue-600 to-purple-600 px-4 text-sm font-medium text-white shadow-xl transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 md:bottom-[5.75rem] md:right-6 md:h-14">
      {open ? <X size={19}/> : <Sparkles size={19}/>}<span>{open ? "Close Kira" : "Talk to Kira"}</span>
    </button>
  </>;
}
