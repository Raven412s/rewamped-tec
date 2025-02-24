"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconAi,
    IconBrain,
    IconBuilding
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

export function ReelsBento() {
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
      description: "Intelligent technology for faster, safer, and more efficient elevator rides.",
      header: <ImageHeader src="/images/parrallax/12.jpg"/>,
      icon: <IconBrain className="h-6 w-6 text-gold" />,
      className: "row-span-2 bg-background", // Vertical image
    },
    {
      title: "A.I. Now in Elevators",
      description: "Revolutionizing vertical mobility with artificial intelligence for predictive maintenance and optimized operations.",
      header: <ImageHeader src="/images/imagesforwebsite/12.jpg"/>,
      icon: <IconAi className="h-6 w-6 text-gold" />,
      className: "row-span-2 bg-background", // Vertical image
    },
    {
      title: "Premium Lifts Enhancing Your Interiors",
      description: "A blend of elegance and innovation, designed to complement luxurious spaces.",
      header: <ImageHeader src="/images/parrallax/7.webp"/>,
      icon: <IconBuilding className="h-6 w-6 text-gold" />,
      className: "row-span-2 bg-background", // Vertical image
    },
  ];
