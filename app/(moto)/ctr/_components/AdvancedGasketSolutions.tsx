"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function AdvancedGasketSolutions() {
  const bulletPoints = [
    "Developed to meet OEM and OES standards with consistent quality and precision engineering",
    "Suitable for high-temperature, high-pressure environments ensuring long service life and efficiency",
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#F8F9FA] overflow-hidden" id="sealing-solutions">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Video 02 Player */}
          <div className="lg:col-span-6 w-full order-2 lg:order-1" data-aos="fade-right">
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200/80 bg-white">
              <DynamicVideoPlayer
                type="short-2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="100">
            
            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                Advanced Cylinder Head Gaskets
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h2" className="font-bold leading-tight">
              Comprehensive Gasket & Sealing Solutions
            </Typography>

            {/* Paragraphs */}
            <div className="flex flex-col gap-3.5">
              <Typography variant="p">
                We offer a wide range of high-quality gasket and sealing products designed for automotive and industrial applications. From cylinder head gaskets to valve cover, manifold, and turbo gaskets, our solutions are engineered to ensure reliable sealing, durability, and optimal performance across modern engine systems.
              </Typography>

              <Typography variant="p">
                Manufactured using advanced materials such as multi-layer steel, rubber-coated metals, and non-asbestos composites, our products are built to withstand extreme temperatures, pressure, and demanding operating conditions.
              </Typography>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-3.5 pt-1">
              {bulletPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" strokeWidth={2.5} />
                  <Typography variant="p">
                    {item}
                  </Typography>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Products"
                href="#sealing-solutions"
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
