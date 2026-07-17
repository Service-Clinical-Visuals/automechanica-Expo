"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Settings, LineChart } from "lucide-react";

export default function Excellence() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0B111A] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/moto/celikis/bg.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen" 
        />
      </div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          {/* Left Video Container */}
          <div data-aos="fade-right" className="order-3 xl:order-1 w-full aspect-video rounded-lg overflow-hidden relative  shadow-2xl">
            <DynamicVideoPlayer 
              type="360" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-white"></div>
              <h2 className="section-title text-white font-semibold">
                Gearbox Excellence & Innovation
              </h2>
            </div>
            
            <p className="section-text text-white mb-6 leading-[1.8] font-normal">
              Discover our complete range of high-quality gears and transmission components, designed with advanced manufacturing technology to deliver exceptional performance, durability, and reliability across various industries. Our solutions are engineered to meet demanding industrial requirements with precision, efficiency, and long-lasting value.
            </p>
            
            <p className="section-text text-white mb-6 leading-[1.8] font-normal">
              Experience our products up close and explore the precision, craftsmanship, and engineering excellence behind every component. Our advanced solutions are designed to meet demanding industrial requirements while ensuring consistent quality, reliability, and superior performance.
            </p>

            <div className="flex xl:hidden 2xl:flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <img src="/moto/celikis/setting.png" alt="setting" className="w-8 h-8 flex-shrink-0 mt-0.5" />
                <p className="section-text text-white mb-2 leading-[1.8] font-normal">
                  Precision-manufactured gears with advanced technology ensure high accuracy, smooth operation, and reliable performance.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <img src="/moto/celikis/report.png" alt="setting" className="w-8 h-8 flex-shrink-0 mt-0.5" />
                <p className="section-text text-white leading-[1.8] font-normal">
                  Durable gear solutions engineered for efficient power transmission, extended service life, and consistent performance in demanding applications.
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Icon Paragraphs (Visible only on xl screen size) */}
          <div data-aos="fade-up" className="hidden xl:flex 2xl:hidden order-2 xl:order-3 col-span-1 xl:col-span-2 flex-col xl:flex-row gap-6 xl:gap-10 xl:mt-4">
            <div className="flex items-start gap-4 xl:flex-1">
              <img src="/moto/celikis/setting.png" alt="setting" className="w-8 h-8 flex-shrink-0 mt-0.5" />
              <p className="section-text text-white leading-[1.8] font-normal">
                Precision-manufactured gears with advanced technology ensure high accuracy, smooth operation, and reliable performance.
              </p>
            </div>
            <div className="flex items-start gap-4 xl:flex-1">
              <img src="/moto/celikis/report.png" alt="setting" className="w-8 h-8 flex-shrink-0 mt-0.5" />
              <p className="section-text text-white leading-[1.8] font-normal">
                Durable gear solutions engineered for efficient power transmission, extended service life, and consistent performance in demanding applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
