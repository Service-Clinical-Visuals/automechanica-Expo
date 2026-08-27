"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { Check } from "lucide-react";

export default function EngineeredPerformance() {
  const features = [
    "Advanced Additive Technology for Superior Engine Protection, Performance, and Long-Term Reliability",
    "Trusted German Quality Delivering Consistent Performance, Durability, and Engine Protection Worldwide",
    "Excellent Thermal Stability Under High-Temperature and Demanding Operating Conditions"
  ];

  return (
    <section className="w-full bg-[#1a1a18] py-16 md:py-24 text-white">
      <div className="custom-container flex flex-col px-8 md:px-12 lg:px-28">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 mb-10 md:mb-12 items-center">
          
          {/* Left: Video */}
          <div 
          className="order-2 xl:order-1 xl:col-span-8 w-full aspect-video  overflow-hidden shadow-2xl relative flex items-center justify-center "
          data-aos="fade-right"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="w-full h-full object-cover"
          />
        </div>

          {/* Right: Content */}
          <div className="order-1 xl:order-2 xl:col-span-4 flex flex-col items-center justify-center" data-aos="fade-left">
            <h2 className="aldrich-font section-title1 mb-5 tracking-wide text-white leading-[1.2]">
              Engineered For Performance.<br className="hidden md:block" />Built For Protection.
            </h2>
            <p className="akshar-font section-text text-[#ffffff] mb-8 leading-relaxed">
              Our premium engine oils deliver reliable lubrication, outstanding thermal stability, and long-lasting engine protection for modern vehicles.
            </p>

            {/* Normal layout list (hidden on xl) */}
            <div className="flex flex-col gap-5 w-full xl:hidden 2xl:flex">
              {features.map((text, idx) => (
                <div 
                  key={idx} 
                  className="border border-white/40  rounded-tr-[70px] rounded-bl-[70px] p-6 md:p-8 flex items-start gap-4 hover:border-[var(--primary)] transition-colors duration-300 group bg-transparent"
                >
                  <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[var(--primary)] flex items-center justify-center mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Check size={14} strokeWidth={3.5} className="text-white" />
                  </div>
                  <p className="akshar-font text-[#ffffff] section-text leading-relaxed m-0">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* XL layout list (only visible on xl) */}
        <div className="hidden xl:flex 2xl:hidden flex-col w-full mb-8" data-aos="fade-up">
          <div className="grid grid-cols-3 gap-8">
            {features.map((text, idx) => (
              <div 
                key={idx} 
                className="border border-white/40 rounded-tr-[70px] rounded-bl-[70px] p-6 md:p-8 flex items-start gap-4 hover:border-[var(--primary)] transition-colors duration-300 group bg-transparent h-full"
              >
                <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[var(--primary)] flex items-center justify-center mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Check size={14} strokeWidth={3.5} className="text-white" />
                </div>
                <p className="akshar-font text-[#ffffff] section-text leading-relaxed m-0">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-white/30 mb-8 md:mb-10" data-aos="fade-in" />

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start lg:items-center gap-6" data-aos="fade-up">
          <p className="akshar-font section-text text-[#ffffff] leading-relaxed max-w-5xl m-0 text-center md:text-left">
            Engineered with premium-quality base oils and advanced additive technology, JB GERMANOIL engine oils help maintain maximum engine efficiency, reduce friction and wear, enhance fuel economy, and deliver dependable, long-lasting performance in every journey and operating condition.
          </p>
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
            <Button href="#" iconType="arrowUpRight">
              See Specifications
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
