"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
       
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title mb-5 leading-none text-white teko-font">
            Precision Braking. Trusted Worldwide.
          </h1>
          <Button href="#" variant="primary">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
