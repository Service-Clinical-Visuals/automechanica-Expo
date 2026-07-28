"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Performance = () => {
  return (
    <section className="w-full py-16 bg-primary text-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 " data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Engineered For Reliable Braking Performance
          </Typography>
          <Typography variant="p" color="white" className="text-gray-300 xl:max-w-[70%] leading-relaxed text-sm md:text-base lg:text-lg">
            TOMEX BRAKES Sp. z o.o. Sp. K. manufactures premium brake pads designed to deliver exceptional stopping power, safety, and long-lasting performance. Developed using advanced friction materials and modern production technologies, our brake pads ensure dependable operation across a wide range of driving conditions.
          </Typography>
        </div>

        {/* Video Player */}
        <div className="w-full xl:max-w-[60%] aspect-video rounded-sm overflow-hidden relative  flex items-center justify-center" data-aos="fade-up" data-aos-delay="100">
          <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Performance;
