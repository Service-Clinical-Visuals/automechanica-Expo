"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PrecisionEngineering() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]" id="precision-engineering">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-center">
          
          {/* Video Side */}
          <div 
            className="order-2 xl:order-1 w-full xl:w-1/2 rounded-lg overflow-hidden aspect-video relative flex items-center justify-center"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer 
              type="short-2" 
              className="absolute inset-0 w-full h-full object-cover z-10" 
            />
          </div>

          {/* Text Side */}
          <div 
            className="order-1 xl:order-2 w-full xl:w-1/2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Heading with line on right */}
            <div className="flex items-center justify-start gap-4 mb-6">
             <h2 className="section-title font-bold text-white font-oswald text-center ">
                Precision Engineering in Every Seal
              </h2>
                <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
            </div>

            <div className="text-white mb-8 space-y-6 section-text leading-relaxed font-poppins">
              <p>
                Discover how Victor Reinz combines advanced engineering, premium materials, and rigorous quality 
                testing to create sealing solutions that perform under the most demanding conditions. Every gasket is 
                designed to deliver precise fitment, superior leak protection, and long-lasting reliability for modern 
                automotive and industrial applications.
              </p>
              <p>
                Advanced Material Technology engineered with high-performance materials for exceptional heat, 
                pressure, and chemical resistance, OE Manufacturing Standards manufactured with precision 
                processes to ensure consistent quality, accurate fitment, and dependable performance, and Proven 
                Reliability extensively tested to provide durable sealing solutions that help maximize engine efficiency 
                and service life.
              </p>
            </div>

            {/* Button */}
            <div>
              <Button href="#explore-product-2" variant="primary">
                Explore Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
