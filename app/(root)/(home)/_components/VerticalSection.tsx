"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FlipWords } from "@/components/ui/flip-words";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  title: string;
  description: string;
  src: string;
  color: string;
  text: string;
  keyUSPs: string[];
}

const VerticalSection = ({ title, description, src, keyUSPs, color, text }: SectionProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: "-10%", // Adjust this for panning effect
        scale: 1.1,
        duration: 5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden"
    style={{
        backgroundColor: color
    }}
    >
      {/* Background Image with Panning Effect */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-pan"
        style={{ backgroundImage: `url(/images/usp/${src})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase">
          {title}
        </h1>
        <FlipWords
          words={keyUSPs}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase mt-4"
        />
        <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VerticalSection;
