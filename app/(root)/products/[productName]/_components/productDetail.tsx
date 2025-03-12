"use client";
import Bounded from "@/components/HOC/Bounded";
import { ProductDetailsProps } from "@/types";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BigDotsBg } from "@/components/Assets/BigDotsBg";
import { SmallGridBg } from "@/components/Assets/SmallGridBg";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Skeleton = () => (
  <div className="w-full h-full min-h-[6rem]  bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const ProductDetails: React.FC<ProductDetailsProps> = ({
  heroHeading,
  heroImage,
  carouselImages,
  productDescription,
  productFeatures,
  productMiniHeading,
  productSubHeading,
  productTitle,
  productSpecialFeature,
  sections,
}) => {
  return (
    <>
      <SmallGridBg>
        <div className="relative w-full h-[500px] flex items-center justify-center text-white mt-20">
          {heroImage ? (
            <Image
              src={heroImage}
              alt="Hero"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 z-0 brightness-75"
              priority
            />
          ) : (
            <Skeleton />
          )}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {heroHeading}
          </h1>
        </div>

        <Bounded className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              {carouselImages[0] ? (
                <Image
                  src={carouselImages[0]}
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="rounded-md w-full h-auto object-contain"
                  loading="lazy"
                />
              ) : (
                <Skeleton />
              )}
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gold brightness-150">
                {productTitle} - {productSubHeading}
              </h2>
              <p>{productDescription}</p>
            </div>
          </div>
        </Bounded>

        <Bounded>
          <div className="space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10">
              Features
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                {carouselImages[1] ? (
                  <Image
                    src={carouselImages[1]}
                    alt="Features Image"
                    width={500}
                    height={500}
                    className="rounded-md w-full h-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Skeleton />
                )}
              </div>
              <ul className="w-full md:w-1/2 space-y-2 list-disc list-inside">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </Bounded>

        <Bounded className="!pb-0 !mb-0">
          <h2 className="text-4xl font-bold text-center py-4 text-gold brightness-150">
            Next-Gen Elevators for Ultimate Performance
          </h2>
        </Bounded>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0
                ? "md:flex-row  bg-gray-200/70 text-background border-muted-foreground "
                : "md:flex-row-reverse border-gold/50"
            } items-center gap-8 lg:max-h-[50vh] xl:max-h-[50vh] overflow-hidden px-10 py-10 relative my-10 rounded-xl border-2 mx-4`}
          >
            <div className={`w-full md:w-1/2  items-center relative  md:flex hidden ${index % 2 === 0 ? `justify-center`: `justify-center`}`}>
              {section.image ? (
                <Image
                  src={section.image}
                  alt={`Section ${index + 1}`}
                 width={250}
                 height={600}
                  className="rounded-md  h-auto object-contain"
                  loading="lazy"
                />
              ) : (
                <Skeleton />
              )}
            </div>
            <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
              <h3
                className={`text-2xl font-semibold text-gold  ${
                  index % 2 === 0 ? "brightness-150" : "brightness-150"
                }`}
              >
                {section.subHeading}
              </h3>
              <div className="w-full md:w-1/2 md:hidden block">
                {section.image ? (
                  <Image
                    src={section.image}
                    alt={`Section ${index + 1}`}
                    width={500}
                    height={500}
                    className="rounded-md w-full h-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Skeleton />
                )}
              </div>
              <p>{section.description}</p>
            </div>
            <BigDotsBg />
          </div>
        ))}
      </SmallGridBg>
    </>
  );
};

export default ProductDetails;
