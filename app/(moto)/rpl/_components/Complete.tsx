"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Complete = () => {
  return (
    <section
      id="complete"
      className="w-full py-20 min-[3800px]:py-40 bg-[#F7F7F7] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:flex-row items-center gap-10 xl:gap-16 min-[3800px]:gap-32">

        {/* Text Content (Left) */}
        <div className="w-full xl:w-4/12 flex flex-col gap-6 min-[3800px]:gap-12" data-aos="fade-right">

          {/* Section Header */}
          <div className="flex flex-col gap-4 min-[3800px]:gap-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-1 min-[3800px]:w-16 min-[3800px]:h-2 bg-secondary shrink-0"></div>
              <Typography variant="h3" color="primary" className="font-bold">
                HVAC System
              </Typography>
            </div>

            <Typography variant="h2" color="primary" className="font-bold leading-tight">
              Complete HVAC System Solutions for Superior Climate Control Performance
            </Typography>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 min-[3800px]:gap-10">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Take a closer look at our premium HVAC components with an immersive 360º product view. Rotate, zoom, and inspect every detail to understand the quality, precision engineering, and durability behind every component. Designed for automotive, industrial, agricultural, and transport refrigeration applications, our products deliver reliable performance in the most demanding environments.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              With more than two decades of industry expertise, we are committed to supplying high-quality HVAC products that meet international standards while offering competitive pricing and exceptional value. Backed by a strong global supply network, fast logistics, and dedicated technical support, we help distributors, workshops, and OEM partners maintain efficient climate control systems that maximize comfort, improve reliability, and reduce maintenance costs.
            </Typography>
          </div>
        </div>

        {/* Video (Right) */}
        <div className="w-full xl:w-8/12 aspect-video relative rounded-2xl min-[3800px]:rounded-[2rem] overflow-hidden shadow-xl" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Complete;
