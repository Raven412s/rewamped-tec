"use client";

import { BentoGrid, BentoGridItem } from "@/components/Custom/bento-grid";
import { testimonials } from "@/data";

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
        //   className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
