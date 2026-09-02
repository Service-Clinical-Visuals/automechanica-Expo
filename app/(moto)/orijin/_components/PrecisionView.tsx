"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 relative bg-[#111827] text-white overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col items-center">

        <div className="text-center max-w-5xl w-full mx-auto mb-12" data-aos="fade-up">
          <h2 className="section-title font-semibold oswald-font text-white leading-tight mb-4">
            360° Product Experience
          </h2>
          <p className="section-text text-white rubik-font font-regular leading-relaxed mx-auto max-w-5xl">
            Discover Orjin Automotive's high-quality steering and suspension solutions with an immersive 360° experience. Explore precision-engineered components built for durability, performance, and reliability across global automotive markets.
          </p>
        </div>

        <div className="w-full max-w-7xl aspect-video relative rounded-[42px] overflow-hidden flex items-center justify-center" data-aos="fade-up" data-aos-delay="100">

          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Action Button */}
          <button className="absolute bottom-6 right-6 z-20 w-14 h-14 bg-white border-[2px] border-[#F39200] rounded-full flex items-center justify-center hover:bg-[#F39200] hover:text-white text-[#F39200] transition-colors shadow-sm group">
            <ArrowUpRight size={28} className="group-hover:text-white transition-colors" />
          </button>
        </div>

      </div>
    </section>
  );
}

