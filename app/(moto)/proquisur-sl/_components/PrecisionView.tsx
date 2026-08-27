"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { ArrowUpRight } from "lucide-react";

export default function PrecisionView() {
  const bulletPoints = [
    "High-quality formulations for engine protection",
    "Reduces wear, friction, and deposits",
    "Enhances efficiency and engine lifespan",
    "Suitable for multiple vehicle and engine types"
  ];

  return (
    <section className="py-20 xl:py-20 bg-[#F9F9F9]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-2 order-2 xl:order-1 xl:col-span-5" data-aos="fade-right">
            {/* Heading */}
            <div className="flex flex-col gap-2 items-start">
              <Typography variant="h4" className="!text-[#6FB420] manrope font-bold text-sm tracking-wide">
                Our Product
              </Typography>
              <Typography variant="h2" className="section-title text-[#202020] manrope font-bold leading-tight">
                Advanced Engine Oil Solutions
              </Typography>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-[#494949] inter section-text responsive-text-base">
              <Typography variant="p">
                We offer a range of high-performance engine oils formulated to deliver superior protection, efficiency, and durability for modern engines. Developed using premium base oils and advanced additive technology, our products help reduce friction, prevent wear, and ensure smooth engine operation under demanding conditions.
              </Typography>
              <Typography variant="p">
                Designed to meet international standards, our engine oils provide reliable performance for passenger vehicles, commercial fleets, and industrial machinery.
              </Typography>
            </div>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-2 mt-2">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#6FB420] font-bold mt-0.5 text-2xl leading-none">-</span>
                  <Typography variant="span" color="none" className="text-[#494949] inter font-medium responsive-text-base leading-relaxed">
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-4">
              <Button href="#" variant="primary" className="!rounded-md group">
                Explore Engine Oil <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right: 360 Video Player */}
          <div className="w-full aspect-video relative overflow-hidden bg-gray-200 flex items-center justify-center order-1 xl:order-2 xl:col-span-7" data-aos="fade-left">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
