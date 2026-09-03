"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-[70px] sm:mt-[80px] md:mt-[90px] h-screen
       pointer-events-none relative overflow-hidden flex flex-col justify-center">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover object-fill pointer-events-none z-0"
          type="banner"
        />
        {/* No dark overlay as per requirements */}
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6 mt-16 md:mt-24 lg:mt-[15%]">
        <div className="xl:max-w-[60%] max-w-full text-left space-y-4 md:space-y-6 pointer-events-auto">
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100">
            Parts for every Pace
            <br />
            Worldwide B2B Supplier & Trusted
            <br />
            Business Partner
          </Typography>

          <div
            className="pt-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300">
            <Button
              text="Explore Products"
              variant="secondary"
              href="#products"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
