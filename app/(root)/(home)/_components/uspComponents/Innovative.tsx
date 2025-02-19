"use client";
import { umbrellaPoints } from "@/data";
import VerticalSection from "../VerticalSection";


const Innovative = () => {
  const innovativeData = umbrellaPoints[0]; // Get only the "Innovative and Customizable Solutions" section
  return <VerticalSection {...innovativeData} />;
};

export default Innovative;
