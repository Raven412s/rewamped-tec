import Bounded from '@/components/HOC/Bounded';
import Image from 'next/image';
import React from 'react';

const LuxuryHomeLifts = () => {
  return (
    <Bounded>
      <div className="pt-2 flex justify-center">
        <div className="p-6 bg-neutral-900 border border-neutral-800 w-full max-w-4xl relative rounded-lg shadow-2xl shadow-behind">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150">
            Luxury Home Lifts
          </h2>
          <div className="flex flex-col md:flex-row gap-4 p-5">
            <div className="relative w-full md:w-1/2 aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/luxury/felix.webp"
                alt="Felix"
                fill
                style={{ objectFit: "cover" }}
                className="animate-pan"
              />
            </div>
            <div className="relative w-full md:w-1/2 aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/luxury/climberx.png"
                alt="Climber X"
                fill
                style={{ objectFit: "cover" }}
                className="animate-pan"
              />
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center sm:text-left">
              Introducing our luxury home elevator, designed to seamlessly integrate into your existing residence with minimal civil changes.
              Adhering to stringent European safety standards, this elevator offers effortless installation for both indoor and outdoor settings.
            </p>
            <br />
            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center sm:text-left">
              Its sleek, sophisticated design enhances the aesthetic appeal of your home, adding an element of grandeur and architectural elegance.
              Elevate your living space with a product that combines luxury, safety, and seamless integration.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default LuxuryHomeLifts;
