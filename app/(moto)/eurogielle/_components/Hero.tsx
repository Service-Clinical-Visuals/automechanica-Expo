"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[6%] md:pb-[5%] "
      data-aos="fade-in"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6">
        <div
          className="xl:max-w-[50%] max-w-full text-left space-y-4 md:space-y-6 pointer-events-auto"
          data-aos="zoom-out-right"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="uppercase leading-tight"
          >
            CABIN FILTER GENIUS
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed w-full max-w-[50%] xl:max-w-[70%]"
          >
            For 30 years, we have been designing and developing innovative solutions for automotive filter production.
          </Typography>

          <div className="pt-2">
            <Button text="Explore Products" href="#product" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
