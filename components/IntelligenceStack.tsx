"use client";
import { motion } from "framer-motion";
import { Database, BrainCircuit, MessageSquare, Zap } from "lucide-react";

export default function IntelligenceStack() {
  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden">

      {/* BACKGROUND FX */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            We don't just write code. <br />
            We build <span className="text-blue-500">Digital Employees.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            To replace manual work, you need a system that can remember, think, and act.
            Here is how we engineer your custom AI solution.
          </p>
        </div>

        {/* THE STACK VISUALIZATION */}
        <div className="relative max-w-4xl mx-auto">

          {/* CENTRAL LINE (Connecting the layers) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-blue-900/30" />

          <div className="flex flex-col gap-12 relative">

            {/* LAYER 3: ACTION (Top) */}
            <StackCard
              step="03"
              title="The Action Layer"
              subtitle="How it talks & works"
              desc="This is the interface. The AI replies to customers on WhatsApp, updates your CRM, or changes your website content automatically."
              icon={MessageSquare}
              color="blue"
              tags={["WhatsApp Bots", "Dynamic Websites", "Auto-Emails"]}
              align="right"
            />

            {/* LAYER 2: BRAIN (Middle) */}
            <StackCard
              step="02"
              title="The AI Brain"
              subtitle="How it thinks"
              desc="We train custom models to handle your specific tasks—whether that's detecting defects in a video feed or predicting next month's sales."
              icon={BrainCircuit}
              color="purple"
              tags={["Computer Vision", "Prediction Models", "Decision Making"]}
              isCore
              align="left"
            />

            {/* LAYER 1: MEMORY (Bottom) */}
            <StackCard
              step="01"
              title="Company Memory"
              subtitle="What it knows"
              desc="We organize your messy data (PDFs, Excel, Past Emails) into a secure database so the AI knows exactly how your business runs."
              icon={Database}
              color="cyan"
              tags={["Secure Database", "PDF Reading", "History Learning"]}
              align="right"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT ---
function StackCard({ step, title, subtitle, desc, icon: Icon, color, tags, isCore, align }: any) {
  // Mobile: Always Left Aligned. Desktop: Alternating.
  const isRight = align === "right";

  const colors: any = {
    blue: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50 text-blue-400",
    purple: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/50 text-purple-400",
    cyan: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/50 text-cyan-400",
  };

  const glowColor = isCore ? "shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]" : "";

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 ${isRight ? 'md:flex-row-reverse' : ''}`}>

      {/* CARD CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`flex-1 w-full pl-16 md:pl-0 relative`}
      >
        {/* Mobile Connector Dot (Visible only on mobile) */}
        <div className="md:hidden absolute left-[20px] top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-black z-20" />

        <div className={`p-6 md:p-8 rounded-3xl border backdrop-blur-xl transition-all ${colors[color]} ${glowColor}`}>

          <div className="flex items-center gap-4 mb-4">
            <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${isCore ? 'animate-pulse' : ''}`}>
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
              <p className="text-xs md:text-sm font-mono uppercase tracking-wider opacity-70">{subtitle}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            {desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium border border-white/5 bg-white/5 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* DESKTOP CONNECTOR DOT */}
      <div className="hidden md:flex relative z-10 justify-center w-12">
        <div className={`w-4 h-4 rounded-full border-2 bg-[#050505] border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`} />
      </div>

      {/* SPACER FOR ALIGNMENT */}
      <div className="flex-1 hidden md:block" />

    </div>
  );
}