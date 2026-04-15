import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Astro Packages Malaysia",
  description: "Terms and Conditions for astro-registration.my. Understand our relationship with Astro and your responsibilities when using our website.",
};

export default function TermsConditions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Matching the premium dark theme of the site */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-[#020617]">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Conditions</span>
          </h1>
          <div className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-6 text-zinc-400 font-medium bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-2xl">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Website: astro-registration.my
            </span>
            <span className="hidden md:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Effective Date: 1/1/2024
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="space-y-16">
            
            {/* Preamble */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="p-8 md:p-10 bg-zinc-50 rounded-3xl border border-zinc-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <h2 className="text-xl font-bold text-zinc-900 mb-6 tracking-tight relative z-10">PREAMBLE</h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed text-lg relative z-10">
                  <p>
                    <span className="font-semibold text-zinc-900">astro-registration.my</span> (“We”, “Us”, “Our”) is an <span className="text-primary font-bold">Authorised Reseller</span> of Astro products and services.
                  </p>
                  <p>
                    These Terms and Conditions (“Terms”) govern your access to and use of our website and your purchase of Astro products and services through us. By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</a>.
                  </p>
                  <div className="pt-4 border-t border-zinc-200 mt-6">
                    <p className="font-bold text-zinc-900 mb-4 text-base uppercase tracking-wider">Important:</p>
                    <p className="mb-4">Your actual use of Astro television, streaming, and related services is governed by Astro’s own Terms and Conditions and Privacy Notice, available at:</p>
                    <ul className="space-y-2">
                      <li>• <a href="https://product.astro.com.my/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">https://product.astro.com.my/terms</a></li>
                      <li>• <a href="https://astro.com.my/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">https://astro.com.my/privacy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Introduction and Relationship with Astro
                </h2>
              </div>
              <div className="space-y-4 pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  1.1. We operate this website to facilitate the sale and subscription of Astro products and services (“Astro Services”).
                </p>
                <p>
                  1.2. These Terms supplement, but do not replace, Astro’s official Terms and Conditions and Privacy Notice, which are incorporated by reference.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Your Relationship with Astro
                </h2>
              </div>
              <div className="space-y-4 pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  2.1. By purchasing or subscribing to an Astro Service through us, you acknowledge that your use of the Astro Service itself is governed solely by Astro’s own terms.
                </p>
                <p>
                  2.2. We are not a party to the service agreement between you and Astro. Astro is exclusively responsible for the provision, support, billing, and any disputes related to its services.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Our Role as Reseller
                </h2>
              </div>
              <div className="space-y-6 pl-14 text-zinc-600 leading-relaxed text-lg">
                <div>
                  <p className="font-bold text-zinc-900 mb-4">3.1. We are authorised to:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span>(a) Provide information about Astro packages, promotions, and pricing.</span>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span>(b) Process your registration and subscription applications for submission to Astro.</span>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span>(c) Deliver Astro equipment and assist with initial setup inquiries.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="font-bold text-zinc-900 mb-4">3.2. We do not have authority to:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-amber-200 group-hover:bg-amber-500 shrink-0 transition-colors" />
                      <span>(a) Modify Astro’s official terms, pricing, or policies.</span>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-amber-200 group-hover:bg-amber-500 shrink-0 transition-colors" />
                      <span>(b) Bind Astro to any promises, warranties, or representations not stated in Astro’s official documentation.</span>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-amber-200 group-hover:bg-amber-500 shrink-0 transition-colors" />
                      <span>(c) Provide technical support for the Astro service itself (you must contact Astro directly).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Your Use of Our Website
                </h2>
              </div>
              <div className="space-y-4 pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  4.1. You agree to use our website only for lawful purposes related to purchasing Astro Services for your personal, non-commercial use.
                </p>
                <p>
                  4.2. You may not resell, redistribute, or commercially exploit any Astro Services obtained through us without the express written consent of both <span className="font-bold text-zinc-900">astro-registration.my</span> and Astro.
                </p>
                <p>
                  4.3. You are responsible for maintaining the confidentiality of any account information you create on our website.
                </p>
                <div className="p-6 border-l-4 border-primary/20 bg-primary/5 rounded-r-3xl mt-6">
                  <p className="text-base">
                    4.4. Your privacy is important to us. Please refer to our separate <a href="/privacy-policy" className="text-primary hover:underline font-bold">Privacy Policy</a> for details on how we collect, use, and protect your personal information when you use this website.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">5</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Intellectual Property and Trademarks
                </h2>
              </div>
              <div className="space-y-4 pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  5.1. “Astro”, the Astro logo, and all related product and service names are trademarks of Astro Malaysia Holdings Berhad.
                </p>
                <p>
                  5.2. Our use of these marks on this website is with permission and strictly for the purpose of identifying and selling genuine Astro products and services.
                </p>
                <p>
                  5.3. You may not use any Astro trademarks or logos on your own website or for any other purpose without prior written approval from Astro.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">6</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Limitation of Liability
                </h2>
              </div>
              <div className="space-y-6 pl-14 text-zinc-600 leading-relaxed text-lg">
                <div>
                  <p className="font-bold text-zinc-900 mb-4">6.1. To the maximum extent permitted by law, astro-registration.my shall not be liable for:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-red-200 group-hover:bg-red-500 shrink-0 transition-colors" />
                      <span>(a) Any failure, interruption, defect, or quality issue related to the Astro Services themselves.</span>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-red-200 group-hover:bg-red-500 shrink-0 transition-colors" />
                      <span>(b) Any acts or omissions of Astro Malaysia Holdings Berhad or its affiliates.</span>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-red-200 group-hover:bg-red-500 shrink-0 transition-colors" />
                      <span>(c) Any indirect, incidental, or consequential loss arising from your use of this website or the Astro Services.</span>
                    </li>
                  </ul>
                </div>
                <p>
                  6.2. Our total liability to you for any claim directly arising from your use of this website (e.g., payment processing errors) is limited to the amount you paid to us for the specific transaction in question.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">7</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Changes to these Terms
                </h2>
              </div>
              <div className="space-y-4 pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  7.1. We may update these Terms from time to time. The latest version will always be posted on this page.
                </p>
                <p>
                  7.2. Your continued use of our website after any changes constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">8</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Governing Law
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  8.1. These Terms shall be governed by and construed in accordance with the laws of <span className="font-bold text-zinc-900">Malaysia</span>.
                </p>
              </div>
            </div>

            {/* Section 9 - Contact Us */}
            <div className="animate-fade-in" style={{ animationDelay: "1.0s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">9</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1 uppercase">
                  Contact Us
                </h2>
              </div>
              
              <div className="pl-14 space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="space-y-1">
                  <p className="text-xl font-bold text-zinc-900 tracking-tight">astro-registration.my</p>
                  <p className="text-zinc-500 font-medium text-base">Authorized Astro Channel Reseller</p>
                  <div className="pt-4">
                    <a 
                      href="https://astro-registration.my" 
                      className="inline-flex items-center gap-2 group/link text-primary hover:text-primary/80 transition-colors duration-300 font-bold"
                    >
                      astro-registration.my
                      <svg className="w-5 h-5 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative transition divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </div>
  );
}
