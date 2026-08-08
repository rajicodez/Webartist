"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Network } from "lucide-react";
import Link from "next/link";
const SplineScene = dynamic(() => import("./SplineScene"), { ssr: false });

export default function Hero() {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const updateSpline = () => setShowSpline(desktopQuery.matches);

    updateSpline();
    desktopQuery.addEventListener("change", updateSpline);
    return () => desktopQuery.removeEventListener("change", updateSpline);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black pb-12 pt-24 text-white min-[361px]:pt-32 md:min-h-screen md:pb-0 md:pt-0">

      {/* 1. ANIMATED 3D BACKGROUND */}
      <div className="hidden md:block absolute inset-0 z-0">
        {showSpline ? <SplineScene /> : <div className="w-full h-full bg-black/90" />}
        {/* Overlay to ensure text is readable over the 3D scene */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 mx-auto mt-0 max-w-7xl px-6 text-center md:mt-20">

        {/* Headline */}
        <h1 className="mb-3 text-[2.55rem] font-display font-bold leading-tight tracking-tighter min-[361px]:mb-5 min-[361px]:text-5xl md:mb-8 md:text-8xl">
          Engineering the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient-x">
            Autonomous Enterprise
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-5 max-w-3xl text-base leading-relaxed text-gray-400 min-[361px]:mb-7 min-[361px]:text-lg md:mb-12 md:text-2xl">
          We build AI systems, business automation, custom software, web applications, and search growth engines for ambitious companies in Sri Lanka and beyond.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/contact"
            className="group relative isolate flex w-auto min-w-[208px] items-center justify-between gap-4 overflow-hidden rounded-full border border-blue-300/35 bg-gradient-to-b from-blue-500 to-blue-700 py-1.5 pl-6 pr-1.5 text-[15px] font-semibold text-white shadow-[0_18px_55px_-18px_rgba(37,99,235,0.95),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/60 hover:shadow-[0_24px_70px_-20px_rgba(59,130,246,1),inset_0_1px_0_rgba(255,255,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0 sm:min-w-[220px] sm:gap-5 sm:py-2 sm:pl-7 sm:pr-2 sm:text-base"
          >
            <span aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <span aria-hidden="true" className="absolute -left-24 top-0 h-full w-16 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[340px] motion-reduce:hidden" />
            <span className="relative">Start a Project</span>
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:rotate-6 group-hover:bg-white/25 sm:h-10 sm:w-10">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </Link>

          <Link
            href="/work"
            className="group relative flex w-auto min-w-[180px] items-center justify-between gap-4 overflow-hidden rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-1.5 pr-6 text-[15px] font-semibold text-white shadow-[0_16px_50px_-24px_rgba(255,255,255,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/35 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0 sm:min-w-[190px] sm:gap-5 sm:py-2 sm:pl-2 sm:pr-7 sm:text-base"
          >
            <span aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-300/20 bg-purple-500/10 text-purple-300 transition-all duration-300 group-hover:border-purple-300/35 group-hover:bg-purple-500/20 sm:h-10 sm:w-10">
              <Network className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="relative">View Work</span>
          </Link>
        </motion.div>

      </div>

      {/* 3. DECORATIVE ELEMENTS (Floating Tech) */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-32 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}
