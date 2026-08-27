"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 relative bg-[#F2F2F280] overflow-hidden text-black">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-5 lg:col-span-5 xl:col-span-5 order-2 lg:order-1" data-aos="fade-right">
            {/* Top title */}
            <div className="flex flex-col">
              <span className="text-[#C2D500] font-semibold section-text inter-font">ADAS calibration</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="section-title text-[#404040] sora-font font-semibold leading-tight">Advanced ADAS Calibration Solutions</h2>
            </div>

            {/* Paragraphs */}
            <div className="text-[#404040] inter-font section-text tracking-normal leading-relaxed space-y-4">
              <p>
                Our ADAS calibration systems are designed to ensure the accurate functioning of modern driver assistance technologies, including cameras, radar, and sensors. Built with precision and advanced diagnostic technology, these solutions help workshops perform reliable calibrations after repairs, replacements, or alignment adjustments.
              </p>
              <p>
                Engineered for efficiency and ease of use, our ADAS solutions support a wide range of vehicle models, enabling technicians to maintain safety standards and ensure optimal system performance on the road.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Precise calibration solutions for cameras, radar, and advanced sensor systems",
                "Supports a wide range of vehicle brands and models",
                "Essential for accurate post-repair and wheel alignment calibration processes"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="text-[#C2D500] flex-shrink-0 mt-1" size={18} strokeWidth={3} />
                  <span className="text-[#404040] inter-font section-text leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-4 flex">
              <Button href="#" variant="outline" className="btn-text font-semibold !w-auto">
                Explore ADAS Solutions
              </Button>
            </div>
          </div>

          {/* Right: 360 Video Player */}
          <div className="w-auto h-auto aspect-video lg:col-span-7 xl:col-span-7 relative overflow-hidden order-1 lg:order-2" data-aos="fade-left">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-auto h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
