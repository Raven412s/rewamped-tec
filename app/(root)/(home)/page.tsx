import Bounded from "@/components/HOC/Bounded";
import Hero from "./_components/Hero";
import { ElevatorBentoGrid } from "./_components/ElevatorBentoGrid";
import Line from "@/components/Animated/Line";
import LineContent1 from "@/components/Animated/LineContent1";
import SmoothScroll from "@/components/Custom/SmoothParrallax/page";
import PanImage from "./_components/PanImage";
import { ReelsBento } from "./_components/ReelsBento";
import { GridBg } from "@/components/Assets/GridBg";
import CardParallax from "@/components/Custom/CardParalax/CardParalax";
import CardHorizontal from "./_components/CardHorizontal";

export default function Home() {
  return (
<>
    <Hero/>
    <Bounded>
        <ElevatorBentoGrid/>
    </Bounded>
    <Line gap='my-2' />
     <LineContent1/>
    <Line gap='my-2' />
    <SmoothScroll/>
    <div className="relative">
        <GridBg >
            <Bounded className=" relative min-h-screen w-full  ">
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold/90 to-neutral-900/70">
                Elevators of the Future
                </h1>
                <ReelsBento/>
            </Bounded>
        </GridBg>
    </div>
    <CardParallax/>
    <Bounded className="relative size-full">
    <CardHorizontal/>
    </Bounded>

</>
  );
}
