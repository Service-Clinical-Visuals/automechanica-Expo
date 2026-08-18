"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Video360() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-black overflow-hidden" id="360-view">
      <div className="custom-container relative z-10 flex flex-col items-center">

        {/* Header Block: Title/Desc on Left, Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/20 pb-8 lg:pb-12 w-full" data-aos="fade-up">

          <div className="flex flex-col gap-4 lg:w-2/3">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              360° Product Experience
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed lg:max-w-[90%] xl:max-w-full text-sm md:text-base">
              Experience Vitobello Ricambi&apos;s premium automotive components through our interactive 360° product view. Examine every angle of its precision-engineered design, premium materials, and OEM-quality construction, developed to deliver reliable performance, efficient operation, and long-lasting durability for modern vehicle applications.
            </Typography>
          </div>

          <div className="flex-shrink-0" data-aos="fade-left">
            <Button text="Rotate & Explore°" href="#360-view" showIcon={true} />
          </div>

        </div>

        {/* 360 Video Player */}
        <div className="w-full aspect-video xl:max-w-[80%] rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#111] border border-white/10 mt-8 lg:mt-12" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
