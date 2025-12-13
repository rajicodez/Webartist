"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { TrendingUp, Users, Globe, Layers, Shuffle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersPage() {
  
  const benefits = [
    {
      title: "Rapid Career Growth",
      desc: "Grow with the company. As an early team member, your impact directly shapes our future—and your financial & reputational growth reflects that.",
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Mentorship & Learning",
      desc: "We are a team of researchers. We support peer learning, internal tech talks, and give you time to master new AI models and frameworks.",
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Remote & Flexible",
      desc: "Built on trust. Whether you work from home or campus, we care about your code output, not your clock-in time.",
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Diverse Projects",
      desc: "Don't get bored. Work on varied challenges—from Healthcare RAG systems to E-commerce recommendation engines across different industries.",
      icon: <Layers className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Role Flexibility",
      desc: "Want to switch from Frontend to AI Engineering? No need to quit. We support internal transitions so you never stop learning.",
      icon: <Shuffle className="w-6 h-6 text-green-400" />
    },
    {
      title: "Zero Corporate Politics",
      desc: "We value people, not hierarchy. Enjoy a friendly, flat structure where your voice is heard and hierarchy never works against you.",
      icon: <Heart className="w-6 h-6 text-red-400" />
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.3, // Wait for header to finish
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navbar is handled in layout, but ensuring padding exists */}
      
      <section className="pt-32 pb-20 px-6">
        
        {/* HEADER SECTION - Runs Immediately */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} // CHANGED: animate instead of whileInView
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Join the <span className="text-blue-500">Intelligence.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are always looking for exceptional Data Scientists and Engineers to help us build the next generation of web platforms.
          </p>
        </motion.div>

        {/* WHY WORK WITH US (Animated Grid) - Runs Immediately */}
        <div className="max-w-7xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} // CHANGED: animate
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why WebArtist?</h2>
            <p className="text-gray-400">More than just a job. It's a launchpad.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible" // CHANGED: animate ensures it never stays hidden
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="mb-6 p-4 rounded-full bg-white/5 w-fit border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* OPEN POSITIONS - Runs Immediately */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} // CHANGED: animate
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Open Positions</h2>
          
          <div className="grid gap-6">
            
            {/* Job Card 1 - NOW CLICKABLE */}
            <Link
              href="/apply?role=AI Engineer Intern"
              className="block p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">AI Engineer Intern</h3>
                  <p className="text-sm text-gray-500 mt-1">Remote • Part-Time</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20 font-mono">APPLY NOW</span>
              </div>
              <p className="text-gray-400">
                Work with LLMs, RAG pipelines, and Python to build intelligent chatbot agents for our clients.
              </p>
            </Link>

            {/* Job Card 2 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group cursor-pointer opacity-75">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Frontend Developer</h3>
                  <p className="text-sm text-gray-500 mt-1">Colombo • Contract</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-gray-500 text-xs border border-white/10 font-mono">COMING SOON</span>
              </div>
              <p className="text-gray-400">
                Build high-performance interfaces using Next.js, Tailwind, and Framer Motion.
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}