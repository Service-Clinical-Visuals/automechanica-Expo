"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      

      {/* Container for Content */}
      <div className="custom-container relative z-10 h-full min-h-[calc(100vh-80px)] flex flex-col justify-end pb-20 sm:pb-24 md:pb-28 lg:pb-40" data-aos="fade-left" data-aos-delay="200">
        <div className="max-w-xl md:max-w-xl lg:max-w-xl">
          <h1 className="oswald-font font-medium text-white banner-title leading-tight sm:leading-snug md:leading-normal mb-6 md:mb-8 tracking-wide drop-shadow-md">
            Powering Every Journey with Reliable Battery Solutions
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
