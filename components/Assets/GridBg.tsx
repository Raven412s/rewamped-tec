import React, { PropsWithChildren } from "react";

export function GridBg({children}:PropsWithChildren) {
  return (
<div className=" w-full dark:bg-background bg-background  dark:bg-grid-gold/[0.2] bg-grid-gold/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
