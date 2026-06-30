"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-[-3] h-screen  pointer-events-none relative overflow-hidden flex items-end pb-20 md:pb-[10%] bg-[#020b24]"
      data-aos="fade-in"
    >
      {/* Background Video using DynamicVideoPlayer with motor lubricants backup */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none  z-0"
          type="banner"

        />
        {/* Navy/Blue Gradient Overlay matching the design */}
        <div className="absolute inset-0  z-10" />
      </div>

      {/* Content Container */}
      <Container className="relative z-20 w-full pointer-events-auto">
        <div
          className="max-w-7xl text-left space-y-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Header Title from Screenshot */}
          <Typography
            variant="h1"
            color="white"
            weight="medium"
            className="leading-[1.2] tracking-wide text-white"
          >
            Fueling Performance,<br />Redefining Speed
          </Typography>

          {/* Action Button: Explore Products */}
          <div className="inline-flex pt-2">
            <Button
              text="Explore Products"
              variant="secondary"
              href="#products"
              showIcon={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
