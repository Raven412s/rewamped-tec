import { cn } from "@/lib/utils";
import { BigDotsBg } from "../Assets/BigDotsBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[12rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  dots,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  dots?: boolean;
}) => {
  return (
    // <div
    //   className={cn(
    //     "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-gold/[0.4]  border border-transparent justify-between flex flex-col space-y-4 relative",
    //     className
    //   )}
    // >
    //   {header}
    //   <div className="group-hover/bento:translate-x-2 transition duration-200">
    //     {icon}
    //     <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
    //       {title}
    //     </div>
    //     <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
    //       {description}
    //     </div>
    //   </div>
    //   {dots && <BigDotsBg/>}
    // </div>
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   dark:border-gold/[0.4]  border border-transparent justify-between flex flex-col space-y-2 relative ",
        className
      )}
    >
      <div className="text-3xl flex font-bold tracking-wide size-full items-center  justify-center gap-4 relative border-b border-gold/40 px-10">{icon} <p className="text-xl w-max">{title}</p>
      {dots && <BigDotsBg/>}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 px-4 pb-2 ">
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>

    </div>
  );
};
