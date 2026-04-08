"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ChannelModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  packName: string;
}

const ChannelModal: React.FC<ChannelModalProps> = ({ isOpen, onClose, imageSrc, packName }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-modal-backdrop" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-modal-content flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/10 hover:bg-black/20 hover:scale-110 active:scale-95 backdrop-blur-md transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Content - Scrollable */}
        <div className="flex-1 overflow-auto bg-white">
          <div className="relative w-full">
            <Image
              src={imageSrc}
              alt={`${packName} Channel List`}
              width={2560}
              height={1810}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelModal;
