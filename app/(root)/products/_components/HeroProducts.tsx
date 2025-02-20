import Bounded from "@/components/HOC/Bounded";
import Link from "next/link";
import React from "react";

const HeroProducts = () => {
  return (
<Bounded>
<div className="text-center py-12 px-4 flex flex-col items-center gap-6">
      <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150">
        Our Range of Products
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
        Discover our premium selection of lifts, designed for both luxury homes and
        commercial establishments. Engineered with cutting-edge technology, they ensure
        seamless mobility, safety, and elegance.
      </p>
      <Link
        href={"#products"}
        className="w-full max-w-[20rem] px-6 py-3 bg-zinc-800 text-gold rounded-lg shadow-md text-lg sm:text-xl"
      >
        Explore Products
      </Link>
    </div>
</Bounded>
  );
};

export default HeroProducts;
