"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function IgnitionSolutions() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#27292A] overflow-hidden" id="ignition">
      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Header Block: Centered Title & Description */}
        <div className="flex flex-col items-center text-center mx-auto max-w-6xl gap-3 md:gap-4 mb-8 lg:mb-12" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight">
            Precision Engine Components
          </Typography>
          <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-xs sm:text-sm md:text-base mt-2">
            Vitobello Ricambi S.r.l. offers a premium range of camshafts, cylinder heads, valves, and tappets engineered to restore engine efficiency, reliability, and long-term performance. Manufactured to strict quality standards, our components ensure precise fitment and dependable operation for passenger and light commercial vehicles, delivering outstanding durability, consistent performance, and trusted OEM-quality solutions.
          </Typography>
        </div>

        {/* Video Player Container */}
        <div 
          className="w-full aspect-video xl:max-w-[80%] rounded-sm overflow-hidden shadow-2xl relative bg-[#111] border border-white/10" 
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
