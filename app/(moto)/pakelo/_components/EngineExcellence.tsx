"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineExcellence() {
  return (
  

       <section className="py-16 md:py-24 bg-[#f7f7f7] relative z-10">
          <div className="custom-container">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center max-w-5xl 2xl:max-w-6xl mx-auto mb-3 lg:mb-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary transform rotate-45"></div>
                <span className="text-primary dm-sans font-semibold header-btn  uppercase">
                  Engine Excellence
                </span>
              </div>             

              <div className="flex items-center justify-center gap-3 mb-5" data-aos="fade-down">
                
                  <h2 className="section-title text-[#242424] mb-4 leading-tight oswald font-semibold uppercase">Engineered for Maximum Engine Performance</h2>
              </div>
              <p className="section-text text-[#484848] dm-sans font-normal mb-10 leading-[1.8]">
                Pakelo Factory develops premium engine lubricants that combine Italian engineering excellence with advanced lubrication technology to meet the demands of modern automotive engines. Formulated with high-quality base oils and innovative additive systems, Pakelo engine oils help reduce friction, protect against wear, maintain engine cleanliness, and ensure consistent performance under a wide range of operating conditions. Whether for everyday driving or high-performance applications, every lubricant is designed to maximize engine efficiency, reliability, and long-term durability.
              </p>
            </div>
    
            {/* Video Section */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="200" 
              className="w-full max-w-7xl min-[1400px]:max-[1500px]:max-w-5xl 2xl:max-w-8xl mx-auto aspect-video overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative"
            >
              <DynamicVideoPlayer 
                type="short-1" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
        </section>
  );
}
