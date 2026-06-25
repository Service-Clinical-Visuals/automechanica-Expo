"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Protection() {
  return (
    <section className="py-22 bg-primary relative overflow-hidden">
      {/* Background Image with #1C436A Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img src="/moto/ari-oil/background.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      <div className="custom-container relative z-10">
        <div className="flex flex-col items-center text-center w-full mx-auto mb-10" data-aos="fade-up">
          <Typography variant="h2" color="white" weight="extrabold" className="mb-4">
            Advanced Protection For Every Engine
          </Typography>
          <Typography variant="p" color="white" className="opacity-90 text-white max-w-7xl">
            Our premium engine oils deliver reliable protection, reduced wear, and enhanced performance. Formulated with high-quality base oils and advanced additives, they help keep engines clean, efficient, and running smoothly in all driving conditions.
          </Typography>
        </div>

        {/* 360 Degree Placeholder Container */}
        <div className="w-full max-w-5xl mx-auto aspect-video bg-gray-100/10 border border-white/20 flex items-center justify-center relative overflow-hidden backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="200">
          {/* Transparency grid pattern for placeholder effect */}
          <div className="absolute inset-0 " >
            <DynamicVideoPlayer type="360" />
          </div>


        </div>
      </div>
    </section>
  );
}
