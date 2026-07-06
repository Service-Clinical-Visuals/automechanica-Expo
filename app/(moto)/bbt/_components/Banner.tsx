"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
    

      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

  

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-bold text-white leading-tight oswald-font mb-4">
            Made in Germany for over 30 years!
          </h1>
          <p className="section-text text-white lato-font font-medium">
            Your partner for ignition technology and sensors
          </p>
        </div>
      </div>
    </section>
  );
}
