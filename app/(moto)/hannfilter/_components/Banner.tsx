"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050515]" data-aos="fade">
      <div className="relative w-full h-full flex flex-col justify-end pb-16 md:pb-24">
        {/* Background Video */}
        <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Content */}
        <div className="custom-container relative z-10 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-6 max-w-2xl px-4 md:px-0">
            <h1 className="banner-title font-primary font-medium text-white leading-[0.95] tracking-wide drop-shadow-lg">
              Reliable Filters For Your Vehicles
            </h1>
            <div className="mt-2">
              <Button
                text="Explore Products"
                href="#products"
                variant="secondary"
                showIcon={false}
                className="btn-text px-6 py-2 bg-white text-[#0000AE] font-primary font-normal hover:bg-gray-100 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
