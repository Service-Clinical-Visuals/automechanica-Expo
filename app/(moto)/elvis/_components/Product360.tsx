"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Product360() {
  const features = [
    "Interactive 360° Product View Showcasing Premium Gaskets and Oil Seals",
    "Explore Every Detail with Precision Engineering and Superior Craftsmanship",
    "Discover OEM-Quality Materials Designed for Reliable Sealing Performance"
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#171717] overflow-hidden">
      
      {/* Slanting Background - Downward Facing Triangle */}
      <div className="absolute inset-0 w-full h-full bg-[#2B2B2B] [clip-path:polygon(0_0,100%_0,50%_100%)] z-0"></div>

      <div className="custom-container relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side (Video) */}
        <div className="order-2 lg:order-1 lg:col-span-7 w-full" data-aos="fade-right">
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="order-1 lg:order-2 lg:col-span-5 w-full flex flex-col gap-6 lg:pl-8" data-aos="fade-left">
          
          <Typography variant="h2" color="white" className="font-semibold leading-tight">
            360° Product Experience
          </Typography>
          
          <div className="w-full h-[1px] bg-white/10 my-2"></div>
          
          <Typography variant="p" color="white" className="leading-relaxed opacity-90 text-sm">
            Discover the quality and precision behind Elwis Royal's OEM-quality Gaskets & Oil Seals with our interactive 360° product experience. Examine every detail, material, and design feature engineered to deliver reliable sealing performance and long-lasting durability.
          </Typography>

          <ul className="flex flex-col gap-5 mt-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 bg-[#C21217] rounded-full w-5 h-5 flex items-center justify-center text-white">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <Typography variant="p" color="white" className="text-sm opacity-90 leading-tight">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
          
          <div className="w-full h-[1px] bg-white/10 my-2"></div>

          <Typography variant="p" color="white" className="opacity-70 text-xs">
            Explore our OEM-quality Gaskets & Oil Seals in an interactive 360° view, highlighting precision and performance.
          </Typography>

          <div className="mt-2">
            <Button text="Explore in 360°" href="#explore" showIcon={true} />
          </div>

        </div>

      </div>
    </section>
  );
}
