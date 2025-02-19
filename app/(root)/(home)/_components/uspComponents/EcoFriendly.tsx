"use client";
import { umbrellaPoints } from "@/data";
import VerticalSection from "../VerticalSection";


const EcoFriendly = () => {
  const EcoFriendlyData = umbrellaPoints[3]; // Get only the "EcoFriendly and Customizable Solutions" section
  return <VerticalSection {...EcoFriendlyData} />;
};

export default EcoFriendly;
