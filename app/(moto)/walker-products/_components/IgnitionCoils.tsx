"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Check } from "lucide-react";

export default function IgnitionCoils() {
  const points = [
    "OEM-Quality Ignition Coils Engineered for Reliable Spark Delivery and Engine Performance",
    "Precision-Engineered Components Designed to Meet or Exceed Original Equipment Standards",
    "Compatible with a Wide Range of Passenger, Commercial, and Light-Duty Vehicles",
    "High-Quality Materials Ensuring Long Service Life and Lasting Reliability",
    "Consistent Performance Under High Temperatures and Demanding Driving Conditions",
    "Trusted Worldwide by Automotive Professionals and Aftermarket Distributors"
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#2C2C2C] overflow-hidden" id="ignition-coils">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block: Title & Desc on Left, Explore CTA on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-white/20" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-6xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Reliable Ignition Performance For Every Drive
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base">
              Walker Products, Inc. manufactures premium ignition coils engineered to deliver consistent spark energy, efficient combustion, and dependable engine performance. Designed to meet or exceed OEM specifications, our ignition coils provide reliable operation, precise fitment, and long-lasting durability for a wide range of vehicle applications.
            </Typography>
          </div>

          <div className="flex-shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Ignition Coils" href="#ignition-coils" showIcon={true} />
          </div>
        </div>

        {/* Video & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Short-2 Video Container */}
          <div className="lg:col-span-7 xl:col-span-9 w-full" data-aos="fade-right">
            <div className="w-full aspect-[16/9] rounded-sm overflow-hidden shadow-2xl relative bg-[#111] border border-white/10">
              <DynamicVideoPlayer 
                type="short-2" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Right Column: Title & Checklist */}
          <div className="lg:col-span-5 xl:col-span-3 flex flex-col gap-6 xl:gap-8" data-aos="fade-left">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Premium Ignition Coil Solutions
            </Typography>

            <div className="flex flex-col gap-4 lg:gap-5">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5 xl:gap-7">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#171717]" strokeWidth={3.5} />
                  </div>
                  <Typography variant="p" color="white" className="text-white/90 leading-snug">
                    {point}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

