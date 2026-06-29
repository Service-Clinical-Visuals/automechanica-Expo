"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-screen relative overflow-hidden flex items-end pb-20 md:pb-[8%] bg-dark text-white"
      data-aos="fade-in"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content Container */}
      <Container className="relative z-20 w-full">
        <div
          className="max-w-3xl text-left space-y-6 md:space-y-8"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <Typography
            variant="h1"
            color="white"
            weight="semibold"
            className="leading-[1.6] tracking-wide text-white font-poppins xl:text-[34px]! "
          >
            Every day we make an effort to deliver the desired products to users quickly.
          </Typography>

        </div>
      </Container>
    </section>
  );
};

export default Banner;
