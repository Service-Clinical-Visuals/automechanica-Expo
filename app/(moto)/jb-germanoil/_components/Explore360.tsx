"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section className="w-full bg-[#1a1a18] py-16 md:py-24 overflow-hidden text-white">
      <div className="custom-container">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          
          {/* Heading */}
          <h2
            className="aldrich-font font-normal text-white section-title leading-tight mb-5 tracking-wide"
            data-aos="fade-up"
          >
            Explore Every Detail In 360°
          </h2>

          {/* Description Paragraph */}
          <p
            className="akshar-font font-normal text-[#ffffff] section-text leading-relaxed max-w-5xl mx-auto mb-12 md:mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Take a closer look at JB GERMANOIL's premium Engine Oil through our interactive 360° product experience. Explore every angle of the packaging and discover the precision, advanced German engineering, premium formulation, and exceptional quality that deliver reliable engine protection and long-lasting performance in every application.
          </p>
          
          {/* 360 Video Player Box */}
          <div
            className="w-full xl:max-w-5xl 2xl:max-w-none aspect-video overflow-hidden relative flex items-center justify-center mx-auto"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
