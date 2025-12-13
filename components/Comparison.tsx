"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle, Database, Cpu, ServerCrash, ArrowRight } from "lucide-react";

// Custom "Glitch" effect for the left side text
const GlitchText = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="absolute top-0 left-0 -ml-[2px] text-red-500/50 opacity-50 animate-pulse">{children}</span>
    <span className="absolute top-0 left-0 ml-[2px] text-blue-500/50 opacity-50 animate-pulse delay-75">{children}</span>
    <span className="relative z-10">{children}</span>
  </span>
);

export default function Comparison() {
  return (
    <section className="relative pt-12 pb-12 md:pt-24 md:pb-12 bg-[#050505] relative overflow-hidden">
      
      {/* Background: Subtle flowing circuit lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Central "Energy Beam" Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-blue-500/50 blur-[100px] lg:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Evolve or <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 line-through decoration-red-500/50 decoration-4">Expire.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The era of the static website is over. See the difference between a digital liability and a digital asset.
          </p>
        </motion.div>

        {/* The Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-stretch relative">
          
          {/* --- LEFT SIDE: THE OLD WAY (The "Graveyard") --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // Used col-span-5 to make room for the center divider on desktop
            className="lg:col-span-5 group relative p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] overflow-hidden"
          >
            {/* Subtle flickering static noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg') animate-pulse]" />
            
            {/* Label */}
            <div className="inline-block bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-red-500/20 text-xs font-mono uppercase tracking-wider text-red-400 mb-8">
               ⚫ Legacy Approach
            </div>

            {/* Visual Representation (Broken System) */}
            <div className="w-full h-52 bg-[#111] rounded-2xl mb-10 p-6 flex flex-col justify-center items-center border border-white/5 relative grayscale opacity-70 group-hover:opacity-100 transition-opacity">
               {/* Glitchy Icon */}
               <ServerCrash size={48} className="text-gray-600 mb-4" />
               <div className="text-gray-500 font-mono text-sm">System Offline.</div>
               {/* "Broken" tape effect */}
               <div className="absolute top-4 -left-4 bg-red-500/20 text-red-500 text-[10px] px-8 py-1 rotate-[-30deg] border border-red-500/20">
                  DEPRECATED
               </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-300 mb-6">The Static Brochure</h3>
            
            <ul className="space-y-5 text-lg text-gray-400">
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Dumb Information (Never updates)" />
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Zero Data Collection" />
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Slow, bloated WordPress backend" />
              <ComparisonItem icon={XCircle} color="text-red-500/70" text="Looks like everyone else" />
            </ul>
          </motion.div>

          {/* --- CENTER DIVIDER (The "Transformation Engine") --- */}
          <div className="hidden lg:flex col-span-1 items-center justify-center relative">
             {/* The glowing line */}
             <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
             {/* The central animated arrow */}
             <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="z-10 bg-[#050505] p-3 rounded-full border border-blue-500/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)]"
             >
                 <ArrowRight className="text-blue-400" />
             </motion.div>
          </div>


          {/* --- RIGHT SIDE: THE WEBARTIST WAY (The "Reactor") --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#0d1117] to-[#050505] overflow-hidden group hover:scale-[1.02] transition-transform duration-500 z-20"
          >
            {/* Rotating "Plasma" Border */}
            <div className="absolute inset-0 rounded-[2.5rem] p-[1px] bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.blue.600)_0%,theme(colors.purple.600)_50%,theme(colors.blue.600)_100%)] animate-[shimmer_4s_linear_infinite] opacity-100 [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [-webkit-mask-clip:content-box,border-box] [-webkit-mask-composite:xor] mask-composite:exclude" style={{ "--shimmer-angle": "0deg" } as any} />

            {/* Intense Inner Glow */}
            <div className="absolute inset-0 bg-blue-600/10 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity" />

            {/* Label */}
            <div className="relative inline-flex items-center gap-2 bg-blue-600/20 px-4 py-1.5 rounded-full border border-blue-400/30 text-xs font-mono uppercase tracking-wider text-blue-300 mb-8 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               Intelligent Platform
            </div>

            {/* Visual Representation (Digital Brain) */}
            <div className="relative w-full h-52 bg-blue-950/30 rounded-2xl mb-10 p-6 flex items-center justify-center border border-blue-500/20 overflow-hidden">
               {/* Animated "Brain" Core */}
               <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-blue-600/20 p-4 rounded-full border border-blue-400/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] relative"
                  >
                     <Cpu size={32} className="text-blue-300" />
                     {/* Spinning Ring */}
                     <div className="absolute inset-0 border-2 border-t-blue-400 border-r-transparent border-b-blue-400/30 border-l-transparent rounded-full animate-spin" />
                  </motion.div>
                  <div className="mt-4 text-blue-300 font-mono text-sm">AI Neural Core: Active</div>
               </div>
               
               {/* Flowing Data Streams (Background lines) */}
               <DataStream style="left-10 top-0" delay={0} />
               <DataStream style="right-10 bottom-0" delay={1.5} />
               <DataStream style="left-1/3 top-1/4" delay={0.7} />
            </div>

            <h3 className="relative text-3xl font-bold text-white mb-6 tracking-tight">The Intelligent Employee</h3>
            
            <ul className="relative space-y-5 text-lg">
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="AI Agent Active 24/7" glow />
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Real-time Analytics Dashboard" glow />
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Automated Lead Capture" glow />
              <ComparisonItem icon={CheckCircle} color="text-blue-400" text="Custom Next.js Engineering" glow />
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// --- HELPER COMPONENTS TO KEEP CODE CLEAN ---

// The list items
const ComparisonItem = ({ icon: Icon, color, text, glow = false }: any) => (
  <li className="flex items-center gap-4 group/item">
    <div className={`${color} ${glow ? 'shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)] group-hover/item:shadow-[0_0_25px_-5px_rgba(59,130,246,0.8)] transition-shadow' : ''} rounded-full p-1`}>
       <Icon size={22} />
    </div>
    <span className={glow ? 'text-blue-100 group-hover/item:text-white transition-colors' : ''}>{text}</span>
  </li>
);

// The falling data lines in the right visual box
const DataStream = ({ style, delay }: { style: string, delay: number }) => (
   <motion.div
     initial={{ opacity: 0, y: -100 }}
     animate={{ opacity: [0, 1, 0], y: ["0%", "200%"] }}
     transition={{ duration: 3, repeat: Infinity, delay: delay, ease: "linear" }}
     className={`absolute w-[1px] h-24 bg-gradient-to-b from-blue-400 to-transparent z-0 ${style}`}
   />
);