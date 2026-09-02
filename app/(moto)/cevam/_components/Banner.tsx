"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover aspect-video"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pl-10 pb-20 md:pb-25 lg:pb-25">
        <div className="max-w-full text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-semibold text-white leading-tight mb-4 oswald-font">
            Experts in Standard Exchange Solutions
          </h1>
          <p className="section-text text-white rubik-font">
            Specialists in standard exchange solutions with trusted automotive performance.
          </p>
        </div>
      </div>
    </section>
  );
}
