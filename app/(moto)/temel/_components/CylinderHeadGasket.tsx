"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function CylinderHeadGasket() {
  const points = [
    "Manufactured to meet OEM and OES quality standards with long service life",
    "Suitable for passenger vehicles, commercial vehicles, and heavy-duty machinery",
    "Ensures efficient combustion and prevents leakage of oil, coolant, and gases",
    "High resistance to extreme heat, pressure, and engine stress conditions",
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#F8F9FA] overflow-hidden" id="cylinder-head-gasket">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: 360 Video Player */}
          <div className="lg:col-span-6 xl:col-span-7 w-full" data-aos="fade-right">
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200/80 bg-white">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content & Features */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-5 lg:gap-6" data-aos="fade-left">
            
            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                Cylinder Head Gasket
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h1" className="font-bold leading-tight ">
              High-Performance Cylinder Head Gasket Solution
            </Typography>

            {/* Paragraph Description */}
            <Typography variant="p" className="max-w-xl lg:max-w-2xl">
              Our cylinder head gaskets are engineered to provide reliable sealing between the engine block and cylinder head, ensuring optimal combustion efficiency & preventing leakage of gases and fluids. Designed using advanced technologies such as multi-layer steel (MLS) and metal-rubber combinations, these gaskets deliver superior durability and performance in modern engines.
            </Typography>

            {/* Bullet Points */}
            <div className="flex flex-col gap-3.5 pt-1">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" strokeWidth={2.5} />
                  <Typography variant="p">
                    {point}
                  </Typography>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Cylinder Head Gasket"
                href="#cylinder-head-gasket"
                variant="outline"
                showIcon={false}
                className="px-6 py-2.5"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
