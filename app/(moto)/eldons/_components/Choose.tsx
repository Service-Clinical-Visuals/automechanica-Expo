"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Choose() {
  return (
    <section className="relative w-full bg-[var(--color-primary)] text-white py-16 min-[3800px]:py-24 overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col items-center justify-center text-center  mx-auto gap-4 mb-3" data-aos="fade-up">
          <Typography variant="h2" color="white">Why Choose Our Engine Oil?</Typography>

          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[70%] text-white/90">
            Our engine oils are developed using advanced lubricant technology to deliver consistent performance, reduce engine wear, and extend engine life. Engineered to meet the demands of modern vehicles, they provide reliable lubrication, enhanced protection against heat and friction, and smooth operation in both everyday driving and demanding conditions. Whether on city roads or long-distance journeys, they deliver dependable performance you can trust.
          </Typography>
        </div>

        <div className="xl:max-w-[70%] mx-auto" data-aos="zoom-in" data-aos-delay="150">
          <div className="w-full h-full aspect-video  overflow-hidden shadow-2xl  flex items-center justify-center">
            <DynamicVideoPlayer type="short-2" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
