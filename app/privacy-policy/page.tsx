import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Astro Packages Malaysia",
  description: "Privacy Policy for astro-registration.my. Learn how we collect, use, and protect your personal data in accordance with PDPA 2010.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Following the premium dark theme of the site */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-[#020617]">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Policy</span>
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
            
            {/* Section 1 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  WHAT IS THIS PRIVACY NOTICE?
                </h2>
              </div>
              <div className="space-y-4 pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  1.1. This Privacy Notice explains how <span className="font-semibold text-zinc-900">astro-registration.my</span> (“We”, “Us”, or “Our”) collects, uses, processes, and protects your Personal Data. This notice is issued pursuant to the Personal Data Protection Act 2010 (“PDPA”), which regulates the processing of Personal Data in commercial transactions in Malaysia.
                </p>
                <p>
                  1.2. This Privacy Notice forms part of and should be read together with our <span className="font-semibold text-zinc-900">Terms and Conditions</span>, which govern your use of this website and purchase of Astro services through us.
                </p>
                <p>
                  1.3. By using our website or submitting your Personal Data, you consent to the collection, use, and disclosure of your Personal Data as described in this Privacy Notice.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  WHAT IS PERSONAL DATA?
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  “Personal Data” refers to any information that relates directly or indirectly to you and which can be used to identify you, whether on its own or when combined with other information in our possession.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  WHO ARE WE?
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  Any reference in this Privacy Notice to “We”, “Us”, or “Our” refers to <a href="https://astro-registration.my/" className="text-primary hover:underline font-bold">astro-registration.my</a>, an authorized reseller of Astro television, Astro One, and Astro channel subscription services in Malaysia. We are not Astro Malaysia Holdings Berhad but act as an independent authorized reseller assisting customers with Astro channel subscriptions.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  WHAT PERSONAL DATA DO WE COLLECT?
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p className="mb-6">The Personal Data we may collect includes, but is not limited to:</p>
                <ul className="grid grid-cols-1 gap-y-4">
                  {[
                    "your name, identification details (NRIC or passport number), nationality, and preferred language;",
                    "your residential or service address;",
                    "telephone or mobile phone number and email address;",
                    "Astro channel or Astro One subscription details;",
                    "billing-related information and payment history (where applicable);",
                    "enquiries, feedback, complaints, or communications with us;",
                    "call recordings for verification, customer support, and quality assurance;",
                    "website usage data, including cookies and browsing activity;",
                    "any other information required for legitimate business purposes or as required by law."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span className="text-zinc-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">5</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  SOURCES OF PERSONAL DATA
                </h2>
              </div>
              <div className="pl-14 space-y-8 text-zinc-600 leading-relaxed text-lg">
                <p>Your Personal Data may be obtained from:</p>
                <ul className="grid grid-cols-1 gap-y-4">
                  {[
                    "forms, enquiries, or applications submitted through our website;",
                    "communications via phone, WhatsApp, email, or social media;",
                    "interactions relating to Astro channel or Astro One subscriptions;",
                    "feedback, complaints, or service requests;",
                    "cookies and similar technologies used on our website;",
                    "Astro, authorized agents, or service providers where permitted by law."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span className="text-zinc-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                  <p className="text-sm md:text-base relative z-10 italic">
                    Cookies help improve your browsing experience. You may disable cookies via your browser settings; however, some website features may be affected. This Privacy Notice applies only to <a href="https://astro-registration.my/" className="text-primary hover:underline font-bold">astro-registration.my</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">6</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  PURPOSE OF COLLECTION & USE
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p className="mb-6">Your Personal Data may be collected, used, and processed for the following purposes (“Purposes”):</p>
                <ul className="grid grid-cols-1 gap-y-4">
                  {[
                    "to verify your identity and eligibility for Astro channel or Astro One subscriptions;",
                    "to process and manage Astro channel subscription applications;",
                    "to contact you regarding activation, billing, promotions, or customer support;",
                    "to respond to enquiries, feedback, or complaints;",
                    "for internal administration, record keeping, and service improvement;",
                    "to comply with legal, regulatory, audit, or reporting requirements;",
                    "for any other purpose directly related to the above or which you have consented to."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span className="text-zinc-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">7</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  DISCLOSURE TO THIRD PARTIES
                </h2>
              </div>
              <div className="pl-14 space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>Your Personal Data may be disclosed to:</p>
                <ul className="grid grid-cols-1 gap-y-4">
                  {[
                    "Astro and its related companies for processing and activation of Astro channel or Astro One subscriptions;",
                    "authorized agents, contractors, or service providers assisting in service delivery;",
                    "payment processors, verification providers, or IT service providers;",
                    "government authorities, regulators, or law enforcement agencies where required by law."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span className="text-zinc-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 border-l-4 border-primary/20 bg-primary/5 rounded-r-xl">
                  <p className="text-sm italic">
                    Where necessary, your Personal Data may be transferred outside Malaysia subject to appropriate safeguards under the PDPA.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">8</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  DATA SECURITY & RETENTION
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  We take reasonable technical and organizational measures to protect your Personal Data from unauthorized access, loss, misuse, alteration, or disclosure. Your Personal Data will be retained only for as long as necessary to fulfil the stated Purposes or as required by law, after which it will be securely deleted or anonymized.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">9</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  YOUR RESPONSIBILITIES
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  You are responsible for ensuring that all Personal Data provided is accurate, complete, and up to date. If you provide Personal Data of another person, you confirm that you have obtained their consent. If you are below 18 years old, consent must be obtained from a parent or legal guardian.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="animate-fade-in" style={{ animationDelay: "1.0s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">10</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  YOUR RIGHTS UNDER THE PDPA
                </h2>
              </div>
              <div className="pl-14 space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>You have the right to:</p>
                <ul className="grid grid-cols-1 gap-y-4">
                  {[
                    "request access to your Personal Data;",
                    "request correction of inaccurate or outdated Personal Data;",
                    "withdraw consent to processing, subject to legal or contractual restrictions;",
                    "object to processing for direct marketing purposes."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary shrink-0 transition-colors" />
                      <span className="text-zinc-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <p>
                    Requests must be made in writing and may require identity verification. We reserve the right to refuse or charge a reasonable fee for requests where permitted by law.
                  </p>
                  <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 border-l-4 border-l-amber-400">
                    <p className="text-sm md:text-base text-amber-900 font-medium">
                      Please note that withdrawal of consent may affect our ability to fulfil your subscription or service request, and certain data must be retained to comply with our contractual obligations to Astro or legal requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div className="animate-fade-in" style={{ animationDelay: "1.1s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">11</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  UPDATES TO THIS PRIVACY NOTICE
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  We reserve the right to amend this Privacy Notice from time to time. Continued use of this website or submission of Personal Data constitutes acceptance of the updated Privacy Notice.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="animate-fade-in" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">12</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  GOVERNING LAW
                </h2>
              </div>
              <div className="pl-14 text-zinc-600 leading-relaxed text-lg">
                <p>
                  This Privacy Notice shall be governed by and construed in accordance with the laws of Malaysia, including the Personal Data Protection Act 2010.
                </p>
              </div>
            </div>

            {/* Section 13 */}
            <div className="animate-fade-in" style={{ animationDelay: "1.3s" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary text-base font-bold border border-primary/10">13</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight pt-1">
                  CONTACT US
                </h2>
              </div>
              
              <div className="pl-14 space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                  For any enquiries, complaints, or requests relating to your Personal Data, please contact:
                </p>
                <div className="space-y-1">
                  <p className="text-xl font-bold text-zinc-900 tracking-tight">astro-registration.my</p>
                  <p className="text-zinc-500 font-medium text-base">Authorized Astro Channel & Astro One Reseller</p>
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
