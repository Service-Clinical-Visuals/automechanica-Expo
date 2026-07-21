"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-20 xl:py-20 bg-[#F5F5F5]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2  items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-5 items-start" data-aos="fade-right">
            {/* Heading */}
            <div className="flex flex-col gap-2 items-start">
              <div className="inline-flex flex-col">
                <Typography variant="h4" className="text-[#185E2D] orbitron-font font-semibold tracking-widest text-[15px] uppercase pb-0.5">ENGINE COMPONENTS</Typography>
                <div className="w-1/2 h-[2px] bg-[#185E2D] self-end"></div>
              </div>
              <Typography variant="h2" className="section-title text-[#202020] orbitron-font font-semibold leading-tight">
                OE-Quality Engine Components
              </Typography>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-[#191919] dmsans-font section-text tracking-wider max-w-[680px]">
              <Typography variant="p">
                We offer a comprehensive range of precision-engineered engine components including camshafts, cylinder head parts, valves, and tappets—designed to meet the demands of modern engines. Built to OE specifications using advanced materials, our products ensure accurate timing, efficient combustion, and long-lasting performance.
              </Typography>
              <Typography variant="p">
                Developed with a strong focus on quality and reliability, each component is tested to deliver consistent performance across a wide range of passenger and commercial vehicles.
              </Typography>
            </div>

            {/* Button */}
            <div className="mt-2 mb-8 xl:mb-0">
              <Button href="#" variant="primary" className="!bg-[#185E2D] hover:!bg-[#154620] !font-['Montserrat'] !font-medium !rounded-md !px-5 !py-2.5 flex items-center gap-2">
                Explore Product <img src="/moto/bg-automotive/tabler_arrow-right.png" alt="Right Arrow" className="w-5 h-5 object-contain" />
              </Button>
            </div>
          </div>

          {/* Right: Video 01 */}
          <div className="w-auto aspect-video relative overflow-hidden bg-gray-200 flex items-center justify-center" data-aos="fade-left">
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
