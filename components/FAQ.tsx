"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, MessageCircle } from "lucide-react";
import Link from "next/link";
import { faqData } from "../lib/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredData = faqData.map(section => ({
    ...section,
    questions: section.questions.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

  return (
    <section id="faq" className="relative py-24 bg-[#050505] overflow-hidden min-h-screen font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 pt-20"
        >
          <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-white/5 border border-white/10 text-white w-full max-w-md focus-within:border-blue-500/50 transition-colors">
            <Search size={20} className="text-gray-400 ml-2" />
            <input
              type="text"
              aria-label="Search frequently asked questions"
              placeholder="Search knowledge base..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white ml-3 w-full placeholder-gray-500"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Knowledge & <br /> <span className="text-blue-500">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparency is our default state. Here is exactly how we work, what we charge, and what you get.
          </p>
        </motion.div>

        {/* FAQ SECTIONS */}
        <div className="space-y-16 min-h-[400px]">
          {filteredData.length > 0 ? (
            filteredData.map((section, secIdx) => (
              <div key={secIdx}>
                <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-white/10 pb-2">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, idx) => {
                    // Use question text as ID for stable state during filtering
                    const id = item.q;
                    const answerId = `faq-answer-${secIdx}-${idx}`;
                    const isOpen = openIndex === id;
                    return (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-b border-white/5"
                      >
                        <button
                          onClick={() => toggleFAQ(id)}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          className="w-full flex items-start justify-between py-6 text-left group"
                        >
                          <span className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-gray-200 group-hover:text-white'}`}>
                            {item.q}
                          </span>
                          <span aria-hidden="true" className={`flex-shrink-0 ml-6 p-1 rounded-full border transition-all duration-300 ${isOpen ? 'border-blue-500 bg-blue-500/20 text-blue-400 rotate-180' : 'border-white/10 text-gray-500 group-hover:border-white/30'}`}>
                            <Plus className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                          </span>
                        </button>

                        <motion.div
                          id={answerId}
                          initial={false}
                          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                          aria-hidden={!isOpen}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 text-gray-400 text-lg leading-relaxed max-w-2xl">
                            {item.a}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No results found for &quot;{searchQuery}&quot;.</p>
              <button onClick={() => setSearchQuery("")} className="mt-4 text-blue-400 hover:text-blue-300">Clear Search</button>
            </div>
          )}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-32 p-8 md:p-12 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-blue-200 mb-8 max-w-md mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Chat directly with one of our lead engineers.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 mx-auto inline-flex">
              <MessageCircle size={18} />
              Talk to Engineer
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
