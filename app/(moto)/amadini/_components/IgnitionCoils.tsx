"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import AmadiniButton from "./AmadiniButton";

export default function IgnitionCoils() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container px-4 xl:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b-2 border-gray-300 pb-8">
          <div className="max-w-5xl">
          <h2 className="section-title font-semibold text-[#2a2a2a] leading-tight mb-4">
              Ignition Coils
            </h2>
            <p className="text-[#4a4a4a] section-text leading-relaxed max-w-5xl">
              Amadini offers high-quality ignition coils engineered to deliver reliable spark generation, efficient combustion, and consistent engine performance. Manufactured to OEM-quality standards, our ignition coils provide precise fitment, long service life, and dependable operation for a wide range of passenger and commercial vehicles.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <AmadiniButton
              href="/amadini/products/ignition-coils"
              variant="primary"
            >
              Explore Ignition Coils
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1V13M13 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </AmadiniButton>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center pt-4">
          
          {/* Left Side: Video */}
          <div className="order-2 xl:order-1 xl:col-span-9 relative w-full aspect-video rounded-md overflow-hidden bg-gray-200 shadow-sm ">
            <DynamicVideoPlayer 
              type="short-1" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Right Side: Details */}
          <div className="order-1 xl:order-2 xl:col-span-3 flex flex-col space-y-6">
            <h3 className="section-subtitle font-semibold text-[#2a2a2a] leading-tight">
              Engineered For Reliable Ignition
            </h3>
            
            <p className="text-[#4a4a4a] section-text leading-relaxed">
              Amadini ignition coils are engineered to deliver reliable ignition performance, improved engine efficiency, and long-lasting durability. Manufactured with premium materials, they ensure dependable operation in demanding driving conditions.
            </p>

            <div className="space-y-6 mt-2">
              {/* Bullet Point 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#005484"/>
                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#4a4a4a] section-text leading-relaxed">
                  Precision-Engineered Performance – Designed to generate a stable and powerful spark, ensuring efficient combustion, smooth engine operation, and optimized fuel efficiency.
                </p>
              </div>
              
              {/* Bullet Point 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#005484"/>
                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  <span className="font-bold text-[#005484]">Premium Manufacturing Quality</span> – Produced using high-grade materials and advanced manufacturing processes to provide exceptional durability and long-term reliability.
                </p>
              </div>
              
              {/* Bullet Point 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#005484"/>
                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  <span className="font-bold text-[#005484]">Outstanding Heat & Vibration Resistance</span> – Built to withstand extreme temperatures, continuous engine vibrations, and demanding operating environments without compromising performance.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <AmadiniButton 
                href="/amadini/products/ignition-coils/details" 
                variant="primary"
              >
                View Product Details
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L13 1M13 1V13M13 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </AmadiniButton>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
