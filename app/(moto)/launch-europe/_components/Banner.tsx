"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-20 md:pb-32 lg:pb-40">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-[#000000">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10">
        <div className=" text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title mb-8 text-white tracking-wide font-heading font-normal">
            Precision Diagnostics. Smarter Workshops.
          </h1>
          <Button href="#" variant="primary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
