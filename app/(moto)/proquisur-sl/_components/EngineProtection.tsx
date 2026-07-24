"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { ArrowUpRight } from "lucide-react";

export default function EngineProtection() {
  const bulletPoints = [
    "Wide range of high-performance automotive and industrial products",
    "Advanced formulations delivering superior protection and high-performance efficiency",
    "Precision-designed for diverse vehicle types and demanding applications",
    "Ensures durability, efficiency, and long service life"
  ];

  return (
    <section className="py-20 xl:py-20 bg-[#2C2C2C]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left: Video 01 */}
          <div className="w-full aspect-video relative overflow-hidden flex items-center justify-center xl:col-span-7" data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-4 xl:col-span-5" data-aos="fade-left">
            {/* Heading */}
            <div className="flex flex-col gap-2 items-start">
              <Typography variant="h4" className="!text-[#6FB420] manrope font-bold text-sm tracking-wide">
                Complete Lubrication & Chemical Solutions
              </Typography>
              <Typography variant="h2" className="section-title text-white manrope font-bold leading-tight">
                High-performance fluids designed for every application
              </Typography>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 inter responsive-text-base text-white">
              <Typography variant="p" className="!text-white">
                We offer a comprehensive range of lubricants, fluids, and specialty chemical solutions developed to meet the demands of modern vehicles and industrial systems. From engine oils and hydraulic fluids to additives and coolants, our products are formulated with advanced technology to ensure maximum protection, efficiency, and long-term reliability.
              </Typography>
            </div>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-2">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#6FB420] font-bold mt-0.5 text-lg leading-none">-</span>
                  <Typography variant="span" color="none" className="text-[#E0E0E0] inter font-medium responsive-text-base leading-snug">
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-2">
              <Button href="#" variant="primary" className="!rounded-md group">
                Explore Products <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
