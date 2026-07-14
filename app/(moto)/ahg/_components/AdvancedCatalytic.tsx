"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function AdvancedCatalytic() {
  const features = [
    "Advanced Emission Control – Reduces harmful exhaust gases.",
    "Durable Stainless Steel Construction – Built for extended service life.",
    "High-Performance Catalytic Technology – Ensures efficient exhaust treatment.",
    "Perfect Fit & Easy Installation – Engineered for precise compatibility.",
    "Improved Engine Efficiency – Supports optimal vehicle performance.",
    "Excellent Thermal Resistance – Performs under extreme temperatures."
  ];

  return (
    <section className="relative w-full py-4 bg-white">
      <div className="custom-container ">
        
        {/* Main Dark Card Container */}
        <div 
          className="bg-[#212121] rounded-tl-4xl rounded-br-4xl  p-8 md:p-12 xl:p-16 flex flex-col"
          data-aos="fade-up"
        >
          
          {/* Top Section: Title, Description, Button */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="xl:col-span-8 flex flex-col gap-4">
             <h2 className="section-title font-bold tracking-wide oswald-font text-white">
                Advanced Catalytic Converters
              </h2>
              <p className="section-text font-normal oswald-font text-[#ffffff] leading-[1.6] max-w-4xl tracking-wider">
                Designed for maximum efficiency and long-term reliability, our catalytic converters reduce harmful emissions while maintaining engine performance. Manufactured with advanced technology and premium materials, they provide durable solutions for passenger cars and commercial vehicles.
              </p>
            </div>
            
            <div className="xl:col-span-4 flex flex-col justify-center xl:items-end gap-6 xl:text-right pt-2">
              <h3 className="side-text  font-semibold  oswald-font text-[#ffffff] leading-[1.4] max-w-xs">
                Cleaner Emissions. Reliable Performance.
              </h3>
              <Button text="View Products" variant="white" />
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-600/50 my-8 xl:my-12" />

          {/* Bottom Section: Video and Features */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 xl:items-center">
            
            {/* Left: Video Player */}
            <div className="xl:col-span-9 aspect-video rounded-tl-4xl rounded-br-4xl overflow-hidden relative flex items-center justify-center" data-aos="fade-right">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover absolute inset-0 z-10" />
            </div>

            {/* Right: Key Features List */}
            <div className="xl:col-span-3 flex flex-col gap-6 xl:gap-8 pt-2 justify-center" data-aos="fade-left">
              <h3 className="section-title  font-semibold tracking-wide oswald-font text-white">
                Key Features
              </h3>
              
              <ul className="flex flex-col gap-5">
                {features.map((text, idx) => {
                  const parts = text.split(" – ");
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <img src="/moto/ahg/whitechk.png" alt="Check" className="w-5 h-5 xl:w-6 xl:h-6 object-contain flex-shrink-0 mt-1" />
                      <span className="header-link font-normal oswald-font text-[#ffffff] leading-[1.6]">
                        {parts.length > 1 ? (
                          <>
                          {parts[0]} – 
                            {parts[1]}
                          </>
                        ) : (
                          text
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
