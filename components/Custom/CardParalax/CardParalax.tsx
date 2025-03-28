'use client';
import { umbrellaPoints } from '@/data/index';
import Card from '@/components/Animated/Card/index';
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usp } from '@/types';

export default function CardParallax() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Transform opacity from 1 to 0 as scrolling progresses
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="pt-20 hidden lg:block">
      {/* Animate the opacity of the heading */}
      <motion.h1
        style={{ opacity }}
        className="sticky top-16 font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150"
      >
        WHAT MAKES US DIFFERENT
      </motion.h1>

      <div ref={container} className="pt-[15rem] sticky top-[25%] flex flex-col w-full items-center">
        {umbrellaPoints.map((usp: usp, i: number) => {
          const targetScale = 1 - (umbrellaPoints.length - i) * 0.01;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={usp.link}
              title={usp.title}
              description={usp.description}
              src={usp.src}
              color={usp.color}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              textColor={usp.text}
              keyUsp={usp.keyUSPs}
            />
          );
        })}
      </div>
    </div>
  );
}
