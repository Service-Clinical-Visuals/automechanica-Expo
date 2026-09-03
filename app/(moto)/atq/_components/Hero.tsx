"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[15%] md:pb-[5%]">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6">
        <div className="xl:max-w-[70%] max-w-full text-left space-y-6 md:space-y-8 pointer-events-auto">
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100">
            Premium Brake Pads Engineered for
            <br className="hidden md:block" /> Maximum Safety
          </Typography>

          <div
            className="pt-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200">
            <Button text="Explore More" href="#about" showIcon={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
