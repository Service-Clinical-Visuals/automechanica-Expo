"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Precision() {
  return (
    <section className="relative w-full py-10 bg-[#232323] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/moto/et-engine/bg.png" alt="Background pattern" className="w-full h-full object-cover" />
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center  mx-auto mb-10 lg:mb-16" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight mb-4">
            Precision Engine Components
          </Typography>
          <Typography variant="p" color="white" className="xl:max-w-[70%] leading-relaxed">
            ET ENGINETEAM delivers a premium range of precision-engineered engine components designed to ensure maximum performance, durability, and reliability. From camshaft, cylinder heads to valves and tappets, every product is manufactured to meet strict quality standards for modern passenger and commercial vehicles.
          </Typography>
        </div>

        {/* 360 Video Player */}
        <div className="w-full aspect-video xl:max-w-[80%]  rounded-[2rem] overflow-hidden shadow-2xl relative bg-gray-100" data-aos="zoom-in" data-aos-delay="200">
           <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
