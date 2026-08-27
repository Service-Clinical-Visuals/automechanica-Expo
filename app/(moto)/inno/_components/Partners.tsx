"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Partners() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:col-span-4" data-aos="fade-right">
            <h2 className="section-title font-bold exo2-font text-[#000000] leading-tight">
              Engineering Excellence by Design
            </h2>

            <div className="section-text font-regular inter-font text-[#000000] leading-relaxed mb-2">
              <p>
                At Inno Piston, engineering is the foundation of every high-performance engine component we manufacture. By combining advanced 3D CAD/CAM technologies, precision modeling, and engineering expertise, we develop pistons, piston rings, and cylinder liners that meet the highest standards of quality, efficiency, and durability. Every design is optimized to deliver exceptional performance, reliability, and long service life across automotive, commercial, agricultural, and industrial applications.
              </p>
            </div>

            <div className="mt-2">
              <Button href="#">
                View Technical Expertise
              </Button>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full" data-aos="fade-left">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/moto/inno/partner1.png"
                alt="CAD Design 1"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">Image 1</div>' }}
              />
            </div>
            <div className="w-full h-full overflow-hidden">
              <img
                src="/moto/inno/partner2.png"
                alt="CAD Design 2"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">Image 2</div>' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
