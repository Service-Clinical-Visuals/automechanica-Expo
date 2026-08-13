"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]" id="explore-360">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-center">
          
          {/* Video Side */}
          <div 
            className="order-2 xl:order-1 w-full xl:w-1/2 rounded-lg overflow-hidden aspect-video relative flex items-center justify-center bg-checkerboard"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer 
              type="360" 
              className="absolute inset-0 w-full h-full object-cover z-10" 
            />
          </div>

          {/* Text Side */}
          <div 
            className="order-1 xl:order-2 w-full xl:w-[50%]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Heading with lines */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
                <h2 className="section-title font-bold text-white font-oswald text-center ">
                Explore Every Detail
              </h2>
             <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
            </div>

            <p className="space-y-6 mb-8 text-white section-text leading-relaxed font-poppins">
              Examine the precision engineering behind Victor Reinz® gaskets with an interactive 360° product
              experience. Rotate, zoom, and inspect every layer to discover the advanced materials, accurate
              fitment, and superior sealing technology that deliver reliable performance under demanding engine
              conditions.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 mb-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-5 text-center shadow-md">
                <img src="/moto/reinz-dichtungs/i1.png" alt="Precision Engineering" className="mx-auto mb-3 h-10 w-auto" />
                <h3 className="font-oswald font-semibold text-black mb-2 card-text leading-tight mb-2">Precision Engineering</h3>
                <p className="text-black section-text leading-relaxed font-poppins">Designed for exact fitment and OE-level accuracy</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-lg p-5 text-center shadow-md">
                <img src="/moto/reinz-dichtungs/i2.png" alt="Sealing Technology" className="mx-auto mb-3 h-10 w-auto" />
              <h3 className="font-oswald font-semibold text-black mb-2 card-text leading-tight mb-2">Sealing Technology</h3>
                <p className="text-black section-text leading-relaxed font-poppins">Ensures leak-free performance under extreme pressure</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-lg p-5 text-center shadow-md">
                <img src="/moto/reinz-dichtungs/i3.png" alt="Durable Materials" className="mx-auto mb-3 h-10 w-auto" />
               <h3 className="font-oswald font-semibold text-black mb-2 card-text leading-tight mb-2">Durable Materials</h3>
                <p className="text-black section-text leading-relaxed font-poppins">Built to withstand engine stress and thermal cycling</p>
              </div>
            </div>

            {/* Button */}
            <div>
              <Button href="#products" variant="primary">
                Explore Products
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
