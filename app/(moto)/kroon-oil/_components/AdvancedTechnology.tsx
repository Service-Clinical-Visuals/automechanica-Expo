"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function AdvancedTechnology() {
  return (
    <section className="relative w-full py-16 xl:py-24 bg-[#101010]">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-10 xl:mb-14" data-aos="fade-up">
          <h2 className="section-title font-normal text-white  tracking-wide anton-font mb-4 xl:mb-6">
            Advanced Lubrication Technology
          </h2>
          <p className="section-text text-[#ffffff] font-normal leading-[1.8] oswald-font px-4">
            Premium engine oils engineered with advanced lubricant technology to deliver superior wear protection, enhanced fuel efficiency, exceptional engine cleanliness, and reliable performance. Designed to meet leading OEM specifications, they help maximize engine life in every driving condition.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-5xl mx-auto rounded-xs overflow-hidden shadow-2xl aspect-video" data-aos="zoom-in" data-aos-delay="100">
          {/* Video Player */}
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Arrow Button Overlay */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10">
            <img 
                src="/moto/kroon-oil/btnarrow.png" 
                alt="Arrow" 
                className="w-10 md:w-12  object-contain transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
              />
          </div>
        </div>
        
      </div>
    </section>
  );
}
