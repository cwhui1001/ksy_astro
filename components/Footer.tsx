"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white border-t border-white/5 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="group">
              <Image
                src="/images/logo.png"
                alt="Astro TV"
                width={150}
                height={43}
                className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed text-center md:text-left max-w-sm">
              Your trusted partner for Astro TV packages. Get the best entertainment experience today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-lg font-semibold tracking-wide text-white uppercase opacity-90">Quick Links</h3>
            <ul className="space-y-4 text-center md:text-left translate-y-1">
              <li>
                <Link href="/about-us" className="text-white/50 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/50 hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block">
                  Astro One (Channels)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-lg font-semibold tracking-wide text-white uppercase opacity-90">Contact</h3>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <a href="tel:+60146833321" className="group block">
                  <span className="text-white/50 group-hover:text-primary transition-colors text-sm">
                    +6014-6833321 
                  </span>
                  <span className="block text-xs text-white/30">(Registration)</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@astro-registration.my" className="text-white/50 hover:text-primary transition-colors text-sm break-all">
                  admin@astro-registration.my
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Separator Section */}
      <div className="border-t border-white/5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto py-8 px-6 lg:px-8 text-center space-y-2">
          <p className="text-sm font-medium text-white/60">Astro Packages | Astro Authorised Reseller</p>
          <p className="text-xs text-white/40">
            Copyright © {currentYear} | All rights reserved. 
          </p>
        </div>
      </div>

      {/* Policies Footer */}
      <div className="border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            <Link 
              href="/privacy-policy" 
              className="text-xs font-medium text-white/30 hover:text-white transition-colors tracking-widest uppercase hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-conditions" 
              className="text-xs font-medium text-white/30 hover:text-white transition-colors tracking-widest uppercase hover:underline underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
