"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[6%] md:pb-[5%] min-[2100px]:pb-[8%] min-[3800px]:pb-[10%]"
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
          className="xl:max-w-[40%] min-[2100px]:max-w-[35%] min-[3800px]:max-w-[30%] md:max-w-[60%] max-w-[80%] text-left space-y-6 md:space-y-8 min-[2100px]:space-y-12 min-[3800px]:space-y-16 pointer-events-auto"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight font-bold"
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"
          >
            Advanced Energy Storage Systems
            <br />
            Built for Performance
          </Typography>

          <div className="pt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Button text="Explore Our Solution" href="#products" variant="secondary" showIcon={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
