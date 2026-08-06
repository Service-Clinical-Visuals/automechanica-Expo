"use client";
import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PrecisionCalibration() {
  return (
    <section className="py-20 md:py-28 bg-[#111111]">
      <div className="custom-container">
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column - Video */}
          <div className="w-full" data-aos="fade-right">
            <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-black shadow-xl">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full flex flex-col items-start gap-8" data-aos="fade-left">
            <h2 className="adlam-font section-title text-white">Precision in Every Calibration</h2>
            
            <div className="flex flex-col gap-6 inter-font section-text text-white leading-relaxed">
              <p>
                Watch how Repairify's intelligent diagnostic and ADAS calibration solutions simplify complex repair processes. From vehicle diagnostics to camera and radar calibration, the system delivers accurate, OEM-compliant results while reducing workshop downtime and improving overall efficiency.
              </p>
              <p>
                OEM-Level Accuracy ensures precise calibrations using manufacturer-approved procedures for reliable and safe vehicle repairs, while Faster Workshop Efficiency reduces setup time and streamlines diagnostic workflows through advanced digital technology. Connected Expert Support provides access to remote technical assistance and real-time software updates to keep every calibration accurate and up to date, and Future-Ready Technology is designed to support the latest vehicle technologies with broad compatibility and continuous innovation.
              </p>
            </div>

            <Button href="#explore" className="px-8 py-3 mt-2">
              Explore Product
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
