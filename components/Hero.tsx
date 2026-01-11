"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network } from "lucide-react";
import Link from "next/link";
const SplineScene = React.lazy(() => import("./SplineScene"));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pb-24 md:pb-0">

      {/* 1. ANIMATED 3D BACKGROUND */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black/90" />}>
          <SplineScene />
        </Suspense>
        {/* Overlay to ensure text is readable over the 3D scene */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-24 md:mt-20">

        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-5 md:mb-8 leading-tight">
          Engineering the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient-x">
            Autonomous Enterprise.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12">
          We are an AI development agency. We build Custom Chatbots, Computer Vision Systems, and Automated Workflows that save your business time and money.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all flex items-center gap-2 group shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] hover:shadow-[0_0_80px_-10px_rgba(37,99,235,0.9)]">
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            <span className="relative flex items-center gap-2">
              Audit My Business
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link href="/work" className="px-8 py-4 bg-white/10 md:bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg transition-all flex items-center gap-2 hover:border-white/20">
            <Network size={20} className="text-purple-400" />
            View Work
          </Link>
        </motion.div>

      </div>

      {/* 3. DECORATIVE ELEMENTS (Floating Tech) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

    </section>
  );
}