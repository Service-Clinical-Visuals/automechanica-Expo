"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pt-32">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 bg-[#000033]">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover "
        />
      </div>


      {/* Content */}
      <div className="relative z-20 pb-20 w-full">
        <div className="custom-container">
          <div className="max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="banner-title text-white font-semibold mb-4 oswald leading-tight">
              Engineered for Automotive Excellence.
            </h1>
            <p className="section-text text-white rubik font-normal leading-relaxed max-w-xl">
              Precision-engineered automotive components crafted with advanced manufacturing expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
