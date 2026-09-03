"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer as requested */}
      <div className="absolute inset-0 z-0 bg-black">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-fill"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div
          className="max-w-4xl text-left"
          data-aos="fade-up"
          data-aos-delay="200">
          <h1 className="heading-white font-bold text-[32px]! leading-[42px]! text-white leading-tight oxanium-font">
            Filtration for residential buildings and clean room
            environments{" "}
          </h1>
        </div>
      </div>
    </section>
  );
}
