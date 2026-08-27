"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AdvancedProtection() {
  const features = [
    {
      title: "Advanced Wear Protection",
      description: "Minimizes engine wear and friction.",
    },
    {
      title: "Extended Oil Drain Intervals",
      description: "Supports longer service life.",
    },
    {
      title: "Superior Engine Performance",
      description: "Delivers smooth power output.",
    },
    {
      title: "Consistent Viscosity Stability",
      description: "Maintains optimal oil thickness.",
    },
  ];

  return (
    <section className="py-16 xl:py-24 bg-[#101010]">
      <div className="custom-container px-5 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title font-normal text-white  tracking-wide anton-font mb-6">
            Advanced Protection For Every Journey
          </h2>
          <p className="section-text text-[#ffffff] font-normal leading-[1.8] oswald-font max-w-5xl mx-auto">
            Our premium engine oils are formulated with advanced additive technology to deliver exceptional engine protection, improved performance, and long-lasting reliability. Designed for modern gasoline and diesel engines, they help reduce friction, prevent wear, and maintain engine cleanliness under all driving conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 h-full xl:items-center">
          {/* Left: Key Features Box */}
          <div className="xl:col-span-3 bg-[#0a0a0a] rounded-2xl p-6 xl:p-8 border border-[#ffffff]/30 flex flex-col justify-center h-full">
            <h2 className="section-title font-normal text-white  tracking-wide anton-font xl:mb-10">
              Key Features
            </h2>
            
            <ul className="space-y-8 ">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full  flex items-center justify-center">
                    <img src="/moto/kroon-oil/chek.png" alt="Check" className="w-5 h-5 object-contain" />
                  </div>
                  <p className="header-link text-[#ffffff] oswald-font leading-relaxed">
                    <span className="text-white font-medium">{feature.title}</span> – {feature.description}
                  </p>
                </li>
              ))}
            </ul>
            
            <div className="mt-8" >
              <Button text="Watch 360° View" />
            </div>
          </div>

          {/* Right: 360 Degree Video */}
          <div className="xl:col-span-9 relative rounded-2xl overflow-hidden aspect-video">
            {/* The DynamicVideoPlayer takes up the full container space */}
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            
            {/* Arrow Button Overlay */}
            <div className="absolute bottom-6 right-6 z-10">
               <img 
                src="/moto/kroon-oil/btnarrow.png" 
                alt="Arrow" 
                className="w-10 md:w-12  object-contain transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
