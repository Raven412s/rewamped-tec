'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TemplateProps } from '@/types';

export default function Template({ children }: TemplateProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const logo = logoRef.current;
    const content = contentRef.current;

    if (logo && content) {
      const tl = gsap.timeline();

      tl.fromTo(
        logo,
        { scale: 1, opacity: 1 },
        {
          scale: 1.6, // Heartbeat effect
          duration: 0.8,
          ease: 'easeInOut',
          repeat: 1,
          yoyo: true,
        }
      )
        .to(logo, {
          opacity: 0,
          duration: 1,
          zIndex: -1000,
          onComplete: () => {
            gsap.to(content, {
              opacity: 1,
              duration: 1,
              display: 'block', // Ensure content is visible
            });
          },
        });
    }
  }, []);

  return (
    <div>
      {/* Animated logo overlay */}
      <div
        ref={logoRef}
        className="fixed inset-0 flex items-center justify-center z-[9999] bg-background"
      >
        <div className="w-48 aspect-square">
          <img
            src="/images/the-elevator-company.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main content (hidden initially) */}
      <div ref={contentRef} className="opacity-0 hidden transition-opacity duration-1000">
        {children}
      </div>
    </div>
  );
}
