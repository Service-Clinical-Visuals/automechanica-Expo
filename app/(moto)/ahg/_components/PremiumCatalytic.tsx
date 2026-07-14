"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PremiumCatalytic() {
  const benefits = [
    "High Emission Reduction – Meets stringent environmental standards.",
    "Optimized Exhaust Flow – Supports efficient engine performance.",
    "Excellent Thermal Resistance – Performs under extreme temperatures.",
    "Corrosion-Resistant Construction – Protects against harsh operating conditions."
  ];

  return (
    <section className="relative w-full py-4  bg-white">
      <div className="custom-container ">
        
        {/* Main Dark Card Container */}
        <div 
          className="bg-[#212121] rounded-tl-4xl rounded-br-4xl p-8 md:p-12 xl:p-16 flex flex-col"
          data-aos="fade-up"
        >
          
          {/* Top Section: Title, Description, Button */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start xl:items-center">
            <div className="xl:col-span-8 flex flex-col gap-4">
              <h2 className="section-title font-bold tracking-wide oswald-font text-white">
                Premium Catalytic Converters
              </h2>
              <p className="section-text font-normal oswald-font text-[#ffffff] leading-[1.6] max-w-4xl tracking-wider">
                Our catalytic converters are engineered to reduce harmful exhaust emissions while maintaining optimal engine performance. Manufactured to meet stringent quality standards, they provide reliable durability, precise fitment, and long-lasting efficiency for passenger cars and commercial vehicles.
              </p>
            </div>
            
            <div className="xl:col-span-4 flex xl:justify-end">
              <Button text="Watch 360° View" variant="white" />
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-600/50 my-8 xl:my-12" />

          {/* Bottom Section: Video and Features */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-10 xl:items-center">
            
            {/* Left: Video Player */}
            <div className="xl:col-span-8 rounded-tl-4xl rounded-br-4xl overflow-hidden relative flex items-center justify-center aspect-video">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover absolute inset-0 z-10" />
            </div>

            {/* Right: Feature Cards */}
            <div className="xl:col-span-4 flex flex-col gap-3 xl:gap-6 h-full pt-5 pb-5 justify-center">
              {benefits.map((text, idx) => {
                const parts = text.split(" – ");
                return (
                  <div key={idx} className="bg-white rounded-t-4xl rounded-bl-4xl px-6 py-4 xl:px-12 xl:py-6 flex items-start gap-3 shadow-sm flex-1" data-aos="fade-left" data-aos-delay={idx * 100}>
                    <img src="/moto/ahg/bluechk.png" alt="Check" className="w-6 h-6 object-contain flex-shrink-0 mt-1" />
                    <span className="header-link font-normal oswald-font text-[#2f2f2f] leading-[1.6]">
                      {parts.length > 1 ? (
                        <>
                          {parts[0]} – {parts[1]}
                        </>
                      ) : (
                        text
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
