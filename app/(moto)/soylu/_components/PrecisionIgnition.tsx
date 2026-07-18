"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import HexagonButton from "./HexagonButton";
import Link from "next/link";

const features = [
  {
    title: "High-Voltage Performance",
    desc: "Delivers a strong and consistent spark for efficient combustion."
  },
  {
    title: "Smooth Engine Operation",
    desc: "Reduces engine misfires and enhances overall driving performance."
  },
  {
    title: "Improved Fuel Efficiency",
    desc: "Optimizes combustion for lower fuel consumption and reduced emissions."
  }
];

export default function PrecisionIgnition() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="custom-container">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-aos="fade-up">
          {/* Left: Large video */}
          <div className="lg:col-span-8">
            <div className="rounded-[16px] overflow-hidden bg-[#f3f5f3] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="aspect-[16/10] md:aspect-[16/9] w-full">
                <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Title + features */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#163B30] mb-4">Precision Emission Control</h2>
            <p className="text-sm text-[#6b6b6b] mb-6">Designed for heavy-duty vehicles, SOYLU EXHAUST & AUTOMOTIVE A.S. NOx Sensors provide dependable emission monitoring while enhancing engine efficiency and reducing environmental impact. Every sensor is manufactured to deliver long-lasting reliability and consistent performance.</p>

            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <strong className="text-[#163B30]">Fast & Stable Response</strong>
                  <p className="text-sm text-[#5a6660]">Delivers accurate real-time emission data for consistent, precise engine monitoring and system performance.</p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <strong className="text-[#163B30]">Enhanced Fuel Efficiency</strong>
                  <p className="text-sm text-[#5a6660]">Supports optimized combustion, helping improve fuel economy while maximizing overall engine performance, efficiency, and reliability.</p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/Subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <strong className="text-[#163B30]">Corrosion-Resistant Design</strong>
                  <p className="text-sm text-[#5a6660]">Manufactured with durable materials to withstand harsh operating environments, ensuring long-term reliability and durability.</p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/Subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <strong className="text-[#163B30]">Easy System Integration</strong>
                  <p className="text-sm text-[#5a6660]">Compatible with a wide range of commercial vehicle makes, models, and engine management systems.</p>
                </div>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-6 mb-5">
          <div className="h-0 w-[1680px] max-w-full border-t border-[#00000042]" />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
          <p className="text-xs text-[#4f4f4f] max-w-4xl">Delivering Advanced NOx Sensor Technology That Ensures Precise Emission Monitoring, Optimized Engine Efficiency, And Reliable Performance For Modern Heavy-Duty Commercial Vehicles.</p>
          <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-none rounded-tr-[20px] bg-[#0F3D26] text-xs px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0b2c18]"
          >
              Explore Product
            <img src="/moto/soylu/arrow (1).png" alt="Arrow" className="ml-2 h-3 w-auto" />
            </Link>
          </div> 
        </div>

      </div>
    </section>
  );
}
