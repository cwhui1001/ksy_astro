"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface PackCarouselProps {
  images: { src: string; alt: string }[];
  itemsVisibleDesktop?: number;
  objectFit?: "cover" | "contain";
}

const PackCarousel: React.FC<PackCarouselProps> = ({ 
  images, 
  itemsVisibleDesktop = 3,
  objectFit = "cover"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsVisible(window.innerWidth < 1024 ? 1 : itemsVisibleDesktop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsVisibleDesktop]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= images.length - itemsVisible ? 0 : prev + 1));
  }, [images.length, itemsVisible]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? images.length - itemsVisible : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000); // Slightly slower for readability
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative group w-full lg:px-8">
      {/* Container with overflow-hidden - Added padding and negative margins to prevent shadow clipping */}
      <div className="relative overflow-hidden p-12 -m-12">
        <div 
          className="flex transition-transform duration-700 ease-in-out gap-4"
          style={{ 
            transform: `translateX(-${(currentIndex * (100 / itemsVisible))}%)`,
          }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative rounded-[2rem] overflow-hidden shadow-xl border-2 border-white flex-none aspect-square bg-white"
              style={{ 
                width: itemsVisible === 1 
                  ? '100%' 
                  : `calc((100% - ${(itemsVisible - 1) * 16}px) / ${itemsVisible})` 
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={objectFit === "cover" ? "object-cover" : "object-contain p-4"}
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Pagination Dots - adjusted position for new container padding */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {images.slice(0, images.length - (itemsVisible - 1)).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-primary w-8" : "bg-zinc-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile for cleaner look if preferred, but user liked arrows. I'll keep them lg:flex */}
      <button
        onClick={(e) => { e.preventDefault(); prevSlide(); }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-2/3 text-zinc-300 hover:text-primary transition-colors z-10 hidden lg:flex items-center justify-start"
        aria-label="Previous slide"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.preventDefault(); nextSlide(); }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-2/3 text-zinc-300 hover:text-primary transition-colors z-10 hidden lg:flex items-center justify-end"
        aria-label="Next slide"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PackCarousel;
