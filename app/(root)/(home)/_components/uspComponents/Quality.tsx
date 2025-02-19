"use client";
import { umbrellaPoints } from "@/data";
import VerticalSection from "../VerticalSection";


const Quality = () => {
  const QualityData = umbrellaPoints[4]; // Get only the "Quality and Customizable Solutions" section
  return <VerticalSection {...QualityData} />;
};

export default Quality;
