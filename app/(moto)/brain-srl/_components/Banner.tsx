"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover md:object-fill" />
        </div>
      </div>

      {/* Content */}
      <div className="custom-container relative z-20 px-4 md:px-8 max-w-[1920px] mx-auto w-full">
        <div className="w-full md:w-2/3 mt-[30%] lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
          <Typography
            variant="h1"
            color="white"
            className="uppercase leading-tight"
          >
            We are the first Italian company to have fully developed the metal catalytic converter
          </Typography>
        </div>
      </div>
    </section>
  );
}
