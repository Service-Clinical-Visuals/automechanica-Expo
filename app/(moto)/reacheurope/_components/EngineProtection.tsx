"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-20 xl:py-20 relative bg-[#1b365d] overflow-hidden text-white">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">

          {/* Left: Video Player */}
          <div className="w-full h-full aspect-video xl:col-span-6 relative overflow-hidden flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6 xl:col-span-6" data-aos="fade-left">
            <h2 className="section-title text-white rajdhani-font font-bold">From Engineering to Excellence</h2>

            <p className="section-text text-white lato-font leading-relaxed">
              Every REACH component is the result of advanced engineering, precision manufacturing, and rigorous quality control. Produced in state-of-the-art facilities and tested to meet international standards, our cooling and HVAC solutions are designed to deliver exceptional performance, durability, and reliability for modern vehicles. From material selection to final inspection, every stage reflects our commitment to innovation and OE-quality excellence.
            </p>

            <p className="section-text text-white lato-font leading-relaxed">
              With decades of industry expertise and a global commitment to excellence, REACH continuously invests in innovative technologies and manufacturing advancements to meet the evolving demands of the automotive industry. Our comprehensive thermal management solutions are trusted by distributors, workshops, and automotive professionals worldwide, delivering reliable cooling performance, seamless OE fitment, and long-lasting value across passenger, commercial, and electric vehicle applications.
            </p>

            <div className="mt-2">
              <Button href="#" variant="primary" className="btn-text font-semibold">
                Explore Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
