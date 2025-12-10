"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Target, Lightbulb, Flag, Sparkles, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navbar is in layout, but added here if needed for spacing context */}
      
      <div className="pt-32 pb-20 px-6">
        
        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our <span className="text-blue-500">Mission.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            To democratize Artificial Intelligence. We believe data intelligence shouldn't be a luxury for the Fortune 500, it should be the standard for everyone.
          </motion.p>
        </div>

        {/* THE 3 PILLARS (Keep this, it's good content) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            { icon: <Target className="w-6 h-6 text-blue-400" />, title: "The Purpose", text: "Replacing 'gut feeling' with data-driven certainty for founders.", color: "blue" },
            { icon: <Lightbulb className="w-6 h-6 text-purple-400" />, title: "The Innovation", text: "We don't just use AI; we engineer it. R&D is in our DNA.", color: "purple" },
            { icon: <Flag className="w-6 h-6 text-green-400" />, title: "The Standard", text: "Obsession with quality. We refuse to deliver 'average'.", color: "green" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className={`mb-6 p-4 rounded-full bg-${item.color}-500/10 w-fit border border-${item.color}-500/20`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* THE NEW "WOW" STORY SECTION */}
        <div className="max-w-5xl mx-auto relative">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">The Evolution</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Our Story</h2>
          </motion.div>

          {/* The Timeline Grid */}
          <div className="space-y-8">
            
            {/* CHAPTER 1: THE ORIGIN */}
            <StoryCard 
              number="01"
              title="The Frustration"
              icon={<Sparkles className="w-6 h-6 text-white" />}
              gradient="from-blue-600/20 to-transparent"
            >
              <p>
                It started with a simple observation. We looked at the digital landscape and saw a sea of beautiful, expensive websites that were... <strong>silent</strong>.
              </p>
              <p className="mt-4">
                Businesses were pouring millions into "Design," but ignoring "Intelligence." They were building digital art when they needed digital engines. We knew there had to be a better way.
              </p>
            </StoryCard>

            {/* CHAPTER 2: THE SHIFT */}
            <StoryCard 
              number="02"
              title="The Shift"
              icon={<Cpu className="w-6 h-6 text-white" />}
              gradient="from-purple-600/20 to-transparent"
              align="right"
            >
              <p>
                We realized that the missing link was <strong>Data Science</strong>. A website shouldn't just sit there; it should think. It should track patterns, predict user needs, and adapt in real-time.
              </p>
              <p className="mt-4">
                So we stopped being just "web developers" and became "Data Architects." We fused Python analytics with Next.js performance to create a new category of web platform.
              </p>
            </StoryCard>

            {/* CHAPTER 3: THE PRESENT */}
            <StoryCard 
              number="03"
              title="The Reality"
              icon={<Rocket className="w-6 h-6 text-white" />}
              gradient="from-green-600/20 to-transparent"
            >
              <p>
                Today, WebArtist is a specialized <strong>R&D Engineering Unit</strong>. We are no longer just students with an idea; we are partners to forward-thinking companies.
              </p>
              <p>
                We bridge the gap between your vision and the mathematical precision needed to make it profitable. We build the future.
              </p>
            </StoryCard>

          </div>

        </div>

      </div>
      <Footer />
    </main>
  );
}

// REUSABLE STORY CARD COMPONENT
function StoryCard({ number, title, icon, children, gradient, align = "left" }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`relative flex ${align === "right" ? "justify-end" : "justify-start"}`}
    >
      <div className="relative w-full md:w-3/4 p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent">
        <div className={`relative overflow-hidden rounded-[22px] bg-[#0A0A0A] p-8 md:p-12 border border-white/5 group hover:border-white/10 transition-colors`}>
          
          {/* Glowing Background Number */}
          <div className="absolute -right-4 -bottom-12 text-[150px] font-bold text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-700">
            {number}
          </div>

          {/* Background Gradient Blob */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradient} rounded-full blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none`} />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                {icon}
              </div>
              <h3 className="text-3xl font-bold text-white">{title}</h3>
            </div>
            
            <div className="text-gray-400 text-lg leading-relaxed">
              {children}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}