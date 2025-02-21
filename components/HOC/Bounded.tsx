import { cn } from "@/lib/utils";
import { BoundedProps } from "@/types";
import React from "react";

const Bounded = ({ as: Comp = "section", className, children, ...restProps }: BoundedProps) => {
  return (
    <Comp
      className={cn(
        "px-4 py-12 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:py-24 xl:px-12",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {children}
      </div>
    </Comp>
  );
};

export default Bounded;
