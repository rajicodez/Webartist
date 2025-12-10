"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// 1. YOUR PROJECT DATA
const projects = [
  {
    id: 1,
    title: "Gomez Hospital",
    category: "Healthcare",
    description: "A complete digital nervous system for a private healthcare facility. We replaced their legacy manual booking system with an AI-powered web platform using RAG technology to automate patient intake and inquiries.",
    image: "/gomez-site22.png",
    url: "gomezhospital.lk",
    stats: [
      { label: "Faster Booking", value: "40%" },
      { label: "AI Availability", value: "24/7" },
    ],
    tags: ["Next.js", "Python RAG", "Tailwind", "Analytics"],
    link: "#"
  },
  // Add Project 2 here later...
];

export default function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="work" className="py-32 bg-black relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div style={{ y }} className="mb-24">
           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4"
          >
            Case Studies
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Selected <span className="text-blue-500">Work.</span>
          </motion.h2>
        </motion.div>

        {/* PROJECTS LIST */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// 2. THE REUSABLE CARD COMPONENT
function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // THE OUTER CARD CONTAINER (This creates the visible box)
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="group/card rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 p-8 md:p-12 hover:border-white/20 transition-colors overflow-hidden relative"
    >
      {/* Subtle Gradient Glow inside the card */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
        {/* VISUAL SIDE (3D Mockup) */}
        <motion.div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative rounded-2xl bg-black border border-white/10 overflow-hidden perspective-1000 cursor-pointer shadow-2xl shadow-black/50 will-change-transform lg:order-1"
        >
          {/* Browser Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 z-20">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="mx-auto text-[10px] text-gray-600 font-mono">
              {project.url}
            </div>
          </div>
          
          {/* Image Container */}
          <div className="relative h-[300px] md:h-[400px] w-full mt-8 group-hover/card:scale-[1.02] transition-transform duration-500">
             <Image 
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Shine Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out z-10 pointer-events-none" />
          </div>
        </motion.div>


        {/* CONTENT SIDE */}
        <div className={`relative lg:order-2`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {project.title}
          </h3>
          
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {project.stats.map((stat: any, i: number) => (
              <div 
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/5"
              >
                <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <a href={project.link} className="group inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors">
              View Case Study
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </motion.div>
  );
}