"use client";

import React from "react";
import Button from "./Button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Sustainability() {
  const points = [
    "Advanced Manufacturing Processes Focused on Efficiency and Product Longevity",
    "High-Quality Automotive Components Designed to Reduce Waste and Extend Service Life",
    "Continuous Innovation Supporting Sustainable Automotive Manufacturing Solutions",
    "Strict Quality Control Standards Ensuring Reliable and Environmentally Responsible Production",
    "Global Manufacturing Network Committed to Consistent Quality and Operational Excellence",
    "Supporting Long-Term Customer Success Through Durable and Sustainable Automotive Products",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="sustainability">
      <div className="custom-container">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="max-w-6xl" data-aos="fade-right">
            <h2 className="section-title font-semibold text-[#333333] mb-4 ">
              Driving Sustainability Through Innovation &amp; Responsible Manufacturing
            </h2>
            <p className="section-text text-[#585858] font-light max-w-6xl">
              At ITW INTERNATIONAL LTD, sustainability is embedded in our manufacturing approach. Through advanced production technologies, strict quality control, and durable automotive components, we improve efficiency, reduce waste, and deliver products built for long-term performance.
            </p>
          </div>
          <div className="flex-shrink-0 mb-2 md:mb-0" data-aos="fade-left">
            <button className="w-14 h-14 rounded-full bg-[#585858] text-white hover:bg-gray-700 transition-colors flex items-center justify-center group">
              <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column - Bullet Points Card */}
          <div className="xl:col-span-4 bg-white border border-gray-100 shadow-md p-10 rounded-sm h-full flex flex-col justify-center" data-aos="fade-right" data-aos-delay="100">
            <ul className="space-y-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img src="/itw-international/tck1.png" alt="check" className="w-5 h-5 mt-1" />
                  <p className="text-[#4a4a4a] font-normal section-text">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
         
           <div className="w-full relative rounded-lg overflow-hidden xl:col-span-8" data-aos="fade-right" data-aos-delay="100">
            <img
              src="/moto/itw-international/sustain.png"
              alt="White Sports Car - Reliable Solutions"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 w-full" data-aos="fade-up" data-aos-delay="300">
          <p className="text-[#4a4a4a] font-normal section-text text-left max-w-5xl">
            We continuously invest in innovation and responsible manufacturing to create reliable automotive solutions that support a more sustainable future. Our commitment to quality, operational excellence, and continuous improvement helps meet the evolving needs of the global automotive industry.
          </p>
          <div className="flex-shrink-0">
            <Button href="#" variant="primary" hasArrow>
              Our Sustainability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
