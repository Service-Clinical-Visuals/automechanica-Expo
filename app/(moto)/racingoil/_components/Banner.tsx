"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050515]" data-aos="fade">
      <div className="relative w-full h-full flex flex-col justify-end pb-20 md:pb-40 pl-8">
        {/* Background Video */}
        <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Content */}
        <div className="custom-container relative z-10 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 max-w-5xl px-4 md:px-0">
            <h1 className="banner-title font-primary font-bold text-white leading-[1.1] tracking-wide drop-shadow-lg">
              High-Performance Lubricants Engineered To Perform
            </h1>
            <p className="section-text text-white/90 font-secondary leading-relaxed drop-shadow-md max-w-2xl">
              RACING OIL SL delivers premium lubricants for reliable protection, superior performance, and lasting efficiency across every application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
