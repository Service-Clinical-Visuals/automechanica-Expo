"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { ArrowUpRight } from "lucide-react";

export default function PrecisionView() {
  const bulletPoints = [
    "Developed with advanced formulations and quality standards",
    "Suitable for multiple vehicle types and industrial applications"
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
                Delivering High-Performance Solutions Across Diverse Applications
              </Typography>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-[#494949] inter section-text responsive-text-base">
              <Typography variant="p">
                Our product range is designed to meet the evolving demands of modern automotive and industrial sectors, offering reliable and efficient solutions for a wide variety of applications. With a strong focus on quality, innovation, and performance, we provide products that ensure optimal functionality, durability, and long-term value. From advanced lubrication solutions to specialized industrial products, every offering is developed to enhance efficiency, protect critical systems, and support consistent performance under demanding conditions.
              </Typography>
            </div>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-2 mt-2">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#6FB420] font-bold  text-2xl leading-none">-</span>
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
