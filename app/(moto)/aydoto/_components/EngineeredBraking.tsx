"use client";
import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function EngineeredBraking() {
  const bulletPoints = [
    {
      title: "Wide Vehicle Coverage",
      description: "Suitable for passenger and light commercial vehicles.",
    },
    {
      title: "Maximum Reliability",
      description: "Tested for consistent safety and performance.",
    },
    {
      title: "High-Performance Braking",
      description: "Responsive stopping power in all conditions.",
    },
    {
      title: "Long-Lasting Durability",
      description: "Built for extended service life and reduced wear.",
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] text-white relative overflow-visible px-4 lg:px-16">
      {/* Top 3/4th Full-Width Dark Blue Background Layer */}
      <div className="absolute top-0 left-0 right-0 w-full h-[85%] md:h-[85%] lg:h-full xl:h-full 2xl:h-[85%] bg-[#01195d] z-0" />

      {/* Main Container Content */}
      <div className="custom-container relative z-10 pt-16 md:pt-20 lg:pt-24 pb-12 lg:pb-16 ">
        {/* Top Header Section */}
        <div
          className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <h2 className="anton-font font-normal text-white section-title leading-tight tracking-wide">
            Trusted Solutions For Every Journey
          </h2>
          <div className="flex-shrink-0">
            <Button href="#" variant="white">
              Browse Products
            </Button>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-white/20 my-8 md:my-10" />

        {/* Two-Column Section with Protruding Video */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column - Key Features Content */}
          <div
            className="xl:col-span-3  flex flex-col justify-center "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 className="anton-font font-normal text-white section-subtitle1 leading-snug mb-3 tracking-wide">
              Key Features
            </h3>
            <p className="oswald-font font-normal text-white section-text leading-relaxed mb-6">
              Designed for passenger and light commercial vehicles, AYD brake pads provide the confidence professionals and drivers expect. Extensive testing guarantees dependable performance, durability, and safety in everyday and demanding applications.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-4 mb-8">
              {bulletPoints.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-[#01195d] flex items-center justify-center mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-3.5 h-3.5 stroke-[3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="oswald-font font-normal text-white section-text leading-relaxed">
                    <span className="font-semibold text-white mr-1">
                      {item.title} –
                    </span>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Video Clip 02 Protruding over Bottom White Area */}
          <div
            className="xl:col-span-9 w-full relative z-20"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full aspect-video rounded-4xl bg-white p-3 md:p-5 border border-white/15 overflow-hidden ">
              <div className="w-full h-full rounded-4xl overflow-hidden relative">
                <DynamicVideoPlayer
                  type="short-2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
