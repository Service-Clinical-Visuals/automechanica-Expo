"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="quality"
      className="w-full py-16 md:py-24 bg-[#F7F7F7] relative"
    >
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-6">

        {/* Heading Group (Mobile: Order 1) */}
        <div className="order-1 w-full max-w-[90%] flex flex-col items-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Precision Pistons and Engineered for Superior Engine Performance
          </Typography>
        </div>

        {/* Text Body (Mobile: Order 2) */}
        <div className="order-2 w-full xl:max-w-[50%] mb-4" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="muted" className="leading-relaxed">
            Explore our pistons and piston rings in an interactive 360° view to appreciate the precision engineering, premium materials, and advanced manufacturing behind every component. Designed for durability and efficiency, each product is built to deliver reliable performance under demanding engine conditions.
          </Typography>
        </div>

        {/* Video (Mobile: Order 3) */}
        <div className="order-3 w-full max-w-[95%] xl:max-w-[80%] aspect-video relative  overflow-hidden rounded-2xl min-[3800px]:rounded-[40px]" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Button (Mobile: Order 4) */}
        <div className="order-4 mt-2 min-[3800px]:mt-5" data-aos="fade-up" data-aos-delay="300">
          <Button text="Explore Our Solution" variant="primary" />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
