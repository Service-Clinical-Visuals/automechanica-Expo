"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import SectionNumber from "./SectionNumber";


export default function WhyChoose() {
  const points = [
    "Optimized for hybrid and modern engine technology",
    "Reliable performance in varying temperatures",
    "Supports fuel-efficient performance",
    "Smooth lubrication during start-stop operation",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden" id="why-choose">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Video Player */}
          <div className="lg:col-span-7 w-full" data-aos="fade-right">
            {/* Video container */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden ">
              <DynamicVideoPlayer 
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none "
              />
            </div>
          </div>

          {/* Right Column: Text & Features List */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8" data-aos="fade-left">
            <div className="space-y-2">
              <Typography variant="h2" color="dark" weight="semibold" className="font-montserrat leading-tight text-3xl md:text-4.5xl text-[#1a1a1a]">
                Why Choose K2 5W-30 HYBRID
              </Typography>
            </div>

            {/* Description Copy */}
            <Typography variant="body" color="body" className="text-[14px] md:text-[15px] leading-relaxed text-gray-600 font-normal">
              K2 5W-30 HYBRID 5L is formulated to support efficient engine performance while delivering dependable protection for everyday driving conditions. Designed for modern hybrid systems, it helps maintain smooth operation, reduce internal deposits, and provide consistent lubrication for improved engine responsiveness and long-term reliability.
            </Typography>

            {/* Custom Bullet Points */}
            <div className="space-y-3.5">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <img 
                    src="/moto/melle-sp/icon.png" 
                    alt="Bullet Icon" 
                    className="w-6 h-6 md:w-7 md:h-7 object-contain shrink-0" 
                  />
                  <Typography variant="body" className="text-[15px] text-[#484848]">
                    {pt}
                  </Typography>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button text="Know More" variant="k2" href="#why-choose-more" />
            </div>
          </div>

        </div>
      </Container>


      <SectionNumber number="04" position="left" />
    </section>
  );
}
