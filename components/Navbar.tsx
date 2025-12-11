"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isManualScroll = useRef(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize State
  const [activeTab, setActiveTab] = useState("Home");

  // Handle Page Changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    
    if (pathname === "/team" || pathname === "/careers" || pathname === "/about" || pathname === "/contact") {
      setActiveTab("Company");
      setIsDropdownOpen(false);
    } else if (pathname === "/") {
      if (typeof window !== 'undefined' && window.location.hash) {
         const hash = window.location.hash.replace("#", "");
         if (hash === "faq") setActiveTab("FAQ");
         else setActiveTab(hash.charAt(0).toUpperCase() + hash.slice(1));
      } else {
         setActiveTab("Home");
      }
    }
  }, [pathname]);

  // Scroll Spy (Same as before)
  useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => {
      if (isManualScroll.current) return;
      const sections = ["home", "intelligence", "work", "faq"];
      const scrollPosition = window.scrollY + (window.innerHeight * 0.3);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            if (section === "faq") setActiveTab("FAQ");
            else setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (tabName: string) => {
    setActiveTab(tabName);
    isManualScroll.current = true;
    setTimeout(() => { isManualScroll.current = false; }, 1000); 
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  const navItems = [
    { name: "Home", link: "/#home" },
    { name: "Intelligence", link: "/#intelligence" },
    { name: "Work", link: "/#work" },
    { name: "FAQ", link: "/#faq" },
  ];

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Meet the Team", link: "/team" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 px-4 md:px-0 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl shadow-blue-500/10 transition-all hover:border-white/20">
          
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => handleNavClick("Home")}
            className="pl-4 font-bold text-white tracking-wider cursor-pointer text-lg"
          >
            Webartist<span className="text-blue-500">.</span>
          </Link>

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors"
              >
                <span className={`relative z-10 transition-colors duration-200 ${activeTab === item.name ? "text-white" : "text-gray-400 hover:text-gray-200"}`}>
                  {item.name}
                </span>
                {activeTab === item.name && (
                  <motion.div
                    layoutId="active-pill"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 will-change-transform"
                  />
                )}
              </Link>
            ))}

            {/* Desktop Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-1">
                <span className={`relative z-10 transition-colors duration-200 flex items-center gap-1 ${activeTab === "Company" ? "text-white" : "text-gray-400 hover:text-gray-200"}`}>
                  Company <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </span>
                {activeTab === "Company" && (
                  <motion.div
                    layoutId="active-pill"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 will-change-transform"
                  />
                )}
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 w-48 p-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <div className="flex flex-col gap-1">
                      {companyLinks.map((subItem) => (
                        <Link key={subItem.name} href={subItem.link} className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all text-left">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 md:hidden">
             {/* Start Button (Always Visible) */}
             <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full"
            >
              Start
            </Link>

            {/* Hamburger Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white bg-white/10 rounded-full"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </button>
          </div>

          {/* Desktop Start Button (Hidden on Mobile) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)]"
            >
              Start
            </Link>
          </div>

        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {/* Main Links */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className="text-2xl font-bold text-white border-b border-white/10 pb-4"
                >
                  {item.name}
                </Link>
              ))}

              {/* Company Links (Expanded) */}
              <div className="flex flex-col gap-4 pt-2">
                <span className="text-sm text-blue-500 font-mono uppercase tracking-widest">Company</span>
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="text-xl text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}