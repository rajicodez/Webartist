"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export default function IntelligenceStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const signalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const line = lineRef.current;
    const signal = signalRef.current;
    if (!section || !track || !line || !signal) return;

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const steps = Array.from(track.querySelectorAll<HTMLElement>(".intelligence-sequence-step"));
    let frameId: number | null = null;
    let activeIndex = -1;

    const renderProgress = () => {
      frameId = null;

      if (!desktopQuery.matches || reducedMotionQuery.matches) {
        line.style.removeProperty("transform");
        signal.style.removeProperty("transform");
        signal.style.removeProperty("opacity");
        steps.forEach((step) => step.removeAttribute("data-sequence-active"));
        activeIndex = -1;
        return;
      }

      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startLine = viewportHeight * 0.72;
      const endLine = viewportHeight * 0.3;
      const scrollDistance = rect.height + startLine - endLine;
      const progress = Math.min(1, Math.max(0, (startLine - rect.top) / scrollDistance));
      const signalTravel = Math.max(0, track.clientHeight - signal.offsetHeight);

      line.style.transform = `translateX(-50%) scaleY(${Math.max(0.025, progress)})`;
      signal.style.transform = `translate(-50%, ${progress * signalTravel}px)`;
      signal.style.opacity = progress > 0.015 && progress < 0.985 ? "1" : "0";

      const nextActiveIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      if (nextActiveIndex !== activeIndex) {
        steps.forEach((step, index) => {
          if (index === nextActiveIndex) {
            step.setAttribute("data-sequence-active", "true");
          } else {
            step.removeAttribute("data-sequence-active");
          }
        });
        activeIndex = nextActiveIndex;
      }
    };

    const scheduleRender = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(renderProgress);
    };

    scheduleRender();
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", scheduleRender);
    desktopQuery.addEventListener("change", scheduleRender);
    reducedMotionQuery.addEventListener("change", scheduleRender);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", scheduleRender);
      desktopQuery.removeEventListener("change", scheduleRender);
      reducedMotionQuery.removeEventListener("change", scheduleRender);
    };
  }, []);

  return (
    <section ref={sectionRef} className="intelligence-sequence relative overflow-hidden bg-[#050505] py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505]" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_65%_at_50%_50%,#000_25%,transparent_100%)] md:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center md:mb-28">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" aria-hidden="true" />
            The intelligence system
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-6xl">
            We don&apos;t just write code. <br />
            We build <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">Digital Employees.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
            To replace manual work, you need a system that can remember, think, and act.
            Here is how we engineer your custom AI solution.
          </p>
          <div className="mt-8 hidden items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-gray-600 md:flex" aria-hidden="true">
            <span>Memory</span>
            <span className="h-px w-10 bg-blue-500/25" />
            <span>Reasoning</span>
            <span className="h-px w-10 bg-violet-500/25" />
            <span>Action</span>
          </div>
        </div>

        <div ref={trackRef} className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-[28px] top-0 w-[2px] bg-blue-900/30 md:left-1/2 md:-translate-x-1/2" />
          <div ref={lineRef} className="intelligence-flow-line absolute bottom-0 left-[28px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-violet-400 to-blue-500 shadow-[0_0_18px_rgba(96,165,250,0.55)] md:left-1/2 md:-translate-x-1/2" />
          <div ref={signalRef} className="intelligence-signal pointer-events-none absolute left-1/2 top-0 hidden h-3 w-3 rounded-full border border-white/70 bg-blue-300 shadow-[0_0_24px_5px_rgba(96,165,250,0.65)] md:block" />

          <div className="relative flex flex-col gap-12 md:gap-20">
            <StackCard
              step="01"
              title="Company Memory"
              subtitle="What it knows"
              status="Context secured"
              desc="We organize your messy data (PDFs, Excel, past emails) into a secure database so the AI knows exactly how your business runs."
              icon={Database}
              color="cyan"
              tags={["Secure Database", "PDF Reading", "History Learning"]}
              align="right"
            />

            <StackCard
              step="02"
              title="The AI Brain"
              subtitle="How it thinks"
              status="Reasoning active"
              desc="We train custom models to handle your specific tasks—whether that's detecting defects in a video feed or predicting next month's sales."
              icon={BrainCircuit}
              color="purple"
              tags={["Computer Vision", "Prediction Models", "Decision Making"]}
              isCore
              align="left"
            />

            <StackCard
              step="03"
              title="The Action Layer"
              subtitle="How it talks & works"
              status="Systems connected"
              desc="This is the interface. The AI replies to customers on WhatsApp, updates your CRM, or changes your website content automatically."
              icon={MessageSquare}
              color="blue"
              tags={["WhatsApp Bots", "Dynamic Websites", "Auto-Emails"]}
              align="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type StackColor = "blue" | "purple" | "cyan";

type StackCardProps = {
  step: string;
  title: string;
  subtitle: string;
  status: string;
  desc: string;
  icon: LucideIcon;
  color: StackColor;
  tags: string[];
  isCore?: boolean;
  align: "left" | "right";
};

function StackCard({ step, title, subtitle, status, desc, icon: Icon, color, tags, isCore, align }: StackCardProps) {
  const isRight = align === "right";

  const colors: Record<StackColor, string> = {
    blue: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50 text-blue-400",
    purple: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/50 text-purple-400",
    cyan: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/50 text-cyan-400",
  };

  const glowColor = isCore ? "shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]" : "";

  return (
    <div className={`intelligence-sequence-step flex flex-col items-center gap-8 md:flex-row ${isRight ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="relative w-full flex-1 pl-16 md:pl-0"
      >
        <div className="absolute left-[20px] top-8 z-20 h-4 w-4 rounded-full border-4 border-black bg-blue-500 md:hidden" />

        <div className={`intelligence-sequence-card relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-[border-color,transform,box-shadow] duration-300 md:p-8 md:backdrop-blur-none md:hover:-translate-y-1 ${colors[color]} ${glowColor}`}>
          <div className="intelligence-card-energy pointer-events-none absolute -right-20 -top-24 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.16),transparent_68%)] md:block" />

          <div className="relative mb-5 flex items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-500">Layer {step}</span>
            <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">
              <span className="intelligence-status-dot h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              {status}
            </span>
          </div>

          <div className="relative mb-4 flex items-center gap-4">
            <div className={`rounded-lg border border-white/10 bg-white/5 p-2 ${isCore ? "animate-pulse md:animate-none" : ""}`}>
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
              <p className="font-mono text-xs uppercase tracking-wider opacity-70 md:text-sm">{subtitle}</p>
            </div>
          </div>

          <p className="relative mb-6 text-sm leading-relaxed text-gray-400 md:text-base">{desc}</p>

          <div className="relative flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-md border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 hidden w-12 justify-center md:flex">
        <div className="intelligence-sequence-node relative h-4 w-4 rounded-full border-2 border-blue-400 bg-[#050505] shadow-[0_0_16px_rgba(59,130,246,0.7)]">
          <span className="absolute inset-[-7px] rounded-full border border-blue-400/15" />
        </div>
      </div>

      <div className="hidden flex-1 md:block" />
    </div>
  );
}
