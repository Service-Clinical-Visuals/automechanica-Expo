"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function PremiumEngine() {
  const features = [
    "With over two decades of expertise, EXXOL D.O.O. delivers reliable lubrication solutions for a wide range of automotive and industrial applications.",
    "Formulated with premium base oils and advanced additives, EXXOL Engine Oils protect against wear, corrosion, and oxidation for longer engine life.",
    "Advanced detergent technology helps prevent sludge and deposits, keeping engines cleaner and performing efficiently.",
    "Designed to reduce friction, EXXOL oils improve fuel efficiency and support smoother engine operation."
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1E1E1E] text-white">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">

        {/* Top Section: Text & Video */}
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-8 items-center ">

          {/* Left Text Content */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6" data-aos="fade-right">
            <div>
              <Typography variant="h2" color="white" weight="bold" className="mb-2">
                Premium Engine Oils By EXXOL
              </Typography>
              <div className="w-[62%] h-px bg-[#FFFFFF66] mb-6"></div>
            </div>

            <div className="flex flex-col gap-4 text-white leading-relaxed">
              <p>
                For more than two decades, EXXOL D.O.O. has been delivering high-quality lubricants and engine oils designed to meet the demands of modern vehicles, commercial fleets, agricultural machinery, and industrial equipment. Built on a commitment to quality, accessibility, and performance, EXXOL combines carefully selected base oils with advanced additive technologies to produce engine oils that provide reliable protection and long-lasting performance.
              </p>
              <p>
                EXXOL Engine Oils are formulated to protect critical engine components against wear, corrosion, oxidation, and harmful deposits that can reduce efficiency and shorten engine life. The advanced formulations create a strong lubricating film that minimizes friction between moving parts, ensuring smooth operation even under high temperatures and heavy loads.
              </p>
            </div>

            <div className="mt-2">
              <Button text="View Product Range" variant="secondary" />
            </div>
          </div>

          {/* Right Video Content */}
          <div className="w-full xl:w-1/2" data-aos="fade-left">
            <div className="w-full aspect-video bg-white relative overflow-hidden flex items-center justify-center">
              <DynamicVideoPlayer type="360" />
            </div>
          </div>

        </div>

        {/* Divider line before features */}
        <div className="w-full h-px bg-[#FFFFFF66]"></div>

        {/* Bottom Section: Features 2x2 Grid */}
        <div className="relative w-full" data-aos="fade-up">

          {/* Polygon Center Image (Hidden on mobile/tablet) */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-34 h-34">
            <img
              src="/moto/exol/polygon.png"
              alt="EXOL Polygon"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 relative z-0">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 flex items-start gap-4 rounded-sm shadow-sm">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
