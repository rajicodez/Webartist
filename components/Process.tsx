"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Data Audit",
    desc: "We don't guess. We analyze your current data to find hidden revenue gaps.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: "02",
    title: "AI Architecture",
    desc: "We design the neural network. Custom RAG pipelines and predictive models.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    id: "03",
    title: "High-Speed Build",
    desc: "Next.js development with 3D interactions and sub-second load times.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    id: "04",
    title: "Growth Optimization",
    desc: "We track user behavior post-launch and refine the AI to increase sales.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-12 md:py-32 bg-black overflow-hidden">
      
      {/* Central Beam - HIDDEN ON MOBILE */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-blue-500">Protocol.</span>
          </h2>
          <p className="text-gray-400">From raw data to intelligent platform.</p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative flex flex-col gap-16 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              // MOBILE: flex-col-reverse (Puts Icon on Top, Text Below)
              // DESKTOP: flex-row or flex-row-reverse (Restores Zig-Zag)
              className={`flex flex-col-reverse items-center gap-4 md:gap-8 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              
              {/* 1. TEXT CONTENT */}
              <div className={`flex-1 text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">{step.desc}</p>
              </div>

              {/* 2. ICON (Center Node) */}
              <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-black border border-blue-500/30 flex items-center justify-center z-10 group shadow-lg shadow-blue-900/20">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-blue-400 group-hover:text-white transition-colors">
                  {step.icon}
                </span>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-black">
                  {step.id}
                </div>
              </div>

              {/* 3. EMPTY SIDE (For Desktop Balance) */}
              <div className="hidden md:block flex-1" />
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}