"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect this to your actual Backend (Supabase/Email) later.
    // For now, we simulate a network delay to show the animation.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-gray-400 mb-2 ml-1";

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg mx-auto bg-[#0A0A0A] border border-white/10 p-12 rounded-[2.5rem] text-center"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-gray-400">
          Thank you for reaching out. Our engineering team will analyze your request and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-blue-400 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className={labelClasses}>Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe" 
              className={inputClasses} 
              required
            />
          </div>
          <div className="group">
            <label className={labelClasses}>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formState.email}
              onChange={handleChange}
              placeholder="john@company.com" 
              className={inputClasses} 
              required
            />
          </div>
        </div>

        {/* Company / Website */}
        <div>
          <label className={labelClasses}>Company / Website (Optional)</label>
          <input 
            type="text" 
            name="company" 
            value={formState.company}
            onChange={handleChange}
            placeholder="webartist.lk" 
            className={inputClasses} 
          />
        </div>

        {/* Message Area */}
        <div>
          <label className={labelClasses}>Tell us about your project</label>
          <textarea 
            name="message" 
            value={formState.message}
            onChange={handleChange}
            rows={5}
            placeholder="I need a platform that..." 
            className={inputClasses} 
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-xl shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Start Your Project
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>

        <p className="text-center text-xs text-gray-600 mt-4">
          By submitting this form, you agree to our privacy policy. We respect your data.
        </p>

      </form>
    </motion.div>
  );
}