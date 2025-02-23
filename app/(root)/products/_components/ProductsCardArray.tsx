import { ProductCard } from '@/components/Custom/ProductCard'
import Bounded from '@/components/HOC/Bounded'
import { Separator } from '@/components/ui/separator'
import { commercialLifts, luxuryHomeLifts } from '@/data'
import React from 'react'

const ProductsCardArray = () => {
  return (
    <>
    <Bounded id='luxury-home-lifts'>
    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 mb-8">
    Luxury Home Lifts
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:justify-start gap-8 place-items-center '>
        {luxuryHomeLifts.map((lift, index)=>(
            <ProductCard
                key={index}
                title={lift.name}
                description={lift.description}
                imageUrl={lift.image}
                moreInfo={lift.moreInfo}
                type={lift.type}
            />
        ))}
    </div>
    </Bounded>
    <br />
    <br />
    <br />
    <Separator/>
    <br />
    <br />
    <br />
    <Bounded id='commercial-lifts'>
    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 mb-8">
    Commercial Lifts
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:justify-start gap-8 place-items-center '>
        {commercialLifts.map((lift, index)=>(
            <ProductCard
                key={index}
                title={lift.name}
                description={lift.description}
                imageUrl={lift.image}
                moreInfo={lift.moreInfo}
                type={lift.type}
            />
        ))}
    </div>
    </Bounded>
    </>
  )
}

export default ProductsCardArray
