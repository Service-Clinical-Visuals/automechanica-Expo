"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover "
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-24 md:pb-32">
        <div className="max-w-3xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-medium  text-white leading-tight oswald mb-8">
            A Comprehensive Supplier Of Auto<br className="hidden md:block"/> Parts For Professionals
          </h1>
          
          <Button text="Explore Products" className="border-white/30" />
        </div>
      </div>
    </section>
  );
}
