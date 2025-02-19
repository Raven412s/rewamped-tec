"use client";
import { umbrellaPoints } from "@/data";
import VerticalSection from "../VerticalSection";


const Safety = () => {
  const SafetyData = umbrellaPoints[1]; // Get only the "Safety and Customizable Solutions" section
  return <VerticalSection {...SafetyData} />;
};

export default Safety;
