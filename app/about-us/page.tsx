import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Spacer */}
      <div className="h-20" />

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
               <Image
                src="/images/hero.png"
                alt="About Astro Fibre"
                fill
                className="object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Empowering Connections Across Malaysia.
              </h1>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At Astro Fibre, we believe that high-speed connectivity is the backbone of modern digital life. 
                  Our mission is to provide every household with seamless, reliable, and entertaining internet experiences.
                </p>
                <p>
                  By combining our decades of expertise in world-class content with cutting-edge fibre technology, 
                  we offer more than just a connection—we offer a gateway to unlimited entertainment and productivity.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-3xl font-bold text-foreground">99.9%</h4>
                    <p className="text-sm">Network Uptime</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-foreground">24/7</h4>
                    <p className="text-sm">Expert Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Vision Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Innovation", text: "Always staying ahead with the latest Wi-Fi standards and infrastructure." },
              { title: "Customer First", text: "Dedicated support teams to ensure you're always connected when it matters." },
              { title: "Transparency", text: "No hidden fees, no complicated contracts. Just pure, fast internet." }
            ].map((item, idx) => (
              <div key={idx} className="p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
