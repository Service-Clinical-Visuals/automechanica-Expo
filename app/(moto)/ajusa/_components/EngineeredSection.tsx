"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-20 xl:py-20 relative overflow-hidden bg-[#F2F2F280]">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-right">
            {/* Top title */}
            <div className="flex flex-col mb-1 w-fit">
              <div className="w-18 h-[2px] bg-[#054279] mb-1"></div>
              <span className="text-[#054279] font-medium section-text poppins-font">Our Product Range</span>
              <div className="w-18 h-[2px] bg-[#054279] mt-1 ml-auto"></div>
            </div>

            <h2 className="section-title text-[#000000] poppins-font font-semibold mb-6 mt-4 leading-tight">
              Complete Engine Sealing & Component Solutions
            </h2>

            <div className="inter-font text-[#414141] text-medium section-text leading-relaxed space-y-4 mb-8">
              <p>
                We offer a comprehensive portfolio of high-quality automotive components, with a strong focus on engine sealing systems and associated parts. From full gasket sets and cylinder head gaskets to bolts, seals, and engine components, our products are engineered using advanced materials and precision manufacturing to ensure durability, reliability, and optimal engine performance.
              </p>
              <p>
                Designed to meet OEM standards, our solutions support efficient engine operation by preventing leaks, maintaining pressure, and enhancing long-term performance across a wide range of vehicles.
              </p>
            </div>

            <Button href="#" variant="primary-outline" className="btn-text w-fit">
              Explore Products
            </Button>
          </div>

          {/* Right Video Player */}
          <div className="lg:col-span-7 w-full h-full aspect-video lg:aspect-auto lg:h-full relative overflow-hidden" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

