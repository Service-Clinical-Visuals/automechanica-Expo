"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { RotateCcw } from "lucide-react";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 bg-[#030833] text-white relative overflow-hidden">
      {/* Subtle decorative background glow / halftone effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0F5AA6]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#ED1C24]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="custom-container relative z-10">

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto" data-aos="fade-up">
          <Typography variant="h2" className="oswald font-semibold section-title text-white tracking-wide">
            Explore Our Brake Solutions in 360°
          </Typography>
          <div className="w-24 h-[3px] bg-[#0F5AA6] mt-3 rounded-full"></div>

          <Typography variant="p" className="rubik text-white section-text font-normal text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            Experience Yavuzsan's precision-engineered brake components from every angle, designed with advanced technology, superior quality, and reliable performance for safety and durability.
          </Typography>
        </div>

        {/* 360 Degree Viewer Box - Exactly as in Image 3 */}
        <div className="w-full max-w-5xl mx-auto mt-10 md:mt-10 rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#050D3E] aspect-video relative flex items-center justify-center group" data-aos="zoom-in" data-aos-delay="200">

          {/* Dynamic video player */}
          <div className="absolute inset-0 z-0">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
          </div>


        </div>

      </div>
    </section>
  );
}
