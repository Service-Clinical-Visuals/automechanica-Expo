"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="choose"
      className="w-full py-16 text-white relative bg-[#081A33]"
    >

      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-6">

        {/* Heading Group (Mobile: Order 1) */}
        <div className="order-1 w-full max-w-[90%] flex flex-col items-center gap-2" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Explore Advanced Calibration Technology in 360°
          </Typography>
        </div>

        {/* Text Body (Mobile: Order 2) */}
        <div className="order-2 w-full lg:max-w-[70%] mb-4" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="white" className="leading-relaxed">
            Explore advanced engineering and innovative technology through a 360° view of the system design, precision components, and features built for accurate calibration and reliable vehicle performance.
          </Typography>
        </div>

        {/* Video (Mobile: Order 3) */}
        <div className="order-3 w-full xl:max-w-[65%]  aspect-video relative shadow-2xl overflow-hidden bg-white/5 border border-white/10 rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
          {/* Using 360 type as requested */}
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
