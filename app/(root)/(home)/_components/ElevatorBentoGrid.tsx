"use client";

import { BigDotsBg } from "@/components/Assets/BigDotsBg";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";
import {
    IconBolt,
    IconBrain,
    IconBuildingSkyscraper,
    IconShieldCheck,
} from "@tabler/icons-react";
import Image from "next/image";


const ImageHeader = ({ src }: { src: string }) => (
<div className="relative w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
  <Image
    src={src}
    alt="Elevator"
    fill
    loading="lazy"
    className="object-cover scale-110 hover:scale-100 transition-transform duration-500"
  />
</div>
  );

  const Skeleton = () => (
    <div className="w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

export function ElevatorBentoGrid() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const gridItems = [
  {
    title: "Smart Elevators",
    description: "AI-driven optimization for a smoother experience.",
    header: <ImageHeader src="/images/product/felix.webp" />,
    icon: <IconBrain className="h-6 w-6 text-gold" />,
    className: "md:row-span-2 bg-background", // Vertical image
  },
  {
    title: "Why Choose Us?",
    description: "The best choice for safety, efficiency, and intelligence.",
    header: (
        <div className="size-full relative overflow-hidden">
            <FlipWords
                 words={[
                   "Safest Elevators in India",
                   "Vaastu Compliant",
                   "Energy Efficient",
                   "Assisted by Alexa",
                 ]}
                 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-black font-display capitalize bg-transparent"
            />
            <BigDotsBg/>
        </div>

    ),
    icon: <IconBuildingSkyscraper className="h-6 w-6 text-gold" />,
  },
  {
    title: "Safety First",
    description: "Advanced security features to protect every ride.",
    header: <Skeleton />,
    icon: <IconShieldCheck className="h-6 w-6 text-gold" />,
    className: "md:row-span-2", // Vertical image
  },
  {
    title: "Energy Efficient",
    description: "Eco-friendly elevators reducing power consumption.",
    header: <Skeleton />,
    icon: <IconBolt className="h-6 w-6 text-gold" />,
  },
];
