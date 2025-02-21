"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, FC } from "react";
import { CardProps } from "@/types";
import Link from "next/link";

const Card: FC<CardProps> = ({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
  keyUsp,
  textColor,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[calc(110vh+10rem)] flex items-center justify-center sticky -top-36 px-4">
      <motion.div
        id="dev"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(0vh + ${i * 4}rem)`,
          color: textColor,
          boxShadow: `${color} 0px 30px 400px`,
        }}
        className="flex flex-col lg:flex-row relative h-auto lg:h-[400px] rounded-lg p-6 xl:p-10 xl:max-w-[1600px] lg:max-w-[1100px] w-full shadow-lg overflow-hidden"
      >
        {/* Left Section: Text Content */}
        <div className="flex flex-col flex-1 gap-3 lg:gap-4">
          <h2 className="font-black tracking-wide text-left text-2xl lg:text-3xl">{title}</h2>
          <ul className="list-disc pl-5 space-y-1 text-lg lg:text-xl !grid-cols-2">
            {keyUsp.map((usp, index) => (
              <li key={index} className="w-max col-span-1">{usp}</li>
            ))}
          </ul>
            <p className=" lg:text-lg">{description}</p>
        </div>

        {/* Right Section: Image */}
        <div className="relative flex justify-center items-center w-full lg:w-1/5 lg:ml-10 h-[250px] lg:h-[250px] xl:h-[400px]">
          <motion.div className="relative w-full h-full" style={{ scale: imageScale }}>
            <Image
              height={400}
              width={450}
              src={`/images/usp/${src}`}
              alt="image"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
