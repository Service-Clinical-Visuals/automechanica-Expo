"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center bg-[#111]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DynamicVideoPlayer type="banner" className="w-full h-full object-cover opacity-60" />
      </div>
      
    

      {/* Content */}
      <div className="custom-container relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-4xl" data-aos="fade-up">
          <h1 className="oswald-font font-bold text-white banner-title leading-tight mb-8">
            Premium Lubrication Solutions Built for Every Journey
          </h1>
          
          <Button href="#">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
