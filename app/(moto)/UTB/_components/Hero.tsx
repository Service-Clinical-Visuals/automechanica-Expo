"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import HexagonButton from "./HexagonButton";

import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-[101vh] mt-0.5 z-10 relative overflow-hidden flex items-center"
      data-aos="fade-in"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer type="banner" />
      </div>

      <Container className="relative z-10 flex flex-col justify-end h-full pb-16 md:pb-24 lg:pb-40">
        <div className="max-w-3xl space-y-2 md:space-y-3 px-4">

          {/* Subheading */}
          <div className="flex items-center  gap-2">
            <div className="w-16 md:w-20 h-[3px] rounded bg-white"></div>
            <Typography variant="h6" color="white" className="font-semibold italic  ">
              UTB Oils
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h1" color="white" className="italic">
            Dutch Premium Quality Oils
          </Typography>

          {/* Button */}
          <div className="pt-4">
            <HexagonButton
              text="Explore products"
              href="#products"
              bgColor="bg-white"
              textColor="text-primary"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
