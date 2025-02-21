import React from 'react'

export const BigDotsBg = () => {
  return (
<div className="h-full w-full top-0 left-0 dark:-z-30  dark:bg-dot-gold/[0.4] bg-dot-zinc-950/[0.4] absolute flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none dark:bg-background bg-background inset-0 flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
</div>
  )
}
