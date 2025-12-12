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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    // THE FIX: 'scroll-mt-32 md:scroll-mt-0'
    // This adds the safety buffer ONLY on mobile. Desktop behaves normally.
    <section id="faq" className="relative py-12 md:py-24 bg-black overflow-hidden scroll-mt-14 md:scroll-mt-0">
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Common <span className="text-blue-500">Questions.</span>
          </h2>
          <p className="text-gray-400">Everything you need to know about our process.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden hover:border-blue-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                <span className="flex-shrink-0 text-blue-500">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}