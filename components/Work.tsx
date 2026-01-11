"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

// 1. DATA: REAL RESULTS
const projects = [
  {
    id: 1,
    title: "Gomez Hospital",
    category: "Healthcare Automation",
    description: "A complete digital nervous system for a private healthcare facility.",
    challenge: "Manual booking errors led to significant lost revenue. Patient intake took 15 minutes per person.",
    solution: "We deployed an AI-powered availability engine that syncs with doctor calendars in real-time.",
    image: "/gomez-site22.png",
    url: "gomezhospital.lk",
    stats: [
      { label: "Booking Speed", value: "+40%" },
      { label: "Uptime", value: "99.9%" },
    ],
    tags: ["Next.js", "Python RAG", "Tailwind"],
    link: "https://gomezhospital.lk"
  },
  // Placeholder for second project to show layout
  {
    id: 2,
    title: "Sathimath Viweka Senasuna",
    category: "Digital Zen & Systems",
    description: "A serene, bilingual digital sanctuary for the 'Sathimath Viweka Senasuna' meditation center.",
    challenge: "Devotees struggled to simply find the location or book meditation slots due to zero digital presence.",
    solution: "We engineered a calming web experience with a custom bilingual booking engine to manage retreats.",
    image: "/asapuwa.jpg",
    url: "sathimath.org",
    stats: [
      { label: "Locales", value: "2 (En/Si)" },
      { label: "Bookings", value: "Automated" },
    ],
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#"
  }
];

export default function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="work" className="relative py-12 md:py-20 pb-20 md:pb-40 bg-black overflow-hidden scroll-mt-14 md:scroll-mt-0 font-sans">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO HEADER */}
        <motion.div style={{ y }} className="mb-32 text-center max-w-4xl mx-auto pt-10 md:pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-200">Deployed to Production</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400">
              Reality.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We don't build demos. We build mission-critical infrastructure that handles millions of dollars in transactions.
          </motion.p>
        </motion.div>

        {/* PROJECTS LIST */}
        <div className="flex flex-col gap-32">
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
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* VISUAL SIDE (3D Mockup) */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full lg:w-3/5 aspect-[16/10] rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden perspective-1000 cursor-pointer shadow-2xl shadow-blue-900/10 group"
      >
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Browser Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 z-20 backdrop-blur-md">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="px-3 py-1 rounded bg-black/20 text-[10px] text-gray-500 font-mono w-full max-w-[200px] truncate">
            https://{project.url}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-full w-full pt-10 px-4 pb-4 group-hover:scale-[1.02] transition-transform duration-500">
          {/* Using a placeholder if image fails, but ideally needs real assets */}
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/5">
            {project.image !== "/project-placeholder.jpg" ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-600 font-mono">
                Project Preview
              </div>
            )}
          </div>
        </div>
      </motion.div>


      {/* CONTENT SIDE */}
      <div className="w-full lg:w-2/5">
        <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-3 block">
          {project.category}
        </span>
        <h3 className="text-4xl font-bold text-white mb-6">
          {project.title}
        </h3>

        <p className="text-lg text-gray-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
          "{project.description}"
        </p>

        {/* Problem vs Solution */}
        <div className="space-y-6 mb-8">
          <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl">
            <h4 className="flex items-center gap-2 text-red-300 font-bold text-sm uppercase tracking-wide mb-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> The Bottleneck</h4>
            <p className="text-gray-400 text-sm">{project.challenge}</p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl">
            <h4 className="flex items-center gap-2 text-emerald-300 font-bold text-sm uppercase tracking-wide mb-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> The Unlock</h4>
            <p className="text-gray-400 text-sm">{project.solution}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {project.stats.map((stat: any, i: number) => (
            <div key={i}>
              <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 font-mono border border-white/5">
              {tag}
            </span>
          ))}
        </div>


      </div>

    </motion.div>
  );
}
