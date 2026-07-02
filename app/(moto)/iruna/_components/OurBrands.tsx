"use client";

import React from 'react';
import Button from './Button';

export default function OurBrands() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-6xl 2xl:max-w-[1500px] min-[2560px]:max-w-[2000px] min-[3800px]:max-w-[2600px] mx-auto w-full" data-aos="fade-up">
          <div className="relative inline-block mb-6">
            <h2 className="section-title font-bold oxanium text-black relative z-10 leading-tight">
              Our Brands <span className="text-[#CF0A2C] oxanium">06</span>
            </h2>
            {/* The pinkish stripe behind the text */}
            <div className="absolute left-0 top-[55%] -translate-y-1/2 h-[4px] w-[85%] bg-[#e78596] z-0"></div>
          </div>
          
          <p className="sora text-[#484848] section-text leading-[1.8]">
            Every solution is supported by rigorous testing, validated through strict quality standards, and designed to serve both OEM and aftermarket requirements. Through continuous improvement and certified manufacturing excellence, we aim to build long-term trust and provide dependable products that keep vehicles performing at their best.
          </p>
        </div>

        {/* Grid Layout Section */}
        <div className="w-full flex flex-col max-w-6xl 2xl:max-w-[1500px] min-[2560px]:max-w-[2000px] min-[3800px]:max-w-[2600px] mx-auto mt-6 mb-6">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 xl:grid-cols-12 items-center  gap-4 lg:gap-8">
            {/* Left Image (Spans 5 Columns) */}
            <div className="xl:col-span-5  overflow-hidden z-0" data-aos="fade-right">
              <img src="/moto/iruna/brand3.png" alt="Lab Testing Facility" className="w-full h-full object-contain" />
            </div>
            
            {/* Right Card (Spans 7 Columns, negative margin for overlap) */}
            <div className="xl:col-span-7 z-10 mt-[-20px] xl:mt-0 " data-aos="fade-left">
              <div className="w-full border-[1px] md:border-[1.5px] border-[#e78596] bg-white p-4 lg:p-6 flex flex-col sm:flex-row items-center gap-4 lg:gap-5 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
                <div className="w-full sm:w-[30%] flex justify-center shrink-0">
                  <img src="/moto/iruna/brand1.png" alt="Iruna Logo" className="w-full max-w-[160px] lg:max-w-[180px] object-contain" />
                </div>
                <div className="w-full sm:w-[70%]">
                  <p className="sora text-[#484848] section-text leading-[1.8] text-center sm:text-left">
                    OEM brake system design and manufacturing for Automotive, Off-highway and Wind power markets. Master cylinders, boosters, brake fluid reservoirs and valve systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 xl:grid-cols-12 items-center  gap-4 lg:gap-8">
            {/* Left Card (Spans 7 Columns) */}
            <div className="xl:col-span-7 z-10 mt-[-20px] xl:mt-0 order-2 xl:order-1" data-aos="fade-right">
              <div className="w-full border-[1px] md:border-[1.5px] border-[#e78596] bg-white p-4 lg:p-6 flex flex-col sm:flex-row items-center gap-4 lg:gap-5 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
                <div className="w-full sm:w-[30%] flex justify-center shrink-0">
                  <img src="/moto/iruna/brand2.png" alt="St ib Logo" className="w-full max-w-[140px] lg:max-w-[160px] object-contain" />
                </div>
                <div className="w-full sm:w-[70%]">
                  <p className="sora text-[#484848] section-text leading-[1.8] text-center sm:text-left">
                    Automotive aftermarket spare parts for brake systems. Multi branding products for today's global market. Classic car division and knowledge. TRW system references.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Image (Spans 5 Columns) */}
            <div className="xl:col-span-5  overflow-hidden z-0 order-1 xl:order-2" data-aos="fade-left">
              <img src="/moto/iruna/brand4.png" alt="Product Warehouse" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <div className=" mt-6 flex justify-center" data-aos="fade-up">
          <Button className="px-10">
            View More
          </Button>
        </div>

      </div>
    </section>
  );
}
