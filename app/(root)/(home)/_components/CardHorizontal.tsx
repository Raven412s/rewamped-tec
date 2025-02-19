import HorizontalScroll from '@/components/Animated/HorizontalScroll'
import React from 'react'

type Props = {}

const CardHorizontal = (props: Props) => {
  return (
    <div className='relative lg:hidden z-10'>
        <HorizontalScroll/>
    </div>
  )
}

export default CardHorizontal
