"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import HexagonButton from "./HexagonButton";

const features = [
  {
    title: "High-Voltage Performance",
    desc: "Delivers a strong and consistent spark for efficient combustion."
  },
  {
    title: "Smooth Engine Operation",
    desc: "Reduces engine misfires and enhances overall driving performance."
  },
  {
    title: "Improved Fuel Efficiency",
    desc: "Optimizes combustion for lower fuel consumption and reduced emissions."
  }
];

export default function PrecisionIgnition() {
  return (
    <section className="pt-20 xl:pt-20 w-full bg-white">
      <div className="custom-container">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8" data-aos="fade-up">
          <div className="max-w-5xl">
            <h2 className="section-title text-[#E72E39] font-bold mb-6 lg:mb-6 underline">
              Precision Ignition Technology
            </h2>
            <p className="section-text text-[#4c4c4c] font-normal leading-[1.6] mt-2">
              BREMI Premium Ignition Coils Provide Reliable Ignition Performance, Smooth Engine Operation, Improved Fuel Efficiency, And Long-Lasting Durability—All Engineered To Meet OEM Quality Standards.
            </p>
          </div>

          {/* Button */}
          <HexagonButton text="View Product" href="#" className="flex-shrink-0" />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-6 lg:mb-8"></div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (Text & Features) */}
          <div className="xl:col-span-4" data-aos="fade-right">
            <h3 className="card-title font-medium text-[#E72E39] mb-4">
              Engineered For Reliable Ignition
            </h3>
            <p className="section-text text-[#4c4c4c] mb-8 font-normal leading-[1.6]">
              Our ignition coils help optimize fuel efficiency, reduce engine misfires, lower exhaust emissions, and improve overall engine responsiveness. Their precision-engineered construction contributes to longer service life while minimizing maintenance requirements, making them a trusted choice for automotive professionals and vehicle owners worldwide.
            </p>

            {/* Feature List (Hidden on xl to move to bottom row) */}
            <div className="flex flex-col gap-5 lg:gap-6 pt-2 xl:hidden 2xl:flex">
              {features.map((feature, idx) => (
                <div key={idx} className="relative flex items-center bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] rounded-sm border border-gray-100 ml-6 lg:ml-8 xl:ml-6 2xl:ml-8 min-h-[85px] lg:min-h-[100px] xl:min-h-[85px] 2xl:min-h-[100px]">

                  {/* Recessed Notch (Half-shadow illusion) */}
                  <div className="absolute left-[-24px] lg:left-[-32px] xl:left-[-24px] 2xl:left-[-32px] top-1/2 -translate-y-1/2 w-[60px] lg:w-[72px] xl:w-[60px] 2xl:w-[72px] h-[60px] lg:h-[72px] xl:h-[60px] 2xl:h-[72px] z-10 flex-shrink-0">

                    {/* Solid white background to hide the main card's left border */}
                    <div className="absolute inset-0 bg-white rounded-md"></div>

                    {/* Shadow wrapper (clips the left half so shadow is ONLY on the right) */}
                    <div className="absolute top-0 bottom-0 right-0 left-[24px] lg:left-[32px] xl:left-[24px] 2xl:left-[32px] overflow-hidden rounded-r-md pointer-events-none">
                      {/* The shadow element (full size, but anchored right so left half is clipped) */}
                      <div className="absolute top-0 bottom-0 right-0 w-[60px] lg:w-[72px] xl:w-[60px] 2xl:w-[72px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] rounded-md"></div>
                    </div>

                    {/* The Red Box */}
                    <div className="absolute inset-0 p-[6px] lg:p-[8px] xl:p-[6px] 2xl:p-[8px] flex items-center justify-center">
                      <div className="bg-[#E72E39] w-full h-full flex items-center justify-center  shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                        <span className=" oxanium text-white font-normal tracking-wider number-text ">0{idx + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 py-4 pr-4 pl-[48px] lg:py-5 lg:pr-6 lg:pl-[64px] xl:pl-[48px] xl:py-4 2xl:pl-[64px] 2xl:py-5 flex items-start gap-2 lg:gap-2 w-full">
                    <div className="flex-shrink-0 mt-0.5">
                      <img src="/moto/bremi/check.png" alt="Check" className="w-5 h-5 lg:w-7 lg:h-7 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 object-contain" />
                    </div>
                    <p className="section-text text-[#4c4c4c] font-normal leading-[1.6]">
                      {feature.title} – {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Video) */}
          <div className="xl:col-span-8 mt-12 lg:mt-0 lg:pl-10 aspect-video" data-aos="fade-left">
            {/* Video Player */}
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Bottom Feature Cards Row (Only visible on xl / 1440px) */}
        <div className="hidden xl:grid 2xl:hidden grid-cols-3 gap-6 mt-12" data-aos="fade-up">
          {features.map((feature, idx) => (
            <div key={`bottom-${idx}`} className="relative flex items-center bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] rounded-sm border border-gray-100 ml-6 min-h-[100px]">

              {/* Recessed Notch */}
              <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] z-10 flex-shrink-0">
                <div className="absolute inset-0 bg-white rounded-md"></div>
                <div className="absolute top-0 bottom-0 right-0 left-[24px] overflow-hidden rounded-r-md pointer-events-none">
                  <div className="absolute top-0 bottom-0 right-0 w-[60px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] rounded-md"></div>
                </div>
                <div className="absolute inset-0 p-[6px] flex items-center justify-center">
                  <div className="bg-[#E72E39] w-full h-full flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                    <span className="oxanium text-white font-normal tracking-wider number-text section-title">0{idx + 1}</span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 py-4 pr-4 pl-[48px] flex items-start gap-2 w-full">
                <div className="flex-shrink-0 mt-0.5">
                  <img src="/moto/bremi/check.png" alt="Check" className="w-5 h-5 xl:w-7 xl:h-7 object-contain" />
                </div>
                <p className="section-text text-[#4c4c4c] font-normal leading-[1.6]">
                  <span className="font-semibold">{feature.title}</span> – {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
