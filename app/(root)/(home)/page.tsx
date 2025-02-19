import Line from "@/components/Animated/Line";
import LineContent1 from "@/components/Animated/LineContent1";
import { GridBg } from "@/components/Assets/GridBg";
import CardParallax from "@/components/Custom/CardParalax/CardParalax";
import SmoothScroll from "@/components/Custom/SmoothParrallax/page";
import Bounded from "@/components/HOC/Bounded";
import CardHorizontal from "./_components/CardHorizontal";
import { ElevatorBentoGrid } from "./_components/ElevatorBentoGrid";
import Hero from "./_components/Hero";
import { ReelsBento } from "./_components/ReelsBento";
import ServicesGrid from "./_components/ServicesGrid";
import Innovative from "./_components/uspComponents/Innovative";
import { umbrellaPoints } from "@/data";
import { TestimonialBento } from "./_components/TestimonialBento";

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
    <Bounded className="relative lg:hidden z-20   min-h-screen w-full flex flex-col ">
    <h1
        className=" font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold/90 to-neutral-900/70"
      >
        WHAT MAKES US DIFFERENT
      </h1>
        {
            umbrellaPoints.map((section,index)=>(
                <div key={index} >
                    {section.component}
                </div>
            ))
        }
    </Bounded>

    <GridBg>
    <Bounded className=" relative min-h-screen w-full  ">
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold/90 to-neutral-900/70">
        Our Services
        </h1>
        <ServicesGrid/>
    </Bounded>
    </GridBg>
    <Bounded className=" relative min-h-screen w-full  ">
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold/90 to-neutral-900/70">
        Testimonials
        </h1>
        <TestimonialBento/>
    </Bounded>

</>
  );
}
