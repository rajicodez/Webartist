// Navbar removed (in layout)
import Hero from "../components/Hero"; // Your new Cinematic Hero
import ServiceStrip from "../components/ServiceStrip";
import TechStack from "../components/TechStack";
import IntelligenceStack from "../components/IntelligenceStack"; // The new Diagram
import Comparison from "../components/Comparison"; // The "Manual vs Autonomous" toggle
import Benefits from "../components/Benefits"; // The "ROI" section
import Footer from "../components/Footer";

// NOTE: We temporarily removed Services, UseCases, Process, TechStack, Work, FAQ.
// We will move them to /intelligence, /solutions, and /work pages next.

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* 1. THE VISION */}
      <Hero />

      <ServiceStrip />

      <TechStack />

      {/* 2. THE BLUEPRINT (Replaces the old Services Grid) */}
      <IntelligenceStack />

      {/* 3. THE OPERATIONAL SHIFT (Problem vs Solution) */}
      <Comparison />

      {/* 4. THE ROI (Why pay us?) */}
      <Benefits />

      {/* 5. THE CLOSE */}
      <Footer />
    </main>
  );
}