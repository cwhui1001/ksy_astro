"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Why choose Astro One?",
    answer: "Our customers deserve the best streaming entertainment experience with us and the new Astro One Packs make that possible. From just RM49.99, these new packs make it easy, flexible and accessible for all Malaysians to stream the content they love on one platform, with up-to 4 concurrencies on Astro GO. Customers can easily make changes to their subscriptions via the My Astro app, including updates to their packs, choosing from over 11 streaming apps, or switching to different ones, as and when they like."
  },
  {
    question: "How do i subscribe to Astro One?",
    answer: (
      <>
        Simply fill out the form will do. We will contact you to verify your details and process your application. Prefer to talk to us directly? You can contact us on{" "}
        <a 
          href="https://api.whatsapp.com/send?phone=60146833321&text=Hi%20Astro%2C%20I%20would%20like%20to%20know%20more%20about%20Astro%20One%20Packages" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary font-bold hover:underline"
        >
          WhatsApp
        </a>{" "}
        instead.
      </>
    )
  },
  {
    question: "Do I need to pay for the Ultra/Ulti Box to subscribe to Astro One packs?",
    answer: "No. The Ultra/Ulti Box is provided for free. It’s recommended to access apps, add-ons, and On Demand content."
  },
  {
    question: "How many concurrent stream will i get with Astro GO on the new packs?",
    answer: "You can enjoy up to 2 concurrent streams on Astro GO with the Entertainment and Sports Packs, and up to 4 concurrencies with the Epic Pack."
  },
  {
    question: "Will Astro streaming be affected by bad weather or rain?",
    answer: "Not at all! Your streaming experience will be smooth and uninterrupted. Since you can opt for connection through Fibre WiFi, it is not affected by weather conditions like rain or storms."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-accent/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Your questions, answered. We've got you covered.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group border border-white/20 bg-white backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-bold text-foreground pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 relative w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-[#E72E3D] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className={`absolute w-4 h-0.5 bg-white transition-opacity duration-300 ${activeIndex === index ? "opacity-0" : "opacity-100"}`} style={{ transform: "rotate(90deg)" }} />
                  <div className="w-4 h-0.5 bg-white" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-lg text-muted-foreground leading-relaxed border-t border-muted/20">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
