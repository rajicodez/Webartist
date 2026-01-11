"use client";
import { motion } from "framer-motion";
import { Clock, TrendingUp, ShieldCheck, Zap, BrainCircuit, Coins } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="text-blue-400" size={32} />,
    title: "Recover 1000+ Hours",
    desc: "We automate low-value tasks like scheduling, data entry, and support tickets so your team can focus on strategy."
  },
  {
    icon: <TrendingUp className="text-green-400" size={32} />,
    title: "Autonomous Growth",
    desc: "Our AI agents don't just 'capture leads'—they qualify, engage, and nurture them 24/7 without you lifting a finger."
  },
  {
    icon: <BrainCircuit className="text-purple-400" size={32} />,
    title: "Data-Driven Precision",
    desc: "Stop guessing. We implement predictive dashboards that tell you exactly what your customers will buy next."
  },
  {
    icon: <Zap className="text-yellow-400" size={32} />,
    title: "AEO & SEO Dominance",
    desc: "We engineer your digital presence to rank #1 on Google and be the 'Recommended Answer' on ChatGPT."
  },
  {
    icon: <ShieldCheck className="text-cyan-400" size={32} />,
    title: "Enterprise Security",
    desc: "Bank-grade privacy for your data. We build private, offline-ready LLMs that keep your sensitive info secure."
  },
  {
    icon: <Coins className="text-orange-400" size={32} />,
    title: "ROI-First Engineering",
    desc: "We don't sell 'hours'. We build intelligent assets designed to cut operational costs and increase revenue."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why forward-thinking leaders <br />
            choose <span className="text-blue-500">Intelligence.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Traditional agencies sell hours. We engineer autonomous systems that work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}