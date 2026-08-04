"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section
      className="py-20 xl:py-20 relative bg-[#054279] overflow-hidden text-white"
    >
      <div className="custom-container relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">

          {/* Left: 360 Video Player */}
          <div className="w-full h-full aspect-video xl:col-span-7 relative overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-3 xl:col-span-5" data-aos="fade-left">
            {/* Top title */}
            <div className="flex flex-col mb-2">
              <div className="w-18 h-[2px] bg-white mb-2"></div>
              <span className="text-white font-medium section-text poppins-font">Our Product Range</span>
              <div className="w-18 h-[2px] bg-white mt-1 ml-21"></div>
            </div>

            {/* Heading */}
            <div>
              <h2 className="section-title text-white poppins-font font-semibold">High-Performance Engine Gasket Solutions</h2>
            </div>

            {/* Paragraphs */}
            <div className="text-white inter-font section-text tracking-normal leading-relaxed space-y-4">
              <p>
                We offer a comprehensive range of engine gaskets designed to ensure perfect sealing, durability, and optimal engine performance. Developed using advanced materials and precision manufacturing processes, our gaskets effectively prevent leakage of gases, oil, and coolant while maintaining engine efficiency under demanding conditions.
              </p>
              <p>
                Engineered to meet OEM standards, our gasket solutions provide reliable performance across a wide range of passenger cars, commercial vehicles, and industrial applications.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="list-disc pl-5 text-white inter-font section-text leading-relaxed mt-2 space-y-2 marker:text-white marker:text-3xl">
              <li>Manufactured using advanced materials for durability and longevity.</li>
              <li>Meets OEM-quality standards for consistent performance.</li>
            </ul>

            {/* Button */}
            <div className="mt-4">
              <Button href="#" variant="outline" className="btn-text">
                Explore Catalytic Converter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
