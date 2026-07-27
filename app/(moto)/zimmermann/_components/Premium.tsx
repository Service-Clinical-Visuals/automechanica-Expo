"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section className="relative w-full bg-[#0D0D0D] py-16 md:py-24 overflow-hidden" id="premium">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3.5 h-3.5 bg-secondary shrink-0" />
            <h2 className="heading-white uppercase">Precision Engineered for Every Journey</h2>
          </div>
          <p className="content-white max-w-[1400px]">
            Experience Zimmermann&apos;s premium brake technology from every angle. Designed and
            manufactured in Germany, each brake disc combines precision engineering, advanced
            materials, and rigorous quality standards to deliver exceptional braking performance,
            durability, and reliability for everyday driving and demanding conditions.
          </p>
        </div>

        <div className="w-full h-px bg-white/15 mt-10 mb-12" />

        <div
          className="relative w-full max-w-[1200px] mx-auto aspect-video overflow-hidden"
          data-aos="zoom-in"
        >
          <span className="absolute inset-0 flex items-center justify-center heading text-[28px]! text-[#1A1A1A]">
            360 Deg Video
          </span>
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Container>
    </section>
  );
}
