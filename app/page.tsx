// Navbar removed (in layout)
import type { Metadata } from "next";
import Hero from "../components/Hero"; // Your new Cinematic Hero
import ServiceStrip from "../components/ServiceStrip";
import TechStack from "../components/TechStack";
import IntelligenceStack from "../components/IntelligenceStack"; // The new Diagram
import Comparison from "../components/Comparison"; // The "Manual vs Autonomous" toggle
import Benefits from "../components/Benefits"; // The "ROI" section
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { siteConfig } from "../lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "AI, Automation & Software Company in Sri Lanka | Kindforth" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

// NOTE: We temporarily removed Services, UseCases, Process, TechStack, Work, FAQ.
// We will move them to /intelligence, /solutions, and /work pages next.

export default function Home() {
  return (
    <main className="home-page min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* 1. THE VISION */}
      <Hero />

      <ServiceStrip />

      <section className="border-y border-violet-300/10 bg-gradient-to-r from-violet-950/30 via-black to-black px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-violet-300">Meet Kira · By Kindforth</p><h2 className="font-display text-3xl tracking-tight md:text-4xl">A more human way to connect.</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400">An AI assistant that helps visitors get to know your business. Discover Kira and request a personal demo.</p></div>
          <Link href="/kira" className="inline-flex shrink-0 items-center justify-center gap-6 self-start rounded-full border border-violet-300/30 px-6 py-4 text-sm text-violet-200 transition-colors hover:bg-violet-300/10 sm:self-center">Discover Kira <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <TechStack />

      {/* 2. THE BLUEPRINT (Replaces the old Services Grid) */}
      <IntelligenceStack />

      {/* 3. THE OPERATIONAL SHIFT (Problem vs Solution) */}
      <Comparison />

      {/* 4. THE ROI (Why pay us?) */}
      <Benefits />

      <Testimonials />

      {/* 5. THE CLOSE */}
      <Footer />
    </main>
  );
}
