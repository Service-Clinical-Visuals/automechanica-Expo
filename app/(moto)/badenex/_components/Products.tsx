"use client";

import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Products() {
  return (
    <section className="py-20 xl:py-20 bg-[#3B4148] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/moto/sigam/bg.png')] bg-repeat bg-center"></div>

      <div className="custom-container relative z-10">

        {/* Top Header & Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4" data-aos="fade-up">
          <div className="flex flex-col gap-2 max-w-4xl min-[2560px]:max-w-[70%] min-[3800px]:max-w-[80%]">
            <h2 className="section-title title-bordered oswald-font text-white font-bold tracking-wide">
              Research & Development
            </h2>
          </div>

          <Button href="#" variant="primary" className="text-white mt-4 md:mt-0 flex items-center gap-2">
            Explore More <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Sub Header Text */}
        <div className="mb-12 border-b border-white/10 pb-8" data-aos="fade-up">
          <p className="text-[#E5E7EB] lato-font section-text leading-relaxed opacity-90 max-w-5xl min-[2560px]:max-w-[80%] min-[3800px]:max-w-[90%]">
            Our Research & Development process combines advanced technology, expertise, and precision engineering to create high-performance lubricants. Through continuous research and testing, we develop engine oils and additives that meet the needs of modern engines.
          </p>
        </div>

        {/* Grid Video & Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* Left Video */}
          <div className="w-full h-[300px] sm:h-[400px] xl:h-[500px] rounded-lg shadow-2xl overflow-hidden relative" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h3 className="section-title text-white oswald-font font-semibold">
              Engineering Better Performance
            </h3>

            <p className="text-[#FFFFFF] section-text lato-font leading-relaxed opacity-90 ">
              Our dedicated research and development team creates advanced engine oil formulations and additive technologies that enhance lubrication, engine protection, and fuel efficiency. Every product is rigorously tested to ensure consistent quality, reliable performance, and compliance with the highest automotive standards.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <img src="/moto/badenex/search1.png" alt="Icon" className="w-5 h-5 object-contain" />
                </div>
                <p className="text-[#FFFFFF] lato-font section-text font-medium opacity-90 ">
                  Developing advanced engine oil formulations and additive technologies to improve lubrication, protection, and fuel efficiency.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <img src="/moto/badenex/search2.png" alt="Icon" className="w-5 h-5 object-contain " />
                </div>
                <p className="text-[#FFFFFF] lato-font section-text font-medium opacity-90  ">
                  Every product undergoes rigorous laboratory testing and performance evaluation to ensure consistent quality, reliability, and compliance with demanding automotive standards.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
