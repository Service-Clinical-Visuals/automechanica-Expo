"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Banner() {
  return (
    <section className="relative w-full pt-[120px] md:pt-[100px] pb-20 lg:pb-20 bg-white" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="w-[96%] mx-auto h-screen relative">
        <div className="relative overflow-hidden w-full h-full shadow-xl rounded-[25px]" data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>

      {/* Constrained Text Overlay aligned with Header Logo */}
      <div className="absolute inset-0 z-10 pointer-events-none pb-[8%]  pb-8">
        <div className="custom-container h-full relative">
          <div className="absolute bottom-0 left-10  mb-12 md:mb-16 text-left  pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h1" color="white" className="max-w-3xl leading-tight mb-4 lg:mb-6">
              Engineering Excellence for Performance
            </Typography>
            <Typography variant="p" color="white" className="max-w-2xl mb-8 lg:mb-8 leading-[1.6]">
              SOYLU EXHAUST & AUTOMOTIVE A.S. delivers high-quality exhaust and emission solutions engineered for reliable heavy-duty vehicle performance.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
