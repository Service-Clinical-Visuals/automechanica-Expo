"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Advanced = () => {
  return (
    <section id="advanced" className="w-full py-16 bg-[#131118]">
      <div className="custom-container flex flex-col gap-10">
        
        {/* Top Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full border-b border-white/60 pb-6" data-aos="fade-up">
          <div className="flex flex-col gap-2 ">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Advanced Lubrication for Peak Performance
            </Typography>
            <Typography variant="p" color="white" className=" leading-relaxed xl:max-w-[65%]">
              Short cinematic video showcasing lubrication, engine protection, and product performance.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button text="Explore Product" href="#" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:items-stretch w-full justify-center">
          
          {/* Video Block (span-8) */}
          <div className="order-1 xl:col-span-8 aspect-[16/9] w-full relative rounded-sm overflow-hidden bg-white/5 shadow-2xl flex items-center" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Card (span-4) */}
          <div className="order-2 xl:col-span-4 w-full h-full bg-white p-6 sm:p-8 xl:p-12 flex flex-col justify-center gap-8 shadow-2xl" data-aos="fade-left">
            <Typography variant="p" color="dark" className="leading-relaxed">
              Discover how OWS engine oils are engineered to reduce friction, protect critical engine components, and deliver reliable performance under demanding driving conditions. Developed with advanced formulations, every product is designed to maximize efficiency and extend engine life and dependable performance.
            </Typography>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <img src="/moto/ows/Vector.png" alt="Icon" className="w-5 h-5 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 object-contain shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="leading-relaxed">
                  <strong>Superior Engine Protection</strong> - Advanced formulations help minimize wear and protect vital engine components.
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <img src="/moto/ows/Vector.png" alt="Icon" className="w-5 h-5 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 object-contain shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="leading-relaxed">
                  <strong>Enhanced Performance</strong> - Provides smooth operation, improved efficiency, and reliable performance across a wide range of driving conditions.
                </Typography>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advanced;
