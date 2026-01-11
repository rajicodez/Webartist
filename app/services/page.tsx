"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Bot, Eye, LineChart, Share2, FileText, ShoppingCart,
  Layout, Globe, BarChart3, ArrowRight, CheckCircle2,
  Cpu, Code2, Rocket
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">End-to-End AI Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            We Build Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
              Intelligence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Stop settling for generic software. We engineer custom AI solutions that look premium, act fast, and solve real business problems automatically.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-500 mb-4">Our Capabilities</h2>
            <p className="text-4xl md:text-5xl font-bold">Everything you need to scale.</p>
          </div>

          <div className="grid grid-cols-1 gap-32">
            {/* Category 1: Development */}
            <ServiceCategory
              title="AI Development"
              subtitle="The Engine Room"
              description="We build the custom models and algorithms that power your business logic."
              icon={Cpu}
              color="blue"
              items={[
                {
                  title: "Custom LLMs & Chatbots",
                  desc: "Private, secure GPT models trained on your specific data. Perfect for customer support, internal knowledge bases, and automated reasoning.",
                  tags: ["Llama 3", "OpenAI", "RAG Pipeline"]
                },
                {
                  title: "Computer Vision",
                  desc: "Systems that can 'see'. Automated quality control, security monitoring, and inventory tracking using advanced object detection.",
                  tags: ["YOLO", "OpenCV", "Real-time"]
                },
                {
                  title: "Predictive Analytics",
                  desc: "Stop guessing. Use your historical data to forecast sales trends, customer churn, and market movements with precision.",
                  tags: ["Forecasting", "Scikit-Learn", "Big Data"]
                }
              ]}
            />

            {/* Category 2: Automation */}
            <ServiceCategory
              title="Integration & Automation"
              subtitle="The Nervous System"
              description="Connecting your disconnected tools to create autonomous workflows."
              icon={Bot}
              color="purple"
              reverse
              items={[
                {
                  title: "Autonomous Agents",
                  desc: "Digital workers that operate 24/7. They can schedule meetings, manage emails, update CRMs, and handle complex multi-step tasks.",
                  tags: ["AutoGPT", "Zapier", "n8n"]
                },
                {
                  title: "Document Intelligence",
                  desc: "Transform static PDFs and images into structured data. Automatically process invoices, contracts, and forms without human data entry.",
                  tags: ["OCR", "NLP", "Table Extraction"]
                },
                {
                  title: "Smart Recommenders",
                  desc: "Boost revenue by showing the right product to the right user. AI-driven personalization engines that adapt in real-time.",
                  tags: ["Personalization", "Vector DB", "Upsell"]
                }
              ]}
            />

            {/* Category 3: Presence */}
            <ServiceCategory
              title="Intelligent Presence"
              subtitle="The Digital Face"
              description="Premium interfaces that adapt and evolve based on user behavior."
              icon={Layout}
              color="green"
              items={[
                {
                  title: "Generative UI Websites",
                  desc: "Websites that change layout and content dynamically for each visitor. A truly personalized browsing experience.",
                  tags: ["Next.js", "GenUI", "Tailwind"]
                },
                {
                  title: "Interactive Dashboards",
                  desc: "Turn boring spreadsheets into immersive 3D data visualizations. Give your investors and team a command center they'll love.",
                  tags: ["Three.js", "D3", "WebGL"]
                },
                {
                  title: "AI Search Optimization",
                  desc: "Dominate the new search landscape. We optimize your content to be the top answer in ChatGPT, Perplexity, and Google SGE.",
                  tags: ["AEO", "Semantic Search", "Schema"]
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-32 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-500 mb-4">How We Work</h2>
            <p className="text-4xl md:text-5xl font-bold">From Chaos to Clarity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              desc="We audit your current workflow to find high-impact automation opportunities."
            />
            <ProcessStep
              number="02"
              title="Architecture"
              desc="We design a scalable blueprint, selecting the right models and tech stack."
            />
            <ProcessStep
              number="03"
              title="Development"
              desc="Our engineers build your solution in sprints, with regular demos and feedback."
            />
            <ProcessStep
              number="04"
              title="Deployment"
              desc="We launch your system, monitor performance, and train your team."
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

// --- SUB-COMPONENTS ---

function ServiceCategory({ title, subtitle, description, items, icon: Icon, color, reverse }: any) {
  const colors: any = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    green: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  };

  const cardHoverBorders: any = {
    blue: "hover:border-blue-500/30",
    purple: "hover:border-purple-500/30",
    green: "hover:border-emerald-500/30",
  };

  return (
    <div className={`flex flex-col lg:flex-row gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Description Side */}
      <div className="lg:w-1/3 flex flex-col justify-center">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colors[color]}`}>
          <Icon size={32} />
        </div>
        <span className={`font-mono text-sm uppercase tracking-widest mb-3 ${color === 'blue' ? 'text-blue-500' : color === 'purple' ? 'text-purple-500' : 'text-emerald-500'}`}>
          {subtitle}
        </span>
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {description}
        </p>
        <button className="text-white hover:text-gray-300 font-medium flex items-center gap-2 group transition-colors self-start">
          Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Cards Side */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 rounded-3xl bg-white/5 border border-white/10 ${cardHoverBorders[color]} transition-colors group ${idx === 2 ? 'md:col-span-2' : ''}`}
          >
            <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-black/50 rounded text-xs font-mono text-gray-500 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }: any) {
  return (
    <div className="relative p-6 border-l border-white/10 hover:border-blue-500/50 transition-colors group">
      <span className="text-6xl font-bold text-white/5 absolute -top-4 left-4 group-hover:text-white/10 transition-colors select-none">
        {number}
      </span>
      <div className="relative z-10 pt-8">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}
