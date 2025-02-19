"use client";
import { umbrellaPoints } from "@/data";
import VerticalSection from "../VerticalSection";


const Technology = () => {
  const TechnologyData = umbrellaPoints[2]; // Get only the "Technology and Customizable Solutions" section
  return <VerticalSection {...TechnologyData} />;
};

export default Technology;
