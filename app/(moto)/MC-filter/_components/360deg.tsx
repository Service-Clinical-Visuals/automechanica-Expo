"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="explore"
      className="w-full py-16 2xl:py-24 bg-white overflow-hidden"
    >
      <div className="custom-container flex flex-col 2xl:grid 2xl:grid-cols-12 gap-10 items-center">

        {/* Content (Mobile & Tablet: Order 1, Desktop: Order 1) */}
        <div className="w-full flex flex-col gap-6 order-1 2xl:col-span-4 2xl:order-1" data-aos="fade-right">

          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h5" color="primary" className="font-bold uppercase tracking-wider">
              CLEAN AIR
            </Typography>
            <div className="w-[17%] h-[2px] bg-secondary mt-1"></div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Explore Every Detail of Our Premium Cabin Air Filters
            </Typography>
          </div>

          {/* Text Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Take a closer look at MC AIR FILTER cabin air filters through our interactive 360° product experience. Explore the premium construction, advanced filtration media, and precision-engineered design that work together to deliver cleaner cabin air, improved comfort, and dependable performance for modern vehicles.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Manufactured to meet stringent quality standards, MC AIR FILTER cabin filters deliver reliable performance, extended service life, and an ideal fit for a wide range of passenger and commercial vehicles.
            </Typography>
          </div>

        </div>

        {/* Video (Mobile & Tablet: Order 2, Desktop: Order 2) */}
        <div className="w-full order-2 2xl:col-span-8 2xl:order-2 aspect-[16/9]  sm:aspect-[2/1] 2xl:aspect-video relative rounded-2xl overflow-hidden shadow-lg  flex items-center justify-center" data-aos="fade-left">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
