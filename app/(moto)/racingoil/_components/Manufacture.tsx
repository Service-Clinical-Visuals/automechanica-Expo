"use client";

import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Manufacture = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col justify-center relative left-1/2 -translate-x-1/2 py-16 md:py-16 bg-[#011689] text-white !rounded-none">
      <div className="flex flex-col items-center gap-6 md:gap-10 w-full pl-15 pr-15">

        {/* Top Row: Title, Text, Button */}
        <div className="custom-container flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 px-4 lg:px-8" data-aos="fade-up">
          <div className="flex flex-col gap-3 max-w-4xl">
            <h2 className="section-title font-primary font-bold text-white leading-tight">
              Maximum Protection. Exceptional Performance.
            </h2>
            <p className="section-text font-secondary text-white/90 leading-relaxed max-w-3xl">
              Racing Oil's premium engine oils are formulated with advanced technology to deliver superior engine protection, improved fuel efficiency, and reliable performance. Designed for modern petrol and diesel engines, our lubricants ensure smooth operation and long-lasting durability under all driving conditions.
            </p>
          </div>
          <div className="shrink-0 mb-1 lg:mb-2">
            <button className="btn-text bg-white text-[#011689] font-primary font-bold px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
              View Product Details <span className="leading-none">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[90%] h-[1px] bg-gray-400 mb-2"></div>

        {/* Bottom Split Section */}
        <div className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-stretch px-4 lg:px-8">

          {/* Left: Video Player */}
          <div className="lg:col-span-8 w-full rounded-2xl md:rounded-[32px] overflow-hidden relative flex items-center justify-center min-h-[250px] lg:min-h-[550px]" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Right: Feature List */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-4 relative z-20" data-aos="fade-left">

            {/* Inactive Item */}
            <div className="bg-transparent border border-white/40 border-l-0 rounded-r-[40px] rounded-l-none p-3 md:p-4 flex items-center gap-4 transition-colors hover:bg-white/5">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#011689]" strokeWidth={3} />
              </div>
              <p className="font-secondary text-white card-text max-w-[320px] leading-relaxed font-medium">
                Premium Engine Oils Engineered for Maximum Performance, Protection, and Long-Term Engine Reliability
              </p>
            </div>

            {/* Inactive Item */}
            <div className="bg-transparent border border-white/40 border-l-0 rounded-r-[40px] rounded-l-none p-3 md:p-4 flex items-center gap-4 transition-colors hover:bg-white/5">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#011689]" strokeWidth={3} />
              </div>
              <p className="font-secondary text-white card-text max-w-[320px] leading-relaxed font-medium">
                Manufactured to Meet International OEM Specifications and Strict Quality Standards with Proven Reliability
              </p>
            </div>

            {/* Inactive Item */}
            <div className="bg-transparent border border-white/40 border-l-0 rounded-r-[40px] rounded-l-none p-3 md:p-4 flex items-center gap-4 transition-colors hover:bg-white/5">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#011689]" strokeWidth={3} />
              </div>
              <p className="font-secondary text-white card-text max-w-[320px] leading-relaxed font-medium">
                Advanced Lubricant Technology for Consistent Performance, Extended Engine Service Life, and Maximum Protection
              </p>
            </div>


            {/* Inactive Item */}
            <div className="bg-transparent border border-white/40 border-l-0 rounded-r-[40px] rounded-l-none p-3 md:p-4 flex items-center gap-4 transition-colors hover:bg-white/5">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#011689]" strokeWidth={3} />
              </div>
              <p className="font-secondary text-white card-text max-w-[320px] leading-relaxed font-medium">
                Suitable for Modern Petrol, Diesel, Hybrid, and Turbocharged Engine Applications Across Multiple Vehicle Types
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Manufacture;
