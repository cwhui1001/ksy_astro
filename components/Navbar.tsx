"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Astro One (Channels)", href: "/" },
  ];

  return (
    <nav className="bg-[#020617] border-b border-white/5 py-4 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
              <Image
                src="/images/logo.png"
                alt="Astro TV Logo"
                width={150}
                height={43}
                className="h-18 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-md font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-wider transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(255,0,144,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 flex items-center justify-center text-white focus:outline-none bg-white/5 rounded-2xl border border-white/10"
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end justify-center gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? "opacity-0" : "w-4"}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "max-h-[500px] border-b border-white/10" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="bg-[#020617] p-6 space-y-6 shadow-2xl relative">
          {/* Subtle glow in mobile menu */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 font-bold text-lg ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
                <svg className="w-5 h-5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <Link
            href="/apply-now"
            className="flex items-center justify-center w-full py-5 rounded-[2rem] bg-primary text-white font-black text-xl uppercase tracking-widest shadow-2xl shadow-primary/20 active:scale-95 transition-transform"
          >
            Apply Now
          </Link>

          <div className="pt-4 text-center">
            <p className="text-white/30 text-xs font-medium tracking-widest uppercase">
              Authorised Astro Reseller
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
