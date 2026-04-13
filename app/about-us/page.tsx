import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Counter from "@/components/Counter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StickyExploreBanner from "@/components/StickyExploreBanner";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "About Us | Authorised Astro One Distributor in Malaysia",
  description: "Officially Astro Appointed & Authorised Distributor. We provide Astro One TV Packs registration services across Malaysia, assisting with plan selection, installation, and support.",
};

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - PREMIUM DARK THEME */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-[#020617]">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Column with Glow */}
            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="relative group">
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-zinc-900">
                  <Image
                    src="/images/authorised-distributor-hero.jpg"
                    alt="Authorised Astro One Distributor"
                    fill
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4 animate-fade-in mb-4" style={{ animationDelay: "0.2s" }}>
                
                <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Authorised
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"> Astro One </span> 
                  Distributor
                </h1>
                
                <p className="text-md md:text-lg font-bold italic text-white/90 border-l-4 border-primary pl-4">
                  Officially Astro Appointed & Authorised Distributor
                </p>
              </div>

              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <p className="text-md md:text-lg text-zinc-300 leading-relaxed font-medium">
                  We are a verified authorised distributor, dedicated to providing seamless Astro One TV Packs registration services across the country.
                </p>
                
                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group transition-all duration-300 hover:bg-white/[0.08]">
                  <p className="text-md md:text-lg text-zinc-300 leading-relaxed font-medium">
                    Our team provides end-to-end expertise: from <span className="text-white font-bold">plan selection</span> and <span className="text-white font-bold">coverage mapping</span> to priority <span className="text-white font-bold">installation scheduling</span> and dedicated lifetime support.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Link
                  href="/"
                  className="relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-primary rounded-2xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 transform hover:scale-105 active:scale-95 group overflow-hidden"
                >
                  <span className="relative z-10">Explore Astro One Channel</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Astro Channel Section - DYNAMIC STICKY */}
      <StickyExploreBanner />

      {/* Stats Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* Happy Clients */}
            <div className="flex flex-col items-center justify-center space-y-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-baseline">
                <span className="text-6xl md:text-7xl font-black text-primary tracking-tighter">
                  <Counter end={1500} />
                </span>
                <span className="text-4xl md:text-5xl font-black text-primary ml-1">+</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-black tracking-tight uppercase md:normal-case">
                Happy Client
              </p>
            </div>

            {/* Years of Experience */}
            <div className="flex flex-col items-center justify-center space-y-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-baseline">
                <span className="text-6xl md:text-7xl font-black text-primary tracking-tighter">
                  <Counter end={7} duration={1500} />
                </span>
                <span className="text-4xl md:text-5xl font-black text-primary ml-1">+</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-black tracking-tight uppercase md:normal-case">
                Years of Experience
              </p>
            </div>

            {/* Employees */}
            <div className="flex flex-col items-center justify-center space-y-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-baseline">
                <span className="text-6xl md:text-7xl font-black text-primary tracking-tighter">
                  <Counter end={100} duration={1800} />
                </span>
                <span className="text-4xl md:text-5xl font-black text-primary ml-1">+</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-black tracking-tight uppercase md:normal-case">
                Employees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Branding Section */}
      <TestimonialCarousel />

      <FAQSection />

      {/* Decorative transition divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
