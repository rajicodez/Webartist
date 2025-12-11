"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "I have a vision, but I’m not technical. Can you help?",
    answer: "Absolutely. You focus on your business vision, and we handle the engineering. We don't overwhelm you with jargon; we become your technical partners, translating your ideas into a powerful digital reality."
  },
  {
    question: "Will this website actually grow my business?",
    answer: "That is our only goal. We don't just build 'pretty' websites; we build Growth Engines. By using data to understand your customers, we design a platform that actively turns visitors into paying clients."
  },
  {
    question: "Why do I need an 'Intelligent' website?",
    answer: "Think of a standard website like a digital brochure—it just sits there. An 'Intelligent Website' acts like a 24/7 employee. It answers customer questions instantly, takes bookings automatically, and learns what your users want."
  },
  {
    question: "What happens after the site is live? Do you leave?",
    answer: "Never. We view this as a long-term partnership. We stick around to ensure your site stays fast, secure, and updated. As your business grows, we are right there to add new features and scale the platform with you."
  },
  {
    question: "Is this a huge investment for a startup?",
    answer: "We believe in high value, not high barriers. We offer scalable solutions designed to fit your growth stage. Our goal is to build you a platform that pays for itself by generating new revenue and saving you time."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    // ADDED id="faq" HERE 👇
    <section id="faq" className="py-12 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Common <span className="text-blue-500">Questions.</span>
          </h2>
          <p className="text-gray-400">Everything you need to know about partnering with us.</p>
        </div>

        {/* FAQ List */}
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="group cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-colors"
            >
              {/* Question Row */}
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </h3>
                <div className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${activeIndex === index ? "bg-blue-600 border-blue-600 rotate-180" : "bg-white/5"}`}>
                  {activeIndex === index ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-gray-400" />}
                </div>
              </div>

              {/* Answer Row (Animated) */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}