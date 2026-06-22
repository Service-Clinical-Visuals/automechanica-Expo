"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen lg:z-60 mt-0.5 pointer-events-none relative overflow-hidden flex items-center bg-primary"
      data-aos="fade-in"
    >
      <div className="absolute h-screen w-full inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer type="banner" />
      </div>

      <Container className="relative z-20 w-full mt-20 md:mt-[30%] ">
        <div
          className="max-w-2xl text-left space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <Typography variant="h1" className="font-goldman text-white mb-6 ">
            Powering Performance
          </Typography>

          <Typography
            variant="h5"
            color="white"
            className="text-white font-albert font-medium"
          >
            Lubricants engineered for efficiency and extreme conditions
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
