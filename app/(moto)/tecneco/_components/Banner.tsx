"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pt-32">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 bg-[#05051a]">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
       
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-lg text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title mb-6 leading-[1.1] font-semibold text-white sora">
            Advanced Filtration Solutions for Every Journey
          </h1>
          <div className="mt-8">
            <Button href="#" variant="primary" className="bg-[#191515] border border-gray-700/50 hover:bg-white hover:text-black hover:border-white text-white px-8 py-3.5 transition-all duration-300">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
