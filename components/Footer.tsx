"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <Link href="/" className="text-white/60 hover:text-primary transition-colors text-sm">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-white/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/images/logo.png"
                alt="Astro Fibre Logo"
                width={120}
                height={35}
                className="h-8 w-auto object-contain brightness-0 invert opacity-70"
            />
            <p className="text-center text-sm text-white/40">
              &copy; {new Date().getFullYear()} Astro Fibre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
