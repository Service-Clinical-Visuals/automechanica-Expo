"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import HexagonButton from "./HexagonButton";

export default function PremiumIgnitionCoils() {
  return (
    <section className="relative w-full overflow-hidden pb-16 lg:pb-24 mb-6">
      {/* Dark background top section */}
      <div className="absolute top-0 left-0 w-full h-[130px] md:h-[150px] lg:h-[180px] bg-[#1e1e1e] z-0"></div>
      
      <div className="custom-container relative z-10 pt-10 md:pt-16 lg:pt-20">
        <div className="bremi-grid items-center ">
          {/* Left Column (Video) */}
          <div className="lg:col-span-6 aspect-video" data-aos="fade-right">
           
               {/* 360 Deg Video Placeholder / Player */}
               <DynamicVideoPlayer 
                  type="360" 
                  className="w-full h-full object-cover" 
               />
          </div>
          
          {/* Right Column (Text) */}
          <div className="lg:col-span-6 mt-10 lg:mt-30 pl-1 lg:pl-10" data-aos="fade-left" data-aos-delay="100">
            <h2 className="section-title text-[#E72E39] font-bold mb-6 lg:mb-4 underline">
              Premium Ignition Coils
            </h2>
            
            <div className="flex flex-col gap-6 text-gray-700 mt-2 mb-2">
              <p className="section-text text-[#4c4c4c] font-normal leading-[1.6] ">
                The Ignition Coil From BREMI Is Responsible For Converting The Low Battery Voltage Into The High Voltage Required To Ignite The Fuel-Air Mixture In The Cylinders. Our Products Are Characterised By High Efficiency And Durability, Resulting In Improved Engine Performance And Reliability. With BREMI, You Can Rely On First-Class Quality And Perfect Ignition Performance.
              </p>
              <p className="section-text text-[#4c4c4c] font-normal leading-[1.6]">
                Our Products Impress With Excellent Data Quality And Precise Vehicle Assignments, So You Always Get The Right Product For Your Vehicle. The Coil Works By Amplifying The Voltage From The Battery And Transmitting It To The Spark Plugs, Enabling Efficient Combustion. It Is Installed In The Engine's Ignition System.
              </p>
            </div>
            
            <div className="mt-6">
              <HexagonButton text="Watch Product Video" href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
