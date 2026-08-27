"use client";

import React from "react";
import Button from "./Button";
import { Wrench, CheckCircle } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden bg-[#111827]">
      <div className="custom-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="section-title text-white oswald-font font-semibold mb-4">
            Behind Every Remanufactured Component
          </h2>
          <p className="rubik-font text-white font-regular section-text max-w-4xl mx-auto leading-relaxed">
            Standard exchange programs restore automotive components to original specifications through expert remanufacturing, delivering reliable performance, durability, and cost-effective solutions.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white mb-12" data-aos="fade-up"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-lg order-1 lg:col-span-7" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col order-2 lg:col-span-5" data-aos="fade-left">
            <p className="rubik-font text-white font-regular section-text leading-relaxed mb-8">
              From inspection and refurbishment to rigorous quality control, every stage follows strict standards to ensure consistent quality and reliability. Backed by extensive product expertise and experienced teams, CEVAM delivers remanufactured components engineered for long-lasting performance, durability, and dependable operation.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg p-5 flex items-start gap-4 shadow-sm">
                <Wrench className="text-[#0195DA] flex-shrink-0 mt-1" size={28} strokeWidth={2.5} />
                <p className="text-[#272727] rubik-font font-regular card-text leading-relaxed">
                  Restored to original specifications for reliable performance, precise fit, and long-lasting durability.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-lg p-5 flex items-start gap-4 shadow-sm">
                <CheckCircle className="text-[#0195DA] flex-shrink-0 mt-1" size={28} strokeWidth={2.5} />
                <p className="text-[#272727] font-regular rubik-font card-text leading-relaxed">
                  Strict quality control ensures dependable performance, consistent reliability, and trusted quality.
                </p>
              </div>
            </div>

            <Button href="#" variant="secondary" className="btn-text font-semibold w-fit px-8 py-3 !border-[3px] !text-[#272727] !rounded-[6px] !bg-white">
              Explore
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

