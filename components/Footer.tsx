"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import Link from "next/link";
import { siteConfig } from "../lib/seo";
import { serviceLinks } from "../lib/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden border-t border-white/10">
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CTA SECTION */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-5xl md:text-9xl font-bold tracking-tighter text-white mb-6 md:mb-8">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                UPGRADE?
              </span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 md:mb-12"
          >
            Stop building digital brochures. Start building intelligent platforms that grow your business.
          </motion.p>

          <Link
            href="/contact"
            className="group relative px-8 py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg md:text-xl font-bold rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all flex items-center gap-3 hover:scale-105"
          >
              Start Your Project
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="mt-6 text-sm md:text-base text-gray-500">
            Or call us{" "}
            <a
              href="tel:+94717802777"
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
            >
              +94 71 780 2777
            </a>
          </p>
        </div>

        <div className="mb-12 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.8fr_1fr]">
          <div>
            <p className="font-bold text-xl tracking-wider text-white">
              Kindforth<span className="text-blue-500">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              AI, automation, software, web, and organic growth for ambitious Sri Lankan SMEs and international teams.
            </p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Services</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceLinks.map((service) => (
                <Link key={service.href} href={service.href} className="text-sm text-gray-500 transition-colors hover:text-white">
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Company</p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-gray-500 transition-colors hover:text-white">About</Link>
              <Link href="/team" className="text-sm text-gray-500 transition-colors hover:text-white">Team</Link>
              <Link href="/work" className="text-sm text-gray-500 transition-colors hover:text-white">Work</Link>
              <Link href="/careers" className="text-sm text-gray-500 transition-colors hover:text-white">Future careers</Link>
              <Link href="/contact" className="text-sm text-gray-500 transition-colors hover:text-white">Contact</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-12">
          
          {/* 1. Logo (Top on Mobile, Left on Desktop) */}
          <div className="flex justify-center md:justify-start">
            <span className="font-bold text-xl tracking-wider text-white">
              Kindforth<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* 2. Socials (Middle on Mobile, Center on Desktop) */}
          <div className="flex justify-center">
            <div className="flex gap-4 md:gap-6">
              {[
                { label: "Contact Kindforth on WhatsApp", icon: <WhatsAppIcon className="w-5 h-5" />, href: "https://wa.me/94717802777" },
                { label: "Kindforth on LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: siteConfig.social.linkedin },
                { label: "Email Kindforth", icon: <Mail className="w-5 h-5" />, href: `mailto:${siteConfig.email}` },
                { label: "Kindforth on Instagram", icon: <Instagram className="w-5 h-5" />, href: siteConfig.social.instagram },
                { label: "Kindforth on Facebook", icon: <Facebook className="w-5 h-5" />, href: siteConfig.social.facebook },
              ].map((social, index) => (
                <a
                  key={index}
                  aria-label={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Copyright (Bottom on Mobile, Right on Desktop) */}
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-2 md:gap-4 text-xs text-gray-600">
            <p>© {currentYear} Kindforth.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
