"use client";

import React from "react";
import Typography from "./Typography";

import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen z-10 mt-0 relative overflow-hidden flex items-center bg-[var(--color-primary)]"
      data-aos="fade-in">
      <div className="absolute h-screen w-full inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-fill"
        />
      </div>

      <div className="custom-container relative z-20 w-full mt-20  md:mt-[50%]  xl:mt-[25%]">
        <div
          className="lg:max-w-[40%] text-left space-y-4 pointer-events-auto"
          data-aos="fade-up"
          data-aos-delay="200">
          <Typography
            variant="h1"
            weight="semibold"
            className="font-oswald text-white tracking-normal   leading-tight mb-6">
            Your Trusted Aftermarket Partner
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="text-white font-lato">
            Delivering premium automotive parts and innovative solutions with
            exceptional quality, reliability, and performance for workshops,
            dealers, and drivers worldwide.
          </Typography>

          <div className="pt-4">
            <Button text="Explore Products" href="#products" showIcon={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
