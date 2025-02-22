"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
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
          header={item.header}
        //   className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
