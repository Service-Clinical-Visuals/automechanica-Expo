"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 xl:py-20 relative bg-[#151515] text-white">
      <div className="custom-container relative z-10">
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="font-bold exo2-font section-title ex text-white mb-6">
            Engineering Excellence in Every Component
          </h2>
          <p className="text-white font-regular inter-font section-text max-w-8xl mx-auto leading-relaxed">
            Experience Inno Piston's precision engineering like never before. Rotate and inspect our premium pistons, piston rings, and cylinder liners from every angle to discover the exceptional craftsmanship, high-quality materials, and meticulous machining that ensure superior engine performance, durability, and reliability in every application.
          </p>
        </div>

        <div className="w-full h-full max-w-[1250px] mx-auto aspect-video relative flex items-center justify-center bg-[#f0f0f0] rounded overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover " />
        </div>
      </div>
    </section>
  );
}

