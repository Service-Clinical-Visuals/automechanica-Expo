"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 relative bg-[#F3F4F6] overflow-hidden text-black">
      <div className="custom-container relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div className="lg:w-2/3">
            <h2 className="section-title text-[#272727] oswald-font font-semibold leading-tight mb-4">
              Explore Our Products in 360°
            </h2>
            <p className="max-w-5xl text-[#4B5563] font-regular rubik-font section-text">
              Discover <strong className="text-[#272727]">CEVAM's</strong> complete range of remanufactured automotive components through an immersive 360° product experience. Explore the detailed design, engineering, and quality behind each component developed for modern vehicle systems.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-start lg:justify-end">
            <Button href="#" variant="outline">
              Explore
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#0195DA] mb-12"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-5 justify-center items-center" data-aos="fade-right">
            <div className="text-[#4B5563] rubik-font section-text font-regular tracking-normal leading-relaxed space-y-6">
              <p>
                <strong className="text-[#272727]">CEVAM</strong> specializes in precision remanufacturing of automotive components, including alternators, starters, transmissions, steering systems, and air conditioning systems. Each component is carefully refurbished through advanced processes to meet original equipment standards, ensuring reliable performance, enhanced durability, and extended service life across various automotive applications.
              </p>
              <p>
                Through controlled refurbishment processes, each component undergoes detailed inspection, testing, and precision rebuilding to meet strict quality standards. CEVAM ensures reliable operation, durability, and consistent performance across a wide range of automotive applications.
              </p>
              <p>
                With decades of experience in standard exchange solutions, CEVAM combines advanced technologies, production expertise, and strict quality control to deliver reliable automotive components worldwide. Explore our 360° product experience and discover the engineering excellence behind our trusted solutions.
              </p>
            </div>
          </div>

          {/* Right: 360 Video Player */}
          <div className="w-full h-full lg:min-h-0 aspect-video lg:col-span-7 xl:col-span-7 relative overflow-hidden rounded-lg flex items-center justify-center" data-aos="fade-left">
            {/* The video player usually takes over, but here's the structure for it */}
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
