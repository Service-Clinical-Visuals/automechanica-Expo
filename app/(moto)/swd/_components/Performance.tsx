"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Performance = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 md:gap-10">

        {/* Main Content Grid (Video Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Video Side (Span 6) */}
          <div className="lg:col-span-6 w-full flex justify-center" data-aos="fade-right">
            <div className="w-full aspect-video max-h-[420px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] 2xl:max-h-[720px] rounded-2xl md:rounded-[28px] overflow-hidden bg-gray-900 relative shadow-lg flex items-center justify-center">
              <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Content Side (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-2 w-full" data-aos="fade-left">
            <h2 className="font-primary font-bold text-3xl md:text-4xl lg:text-[42px] text-[#2D3B6F] leading-tight">
              Engineered for Reliable Performance
            </h2>

            <p className="font-secondary font-normal text-[#4B5563] text-sm md:text-base lg:text-lg leading-relaxed">
              Rheinol engine oils are developed to meet the latest international quality standards and OEM specifications. Manufactured with precision and tested for performance, they provide dependable protection, improved efficiency, and long-lasting engine reliability in demanding operating conditions.
            </p>

            <p className="font-secondary font-normal text-[#222222] text-sm md:text-base lg:text-lg leading-relaxed">
              Suitable for modern gasoline and diesel engines, including turbocharged and direct-injection vehicles. Available in a wide range of viscosity grades to meet the requirements of passenger cars, light commercial vehicles, trucks, and industrial machinery.
            </p>

            <p className="font-secondary font-bold text-[#222222] text-sm md:text-base lg:text-lg leading-relaxed">
              Rheinol Engine Oil by SWD Lubricants is designed to deliver exceptional engine protection and consistent performance across a wide range of driving conditions.
            </p>

            <div className="mt-2">
              <Button text="Explore Engine Oil" href="#explore-engine-oil" variant="primary" showIcon={true} />
            </div>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

        {/* Bottom Italic Bold Statement */}
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <p className="font-secondary font-bold italic text-[#2D3B6F] text-base md:text-lg lg:text-xl leading-relaxed">
            Provides fast oil flow for immediate engine protection and <br />Reduces internal resistance for improved performance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Performance;
