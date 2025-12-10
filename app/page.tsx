import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import Work from "../components/Work";
import FAQ from "../components/FAQ"; // <--- Import
import TeamTeaser from "../components/TeamTeaser";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <Work />
      <FAQ /> {/* <--- Add Here */}
      <TeamTeaser />
      <Footer />
    </main>
  );
}