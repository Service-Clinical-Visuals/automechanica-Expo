"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Automotive = () => {
  return (
    <section id="automotive" className="w-full py-16 min-[3200px]:py-[120px] bg-[#F9F9F9]">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 items-center">

        {/* Video */}
        {/* Mobile: Order 2, Desktop: Col 1-6 */}
        <div className="w-full order-2 xl:order-1 xl:col-span-7 aspect-video relative rounded-lg overflow-hidden shadow-sm" data-aos="zoom-in">
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content (Heading + Text + Button) */}
        {/* Mobile: Order 1, Desktop: Col 7-12 */}
        <div className="flex flex-col gap-6 order-1 xl:order-2  xl:col-span-5 w-full" data-aos="fade-left">

          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="secondary" className="font-bold">
              Automotive Filters
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Complete Automotive Filtration Solutions
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Our comprehensive product range includes high-performance air, oil, fuel, and cabin air filters designed to ensure optimal engine efficiency and a cleaner, healthier driving environment. Each filter is developed using advanced materials and precision manufacturing techniques to meet strict technical standards, ensuring consistent quality and long-lasting performance across a wide range of vehicle types. Engineered for reliability and durability, our filters effectively capture harmful contaminants, protect vital engine components, and maintain smooth system operation even under demanding conditions. By optimizing airflow and filtration efficiency, they contribute to improved fuel economy, reduced emissions, and enhanced overall vehicle performance.
            </Typography>
          </div>

          <div className="w-full mt-2" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Cabin Filter" variant="secondary" href="#automotive" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Automotive;
