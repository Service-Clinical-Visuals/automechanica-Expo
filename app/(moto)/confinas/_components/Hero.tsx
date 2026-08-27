"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-[1440px]:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[10%] min-[1440px]:pb-[8%] "
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-secondary">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
        
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6">
        <div
          className="min-[1440px]:max-w-[70%] max-w-full text-left space-y-6 min-[1440px]:space-y-8 pointer-events-auto"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight max-w-[800px]"
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"
          >
            Powering Every Journey with Advanced AGM Deep Cycle Batteries
          </Typography>

          <div className="pt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Button text="Explore Products" href="#products" showIcon={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
