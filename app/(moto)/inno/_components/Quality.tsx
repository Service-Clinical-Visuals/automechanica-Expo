"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Quality() {
  return (
    <section className="py-16 xl:py-20 bg-[#EDEDED]">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:col-span-6" data-aos="fade-right">
            <div>
              <h2 className="section-title font-bold exo2-font text-[#000000] leading-tight mb-4">
                Laboratory & Quality Assurance
              </h2>
              <p className="card-title inter-font text-[#000000] italic">
                Precision Testing. Proven Performance.
              </p>
            </div>

            <div className="text-[#000000] section-text inter-font leading-relaxed">
              <p className="text-[#000000] section-text inter-font font-regular mb-2">
                Every Inno Piston component is subjected to comprehensive laboratory testing and precision inspection throughout the manufacturing process to ensure exceptional quality, reliability, and long-term performance. From raw material verification to final product approval, each stage is monitored using advanced measuring instruments and internationally recognized quality control procedures to maintain the highest manufacturing standards.Our laboratory is equipped with high-precision testing equipment that evaluates critical dimensions, surface finish, material properties, hardness, concentricity, and overall component integrity. Every piston, piston ring, and cylinder liner is carefully inspected to verify dimensional accuracy, manufacturing consistency, and compliance with strict engineering tolerances, ensuring a perfect fit and dependable operation under demanding engine conditions.
              </p>
            </div>

            <div className="mt-2">
              <Button href="#">
                View Gallery
              </Button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full h-full" data-aos="fade-left">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-full h-full overflow-hidden bg-gray-200">
                <img
                  src={`/moto/inno/q${i}.png`}
                  alt={`Quality check ${i}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-500 text-sm">Image ${i}</div>` }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
