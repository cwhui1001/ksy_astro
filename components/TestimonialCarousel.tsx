"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    content: "Finally, a package with all the sports I need. No complaints!",
    name: "Mr.Kumar, Kuala Lumpur",
    pack: "(Sports Pack)"
  },
  {
    content: "I haven’t had any issue at all. Paying each month is super easy and #TeamAstro is always helpful.",
    name: "Mr.Khoo, Melaka",
    pack: "(Entertainment Pack)"
  },
  {
    content: "Best value for money. So many channels at an affordable price.",
    name: "Miss Anis, Selangor",
    pack: "(Epic Pack)"
  }
];

const sideImages = [
  { src: "https://astropackages.com.my/wp-content/uploads/2026/02/1.webp", alt: "Astro Package 1" },
  { src: "https://astropackages.com.my/wp-content/uploads/2026/02/2.webp", alt: "Astro Package 2" }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const nextImg = useCallback(() => {
    setImgIndex((prev) => (prev + 1) % sideImages.length);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(nextSlide, 5000);
    const imgTimer = setInterval(nextImg, 4000);
    return () => {
      clearInterval(testimonialTimer);
      clearInterval(imgTimer);
    };
  }, [nextSlide, nextImg]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Testimonial Side */}
            <div className="space-y-8">
              <div className="text-white">
                <svg className="w-16 h-16 opacity-40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H17.017C16.4647 18 16.017 18.4477 16.017 19V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 16.6569 9.67386 18 8.017 18H6.017C5.46472 18 5.017 18.4477 5.017 19V21H3.017Z" />
                </svg>
              </div>

              <div className="relative h-64 md:h-56">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 transform ${
                      index === currentIndex 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-12 pointer-events-none"
                    }`}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {testimonial.content}
                    </p>
                    <div className="mt-8">
                      <p className="text-xl font-black text-white">{testimonial.name}</p>
                      <p className="text-white/80 font-bold">{testimonial.pack}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Dots */}
              <div className="flex gap-2 pt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "bg-white w-12" : "bg-white/30 w-3 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Image Slider Side */}
            <div className="relative">
              <div className="relative h-[350px] md:h-[450px] w-full bg-[#0a0a0b] rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center p-8 md:p-12">
                {sideImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center p-8 md:p-12 ${
                      index === imgIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain drop-shadow-[0_20px_50px_rgba(255,0,144,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
