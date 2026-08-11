"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Deg360() {
  return (
    <section className="relative w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-8">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/40 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%] order-1">
            <Typography variant="h2" color="white" className="font-semibold">
              Discover Every Detail With Our Interactive 360° View
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              Explore our premium engine oil from every angle through an immersive 360° experience. Get a closer look at the packaging, product information, certifications, and advanced technology that make our lubricants a trusted choice for professionals worldwide.
            </Typography>
          </div>
          <div className="order-2 lg:mt-0 shrink-0">
            <Button text="Explore In 360°" href="#" showIcon={true} />
          </div>
        </div>

        {/* 360 Video Player */}
        <div className="w-full aspect-video max-w-[70%] mx-auto rounded-3xl order-3 overflow-hidden relative" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
