"use client";
import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ProductView() {
  return (
    <section className="py-20 md:py-28 bg-[#111111]">
      <div className="custom-container">
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column - Video */}
          <div className="w-full" data-aos="fade-right">
            <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-white/5 shadow-xl">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full flex flex-col items-start gap-8" data-aos="fade-left">
             <h2 className="adlam-font section-title text-white ">Built on Innovation & Trust</h2>
            
            <p className="inter-font section-text text-white leading-relaxed">
              Experience Repairify's advanced ADAS calibration system through an interactive 360° product view. Designed for precision and ease of use, the system combines digital calibration technology with OEM-compatible procedures to help workshops perform accurate, efficient, and reliable vehicle calibrations. Explore its innovative design and discover how it enhances productivity while meeting the demands of today's advanced vehicles.
            </p>

            <div className="flex items-start gap-4">
              <img src="/moto/repairify/tick.png" alt="Tick" className="w-6 h-6 mt-1 flex-shrink-0" />
              <p className="inter-font section-text text-white leading-relaxed">
                <strong className="text-white font-bold">Real-Time Vehicle Intelligence</strong> - Leverage continuously updated vehicle data and intelligent diagnostics to identify issues quickly, improve decision-making, and ensure every repair is completed with greater confidence and accuracy.
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
