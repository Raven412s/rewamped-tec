import React from "react";
import AnimatedText from "@/components/Animated/AnimatedText";
import Link from "next/link";

const LineContent1 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-3 justify-between px-6 md:px-10 py-8 md:py-16">
      {/* Heading Section */}
      <h3 className="text-3xl md:text-5xl lg:text-7xl mx-4 md:mx-8 font-semibold max-w-full md:max-w-[350px] text-center md:text-left">
        <AnimatedText className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase" phrase={"WHAT WE CREATE"} />
      </h3>
      {/* Arrow Icon */}
      <div className="hidden md:flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-start w-full md:w-3/5 relative z-50">
        {/* Luxury Home Lifts */}
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end mb-4 md:mb-6">
        <Link href={"/products#luxury-home-lifts"} >
          <p className="text-lg sm:text-2xl mt-2">Luxury Home Lifts</p>
        </Link>
          <div className="hidden sm:block w-[1px] h-8 bg-gray-400 ml-5" />
          <p className="text-sm sm:text-xl align-baseline mt-2 sm:mt-0 sm:ml-6">
            <Link href="/products/Felix">FELIX</Link>, <Link href="/products/Felix-2.0">FELIX 2.0</Link>, <Link href="/products/climber-x">CLIMBER X</Link>, <Link href="/products/pneumatic-elevator">PNEUMATIC VACUUM</Link>.
          </p>
        </div>
        {/* Commercial Lifts */}
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end">
        <Link href="/products#commercial-lifts">
          <p className="text-lg sm:text-2xl mt-2">Commercial Lifts</p>
        </Link>
          <div className="hidden sm:block w-[1px] h-8 bg-gray-400 ml-5 sm:ml-[33px]" />
          <p className="text-sm sm:text-xl align-baseline mt-2 sm:mt-0 sm:ml-6">
            <Link href="/products/Elivio">ELIVIO</Link>, <Link href="/products/Elivio-2.0">ELIVIO 2.0</Link>, <Link href="/products/Eleventra">ELEVENTRA</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineContent1;
