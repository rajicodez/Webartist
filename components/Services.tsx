"use client";
import { motion } from "framer-motion";
import { Database, Bot, TrendingUp, Zap, Globe, Lock } from "lucide-react";

const services = [
  {
    title: "Data Science Core",
    description: "We don't guess. We analyze. Custom Python/SQL infrastructure to mine your business data for patterns.",
    icon: <Database className="w-8 h-8 text-blue-400" />,
    size: "col-span-1 md:col-span-2", // Wide box
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "AI Agents (RAG)",
    description: "Chatbots that actually know your business. Trained on your specific documents and data.",
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    size: "col-span-1", // Standard box
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Predictive Analytics",
    description: "Forecast sales, churn, and trends before they happen.",
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    size: "col-span-1",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "High-Performance Web",
    description: "Next.js sites that load in milliseconds. 100/100 Lighthouse scores.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    size: "col-span-1 md:col-span-2",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
];

export default function Services() {
  return (
    <section id="intelligence" className="relative py-12 md:py-24 bg-black overflow-hidden">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Intelligence <span className="text-blue-500">Stack.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Modern problems require modern architecture. We combine three layers of technology to build your platform.
          </p>
        </motion.div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.size} group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden`}
            >
              {/* Hover Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit backdrop-blur-sm border border-white/10">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}