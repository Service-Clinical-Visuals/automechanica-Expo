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
          className="md:max-w-[30%] max-w-full text-left space-y-6 pointer-events-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            weight="semibold"
            className="leading-[1.2]"
          >
            The Most Relevant Ranges <br className="hidden sm:block" /> from the Market
          </Typography>

          {/* Action Button: Explore Products */}
          <div className="inline-flex pt-4">
            <Button
              text="Explore Products"
              variant="hero"
              href="#products"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
