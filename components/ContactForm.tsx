"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { serviceLinks } from "../lib/services";

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "We could not deliver your message.");
      }

      setIsSuccess(true);

      const analyticsWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
      analyticsWindow.dataLayer?.push({
        event: "generate_lead",
        form_name: "project_enquiry",
        service: formState.service || "not_selected",
      });

      // Reset form state
      setFormState({ name: "", email: "", company: "", service: initialService, message: "" });

    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not deliver your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
        <h3 className="text-3xl font-display font-bold text-white mb-4">Message Sent!</h3>
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
            <label htmlFor="contact-name" className={labelClasses}>Your Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name"
              className={inputClasses}
              required
            />
          </div>
          <div className="group">
            <label htmlFor="contact-email" className={labelClasses}>Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="E-mail"
              className={inputClasses}
              required
            />
          </div>
        </div>

        {/* Company / Website */}
        <div>
          <label htmlFor="contact-company" className={labelClasses}>Company / Website (Optional)</label>
          <input
            id="contact-company"
            type="text"
            name="company"
            value={formState.company}
            onChange={handleChange}
            placeholder="Company name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-service" className={labelClasses}>What can we help with?</label>
          <select
            id="contact-service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" className="bg-black">I&apos;m not sure yet</option>
            {serviceLinks.map((service) => (
              <option key={service.key} value={service.key} className="bg-black">{service.label}</option>
            ))}
          </select>
        </div>

        {/* Message Area */}
        <div>
          <label htmlFor="contact-message" className={labelClasses}>Tell us about your project</label>
          <textarea
            id="contact-message"
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
          type="submit"
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
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>

        {submitError && (
          <p role="alert" aria-live="polite" className="text-center text-sm text-red-300">
            {submitError}
          </p>
        )}

        <p className="text-center text-xs text-gray-600 mt-4">
          By submitting this form, you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-gray-400">privacy policy</Link>.
          We respect your data.
        </p>

      </form>
    </motion.div>
  );
}
