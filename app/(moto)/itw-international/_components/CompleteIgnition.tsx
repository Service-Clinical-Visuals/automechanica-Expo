"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function CompleteIgnition() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]" id="complete-ignition">
      <div className="custom-container">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-12 border-b border-gray-700 pb-10" data-aos="fade-up">
          <h2 className="section-title font-semibold text-white mb-6  tracking-wide">
            Complete Ignition Solutions
          </h2>
          <p className="section-text text-white font-medium max-w-6xl mx-auto leading-relaxed">
            ITW INTERNATIONAL LTD offers a comprehensive range of ignition coils designed for a wide variety of passenger and commercial vehicles. Our products ensure dependable performance, precise fitment, long-lasting reliability, and consistent ignition efficiency across global automotive markets, meeting or exceeding OE quality standards.
          </p>
        </div>

        {/* Video Player Content */}
        <div className="w-full max-w-5xl xl:max-w-7xl mx-auto aspect-video relative rounded-xs overflow-hidden " data-aos="fade-up" data-aos-delay="200">
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
