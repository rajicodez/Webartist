"use client";

import dynamic from "next/dynamic";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const ChatWidget = dynamic(() => import("./ChatWidget"), {
  ssr: false,
  loading: () => null,
});

export default function LazyChatWidget() {
  const [started, setStarted] = useState(false);

  if (started) {
    return <ChatWidget initiallyOpen />;
  }

  return (
    <button
      type="button"
      aria-label="Open Kindforth AI chat"
      onClick={() => setStarted(true)}
      className="fixed bottom-3 right-2 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-600/40 transition-transform hover:scale-105 md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <MessageSquare aria-hidden="true" className="h-5 w-5 fill-current md:h-6 md:w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
      </span>
    </button>
  );
}
