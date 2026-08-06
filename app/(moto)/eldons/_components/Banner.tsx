"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full pt-[130px] md:pt-[120px]  bg-white" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="w-[96%] mx-auto h-screen relative">
        <div className="relative overflow-hidden w-full h-full shadow-xl rounded-[25px]" data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

          {/* Constrained Text Overlay aligned inside the video card */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end mb-[5%] p-8 md:p-12 lg:p-16">
            <div className="text-left pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="max-w-[60%] leading-tight mb-4 lg:mb-6">
                Advanced Lubrication Solutions
              </Typography>
              <Typography variant="p" color="white" className="max-w-[50%] mb-8 lg:mb-8 leading-[1.6]">
                Since 1975, ELDON'S has delivered premium lubricants and specialty fluids, trusted in 30+ countries for reliable performance.
              </Typography>
              <Button text="Explore Products" variant="primary" href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
