"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Lubricants() {
  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 text-white">
      <Container className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-full mx-auto mb-10 space-y-6" data-aos="fade-up">
          <Typography variant="h5" color="white" weight="semibold" className="mb-4 font-orbitron">
            Premium Lubricants For Every Drive
          </Typography>

          <Typography variant="p" className="text-white max-w-[90%] md:max-w-[80%] mx-auto leading-relaxed text-[13px] md:text-[14px]">
            Mapetrol provides a complete range of high-performance lubricants and automotive fluids designed to meet the needs of modern vehicles and industrial applications. Engineered with advanced formulations, our products deliver exceptional engine protection, improved efficiency, and reliable performance under all driving conditions. Whether for passenger cars, motorcycles, commercial fleets, or specialized equipment, Mapetrol ensures lasting quality and dependable lubrication for every journey.
          </Typography>
        </div>

        {/* 360 Degree Video Player */}
        <div className="w-full lg:h-[calc(100vh-100px)]  mx-auto rounded-xl overflow-hidden shadow-2xl relative bg-[#2a2a2a] aspect-video flex items-center justify-center border border-gray-800" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer type="360" />
        </div>

      </Container>
    </section>
  );
}
