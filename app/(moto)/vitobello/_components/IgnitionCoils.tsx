"use client";

import React from "react";
import Typography from "./Typography";
import { Check, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function IgnitionCoils() {
  const points = [
    "Precision Manufacturing – Engineered with advanced machining technology to ensure exceptional accuracy, optimal fitment, and reliable engine performance.",
    "Superior Durability – Manufactured from premium-quality materials to withstand high temperatures, pressure, and continuous engine operation.",
    "Optimized Engine Efficiency – Designed to reduce wear, improve performance, and support smooth, long-lasting engine operation.",
    "Comprehensive Quality Assurance – Every component undergoes rigorous inspection and testing to meet strict quality standards and ensure dependable reliability."
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#2C2C2C] overflow-hidden" id="performance">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">

        {/* Header Block: Centered Title & Desc */}
        <div className="flex flex-col items-center text-center mx-auto max-w-5xl gap-3 md:gap-4" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight">
            Built For Performance & Reliability
          </Typography>
          <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base">
            Built with premium materials and advanced manufacturing processes, Vitobello Ricambi components deliver maximum reliability under demanding engine conditions. From engine rebuilding to routine maintenance, they provide the dependable performance automotive professionals trust.
          </Typography>
        </div>

        {/* Video & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center mt-4">

          <div className="w-full lg:col-span-8" data-aos="fade-right">
            <div className="w-full aspect-video rounded-sm overflow-hidden shadow-2xl relative bg-[#e5e5e5] flex items-center justify-center">
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Title & Checklist */}
          <div className="flex flex-col justify-center gap-6 xl:gap-10 lg:col-span-4" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <Typography variant="h2" color="white" className="font-semibold leading-tight text-3xl md:text-4xl">
                Engineered For Lasting Performance
              </Typography>
              <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm">
                Every Vitobello Ricambi engine component is precision-engineered to deliver exceptional efficiency, durability, and reliability for professional engine repair and demanding operating conditions.
              </Typography>
            </div>

            <div className="flex flex-col gap-5 lg:gap-6 mt-2">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#2C2C2C]" strokeWidth={4} />
                  </div>
                  <Typography variant="p" color="white" className="text-white/90 leading-snug text-sm">
                    {point}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="bg-[#F47944] hover:bg-[#F47944]/90 text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 max-w-max text-sm">
                View Product Details
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-2">
                  <ArrowUpRight className="w-4 h-4 text-[#F47944]" strokeWidth={2.5} />
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
