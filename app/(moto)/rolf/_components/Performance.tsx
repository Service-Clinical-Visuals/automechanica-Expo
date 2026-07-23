"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Performance() {
  const features = [
    "Advanced Engine Protection – Reduces friction and protects critical engine components from wear.",
    "Excellent Thermal Stability – Maintains consistent performance under extreme temperatures.",
    "Superior Engine Cleanliness – Prevents sludge and harmful deposit formation.",
    "Enhanced Fuel Efficiency – Supports smoother operation and reduced fuel consumption.",
    "OEM & International Standards – Meets demanding global quality and performance requirements."
  ];

  const CheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
      <circle cx="12" cy="12" r="12" fill="#FFCD00"/>
      <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="relative w-full py-16 bg-[#171717] bg-[url('/moto/rolf/bg2.png')] bg-cover bg-center overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b border-white/20 pb-8 " data-aos="fade-up">
          <div className="flex flex-col gap-6 xl:w-[65%]">
            <Typography variant="h2" color="white" className="leading-tight">
              Premium Engine Oil Performance
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              ROLF Lubricants GmbH Engine Oils are developed using advanced German technology and premium base oils to deliver outstanding engine protection, maximum efficiency, and long-lasting performance. Designed to meet international and OEM specifications, our lubricants provide reliable protection for passenger cars, commercial vehicles, and heavy-duty equipment.
            </Typography>
          </div>
          <div className="flex-shrink-0 mb-1 xl:mb-2">
            <Button text="View Specifications" href="#" showIcon={true} />
          </div>
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 w-full mt-2">
          <div className="hidden xl:block xl:col-span-2"></div>
          
          {/* Left: Video */}
          <div className="w-full xl:col-span-7 aspect-video rounded-[1rem] overflow-hidden flex items-center justify-center relative bg-transparent" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Right: Key Features */}
          <div className="w-full xl:col-span-3 flex flex-col justify-center" data-aos="fade-left">
            <Typography variant="h2" color="white" className="mb-10">
              Key Features
            </Typography>

            <div className="flex flex-col gap-6 mb-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckIcon />
                  <Typography variant="p" color="white" className="leading-relaxed">
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
