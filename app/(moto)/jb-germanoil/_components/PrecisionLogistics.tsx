"use client";
import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

export default function PrecisionLogistics() {
  const features = [
    {
      title: "Precision Filling Technology",
      description: "Automated filling systems ensure every lubricant is packaged with exceptional accuracy and consistency.",
    },
    {
      title: "High-Quality Manufacturing",
      description: "Advanced production processes and strict quality control deliver reliable, high-performance lubricants for every application.",
    },
    {
      title: "Comprehensive Product Range",
      description: "Manufacturing engine oils, transmission oils, hydraulic fluids, greases, service products, and winter chemicals.",
    },
    {
      title: "Efficient Global Logistics",
      description: "An 80,000 m² facility with over 800,000 liters of ready stock ensures fast order fulfillment and worldwide distribution.",
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container flex flex-col px-8 md:px-12 lg:px-28">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 md:mb-12">
          <div className="max-w-6xl" data-aos="fade-right">
            <h2 className="aldrich-font section-title text-[#2a2a2a] mb-4 md:mb-5 tracking-wide">
              Precision Filling & Reliable Logistics
            </h2>
            <p className="akshar-font section-text text-[#4a4a4a] leading-relaxed max-w-6xl">
              Our advanced filling systems ensure accurate, efficient, and high-capacity lubricant packaging while maintaining the highest quality standards. Backed by reliable logistics and a well-stocked distribution network, we deliver premium lubricants quickly and efficiently to customers worldwide.
            </p>
          </div>
          <div data-aos="fade-left" className="flex-shrink-0">
            <Button href="#" iconType="arrowUpRight">
              Explore Our Logistics
            </Button>
          </div>
        </div>
        
        <hr className="w-full border-gray-300 mb-8 md:mb-10" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Features List */}
          <div className="flex flex-col gap-4 lg:gap-5 justify-center h-full xl:col-span-5">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-300 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 rounded-[2px] flex flex-col justify-center flex-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[var(--primary)] flex items-center justify-center shadow-sm">
                    <Check size={14} strokeWidth={3.5} className="text-white" />
                  </div>
                  <h3 className="aldrich-font card-title1 text-[#2a2a2a] m-0 font-normal">
                    {feature.title}
                  </h3>
                </div>
                <p className="akshar-font section-text text-[#4a4a4a] leading-relaxed ml-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div 
            className="w-full h-full overflow-hidden xl:col-span-7 flex items-center justify-center"
            data-aos="fade-left"
          >
            <img 
              src="/moto/jb-germanoil/precision.png" 
              alt="Precision Logistics" 
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
