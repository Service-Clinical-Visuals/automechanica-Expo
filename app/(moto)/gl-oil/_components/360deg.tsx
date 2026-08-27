"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="choose"
      className="w-full py-16 text-white relative bg-secondary"
    >
      <div className="custom-container relative z-10 flex flex-col items-center justify-center gap-8 xl:gap-10">

        {/* Heading (Order 1 on mobile) */}
        <div className="order-1 w-full xl:max-w-[60%] text-center">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Advanced Lubrication Solutions Designed to Maximize Engine Efficiency and Performance
          </Typography>
        </div>

        {/* Video (Order 3 on mobile, Order 2 on Desktop) */}
        <div className="order-3 xl:order-2 w-full xl:w-[70%] aspect-video relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl shadow-xl">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />

        </div>
        <div className="order-2 xl:order-3 w-full flex flex-col xl:flex-row items-center mx-auto xl:max-w-[70%]  justify-between gap-6">
          <Typography variant="p" color="white" className="leading-relaxed  xl:max-w-[70%] text-center xl:text-left">
            GL Oil premium engine oils deliver outstanding protection, smooth engine performance, and long-lasting reliability. Designed for modern gasoline and diesel engines.
          </Typography>
          <div className="shrink-0">
            <Button text="Explore Products" href="#products" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deg360;
