"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { serviceLinks } from "../lib/services";
import TrackedLink from "./TrackedLink";

type DropdownName = "services" | "company";

const companyLinks = [
  { label: "About Kindforth", href: "/about" },
  { label: "Meet the Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServicesActive = pathname.startsWith("/services");
  const isCompanyActive = ["/about", "/team", "/contact", "/careers"].some((route) => pathname.startsWith(route));

  const closeMenus = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const openDesktopDropdown = (name: DropdownName) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setOpenDropdown(name);
  };

  const scheduleDropdownClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimer.current = null;
    }, 140);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-[10001] mx-auto max-w-6xl px-4 md:top-6">
        <nav aria-label="Primary navigation" className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-black/70 p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
          <Link href="/" onClick={closeMenus} aria-label="Kindforth home" className="pl-4 font-display text-lg font-bold tracking-wider text-white">
            Kindforth<span className="text-blue-500">.</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <div
              className="relative"
              onMouseEnter={() => openDesktopDropdown("services")}
              onMouseLeave={scheduleDropdownClose}
              onKeyDown={(event) => {
                if (event.key === "Escape") closeMenus();
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDropdown === "services"}
                aria-controls="services-navigation-menu"
                onClick={() => openDesktopDropdown("services")}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${isServicesActive ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"}`}
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    id="services-navigation-menu"
                    role="menu"
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-full mt-2 w-[420px] overflow-visible rounded-3xl border border-white/10 bg-[#080808]/95 p-3 shadow-2xl backdrop-blur-xl before:absolute before:-top-2 before:left-0 before:h-2 before:w-full before:content-['']"
                  >
                    <Link role="menuitem" href="/services" onClick={closeMenus} className="group mb-2 flex items-center justify-between rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500/20">
                      Explore all services
                      <span className="text-blue-300 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                    <div className="grid grid-cols-2 gap-1">
                      {serviceLinks.map((service) => (
                        <Link
                          role="menuitem"
                          key={service.href}
                          href={service.href}
                          onClick={closeMenus}
                          className="rounded-2xl px-4 py-3 transition-colors hover:bg-white/10"
                        >
                          <span className="block text-sm font-semibold text-white">{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/work" onClick={closeMenus} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${pathname.startsWith("/work") ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"}`}>
              Work
            </Link>
            <Link href="/insights" onClick={closeMenus} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${pathname.startsWith("/insights") ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"}`}>
              Insights
            </Link>
            <Link href="/faq" onClick={closeMenus} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${pathname.startsWith("/faq") ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"}`}>
              FAQ
            </Link>

            <div
              className="relative"
              onMouseEnter={() => openDesktopDropdown("company")}
              onMouseLeave={scheduleDropdownClose}
              onKeyDown={(event) => {
                if (event.key === "Escape") closeMenus();
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDropdown === "company"}
                aria-controls="company-navigation-menu"
                onClick={() => openDesktopDropdown("company")}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${isCompanyActive ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"}`}
              >
                Company
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <AnimatePresence>
                {openDropdown === "company" && (
                  <motion.div
                    id="company-navigation-menu"
                    role="menu"
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.16 }}
                    className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-white/10 bg-[#080808]/95 p-2 shadow-2xl backdrop-blur-xl before:absolute before:-top-2 before:left-0 before:h-2 before:w-full before:content-['']"
                  >
                    {companyLinks.map((link) => (
                      <Link role="menuitem" key={link.href} href={link.href} onClick={closeMenus} className="block rounded-xl px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white">
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TrackedLink href="/contact" eventName="primary_cta_click" eventData={{ placement: "navigation" }} onClick={closeMenus} className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-500 md:px-5 md:text-sm">
              <span className="md:hidden">Start</span>
              <span className="hidden md:inline">Start a Project</span>
            </TrackedLink>
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-full bg-white/10 p-2 text-white md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenus}
            className="fixed inset-0 z-[10000] bg-black/45 md:hidden"
          >
            <motion.nav
              id="mobile-navigation-menu"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(event) => event.stopPropagation()}
              className="absolute inset-y-0 right-0 flex w-[calc(100%-3.5rem)] max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-white/10 bg-[#070707]/95 px-6 pb-12 pt-28 shadow-2xl backdrop-blur-xl"
            >
              <Link href="/" onClick={closeMenus} className="border-b border-white/10 py-4 text-2xl font-bold text-white">Home</Link>
              <Link href="/services" onClick={closeMenus} className="border-b border-white/10 py-4 text-2xl font-bold text-white">Services</Link>
              <div className="grid grid-cols-1 gap-1 border-b border-white/10 py-3 pl-3">
                {serviceLinks.map((service) => (
                  <Link key={service.href} href={service.href} onClick={closeMenus} className="py-2 text-base text-gray-300">{service.label}</Link>
                ))}
              </div>
              <Link href="/work" onClick={closeMenus} className="border-b border-white/10 py-4 text-2xl font-bold text-white">Work</Link>
              <Link href="/insights" onClick={closeMenus} className="border-b border-white/10 py-4 text-2xl font-bold text-white">Insights</Link>
              <Link href="/faq" onClick={closeMenus} className="border-b border-white/10 py-4 text-2xl font-bold text-white">FAQ</Link>
              <p className="border-b border-white/10 py-4 text-2xl font-bold text-white">Company</p>
              <div className="grid grid-cols-1 gap-1 py-3 pl-3">
                {companyLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenus} className="py-2 text-base text-gray-300">{link.label}</Link>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
