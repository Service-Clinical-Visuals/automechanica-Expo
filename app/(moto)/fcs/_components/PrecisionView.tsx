"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-20 xl:py-20 relative bg-[#0F172A] overflow-hidden text-white">
      <div className="custom-container relative z-10 flex flex-col items-center text-center">

        {/* Top Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title text-white oswald-font font-semibold leading-tight mb-4">
            360° Product Experience
          </h2>
          <p className="text-gray-300 font-regular rubik-font section-text">
            Explore FCS products through an interactive 360° view, showcasing the precision engineering, advanced design, and quality behind our ride control solutions.
          </p>
        </div>

        {/* 360 Video Player placeholder / frame */}
        <div className="w-full max-w-5xl mx-auto aspect-video relative overflow-hidden rounded-3xl flex items-center justify-center bg-gray-100/10 border border-gray-700/50" data-aos="fade-up">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
