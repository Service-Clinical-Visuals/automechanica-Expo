"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductExperience360() {
  return (
    <section className="w-full bg-[#005484] py-16 md:py-24">
      <div className="custom-container flex flex-col items-center text-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="section-title font-semibold text-[#ffffff] leading-tight mb-6">
            360° Product Experience
          </h2>
          <p className="text-[#ffffff] section-text leading-relaxed max-w-6xl mx-auto">
            Explore Amadini ignition coils from every angle with our immersive 360° product experience. Discover the precision engineering, premium materials, and advanced manufacturing that define every component. Closely examine the product's construction, design, and finishing while gaining a better understanding of its OEM-quality standards, reliable ignition performance, exceptional durability, and dependable operation across a wide range of passenger and commercial vehicle applications.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="w-full max-w-7xl mx-auto aspect-video  overflow-hidden  relative shadow-md">
          <DynamicVideoPlayer 
            type="360" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
}
