"use client";

import { BigDotsBg } from "@/components/Assets/BigDotsBg";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";
import { testimonials } from "@/data";
import {
    IconBolt,
    IconBrain,
    IconBuildingSkyscraper,
    IconShieldCheck,
} from "@tabler/icons-react";


const ImageHeader = ({ src }: { src: string }) => (
    <div className="w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
      <img
        src={src}
        alt="Elevator"
        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-500"
      />
    </div>
  );

  const Skeleton = () => (
    <div className="w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

export function TestimonialBento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {testimonials.map((item, i) => (
        <BentoGridItem
          dots
          key={i}
          title={item.title}
          description={item.subtitle}
          icon={item.icon}
          header={item.header}
        //   className={item.className}
        />
      ))}
    </BentoGrid>
  );
}


