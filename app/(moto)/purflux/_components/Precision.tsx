"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Precision = () => {
  return (
    <section className="w-full py-16 min-[3800px]:py-25 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">
        
        {/* Content (Mobile: Order 1, Desktop: Col 1-6) */}
        <div className="flex flex-col gap-6 order-1 xl:order-none xl:col-span-6 w-full" data-aos="fade-right">
          
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Precision Built. Globally Trusted.
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed opacity-90 min-[3800px]:text-xl">
            Experience the science behind Purflux's advanced filtration technology through an immersive product demonstration. Watch how every layer of the filter works together to capture dust, pollen, harmful particles, and contaminants while maintaining optimal airflow for maximum engine and HVAC efficiency. Engineered to original equipment standards, Purflux filters combine innovative materials with precision manufacturing to deliver superior protection, enhanced performance, and long-lasting reliability. From cleaner cabin air to improved engine efficiency, discover why Purflux is trusted by automotive professionals and vehicle manufacturers around the world.High-performance filter materials effectively trap microscopic particles while maintaining consistent airflow.
          </Typography>

          <div className="w-fit pt-4">
            <Button text="View Product" href="#" showIcon={false} />
          </div>

        </div>

        {/* Video (Mobile: Order 2, Desktop: Col 7-12) */}
        <div className="w-full order-2 xl:order-none xl:col-span-6" data-aos="fade-left">
          <div className="w-full aspect-[16/10] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shadow-lg relative overflow-hidden">
            <DynamicVideoPlayer type="short-2" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Precision;
