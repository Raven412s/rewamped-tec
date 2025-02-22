import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BackgroundBeams } from "@/components/ui/background-beams";
import QuotationDrawer from "@/components/Custom/QuotationDrawer";
import Bounded from "@/components/HOC/Bounded";
import { Metadata } from "next";
import GalleryCarousel from "./_components/GalleryCarousel";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About"
}

const AboutPage = () => {


  const whyUs = [
    "Prompt Delivery & Installation",
    "Energy & Space-Efficient Solutions",
    "Fully Customizable Range",
    "Made in Custom Sizes",
    "Engineered in Germany & Made in Italy",
    "High-Quality & Durable Materials",
    "Eco-Friendly & Sustainable Manufacturing",
    "Comprehensive After-Sales Support",
  ];

  return (
    <div className="flex flex-col gap-20  text-white overflow-hidden">
    {/* Hero Section */}
    <div
      className="relative bg-zinc-900  h-[80vh] flex items-center justify-center bg-cover bg-center before:w-full before:h-full before:content-[''] before:bg-[rgba(125,125,125,0.3)] before:absolute before:z-10"
      style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
    >
      <div className="text-center z-20">
        <h1 className="text-4xl font-bold">About The Elevator Company</h1>
        <p className="mt-4 text-lg">Rising Above, Safely and Swiftly</p>
        <br />
        <QuotationDrawer triggerText="Contact" />
      </div>
    </div>

    {/* Who Are We */}
    <Bounded id="our-story">
      <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10">
        Who Are We?
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center border-4  rounded-2xl shadow-behind shadow-2xl  border-neutral-800 bg-neutral-900">
        <div
          className="md:w-3/5 bg-neutral-900 py-[29.5px] rounded-l-xl mx-auto px-7"
        >
          <p className="text-lg space-y-4">
          <span>The Elevator Company has established itself as a leading name in the luxury elevator market. With over 23 years of industry experience, our team combines seasoned expertise with the fresh perspective of a dynamic, young workforce. We are dedicated to elegance and innovation, leading to our prestigious partnership with a renowned Italian brand. This Indo-Italian collaboration blends Italian design and engineering excellence, delivering state-of-the-art elevator technology alongside bespoke, sophisticated designs.</span>

            <span className="hidden md:block">Our commitment to quality and customer satisfaction has been recognized through numerous industry awards and certifications. We have successfully completed projects in various sectors, including residential, commercial, and hospitality, consistently exceeding client expectations. Our elevators are known for their reliability, safety features, and aesthetic appeal, making them a preferred choice for luxury developments.</span>

            <span className="hidden lg:block"> Looking ahead, we are focused on integrating sustainable practices into our operations, aiming to reduce our carbon footprint and contribute to environmental conservation. We are also exploring advancements in smart elevator technology to enhance user experience and operational efficiency. Our vision is to continue leading the industry by combining tradition with innovation, ensuring that our elevators not only meet but set new standards in luxury and functionality.</span>
          </p>
        </div>
        <div className="w-full md:w-2/5 relative h-[400px] rounded-t-xl md:rounded-r-xl shadow-lg overflow-hidden ">
            <Image
              src="/images/parrallax/9.webp"
              alt="Elevator Product"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
      </div>
    </Bounded>

    {/* Testimonials (Awards) */}
    <div className="bg-golden-400 py-12 px-8 text-neutral-950">
      <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10">
        Our Achievements
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
  {[
    { title: "23+ Years", subtitle: "of Experience" },
    { title: "13,000+", subtitle: "Elevators Installed" },
    { title: "25,000+", subtitle: "Services Catered" },
    { title: "14000+", subtitle: "Happy Clients" },
  ].map((item, index) => (
    <div key={index} className="p-6 shadow-md rounded-lg w-60 text-center bg-gradient-to-br from-zinc-800 to-slate-900">
      <h4 className="text-2xl font-bold text-foreground">{item.title}</h4>
      <p className="mt-2 text-foreground">{item.subtitle}</p>
    </div>
  ))}
</div>

    </div>

    {/* Timeline */}
    <div className="text-center px-8">
      <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10">
        How It All Began: A Brief Timeline
      </h2>
      <div className="mt-6 border-l-4 border-blue-500 pl-6 space-y-4">
        <p className="text-xl"><strong>2000</strong> - Company Founded</p>
        <p className="text-xl"><strong>2005</strong> - First Product Launched</p>
        <p className="text-xl"><strong>2010</strong> - Partnered with Global Brands</p>
        <p className="text-xl"><strong>2020</strong> - Introduced Smart Elevators</p>
      </div>
    </div>

    {/* Why Us */}
    <Bounded>
      <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10">
        Why The Elevator Company?
      </h2>
      <div className="px-8 w-full flex flex-col md:flex-row items-center justify-center mx-auto gap-8">
      <div className="w-1/3 relative h-[350px]">
            <Image
              src="/images/parrallax/6.webp"
              alt="Why Us"
              fill
              className="rounded-xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        <div className="md:w-1/2 space-y-4 flex flex-col items-center">
          {whyUs.map((item, index) => (
            <div key={index} className="flex items-center gap-3 w-4/5 bg-golden-400 p-4 rounded-r-lg">
              <FaCheckCircle />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Bounded>

          <GalleryCarousel/>
      <BackgroundBeams className="bg-zinc-900" />
    </div>

  );
};

export default AboutPage;
