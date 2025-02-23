import Bounded from '@/components/HOC/Bounded';
import { preferences } from '@/data';
import Image from 'next/image';
import React from 'react'


const Layout = ({
    title,
    description,
    image1,
    image2,
  }: {
    title: string;
    description: string;
    image1: string;
    image2: string;
  }) => {
    return (
      <div className="relative shadow-lg  w-full min-h-[400px] bg-neutral-900/10 backdrop-blur-sm border border-neutral-800  p-6 rounded-lg flex flex-col items-center text-center lg:text-left mt-4 lg:flex-row lg:items-stretch lg:justify-between">
        {/* Image 1 - Top Left */}
        <div className="absolute top-6 left-6">
          <div className="w-32 h-32  sm:w-56 sm:h-52 lg:w-40 lg:h-32 rounded-ss-lg border-4 absolute -left-4 -top-4 lg:-left-6 lg:-top-6 z-0 border-gold shadow-2xl" />
          <div className="w-32 h-32  sm:w-56 sm:h-52 lg:w-40 lg:h-32  bg-slate-300 shadow-2xl flex items-center justify-center z-20 relative overflow-hidden rounded-ee-lg">
            <Image
              src={`/images/${image1}`}
              alt="Product Image 1"
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Title - Top Right */}
        <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl capitalize py-2 text-right bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 absolute top-4 right-4">
          {title}
        </h3>

        {/* Description - Bottom Left */}
        <p className="text-left text-base sm:text-lg lg:text-xl text-gray-300 w-1/2 max-w-1/2 lg:max-w-1/3 lg:max-w-1/3 font-medium leading-relaxed absolute bottom-4 left-4">
          {description}
        </p>

        {/* Image 2 - Bottom Right */}
        <div className="absolute bottom-6 right-6">
        <div className="w-32 h-32  sm:w-56 sm:h-52 lg:w-40 lg:h-32 rounded-ee-lg border-4 absolute -right-4 -bottom-4 lg:-right-6 lg:-bottom-6 z-0 border-gold shadow-2xl" />
          <div className="w-32 h-32  sm:w-56 sm:h-52 lg:w-40 lg:h-32  bg-slate-300 shadow-2xl flex items-center justify-center z-20 relative overflow-hidden rounded-ss-lg">
            <Image
              src={`/images/${image2}`}
              alt="Product Image 2"
              fill
              className="object-cover  rounded-ee-none"
            />
          </div>
        </div>
      </div>
    );
  };

const PreferredStructure = () => {
  return (
    <Bounded className="">
    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase w-full py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 ">Choose Your Preferred Structure</h2>
    <div className="flex flex-col lg:flex-row  w-full gap-6 justify-center">
         {preferences.map((preference, index)=>(
        <Layout
            key={index}
            title={preference.title}
            description={preference.description}
            image1={preference.image1}
            image2={preference.image2}
            />
         ))}
    </div>
  </Bounded>
  )
}

export default PreferredStructure
