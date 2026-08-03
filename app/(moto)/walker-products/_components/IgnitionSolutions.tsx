"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function IgnitionSolutions() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="ignition">
      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Header Block: Centered Title & Description */}
        <div className="flex flex-col items-center text-center mx-auto max-w-6xl gap-3 md:gap-4 mb-8 lg:mb-12" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight">
            Complete Ignition Solutions
          </Typography>
          <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-xs sm:text-sm md:text-base">
            From daily commuting to demanding driving conditions, Walker Products, Inc. offers a comprehensive range of ignition coils designed to support optimal engine performance. Our products combine precision engineering, dependable quality, broad vehicle coverage, and exceptional reliability for every driving experience to meet the needs of the global automotive aftermarket.
          </Typography>
        </div>

        {/* Video Player Container */}
        <div 
          className="w-full aspect-video xl:max-w-[80%] rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#111] border border-white/10" 
          data-aos="zoom-in" 
          data-aos-delay="200"
        >
          <DynamicVideoPlayer 
            type="short-1" 
            className="absolute top-0 left-0 w-full h-full object-cover" 
          />
        </div>

      </div>
    </section>
  );
}
