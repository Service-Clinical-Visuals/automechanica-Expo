"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[12%] md:pb-[8%] bg-primary"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6">
        <div
          className="2xl:max-w-[70%] max-w-full text-left space-y-4 md:space-y-6 pointer-events-auto"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight"
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"
          >
            Starters & Alternators
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed w-full"
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
          >
            Reliable Power and Performance for Every Engine. Worldwide
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Hero;
