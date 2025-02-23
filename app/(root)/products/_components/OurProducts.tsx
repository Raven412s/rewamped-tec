import { ProductCard } from '@/components/Custom/ProductCard'
import Bounded from '@/components/HOC/Bounded'
import { dataProductCard } from '@/data'
import React from 'react'

const OurProducts = () => {
  return (
    <Bounded>
        <h1 className='font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10'>our products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:justify-start gap-8 place-items-center ">
            {dataProductCard.map((product,index)=>(
                <ProductCard
                    key={index}
                    title={product.title}
                    type={product.type!}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    moreInfo={product.moreInfo}
                />
            ))}
        </div>
    </Bounded>
  )
}

export default OurProducts
