"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden bg-black">
      {/* Background Video Player - No overlays */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-fill"
        />
      </div>

      {/* Hero Content positioned Bottom-Left */}
      <div className="custom-container relative z-20 flex flex-col items-start justify-end h-full pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div
          className="max-w-xl md:max-w-2xl flex flex-col gap-5 sm:gap-6"
          data-aos="fade-up"
          data-aos-duration="1000">
          <Typography
            variant="h1"
            color="white"
            className="leading-[1.5]! mb-4 ">
            Engineered for Control, Built for Long-Lasting Performance
          </Typography>

          <div className="pt-1" data-aos="fade-up" data-aos-delay="200">
            <Button
              text="Explore Products"
              href="#products"
              variant="hero"
              showIcon={true}
              className="px-8 py-3.5 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
