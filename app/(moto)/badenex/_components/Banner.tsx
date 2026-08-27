"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover "
        />

      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pb-20 md:pb-24 lg:pb-30">
        <div className="max-w-3xl min-[2560px]:max-w-[1200px] min-[3800px]:max-w-[1800px] text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title oswald-font text-white leading-tight mb-3 font-semibold">
            Engineered for Peak Performance
          </h1>
          <p className="text-white lato-font section-text max-w-2xl min-[2560px]:max-w-[1000px] min-[3800px]:max-w-[1500px] text-opacity-90 leading-relaxed">
            Advanced German lubricants delivering superior engine protection, efficiency, and <br />reliable performance.
          </p>
        </div>
      </div>
    </section>
  );
}
