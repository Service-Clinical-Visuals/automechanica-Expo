"use client";

import React from "react";
import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";


export default function Performance() {
  return (
    <section className="w-full bg-[#111111] py-16 md:py-24">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 mb-12">
          
          {/* Left Column - Video */}
          <div className="order-2 xl:order-1 w-full xl:w-1/2" data-aos="fade-right">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#111111] flex items-center justify-center">
              <DynamicVideoPlayer type="short-1" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 xl:order-2 w-full xl:w-1/2" data-aos="fade-left">
            <h2 className="section-title font-normal text-white mb-6 font-heading">
              Built for Performance. Trusted Across Industries.
            </h2>
            
            <p className="text-white mb-8 font-body section-text leading-relaxed">
              Discover how Cardyfren combines decades of industry expertise with advanced engineering and precision manufacturing to develop high-performance driveline components for a wide range of applications. Every CV joint, cardan shaft, universal joint, and transmission component is crafted using premium materials and state-of-the-art production techniques to ensure exceptional strength, accuracy, and long-lasting reliability.From meticulous design and manufacturing to comprehensive quality inspections and real-world performance testing, every product is built to deliver smooth power transmission, reduced vibration, and outstanding durability under demanding operating conditions. Trusted across the automotive, industrial, agricultural, marine, railway, construction, and wind energy sectors, Cardyfren continues to provide innovative driveline solutions that meet the highest standards of quality, performance, and customer satisfaction.
            </p>
            
            <Button className="bg-[#28b7ff] hover:bg-[#1fa1e6] text-white text-[13px] px-8 py-3 rounded-md transition-colors font-bold font-heading shadow-md">
              View Product
            </Button>
          </div>
        </div>

        {/* Bottom Section - 2 feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-aos="fade-up">
          
          {/* Box 1 */}
          <div 
            className="relative w-full min-h-[120px] p-6 md:p-8 flex items-start gap-4 border-[1.5px] border-[#28b7ff] shadow-lg shadow-[#28b7ff]/10 rounded-2xl bg-white xl:border-0 xl:shadow-none xl:rounded-none xl:bg-transparent xl:bg-[url('/moto/cardyfren/bg1.png')] xl:bg-[length:100%_100%] xl:bg-center xl:bg-no-repeat"
          >
            <div className="flex-shrink-0 relative w-8 h-8 ml-2 mt-1">
               <img src="/moto/cardyfren/tool.png" alt="Tool Icon" className="object-contain" />
            </div>
            <div>
              <p className="text-[#111111] font-body section-text leading-relaxed pr-4">
                <strong className="text-black font-bold">Advanced Manufacturing</strong> - Precision-engineered components produced with modern manufacturing technologies.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div 
            className="relative w-full min-h-[120px] p-6 md:p-8 flex items-start gap-4 border-[1.5px] border-[#28b7ff] shadow-lg shadow-[#28b7ff]/10 rounded-2xl bg-white xl:border-0 xl:shadow-none xl:rounded-none xl:bg-transparent xl:bg-[url('/moto/cardyfren/bg1.png')] xl:bg-[length:100%_100%] xl:bg-center xl:bg-no-repeat"
          >
            <div className="flex-shrink-0 relative w-9 h-9 ml-2 mt-1">
               <img src="/moto/cardyfren/truck.png" alt="Truck Icon" className="object-contain" />
            </div>
            <div>
              <p className="text-[#111111] font-body section-text leading-relaxed pr-4">
                <strong className="text-black font-bold">Versatile Applications</strong> - Designed for automotive, commercial, industrial, agricultural, marine, railway, and construction equipment.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
