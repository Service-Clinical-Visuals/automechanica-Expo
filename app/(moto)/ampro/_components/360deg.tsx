"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section 
      id="choose" 
      className="w-full py-16  text-white relative bg-[url('/moto/ampro/bg.png')] bg-cover bg-center bg-no-repeat"
    >

      <div className="absolute inset-0 z-0"></div>

      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-6">

        {/* Heading Group (Mobile: Order 1) */}
        <div className="order-1 w-full max-w-[90%] flex flex-col items-center gap-2" data-aos="fade-up">
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <Typography variant="h4" color="secondary" className="font-bold uppercase tracking-wider text-sm">
                QUALITY & TECHNOLOGY
              </Typography>
            </div>
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Automotive Technology Excellence
          </Typography>
        </div>

        {/* Text Body (Mobile: Order 2) */}
        <div className="order-2 w-full  lg:max-w-[70%] mb-4" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="white" className="leading-relaxed">
            We deliver OE-level NOx sensor solutions for the automotive aftermarket and OEM customers. Each sensor undergoes rigorous testing for over five days and is individually calibrated for reliable performance. With high vertical integration, we manage the entire production process from raw materials to finished products.
          </Typography>
        </div>

        {/* Video (Mobile: Order 3) */}
        <div className="order-3 w-full max-w-[95%] lg:max-w-[80%] aspect-video relative shadow-2xl overflow-hidden bg-white/5 border border-white/10 rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
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
