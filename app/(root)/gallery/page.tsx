import React from 'react'
import Bounded from '@/components/HOC/Bounded';
import GalleryCarousel from '../about-us/_components/GalleryCarousel';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gallery"
}

export default function GalleryPage ()  {
  return (
    <Bounded>
        <div className="my-4">
        <GalleryCarousel/>
      <p className='text-xs text-muted-foreground text-center uppercase font-display text-black'>
        **This is only a place holder page for the gallery**
      </p>
        </div>
    </Bounded>
  )
}
