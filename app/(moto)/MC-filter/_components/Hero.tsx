"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[6%] md:pb-[5%]">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
        {/* Subtle Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-primary/20 z-10" />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6">
        <div className="xl:max-w-[60%] max-w-full text-left space-y-2 pointer-events-auto">
          {/* Header Title  */}
          <Typography
            variant="h5"
            color="secondary"
            className="uppercase tracking-wider font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100">
            MC FILTER
          </Typography>

          <Typography
            variant="h1"
            color="white"
            className="leading-tight font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200">
            Quality And Reliable
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Hero;
