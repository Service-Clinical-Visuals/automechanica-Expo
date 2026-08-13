"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";
import { ArrowUpRight, CheckCircle, CheckCircle2 } from "lucide-react";

export default function PremiumIgnition() {
  const highlights = [
    "Precision-Engineered Ignition Coils for Reliable Engine Performance",
    "Provides Consistent Spark Output for Efficient Fuel Combustion",
    "Designed for Asian, European, and Domestic Vehicle Applications",
    "Manufactured Using High-Quality Materials for Long-Lasting Durability and Reliable Performance",
    "Reliable Performance Across Demanding Driving Conditions and Everyday Vehicle Applications",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]" id="premium-ignition">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-700 pb-8">
          <div className="max-w-6xl" data-aos="fade-right">
            <h2 className="section-title font-semibold text-white mb-4  tracking-wide">
              Premium Ignition Coil Solutions
            </h2>
            <p className="section-text text-white font-medium max-w-6xl">
              ITW INTERNATIONAL LTD's ignition coils are precision-engineered to deliver consistent ignition performance, efficient combustion, and dependable engine operation. Manufactured to meet OE standards, they provide reliable power for modern automotive applications.
            </p>
          </div>
          <div className="flex-shrink-0 mb-2 md:mb-0" data-aos="fade-left">
            <button className="w-12 h-12 rounded-full bg-gray-600/50 hover:bg-gray-600 transition-colors flex items-center justify-center group text-white">
              <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column - Video */}
          <div className="xl:col-span-9 w-full relative aspect-video rounded-sm overflow-hidden bg-gray-900" data-aos="fade-right" data-aos-delay="100">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Highlights */}
          <div className="xl:col-span-3 flex flex-col" data-aos="fade-left" data-aos-delay="200">
            <h3 className="section-title1 text-white mb-8  font-semibold tracking-wide">
              Performance Highlights
            </h3>
            
            <ul className="space-y-6 mb-10">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-4">
                 
                  <img src="/itw-international/tck.png" alt="check" className="w-5 h-5 mt-1" />
                  <p className="text-white section-text font-normal leading-snug">
                    {highlight}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button href="#" variant="solid-white" hasArrow>
                View Product Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
