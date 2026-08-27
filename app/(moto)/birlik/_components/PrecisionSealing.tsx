"use client";
import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionSealing() {
  return (
    <section className="py-16 md:py-24 bg-[#f7f7f7]">
      <div className="custom-container flex flex-col items-center gap-8 xl:gap-10">
        
        {/* Top Heading */}
        <div className="flex flex-col items-center text-center gap-6" data-aos="fade-up">
          <h2 className="sora-font section-title font-semibold text-[#212121]">
            Precision Sealing Solutions for Reliable Engine Performance
          </h2>
          {/* Divider */}
          
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* Content: Video on left, Text on right */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 items-center gap-8 xl:gap-10">
          
          {/* Left: 360 Deg Video Placeholder */}
          <div className="xl:col-span-7 w-full  aspect-video flex items-center justify-center relative overflow-hidden  shadow-sm" data-aos="fade-right">
                <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>

          {/* Right: Content */}
          <div className="xl:col-span-5 w-full flex flex-col items-start gap-6" data-aos="fade-left">
            <h3 className="sora-font card-text font-semibold text-[#212121]">
              Our Solutions
            </h3>
            <div className="flex flex-col gap-4 text-[#444444] manrope-font section-text leading-relaxed">
              <p>
                Our comprehensive range of automotive sealing components, including cylinder head gaskets, valve cover gaskets, oil pan gaskets, intake and exhaust manifold gaskets, valve stem seals, and oil seals, is engineered to deliver dependable sealing performance in the most demanding engine environments. Manufactured from premium materials and designed to OE-quality standards, these components help prevent fluid leaks, maintain optimal compression, and ensure long-lasting engine reliability.
              </p>
              <p>
                Designed for passenger cars, commercial vehicles, and heavy-duty applications, our sealing solutions provide exceptional resistance to heat, pressure, oil, and chemical exposure. Every component is precision-engineered to ensure an accurate fit, easy installation, and consistent performance, helping extend engine life while minimizing maintenance and downtime.
              </p>
            </div>
            <Button href="#" className="mt-2">
              Explore Products
            </Button>
          </div>
          
        </div>

      </div>
    </section>
  );
}
