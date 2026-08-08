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
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-600/40 border border-white/20 transition-transform hover:scale-105"
    >
      <MessageSquare aria-hidden="true" className="w-6 h-6 fill-current" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
      </span>
    </button>
  );
}
