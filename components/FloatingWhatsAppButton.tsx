"use client";

import { siteConfig } from "../lib/seo";
import WhatsAppIcon from "./WhatsAppIcon";

const whatsappNumber = siteConfig.phone.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent(
  "Hi Kindforth, I'd like to discuss a project with your team.",
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function FloatingWhatsAppButton() {
  const trackWhatsAppClick = () => {
    const analyticsWindow = window as Window & {
      dataLayer?: Record<string, unknown>[];
    };

    analyticsWindow.dataLayer?.push({
      event: "whatsapp_click",
      placement: "floating_button",
    });
  };

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Kindforth on WhatsApp"
      title="Chat with Kindforth on WhatsApp"
      onClick={trackWhatsAppClick}
      className="group fixed bottom-3 right-2 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[#25D366] text-white shadow-[0_14px_45px_-12px_rgba(37,211,102,0.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2be06d] hover:shadow-[0_20px_55px_-12px_rgba(37,211,102,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70ef9f] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-[#70ef9f]/70 motion-safe:animate-ping"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-black/90 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
      >
        Chat on WhatsApp
      </span>
      <WhatsAppIcon className="relative h-6 w-6 md:h-7 md:w-7" />
    </a>
  );
}
