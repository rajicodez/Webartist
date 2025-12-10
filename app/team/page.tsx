import Founders from "../../components/Founders";
import Footer from "../../components/Footer";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="pt-20"> {/* Padding for fixed navbar */}
        <Founders />
      </div>
      <Footer />
    </main>
  );
}