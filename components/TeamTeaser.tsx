"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TeamTeaser() {
  return (
    <section className="py-12 md:py-24 bg-black border-y border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="max-w-2xl">
          {/* THE NEW HEADLINE */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineered for <span className="text-blue-500">Intelligence.</span>
          </h2>
          
          {/* THE NEW DESCRIPTION */}
          <p className="text-xl text-gray-400">
            We go beyond standard web design. We are a specialized R&D team that combines software engineering with data science to build platforms that don't just look good, they think, adapt and convert.
          </p>
        </div>

        <Link href="/team">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center gap-3"
          >
            Meet the Engineers
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>

      </div>
    </section>
  );
}