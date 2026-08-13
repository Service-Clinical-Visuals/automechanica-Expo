"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Journey() {
  return (
    <section className="relative w-full py-16  bg-[#171717] overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col items-center gap-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto gap-4" data-aos="fade-up">
          <Typography variant="h2" color="white" className="leading-tight">
            Engineered For Every Journey
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[80%] ">
            At ROLF Lubricants GmbH, every engine oil is formulated to provide outstanding durability, reliable lubrication, and superior engine protection. Combining innovative lubricant technology with rigorous quality control, our products ensure consistent performance, extended oil life, and dependable operation across a wide range of vehicles and operating environments.
          </Typography>
        </div>

        {/* Video Block */}
        <div className="w-full xl:max-w-[70%] aspect-[16/9] rounded-[1rem] overflow-hidden flex items-center justify-center relative bg-[#232323]" data-aos="fade-up" data-aos-delay="100">
           <DynamicVideoPlayer type="short-2" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
