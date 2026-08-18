"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]" id="explore-360">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center  gap-6 mb-12 border-b border-gray-700 pb-8">
          <div className="max-w-6xl" data-aos="fade-right">
            <h2 className="section-title font-semibold text-white mb-4 ">
              Explore Every Detail In 360°
            </h2>
            <p className="section-text text-white font-medium max-w-6xl">
              Take a closer look at ITW INTERNATIONAL LTD's Ignition Coil with our interactive 360° product experience. Explore every angle, premium material, and precision-engineered detail designed to deliver reliable ignition performance, efficient combustion, and long-lasting durability.
            </p>
          </div>
          <div className="flex-shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button href="#" variant="solid-white" hasArrow>
              Explore in 360°
            </Button>
          </div>
        </div>

        {/* Video Player Content */}
        <div className="w-full max-w-5xl xl:max-w-7xl mx-auto aspect-video relative rounded-xs overflow-hidden bg-gray-900 " data-aos="fade-up" data-aos-delay="200">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
