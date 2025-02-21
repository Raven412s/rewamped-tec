"use client"
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const GalleryCarousel = () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024, // For tablets and smaller
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640, // For mobile devices
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <div>
              {/* Gallery */}
      <div className="px-8">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize py-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 pb-10">
          Gallery
        </h2>
        <Slider {...carouselSettings}>
          {["images/parrallax/2.jpg", "images/parrallax/3.jpg", "images/parrallax/4.jpg", "images/parrallax/5.jpg", "images/parrallax/6.jpg", "images/parrallax/13.jpg"].map((slide, index) => (
            <div key={index} className="px-8">
              <div className="aspect-[9/10] relative">
                <img
                  src={`/${slide}`}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default GalleryCarousel
