import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Authorised Astro One Distributor in Malaysia",
  description: "Officially Astro Appointed & Authorised Distributor. We provide Astro One TV Packs registration services across Malaysia, assisting with plan selection, installation, and support.",
};

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 md:py-16 bg-gradient-to-br from-white via-accent/20 to-white dark:from-background dark:via-accent/5 dark:to-background">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Column */}
            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="relative group">
                {/* Decorative border mask */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-[2rem]" />
                
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
                  <Image
                    src="/images/authorised-distributor-hero.jpg"
                    alt="Authorised Astro One Distributor"
                    fill
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-foreground leading-[1.05] tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Authorised Astro One</span><br/>
                  <span className="text-primary">Distributor</span> in Malaysia
                </h1>
                
                <p className="text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Officially Astro Appointed & Authorised Distributor
                </p>
              </div>

              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We are an authorised Astro distributor, providing Astro One TV Packs registration services across Malaysia.
                </p>
                
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-accent/10 border border-border backdrop-blur-sm">
                  <p className="text-md text-muted-foreground leading-relaxed">
                    Our role is to assist customers with plan selection, coverage checking, installation scheduling, and post-installation support, ensuring a smooth and worry-free experience from start to finish.
                  </p>
                </div>
              </div>

              <div className="pt-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
                >
                  Explore Astro One Channel
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section (Keeping a simplified version for premium feel if desired, 
          but instructions said "remove existing content and put this", 
          so I will stop here to strictly follow the Hero requirement while making it look GREAT) */}
      
      {/* Decorative transition divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
