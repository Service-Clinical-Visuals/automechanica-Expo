"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Deg360() {
  return (
    <section className="relative w-full py-16 bg-[url('/moto/rolf/bg1.png')] bg-cover bg-center overflow-hidden">
      
      <div className="custom-container relative z-10 flex flex-col">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full mb-8  gap-8" data-aos="fade-up">
          {/* Heading and Button: Order 1 on mobile, left on desktop */}
          <div className="w-full md:w-[45%] flex flex-col items-start gap-6 order-1 md:order-1">
            <Typography variant="h2" color="white" className="leading-tight">
              Explore Engine Oil in 360°
            </Typography>
            <Button text="Explore Products" href="#products" showIcon={true} />
            
          </div>
          
          {/* Text: Order 2 on mobile, right on desktop */}
          <div className="w-full md:w-[50%] flex justify-end order-2 md:order-2">
             <Typography variant="p" color="white" className="leading-relaxed text-left md:text-right">
               Discover ROLF Lubricants GmbH Engine Oil from every angle with our interactive 360° view, showcasing premium quality, German engineering, and reliable performance.
             </Typography>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full h-[1px] bg-white/20 border-none mb-8" data-aos="fade-up" />

        {/* 360 Video Player */}
        <div className="w-full items-center mx-auto xl:w-[70%] aspect-video rounded-[1.5rem] overflow-hidden shadow-2xl relative bg-gray-100" data-aos="zoom-in" data-aos-delay="200">
           <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
