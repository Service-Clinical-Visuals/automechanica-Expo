"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

export default function Banner() {
  return (
    <section
      id="home"
      className="w-full relative  lg:z-50  pb-3"
    >
      <div className="custom-container">
        {/* Boxed Hero Content */}
        <div className="relative w-full h-screen flex items-end pb-10 md:pb-[8%] overflow-hidden pointer-events-none ">

          {/* Background Video / Fallback Overlay */}
          <div className="absolute h-screen  inset-0 z-0 pointer-events-none bg-black">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-screen object-cover pointer-events-none z-0"
            />
            {/* Dark overlay for readability, more performant than opacity on video */}
            <div className="absolute inset-0 bg-[#111111]/70 z-10 pointer-events-none"></div>
          </div>

          {/* Content inside the boxed hero */}
          <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 mb-1 md:mb-[-0.2]">
            <div
              className="max-w-3xl text-left space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Main Title */}
              <Typography
                variant="h1"
                color="white"
                weight="bold"
                className="leading-[1.1] tracking-wide text-white font-oswald"
              >
                At Magma, We Use Fire To Fight Fire
              </Typography>

              {/* Action Button */}
              <div className="inline-flex pt-2 pointer-events-auto">
                <Button
                  text="EXPLORE PRODUCTS"
                  href="#products"
                  showIcon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
