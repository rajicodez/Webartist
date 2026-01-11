
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">


      <div className="pt-32 pb-20 px-6 relative overflow-hidden">

        {/* Decorative Background Blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-40" />

        <div className="max-w-4xl mx-auto relative z-10">

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Build the <span className="text-blue-500">Future.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to upgrade your digital presence? Fill out the form below, and our engineering team will get back to you within 24 hours.
            </p>
          </div>

          <ContactForm />

        </div>
      </div>

      <Footer />
    </main>
  );
}