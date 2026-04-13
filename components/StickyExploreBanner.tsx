"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const StickyExploreBanner = () => {
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        // If the bottom of the banner has scrolled past the top of the viewport
        setIsSticky(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Original Banner (Card Style) */}
      <section ref={bannerRef} className="relative py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-primary rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-primary/20 transition-all duration-500 hover:scale-[1.01]">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 animate-pulse-subtle">
                <Image
                  src="/images/explore-icon.png"
                  alt="Explore Astro Channel"
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Explore Astro Channel
              </h3>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-md"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bar Version (Hidden until isSticky is true) */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[100] bg-primary shadow-2xl transition-all duration-500 ease-in-out transform ${
          isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
              <Image
                src="/images/explore-icon.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-none">
              Explore Astro Channel
            </h3>
          </div>
          <Link
            href="/"
            className="px-6 py-2 bg-white text-primary text-sm font-bold rounded-lg hover:bg-opacity-95 transition-all shadow-md"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default StickyExploreBanner;
