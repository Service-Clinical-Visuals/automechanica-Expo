"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const KeyFeatures = () => {
  const features = [
    "OEM-Quality Gaskets & Oil Seals Engineered for Reliable Engine Protection and Lasting Performance",
    "Precision-Engineered Components Designed for Accurate Fitment and Superior Leak Prevention",
    "Manufactured Using Premium-Quality Materials for Enhanced Durability and Long Service Life",
    "Specifically Designed to Support European and Asian Passenger Vehicle Applications",
    "Consistent Sealing Performance Under High Temperatures and Demanding Operating Conditions",
    "Trusted by Automotive Professionals Worldwide for Consistent Quality and Dependable Performance"
  ];

  return (
    <section className="w-full py-16 bg-[#2B2B2B] overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side (Video + Text) */}
        {/* Mobile: Order 2, Desktop: Col 1-7, Order 1 */}
        <div className="flex flex-col gap-8 order-2 xl:order-1 xl:col-span-8 w-full" data-aos="fade-right">
          
          <div className="w-full aspect-video rounded-3xl overflow-hidden">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Premium Gaskets & Oil Seals
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  ">
              Elwis Royal's OEM-quality gaskets and oil seals are designed to provide superior sealing, prevent leaks, and protect critical engine components. Manufactured with premium materials and precision engineering, our products deliver dependable performance and long-lasting durability across a wide range of automotive applications.
            </Typography>
          </div>
          
        </div>

        {/* Right Side (Features Box) */}
        {/* Mobile: Order 1, Desktop: Col 8-12, Order 2 */}
        <div 
          className="flex flex-col gap-6 order-1 xl:order-2 xl:col-span-4 w-full bg-[#111111] rounded-3xl p-8 xl:p-10"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-4 mb-2">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Key Features
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  ">
              Engineered for precision and durability, our OEM-quality gaskets and oil seals deliver reliable sealing, accurate fitment, and long-lasting performance for a wide range of automotive applications.
            </Typography>
          </div>

          <ul className="flex flex-col gap-8">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 bg-[#C21217] rounded-full w-5 h-5 flex items-center justify-center text-white">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <Typography variant="p" color="white" className="  leading-tight">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-4">
            <Button text="Explore Product" href="#explore" showIcon={true} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;
