import Line from "@/components/Animated/Line";
import LineContent1 from "@/components/Animated/LineContent1";
import { GridBg } from "@/components/Assets/GridBg";
import CardParallax from "@/components/Custom/CardParalax/CardParalax";
import Bounded from "@/components/HOC/Bounded";
import { umbrellaPoints } from "@/data";
import { Metadata } from "next";
import OurProducts from "../products/_components/OurProducts";
import Hero from "./_components/Hero";
import { ReelsBento } from "./_components/ReelsBento";
import ServicesGrid from "./_components/ServicesGrid";
import { TestimonialBento } from "./_components/TestimonialBento";
import { ElevatorBentoGrid } from "./_components/ElevatorBentoGrid";
import SmoothScroll from "@/components/Custom/SmoothParrallax/page";


export const metadata: Metadata = {
    title: "Home"
}

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
    <OurProducts/>
    <SmoothScroll/>
    <div className="relative">
        <GridBg >
            <Bounded className=" relative min-h-screen w-full  ">
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150">
                Elevators of the Future
                </h1>
                <ReelsBento/>
            </Bounded>
        </GridBg>
    </div>

    <div className="bg-golden-400 py-12 px-8 text-neutral-950">
      <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10">
        Our Presence
      </h2>
      <div className="text-foreground text-center my-4 text-4xl ">
        We are present in 8 states in India
      </div>

    </div>

    <CardParallax/>
    <Bounded className="relative lg:hidden z-20   min-h-screen w-full flex flex-col ">
    <h1
        className=" font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150"
      >
        WHAT MAKES US DIFFERENT
      </h1>
        {
            umbrellaPoints.map((section) => (
                <div key={section.title}>
                  {section.component}
                </div>
              ))
        }
    </Bounded>

    <GridBg>
    <Bounded className=" relative min-h-screen w-full  ">
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150">
        Our Services
        </h1>
        <ServicesGrid/>
    </Bounded>
    </GridBg>
    <Bounded className=" relative min-h-screen w-full  ">
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150">
        Testimonials
        </h1>
        <TestimonialBento/>
    </Bounded>

</>
  );
}
