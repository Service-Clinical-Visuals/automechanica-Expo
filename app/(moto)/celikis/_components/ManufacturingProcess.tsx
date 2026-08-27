"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ManufacturingProcess() {
  return (
    <section className="py-8 md:py-16 bg-[#F5F7FA] relative z-10">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-5xl 2xl:max-w-6xl mx-auto mb-3 lg:mb-5">
          <div className="flex items-center justify-center gap-3 mb-5" data-aos="fade-down">
            <div className="w-1 h-12 bg-primary"></div>
              <h2 className="section-title text-[#005CA9] font-semibold">Inside Our Manufacturing Process</h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="100" className="section-text text-[#4B5563] mb-6 leading-[1.8] font-normal">
            Experience the power of precision engineering, advanced manufacturing technology, and expert craftsmanship as we transform innovative designs into high-quality gear and transmission components built for exceptional accuracy, durability, and long-lasting reliability.
          </p>
        </div>

        {/* Video Section */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200" 
          className="w-full max-w-7xl min-[1400px]:max-[1500px]:max-w-5xl 2xl:max-w-8xl mx-auto aspect-video overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative"
        >
          <DynamicVideoPlayer 
            type="short-1" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
}
