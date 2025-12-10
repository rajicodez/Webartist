"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Do not render on server (saves resources)
  loading: () => <div className="w-full h-full bg-black"></div>, // Show black box while loading
});

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 translate-x-[10%] md:translate-x-[20%]">
         {/* You can change this URL later to any 3D scene you like */}
         <Spline scene="https://prod.spline.design/5NmCBGbq7rsmHDb4/scene.splinecode" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 pointer-events-none pt-16 md:pt-24">
        
        <div className="max-w-3xl pointer-events-auto">
            
            {/* Headline - Now the first thing visible */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6"
            >
              Websites that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Think.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              We don't just build digital brochures. We engineer intelligent 
              growth platforms powered by <span className="text-white font-medium">Data Science</span> and <span className="text-white font-medium">AI</span>.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="mt-8 flex gap-4"
            >
                <Link href="/contact"> 
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/25">
                        Start Project
                    </button>
                </Link>
                
                <button onClick={() => {
                    const workSection = document.getElementById('work');
                    workSection?.scrollIntoView({ behavior: 'smooth' });
                }} className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-medium rounded-full transition-all backdrop-blur-sm">
                    View Work
                </button>
            </motion.div>
        </div>
      </div>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

        {/* THE LOGO COVER PATCH 🩹 */}
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-black z-50 pointer-events-none" />
      
    </section>
  );
}