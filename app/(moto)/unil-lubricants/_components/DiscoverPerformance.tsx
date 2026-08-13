"use client";
import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function DiscoverPerformance() {
  const highlights = [
    {
      title: "Advanced Engine Protection",
      desc: "- Helps reduce wear and keeps critical engine components protected."
    },
    {
      title: "Enhanced Performance",
      desc: "- Supports smooth operation, improved efficiency, and reliable power delivery."
    },
    {
      title: "Engineered for Modern Vehicles",
      desc: "- Developed to meet the performance requirements of today's passenger and commercial vehicles."
    },
    {
      title: "Trusted Quality",
      desc: "- Manufactured with premium formulations and rigorous quality standards for dependable performance."
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 z-0">
      {/* Background split */}
      <div className="absolute inset-x-0 top-0 h-[45%] bg-[#111111] -z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-white -z-10"></div>

      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-12" data-aos="fade-up">
          <div className="max-w-7xl">
             <h2 className="oswald-font font-semibold text-[#ffffff] section-title mb-6">
              Discover Engine Oil Performance
            </h2>
           <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
              See how UNIL engine oils are engineered to deliver exceptional engine protection, improved efficiency, and reliable performance. Watch the product in action and discover the advanced technology behind lubricants designed to perform in everyday driving and demanding operating conditions.
            </p>
          </div>
          
          <div className="flex-shrink-0 pt-2 xl:pt-0">
            <Button href="#">
              Explore Now
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column - Highlights Card */}
          <div className="xl:col-span-3 bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8 flex flex-col" data-aos="fade-right" data-aos-delay="100">
            <h3 className="oswald-font font-medium text-[#002D5B] card-text mb-4 ">
              Performance Highlights
            </h3>
            <p className="lato-font text-[#3a3a3a] section-text font-normal leading-relaxed">
              A quick look at the key benefits of UNIL engine oils, including superior wear protection, smoother engine operation, improved efficiency, and dependable performance across a wide range of driving conditions.
            </p>

            <ul className="flex flex-col gap-5 mb-8 flex-grow mt-5">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="/moto/unil-lubricants/icon.png" alt="arrow" className="mt-1.5" />
                  <p className="oswald-font text-[#3a3a3a] section-text font-normal leading-[1.6]">
                    <strong className="text-[#111111] font-medium">{item.title}</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex justify-center">
              <Button href="#" className="bg-[#0A2B52] hover:bg-[#071D3A] text-white !py-2 !px-6 text-sm !font-normal">
                Explore More
              </Button>
            </div>
          </div>

          {/* Right Column - Video Card */}
          <div className="xl:col-span-9 w-full aspect-video border border-gray-200 rounded-xl shadow-lg overflow-hidden relative flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
           
            <div className="absolute inset-0">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
