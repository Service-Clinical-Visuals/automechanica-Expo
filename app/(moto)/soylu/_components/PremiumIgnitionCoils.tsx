"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import HexagonButton from "./HexagonButton";

export default function PremiumIgnitionCoils() {
  return (
    <section className="relative w-full bg-[#0F3D26] text-white py-16 lg:py-20">
      <div className="custom-container mt-5">
        <div className="mx-auto text-center flex flex-col items-center" data-aos="fade-up">
          <Typography variant="h1" color="white">Advanced NOx Sensors</Typography>
          <Typography variant="p" color="white" className="mt-3 max-w-[70%] text-center">
            SOYLU EXHAUST & AUTOMOTIVE A.S. NOx Sensors deliver accurate emission monitoring, reliable engine performance, long-lasting durability, and exceptional efficiency for modern commercial vehicle applications.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto mt-5" data-aos="zoom-in" data-aos-delay="150">
          <div className="rounded-[12px] p-6  overflow-hidden">
            <div className="w-full h-[420px] md:h-[480px] lg:h-[520px] rounded-[8px] overflow-hidden">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
