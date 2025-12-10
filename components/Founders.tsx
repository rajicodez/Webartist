"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

const founders = [
  {
    name: "Rajindra Ratnayake", 
    role: "Co-Founder & Lead Data Scientist",
    image: null, 
    bio: "Specializing in Predictive Analytics and Computer Vision. I build the AI engines that power our intelligent platforms.",
    socials: {
      linkedin: "#", 
      github: "#"    
    }
  },
  {
    name: "Nipun Nirmal", 
    role: "Co-Founder & AI Engineer",
    image: null,
    bio: "Expert in Large Language Models (LLMs) and RAG Architectures. Focused on turning raw business data into conversational intelligence.",
    socials: {
      linkedin: "#", 
      github: "#"
    }
  }
];

export default function Founders() {
  return (
    <section className="py-32 bg-black relative">
      
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-blue-500">Engineers.</span>
          </h2>
          {/* UPDATED TEXT HERE 👇 */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A specialized R&D team building the next generation of web intelligence. We combine deep technical expertise with commercial strategy to drive real business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              
              {/* The Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                
                {/* Image Placeholder Circle */}
                <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-2 border-blue-500/30 mx-auto bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform">
                    {founder.image ? (
                       <Image src={founder.image} alt={founder.name} fill className="object-cover" />
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

                    <div className="flex justify-center gap-4">
                        <a href={founder.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5 hover:border-blue-500">
                          <Linkedin className="w-5 h-5"/>
                        </a>
                        <a href={founder.socials.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all border border-white/5 hover:border-gray-500">
                          <Github className="w-5 h-5"/>
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