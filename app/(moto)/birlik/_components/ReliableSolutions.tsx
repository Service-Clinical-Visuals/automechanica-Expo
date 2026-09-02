"use client";
import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ReliableSolutions() {
  return (
    <section className="py-16 md:py-24 bg-[#1f5dd2]">
      <div className="custom-container flex flex-col gap-10">
        
        {/* Top Heading */}
        <div className="flex flex-col items-center text-center gap-6" data-aos="fade-up">
          <h2 className="sora-font section-title font-semibold text-[#ffffff]">
            Reliable Solutions for Every Engine
          </h2>
          {/* Divider */}
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* Main Content Box */}
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-12 xl:items-center w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left: Text Content */}
          <div className="w-full xl:col-span-4 bg-[#f9f9f9] p-6 xl:p-8 xl:pr-12 flex flex-col items-start justify-center gap-5 xl:rounded-bl-4xl  xl:rounded-tr-4xl relative z-0">
            <h3 className="sora-font card-text font-semibold text-[#212121]">
              Precision Sealing Solutions
            </h3>
            
            <p className="manrope-font section-text text-[#444444] leading-relaxed">
              Birlik Conta's sealing solutions are designed to deliver dependable performance, exceptional durability, and precise fitment for a wide range of automotive and industrial engines. Manufactured using high-quality materials and advanced production processes, our gaskets provide reliable sealing against oil, coolant.
            </p>

            <div className="flex flex-col gap-4">
              {/* Bullet 1 */}
              <div className="flex items-start gap-4">
                <img src="/moto/birlik/aperture.png" alt="Icon" className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="manrope-font section-text text-[#444444] font-normal leading-relaxed">
                  <strong className="text-[#1f5dd2] font-bold">OE-Quality Precision</strong> - Manufactured for an accurate fit, ensuring reliable sealing and hassle-free installation across a wide range of engine applications.
                </p>
              </div>
              
              {/* Bullet 2 */}
              <div className="flex items-start gap-4">
                <img src="/moto/birlik/aperture.png" alt="Icon" className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="manrope-font section-text text-[#444444] font-normal leading-relaxed">
                  <strong className="text-[#1f5dd2] font-bold">Superior Durability</strong> - Built with premium materials that withstand extreme temperatures, pressure, oil, and coolant exposure for long-lasting performance.
                </p>
              </div>
            </div>

            <Button href="#" className="mt-2">
              Explore Products
            </Button>
          </div>

          {/* Right: Video Area */}
          <div className="w-full xl:col-span-8 aspect-video xl:min-h-[550px] relative overflow-hidden rounded-t-xl xl:rounded-none xl:rounded-tr-[3rem] xl:rounded-bl-[3rem] z-10 xl:-ml-6">
            {/* DynamicVideoPlayer */}
            <div className="absolute inset-0 w-full h-full z-0 ">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          
          </div>
          
        </div>
      </div>
    </section>
  );
}
