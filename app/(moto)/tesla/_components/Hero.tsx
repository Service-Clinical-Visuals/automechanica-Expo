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
      className="w-full lg:z-60 mt-0 h-[80vh] md:h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[10%] bg-[#020b24]"
      data-aos="fade-in"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Content Container */}
      <Container className="relative z-20 w-full">
        <div
          className="lg:max-w-[60%] max-w-[70%] text-left space-y-3 pointer-events-auto"
          data-aos="zoom-out-right"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-[1.2]"
          >
            Quality ignition coils provide <br /> more precise ignition timing.
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
