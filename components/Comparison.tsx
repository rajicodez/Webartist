"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle, Cpu, ServerCrash, ArrowRight, Activity, Users, FileWarning } from "lucide-react"; // Added new icons

// --- CUSTOM CSS FOR GLITCH TEXT ---
const GlitchText = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="absolute top-0 left-0 -ml-[2px] text-red-500/50 opacity-50 animate-pulse">{children}</span>
    <span className="absolute top-0 left-0 ml-[2px] text-blue-500/50 opacity-50 animate-pulse delay-75">{children}</span>
    <span className="relative z-10">{children}</span>
  </span>
);

export default function Comparison() {
  // State for Mobile Toggle (False = Old Way, True = New Way)
  const [isNewWay, setIsNewWay] = useState(true);

  return (
    <section className="relative pt-12 pb-12 md:pt-32 md:pb-0 bg-[#050505] relative overflow-hidden">
      
      {/* Background elements (Shared) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-blue-500/50 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER (Shared) */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Manual vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Autonomous.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto hidden md:block">
            Stop relying on human-only workflows. See the difference between a traditional business and an AI-driven enterprise.
          </p>
          <p className="text-lg text-gray-400 max-w-sm mx-auto block md:hidden">
            Toggle below to see the AI advantage.
          </p>
        </div>

        {/* =========================================
            MOBILE LAYOUT (Visible on < lg screens)
           ========================================= */}
        <div className="block lg:hidden max-w-md mx-auto">
          
          {/* THE SWITCH CONTROL */}
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 mb-8 relative">
            <motion.div 
               className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full ${isNewWay ? 'bg-blue-600' : 'bg-red-900/80'}`}
               animate={{ left: isNewWay ? "50%" : "4px" }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button 
              onClick={() => setIsNewWay(false)}
              className={`flex-1 py-3 text-sm font-bold relative z-10 transition-colors ${!isNewWay ? 'text-white' : 'text-gray-400'}`}
            >
              Manual Ops
            </button>
            <button 
              onClick={() => setIsNewWay(true)}
              className={`flex-1 py-3 text-sm font-bold relative z-10 transition-colors ${isNewWay ? 'text-white' : 'text-gray-400'}`}
            >
              AI Systems
            </button>
          </div>

          {/* THE CARD (Swaps Content based on state) */}
          <div className="relative h-[480px]"> 
            <AnimatePresence mode="wait">
              {isNewWay ? (
                /* NEW WAY CARD (MOBILE) */
                <motion.div
                  key="new"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-[#0d1117] to-[#050505] border border-blue-500/30 p-8 flex flex-col items-center text-center overflow-hidden"
                >
                   {/* Rotating Border Effect */}
                   <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.blue.600)_0%,theme(colors.purple.600)_50%,theme(colors.blue.600)_100%)] animate-[shimmer_4s_linear_infinite] opacity-100 [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [-webkit-mask-clip:content-box,border-box] [-webkit-mask-composite:xor] mask-composite:exclude" style={{ "--shimmer-angle": "0deg" } as any} />
                   
                   <div className="relative z-10">
                     <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400 ring-2 ring-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                        <Cpu size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">The Intelligent Enterprise</h3>
                     <p className="text-blue-200/60 text-sm mb-8">Systems that think, act, and grow.</p>
                     
                     <ul className="space-y-4 text-left w-full">
                       <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Autonomous AI Agents" glow />
                       <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Predictive Sales Models" glow />
                       <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Automated Workflows" glow />
                       <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Zero Human Error" glow />
                     </ul>
                   </div>
                </motion.div>
              ) : (
                /* OLD WAY CARD (MOBILE) */
                <motion.div
                  key="old"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-[2rem] bg-[#0f0f0f] border border-white/10 p-8 flex flex-col items-center text-center grayscale"
                >
                   <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500">
                      <Users size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-400 mb-2">The Manual Business</h3>
                   <p className="text-gray-600 text-sm mb-8">Slow, expensive, and reactive.</p>
                   
                   <ul className="space-y-4 text-left w-full opacity-60">
                     <ComparisonItem icon={XCircle} color="text-red-500" text="Missed Leads (Sleeping)" />
                     <ComparisonItem icon={XCircle} color="text-red-500" text="Manual Data Entry" />
                     <ComparisonItem icon={XCircle} color="text-red-500" text="Guesswork Decisions" />
                     <ComparisonItem icon={XCircle} color="text-red-500" text="High Staff Costs" />
                   </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>


        {/* =========================================
            DESKTOP LAYOUT (Visible on lg+ screens)
           ========================================= */}
        <div className="hidden lg:grid grid-cols-11 gap-8 items-stretch relative">
          
          {/* LEFT SIDE (DESKTOP) */}
          <div className="col-span-5 group relative p-10 rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg') animate-pulse]" />
            <div className="inline-block bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-red-500/20 text-xs font-mono uppercase tracking-wider text-red-400 mb-8">⚫ The Old Way</div>
            <div className="w-full h-52 bg-[#111] rounded-2xl mb-10 p-6 flex flex-col justify-center items-center border border-white/5 relative grayscale opacity-70 group-hover:opacity-100 transition-opacity">
               <FileWarning size={48} className="text-gray-600 mb-4" />
               <div className="text-gray-500 font-mono text-sm">Human Limit Reached.</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-300 mb-6">Manual Operations</h3>
            <ul className="space-y-5 text-lg text-gray-400">
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Missed customers after 5 PM" />
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Slow manual data entry" />
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Decisions based on gut feeling" />
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Static website (Brochure)" />
            </ul>
          </div>

          {/* --- CENTER DIVIDER --- */}
          <div className="hidden lg:flex col-span-1 items-center justify-center relative">
             <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
             <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="z-10 bg-[#050505] p-3 rounded-full border border-blue-500/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)]"
             >
                 <ArrowRight className="text-blue-400" />
             </motion.div>
          </div>

          {/* RIGHT SIDE (DESKTOP) */}
          <div className="col-span-5 relative p-10 rounded-[2.5rem] bg-gradient-to-b from-[#0d1117] to-[#050505] overflow-hidden group hover:scale-[1.02] transition-transform duration-500 z-20">
            <div className="absolute inset-0 rounded-[2.5rem] p-[1px] bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.blue.600)_0%,theme(colors.purple.600)_50%,theme(colors.blue.600)_100%)] animate-[shimmer_4s_linear_infinite] opacity-100 [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [-webkit-mask-clip:content-box,border-box] [-webkit-mask-composite:xor] mask-composite:exclude" style={{ "--shimmer-angle": "0deg" } as any} />
            <div className="absolute inset-0 bg-blue-600/10 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative inline-flex items-center gap-2 bg-blue-600/20 px-4 py-1.5 rounded-full border border-blue-400/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-8 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               WebArtist Intelligence
            </div>

            <div className="relative w-full h-52 bg-blue-950/30 rounded-2xl mb-10 p-6 flex items-center justify-center border border-blue-500/20 overflow-hidden">
               <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-blue-600/20 p-4 rounded-full border border-blue-400/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] relative">
                     <Cpu size={32} className="text-blue-300" />
                     <div className="absolute inset-0 border-2 border-t-blue-400 border-r-transparent border-b-blue-400/30 border-l-transparent rounded-full animate-spin" />
                  </div>
                  <div className="mt-4 text-blue-300 font-mono text-sm">Autonomous Core: Active</div>
               </div>
               <DataStream style="left-10 top-0" delay={0} />
               <DataStream style="right-10 bottom-0" delay={1.5} />
            </div>

            <h3 className="relative text-3xl font-bold text-white mb-6 tracking-tight">The Autonomous Enterprise</h3>
            <ul className="relative space-y-5 text-lg">
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="AI Agents working 24/7" glow />
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Predictive Sales Models" glow />
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Automated Workflows" glow />
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Zero Human Error" glow />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- HELPERS ---
const ComparisonItem = ({ icon: Icon, color, text, glow = false }: any) => (
  <li className="flex items-center gap-4 group/item">
    <div className={`${color} ${glow ? 'shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)] group-hover/item:shadow-[0_0_25px_-5px_rgba(59,130,246,0.8)] transition-shadow' : ''} rounded-full p-1 shrink-0`}>
       <Icon size={20} />
    </div>
    <span className={`${glow ? 'text-blue-100 group-hover/item:text-white transition-colors' : 'text-gray-400'} text-sm md:text-lg`}>{text}</span>
  </li>
);

const DataStream = ({ style, delay }: { style: string, delay: number }) => (
   <motion.div
     initial={{ opacity: 0, y: -100 }}
     animate={{ opacity: [0, 1, 0], y: ["0%", "200%"] }}
     transition={{ duration: 3, repeat: Infinity, delay: delay, ease: "linear" }}
     className={`absolute w-[1px] h-24 bg-gradient-to-b from-blue-400 to-transparent z-0 ${style}`}
   />
);