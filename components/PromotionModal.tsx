"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { triggerConversion } from "@/lib/gtag";

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show on the homepage
    if (pathname !== "/") return;

    // Optional: Only show once per session
    const hasBeenShown = sessionStorage.getItem("promotion_modal_shown");
    if (hasBeenShown) return;

    // Show modal after a short delay when landing on the site
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("promotion_modal_shown", "true");
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen || pathname !== "/") return null;

  const WHATSAPP_NUMBER = "60179978841";
  const MESSAGE = "Hi Astro, I am interested in the latest promotion and info!";
  const waLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-backdrop" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl animate-modal-content flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 pt-10 text-center">
          {/* Icon/Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 text-primary">
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" 
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-zinc-900 mb-2">
            Exclusive Promo Awaits!
          </h3>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Don&apos;t miss out on our latest Astro packages and limited-time offers. Get instant information and assistance via WhatsApp!
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerConversion()}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-200 active:scale-95"
          >
            <svg 
              className="w-6 h-6 fill-white" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp us for Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;