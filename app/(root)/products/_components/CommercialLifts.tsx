import Bounded from '@/components/HOC/Bounded'
import Image from 'next/image'
import React from 'react'

const CommercialLifts = () => {
  return (
    <Bounded>
         <div className="pt-2 flex justify-center">
        <div className="p-6 bg-neutral-900 border border-neutral-800 w-full max-w-4xl relative rounded-lg shadow-2xl shadow-behind">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150">
            Commercial Lifts
          </h2>
          <div className="flex flex-col md:flex-row gap-4 p-5">
            <div className="relative w-full md:w-1/2 aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/commercial/elivio.webp"
                alt="Elivio"
                fill
                style={{ objectFit: "cover" }}
                className="animate-pan"
              />
            </div>
            <div className="relative w-full md:w-1/2 aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/commercial/eleventra.webp"
                alt="Eleventra"
                fill
                style={{ objectFit: "cover" }}
                className="animate-pan"
              />
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center sm:text-left">
              Our state-of-the-art commercial lifts offer seamless vertical mobility, perfect for office buildings or hotels. Combining
              cutting-edge technology with sleek design, they ensure fast, smooth, and safe transportation for people and goods.
            </p>
            <br />
            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center sm:text-left">
              Commercial lifts provide fast, reliable service and advanced safety features, ideal for high-traffic and heavy-load environments.
              Enhance accessibility and efficiency seamlessly within business settings.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  )
}

export default CommercialLifts
