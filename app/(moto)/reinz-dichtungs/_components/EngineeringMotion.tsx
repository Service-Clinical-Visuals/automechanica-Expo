"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function EngineeringMotion() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]" id="engineering">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-center">
          
          {/* Text Side */}
          <div 
            className="w-full xl:w-1/2"
            data-aos="fade-right"
          >
            {/* Heading with line on right */}
            <div className="flex items-center justify-start gap-4 mb-6">
             <h2 className="section-title font-bold text-white font-oswald text-center ">
                Engineering in Motion
              </h2>
              <div className="h-0.5 w-16 bg-[var(--primary)]"></div>
            </div>

            <p className="text-white mb-8 section-text leading-relaxed font-poppins">
              Watch how Victor Reinz® gasket solutions are engineered and manufactured to meet Original 
              Equipment standards. From material selection and precision production to rigorous quality testing, 
              every gasket is designed to provide dependable sealing performance, enhanced durability, and long-
              lasting engine protection.
            </p>

            {/* Feature Boxes */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="bg-white rounded-md p-4 border-2 border-[var(--primary)] shadow-sm">
                <p className="text-black section-text font-poppins font-normal">
                  <strong className="font-semibold text-black">OE-Quality Engineering</strong> - Manufactured to stringent quality standards for consistent performance and precise fitment.
                </p>
              </div>
              <div className="bg-white rounded-md p-4 border-2 border-[var(--primary)] shadow-sm">
                <p className="text-black section-text font-poppins font-normal">
                  <strong className="font-semibold text-black">High-Performance Materials</strong> - Designed to withstand extreme temperatures, pressure, and demanding engine environments.
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <Button href="#explore-product" variant="primary">
                Explore Product
              </Button>
            </div>
          </div>

          {/* Video Side */}
          <div 
            className="w-full xl:w-1/2 rounded-lg overflow-hidden aspect-video relative flex items-center justify-center "
            data-aos="fade-left"
            data-aos-delay="200"
          >

            
            <DynamicVideoPlayer 
              type="short-1" 
              className="absolute inset-0 w-full h-full object-cover z-10" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
