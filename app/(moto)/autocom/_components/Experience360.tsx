"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Experience360() {
  return (
    <section className="relative w-full py-10 bg-secondary overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-10">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 border-b border-white/40 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 max-w-[80%] lg:max-w-[70%]">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              360° Product Experience
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              Experience the Autocom ADAS Calibration solution in an interactive 360° view. Explore every component and discover the precision, functionality, and quality behind the system, designed for modern workshops and professional technicians worldwide.
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button text="View Specifications" href="#" showIcon={true} />
          </div>
        </div>

        {/* 360 Video Player */}
        <div className="w-full aspect-video xl:max-w-[65%] flex items-center  justify-center mx-auto overflow-hidden    " data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
