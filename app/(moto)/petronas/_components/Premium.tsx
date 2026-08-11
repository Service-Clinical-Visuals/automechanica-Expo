"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Premium() {
  return (
    <section className="relative w-full py-16  overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-8">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-6  pb-2" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[69%] items-center order-1">
            <Typography variant="h2" color="white" className="font-semibold text-center">
              Premium Performance for Every Journey
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed text-center">
              Our premium engine oils are engineered with advanced additive technology to deliver exceptional engine protection, superior lubrication, and long-lasting performance. Designed for modern petrol, diesel, and hybrid engines, they reduce friction, minimize wear, and protect critical engine components under demanding conditions. Their advanced formulation promotes smoother operation, improved fuel efficiency, enhanced thermal stability, and resistance to sludge and deposits, ensuring cleaner engines, extended service intervals, and reliable long-term performance.
            </Typography>
          </div>
        </div>

        {/* 360 Video Player */}
        <div className="w-full aspect-video mx-auto rounded-2xl  order-3 overflow-hidden relative  xl:max-w-[75%]" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
