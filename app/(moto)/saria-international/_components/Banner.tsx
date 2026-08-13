"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Container for Content */}
      <div className="custom-container relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 lg:pb-30" data-aos="fade-up">
        <div className="max-w-3xl" data-aos="fade-up">
          <h1 className="oswald-font font-semibold text-white banner-title leading-tight mb-4">
            Premium Lubricants for Every Journey
          </h1>
          <p className="lato-font text-white section-text max-w-xl leading-relaxed">
            Experience premium lubricants designed to maximize engine performance, reduce wear, and keep every journey running smoothly with confidence.
          </p>
        </div>
      </div>
      
    
    </section>
  );
}
