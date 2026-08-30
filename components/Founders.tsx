"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { founders } from "../lib/team";


export default function Founders() {
  return (
    // FIX 1: Added 'overflow-hidden' back to prevent horizontal scrolling
    <section className="py-12 bg-black relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-blue-500">Engineers</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Kindforth is led by two Sri Lankan engineers who combine AI, data, product design, and modern software delivery to solve measurable business problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.slug}
              id={founder.slug}
              // FIX 2: Changed animation from X (Horizontal) to Y (Vertical)
              // This prevents the card from starting "off-screen" to the side
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >

              {/* The Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">

                {/* Image Placeholder Circle */}
                <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-2 border-blue-500/30 mx-auto bg-gradient-to-br from-gray-800 to-black group-hover:scale-[1.02] transition-transform will-change-transform">
                  {founder.image ? (
                    <Image src={founder.image} alt={founder.name} fill sizes="160px" quality={90} priority={index === 0} className="object-cover rounded-full [image-rendering:auto] [backface-visibility:hidden] [transform:translateZ(0)]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 font-mono text-sm">
                      NO IMAGE
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>

                  {/* Role Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono mb-6 border border-blue-500/20">
                    {founder.role}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {founder.bio}
                  </p>

                  <div className="mb-8 grid gap-5 text-left">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-blue-300">Leads</h4>
                      <ul className="mt-3 space-y-2 text-sm text-gray-400">
                        {founder.responsibilities.map((item) => <li key={item}>• {item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-purple-300">Expertise</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {founder.expertise.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">{item}</span>)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-300">Selected delivery</h4>
                      <p className="mt-3 text-sm text-gray-400">{founder.projects.join(" · ")}</p>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a aria-label={`${founder.name} on LinkedIn`} href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5 hover:border-blue-500">
                      <Linkedin aria-hidden="true" className="w-5 h-5" />
                    </a>
                    <a aria-label={`${founder.name} on GitHub`} href={founder.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all border border-white/5 hover:border-gray-500">
                      <Github aria-hidden="true" className="w-5 h-5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
