"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 bg-[#151515] text-white overflow-hidden">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full aspect-video lg:col-span-6 overflow-hidden relative flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 lg:col-span-6" data-aos="fade-left">
            <h2 className="section-title exo2-font font-bold text-white leading-tight">
              Driving Innovation Through Precision Engineering
            </h2>

            <div className="flex flex-col gap-5 -ml-6">
              {[
                { title: "Advanced Production Technology", desc: "State-of-the-art manufacturing equipment ensures exceptional precision and consistent product quality." },
                { title: "Comprehensive Quality Inspection", desc: "Every component undergoes detailed testing and dimensional verification before approval." },
                { title: "Engineered for Maximum Performance", desc: "Designed to withstand high temperatures, heavy loads, and demanding operating conditions." }
              ].map((item, idx) => (
                <div key={idx} className="relative ml-7 bg-white rounded-lg py-3 pr-3 pl-10 flex items-start shadow-sm">
                  <div className="absolute -left-7 gap-8 top-0 w-14 h-14 bg-[#151515] rounded-full flex items-center justify-center text-[#F25C27]">
                    <img src="/moto/inno/setting.png" alt="Icon" className="w-auto h-auto object-contain" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[#000000] section-text inter-font font-regular leading-relaxed"><strong className="exo2-font font-bold">{item.title}</strong> - {item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Button href="#">
                View Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
