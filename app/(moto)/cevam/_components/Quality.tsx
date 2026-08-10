"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Quality() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden bg-[#111827]">
      {/* Background decoration lines can go here if needed */}

      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-lg lg:col-span-6" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-6" data-aos="fade-left">
            <h2 className="section-title text-white oswald-font font-semibold mb-6">
              Quality & Sustainable Development
            </h2>

            <div className="flex flex-col gap-5 text-white rubik-font section-text font-regular leading-relaxed mb-8">
              <p>
                Quality is a core value at CEVAM, guiding every stage of its operations and commitment to excellence. Certified ISO 9001:2015, the company continuously improves its processes, technologies, and quality standards to deliver reliable automotive components with consistent performance, enhanced durability, and long-term customer satisfaction.
              </p>
              <p>
                Committed to sustainable development, CEVAM's exchange programs help reduce raw material consumption and energy usage by reusing existing components. Through responsible recycling practices and compliance with the ISO 14001 environmental standard, CEVAM works to minimize its environmental impact.
              </p>
            </div>

            <Button href="#" variant="secondary" className="btn-text font-semibold w-fit px-8 py-3 !border-[3px] !border-[#0195DA] !text-[#272727] !rounded-[6px] !bg-white">
              Explore
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
