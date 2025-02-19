"use client";
import { useState, MouseEvent } from "react";
import Image from "next/image";
import { services } from "@/data";

const iconMap = {
    installation: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/installation.svg"} className="w-12 h-12 mb-4 " />,
    modernization: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/modernization.svg"} className="w-12 h-12 mb-4 " />,
    maintenance: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/mechanic.svg"} className="w-12 h-12 mb-4 " />,
    design: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/customization.svg"} className="w-12 h-12 mb-4 " />,
    home: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/elevator.svg"} className="w-12 h-12 mb-4 " />,
    emergency: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/emergency-rescue.svg"} className="w-12 h-12 mb-4 " />,
    consultation: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/consultation.svg"} className="w-12 h-12 mb-4 " />,
  };

const ServicesGrid = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <div className="flex flex-wrap justify-center gap-6">
    {services.map((service, index) => (
      <div
        key={index}
        className="relative border bg-background border-neutral-800 w-[300px] h-[300px] rounded-lg overflow-hidden group"
        onMouseEnter={() => setHoveredItem(index)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {/* Background Media */}
        {hoveredItem === index && (
          <div className="absolute inset-0 w-full h-full transition-all duration-500">
            {service.src.endsWith(".mp4") ? (
              <video
                src={`/videos/${service.src}`}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={`/images/${service.src}`}
                alt={service.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 h-full p-6 flex flex-col justify-center items-center text-center
          ${hoveredItem === index ? 'bg-transparent' : 'bg-background'}
         transition-all duration-500`}>
          {service.icon && iconMap[service.icon as keyof typeof iconMap]}
          <h3 className="text-2xl font-semibold font-display mb-4">{service.title}</h3>
          <p className="text-base ">{service.body}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ServicesGrid
