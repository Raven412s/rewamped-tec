'use client';

import {QuotationDrawer} from '@/components/Custom/QuotationDrawer';
import { slides } from '@/data';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slides every 5 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen mt-20 overflow-hidden">
      {/* Background Images with Panning Animation */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
          }`}
        >
          <div className="relative w-full h-full overflow-hidden rounded-xl">
  <Image
    src={slide.image}
    alt={slide.title}
    fill
    className={`object-cover rounded-xl transition-all ease-linear ${
      index === currentSlide ? "animate-pan" : ""
    }`}
    priority
  />
</div>

        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-black/50 z-20 rounded-xl space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white animate-fade">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-2 sm:mt-4 text-base font-body sm:text-lg md:text-xl lg:text-2xl text-gray-300 animate-fade">
          {slides[currentSlide].subtitle}
        </p>
        <QuotationDrawer/>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 border-2 border-white ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
