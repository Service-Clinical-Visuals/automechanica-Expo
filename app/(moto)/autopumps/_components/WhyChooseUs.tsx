"use client";

import React from "react";
import AutopumpsButton from "./AutopumpsButton";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container px-6 xl:px-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="max-w-4xl">
            <h2 className="section-title text-[#2a2a2a] mb-4">
              Why Choose Autopumps UK?
            </h2>
            <p className="section-text text-[#585858] leading-relaxed">
              At Autopumps UK, every engine component is developed with a commitment to quality, precision, and long-term reliability. Through advanced manufacturing, strict quality control, and OE-quality standards, we deliver components that provide consistent performance, extended service life, and dependable operation across a wide range of automotive applications.
            </p>
          </div>
          <div className="flex-shrink-0">
            <AutopumpsButton href="/autopumps/specifications" variant="primary">
              View Specifications
            </AutopumpsButton>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Video Layout */}
        <div className="w-full max-w-7xl mx-auto" data-aos="fade-up">
           <div className="aspect-video w-full rounded-sm overflow-hidden  flex items-center justify-center">
             <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
           </div>
        </div>
        
      </div>
    </section>
  );
}
