
import { Phone, Mail } from "lucide-react";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { siteConfig } from "../../lib/seo";
import { serviceLinks } from "../../lib/services";
import TrackedLink from "../../components/TrackedLink";

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const requestedService = (await searchParams).service ?? "";
  const initialService = serviceLinks.some((service) => service.key === requestedService) ? requestedService : "";

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">


      <div className="pt-32 pb-20 px-6 relative overflow-hidden">

        {/* Decorative Background Blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-40" />

        <div className="max-w-4xl mx-auto relative z-10">

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let&apos;s Build the <span className="text-blue-500">Future</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to upgrade your digital presence? Fill out the form below, and our engineering team will get back to you within 24 hours.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <TrackedLink eventName="phone_click" eventData={{ placement: "contact_page" }}
                href="tel:+94717802777"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="font-medium">+94 71 780 2777</span>
              </TrackedLink>
              <TrackedLink eventName="whatsapp_click" eventData={{ placement: "contact_page" }}
                href="https://wa.me/94717802777"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">WhatsApp</span>
              </TrackedLink>
              <TrackedLink eventName="email_click" eventData={{ placement: "contact_page" }}
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{siteConfig.email}</span>
              </TrackedLink>
            </div>
          </div>

          <ContactForm initialService={initialService} />

        </div>
      </div>

      <Footer />
    </main>
  );
}
