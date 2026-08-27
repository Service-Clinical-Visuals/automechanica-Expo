"use client";

import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function CabinAirFilter() {
  const features = [
    "Effectively captures dust, pollen, soot, and other airborne contaminants for cleaner cabin air.",
    "Helps reduce allergens and unpleasant odors, creating a healthier driving environment.",
    "Manufactured using premium materials for efficient filtration and long-lasting performance."
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <div className="custom-container px-6 lg:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* Left Content */}
        <div className="xl:col-span-5" data-aos="fade-right">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
            <h2 className="section-title font-bold font-chakra text-[#1e1e1e] tracking-wide">Cabin Air Filter</h2>
          </div>
          
          <p className="section-text text-[#333333] leading-[1.6] font-mulish mb-8">
            The Cabin Air Filter is designed to improve the quality of air inside the vehicle by trapping dust, pollen, smoke, harmful particles, and other airborne contaminants before they enter the cabin through the HVAC system.
          </p>

          <ul className="space-y-6 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 ">
                  <img src="/moto/muller-filter/setting.png" alt="Feature Icon" className="w-8 h-8 lg:w-12 lg:h-12 object-contain" />
                </div>
                <p className="section-text text-[#333333] leading-[1.6] font-mulish ">{feature}</p>
              </li>
            ))}
          </ul>

          <Button href="#" variant="dark" className="py-3.5 px-8 ">
            Explore Products
          </Button>
        </div>

        {/* Right Video */}
        <div className="xl:col-span-7 rounded-xl overflow-hidden relative aspect-video shadow-inner mt-8 xl:mt-0" data-aos="fade-left">
          <DynamicVideoPlayer 
            type="360" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>

          </div>
        
      </div>
    </section>
  );
}
