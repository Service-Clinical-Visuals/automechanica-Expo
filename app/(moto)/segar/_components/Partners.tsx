"use client";

import React from "react";
import { Telescope, Target } from "lucide-react";

export default function Partners() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-right">
            <h3 className="text-[#DF1222] roboto-font font-semibold section-text mb-3">Our Mission Vision</h3>
            <h2 className="section-title text-[#202020] roboto-font font-semibold leading-tight mb-6">
              Driving Innovation Through Purpose and Vision Together
            </h2>
            <p className="text-[#404040] outfit-font section-text font-regular leading-relaxed">
              Guided by our purpose and driven by innovation, we are committed to creating meaningful value for our customers and partners while contributing positively to the world we live in. Through continuous improvement, sustainable practices, and a forward-thinking approach, we strive to build long-term relationships, support industry progress, and deliver solutions that meet evolving global needs.
            </p>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">

            {/* Vision Card */}
            <div className="bg-white rounded-md border border-gray-200 border-b-[4px] hover:border-[#DF1222] transition-all duration-300 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <Telescope className="text-[#DF1222]" size={32} strokeWidth={2} />
              </div>
              <h4 className="text-[#202020] roboto-font font-bold card-title mb-4">Our Vision</h4>
              <p className="text-[#404040] outfit-font card-text font-regular leading-relaxed">
                To position SEGER as a leading technological product designer and manufacturer in the mobility ecosystem, while strengthening the brand through expanded product diversity in the aftermarket.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-md border border-gray-200 border-b-[4px] hover:border-[#DF1222] transition-all duration-300 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <Target className="text-[#DF1222]" size={32} strokeWidth={2} />
              </div>
              <h4 className="text-[#202020] roboto-font font-bold card-title mb-4">Our Mission</h4>
              <p className="text-[#404040] outfit-font card-text font-regular leading-relaxed">
                To drive continuous improvement through stakeholder collaboration, guided by ethical, sustainable, and innovative business practices, while fulfilling our responsibilities to society.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
