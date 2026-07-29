"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { Check } from "lucide-react";

export default function PremiumEngine() {
  const bulletPoints = [
    "Premium German-Engineered Engine Oils Developed for Maximum Performance and Long-Term Engine Protection",
    "Outstanding Performance in Both High-Temperature and Low-Temperature Operating Conditions",
    "Trusted by Automotive Professionals Worldwide for Consistent Quality, Reliability, and Performance"
  ];

  return (
    <section className="w-full bg-[#1a1a18] py-16 md:py-24 text-white">
      <div className="custom-container flex flex-col px-8 md:px-12 lg:px-28">
        {/* Top Header */}
        <div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto mb-6 lg:mb-14"
          data-aos="fade-up"
        >
          <h2 className="aldrich-font section-title text-white mb-4 md:mb-6 tracking-wide">
            Premium Engine Oil Solutions
          </h2>
          <p className="akshar-font section-text text-[#ffffff] leading-relaxed">
            JB GERMANOIL's premium engine oils are developed using advanced German technology to deliver outstanding engine protection, improved fuel efficiency, and reliable performance. Designed for modern petrol and diesel engines, our lubricants ensure smooth operation, reduced wear, and extended engine life under all driving conditions.
          </p>
        </div>

        {/* Divider */}
        <hr className="w-full border-white/30 mb-8 lg:mb-15" data-aos="fade-in" />

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 not-last:lg:gap-10 items-center">
          
          {/* Video Player Box */}
          <div 
            className="xl:col-span-8 w-full aspect-video  overflow-hidden shadow-2xl relative flex items-center justify-center "
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="xl:col-span-4 flex flex-col items-start" data-aos="fade-left">
            <h3 className="aldrich-font section-title1 mb-6 leading-[1.2] tracking-wide text-white">
              Advanced Lubrication For Maximum Engine Performance
            </h3>
            
            <hr className="w-full border-[#333333] mb-6" />

            <p className="akshar-font section-text text-[#ffffff] mb-8 leading-relaxed">
              JB GERMANOIL's premium engine oils combine advanced German technology with high-quality base oils to deliver superior engine protection, reliable performance, reduced wear, and efficiency in all driving conditions.
            </p>

            {/* Normal layout list (hidden on xl) */}
            <div className="w-full flex flex-col xl:hidden 2xl:flex">
              <ul className="flex flex-col gap-5 mb-10">
                {bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[var(--primary)] flex items-center justify-center mt-1">
                      <Check size={14} strokeWidth={3.5} className="text-white" />
                    </div>
                    <p className="akshar-font text-[#ffffff] section-text leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              <Button href="#" iconType="arrowUpRight">
                View Products
              </Button>
            </div>
          </div>
        </div>

        {/* XL layout list (only visible on xl) */}
        <div className="hidden xl:flex 2xl:hidden flex-col w-full mt-10">
          <ul className="grid grid-cols-3 gap-8 mb-10">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[var(--primary)] flex items-center justify-center mt-1">
                  <Check size={14} strokeWidth={3.5} className="text-white" />
                </div>
                <p className="akshar-font text-[#ffffff] section-text leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-start">
            <Button href="#" iconType="arrowUpRight">
              View Products
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
