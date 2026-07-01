"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-end pb-16 md:pb-24 lg:pb-32 pt-[100px]">
      {/* Background Video / Fallback Overlay */}
      <div className="absolute inset-0 z-0 bg-[#111111]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />

      </div>

      {/* Main Content Container */}
      <div className="relative z-20 custom-container w-full px-4 sm:px-6">
        <div className="flex flex-col items-start gap-6 md:gap-8 max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
          {/* Main Title */}
          <Typography variant="h1" color="white" weight="bold" className="font-oswald tracking-wide leading-[1.1] ">
            At Magma, We Use Fire To Fight Fire
          </Typography>

          {/* Solid Flat Button */}
          <div className="pt-2">
            <Button
              text="EXPLORE PRODUCTS"
              href="#products"
              showIcon={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
