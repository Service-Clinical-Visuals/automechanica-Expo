"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        {/* Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-title exo2-font font-bold text-[#000000] leading-tight">About Inno Piston</h2>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="w-full h-full" data-aos="fade-right">
            <img
              src="/moto/inno/abt1.png"
              alt="Inno Piston Facility 1"
              className="w-full h-full object-cover rounded-[8px]"
              onError={(e) => { e.currentTarget.src = "/moto/cevam/abt.png" }}
            />
          </div>
          <div className="w-full h-full" data-aos="fade-left">
            <img
              src="/moto/inno/abt2.png"
              alt="Inno Piston Facility 2"
              className="w-full h-full object-cover rounded-[8px]"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 rounded-[8px]">Image 2</div>' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6" data-aos="fade-up">
          <p className="text-[#111111] inter-font section-text font-regular tracking-normal leading-relaxed">
            At Inno Piston, we specialize in manufacturing high-performance engine components that deliver exceptional reliability, efficiency, and durability. With decades of engineering expertise and advanced production technologies, we produce precision-crafted pistons, piston rings, and cylinder liners that meet the demanding requirements of modern passenger vehicles, commercial trucks, agricultural machinery, and industrial engines.
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <p className="text-[#111111] inter-font section-text font-regular tracking-normal leading-relaxed lg:w-[85%]">
              Driven by innovation and uncompromising quality, every product is manufactured using premium materials, precision machining, and rigorous quality control to ensure consistent performance under the most demanding operating conditions. Serving customers across global markets, Inno Piston continues to be a trusted partner for OEM and aftermarket engine solutions, providing components engineered for long service life, superior efficiency, and dependable performance.
            </p>
            <div className="lg:w-[15%] flex lg:justify-end mb-5">
              <Button href="#" className="text-center w-full lg:w-auto whitespace-nowrap">
                Learn More
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
