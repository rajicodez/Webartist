"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black"></div>,
});

// Hook to detect desktop size
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
}

export default function Hero() {
  const isDesktop = useIsDesktop();

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* 1. DESKTOP BACKGROUND (3D Scene) */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 translate-x-[10%] md:translate-x-[20%]">
          <Spline scene="https://prod.spline.design/5NmCBGbq7rsmHDb4/scene.splinecode" />
        </div>
      )}

      {/* 2. MOBILE BACKGROUND (CSS Magic - The "WOW" Factor) */}
      {/* This only shows when NOT on desktop */}
      {!isDesktop && (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Pulsing Blue Orb */}
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[10%] w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[80px]"
            />
            {/* Pulsing Purple Orb */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-[-10%] w-[250px] h-[250px] bg-purple-600/30 rounded-full blur-[80px]"
            />
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 pointer-events-none pt-16 md:pt-24">
        
        <div className="max-w-3xl pointer-events-auto">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight"
            >
              Websites that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Think.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              We don't just build digital brochures. We engineer intelligent 
              growth platforms powered by <span className="text-white font-medium">Data Science</span> and <span className="text-white font-medium">AI</span>.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="mt-8 flex flex-col sm:flex-row gap-4"
            >
                <Link href="/contact" className="w-full sm:w-auto"> 
                    <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/25">
                        Start Project
                    </button>
                </Link>
                
                <button
                  onClick={() => {
                    const workSection = document.getElementById("work");
                    workSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-medium rounded-full transition-all backdrop-blur-sm"
                >
                    View Work
                </button>
            </motion.div>
        </div>
      </div>

      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* Spline Logo Cover Patch (Desktop Only) */}
      {isDesktop && (
         <div className="absolute bottom-0 right-0 w-40 h-16 bg-black z-50 pointer-events-none" />
      )}
      
    </section>
  );
}