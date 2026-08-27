"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Advanced = () => {
  return (
    <section className="w-full py-16 min-[3800px]:py-25 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">

        {/* Video (Mobile: Order 2, Desktop: Col 1-6) */}
        <div className="w-full order-2 xl:order-none xl:col-span-6" data-aos="fade-right">
          <div className="w-full aspect-video rounded-sm flex items-center justify-center shadow-lg relative overflow-hidden">
            <DynamicVideoPlayer type="short-1" />
          </div>
        </div>

        {/* Content (Mobile: Order 1, Desktop: Col 7-12) */}
        <div className="flex flex-col gap-6 order-1 xl:order-none xl:col-span-6 w-full" data-aos="fade-left">

          {/* Heading */}
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Advanced Cabin Air Filtration
          </Typography>

          {/* Bullet Points */}
          <div className="flex flex-col gap-4 mt-2">
            {[
              "Purflux Cabin Air Filters are engineered with high-performance filtration media to deliver cleaner, healthier air inside every vehicle.",
              "Designed to meet original equipment standards, they effectively capture dust, pollen, airborne contaminants.",
              "Available in both pollen and activated carbon variants, these filters also help eliminate unpleasant odors and harmful gases, creating a fresher environment.",
              "Built for durability and precision fitment, Purflux cabin air filters provide reliable protection, enhanced passenger comfort, and long-lasting filtration performance."
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-4 ">
                <div className="w-8 h-8 xl:w-10 xl:h-10 min-[3800px]:w-14 min-[3800px]:h-14 shrink-0 flex items-center justify-center ">
                  <img src="/moto/purflux/vector2.png" alt="Bullet" className="w-full h-full object-contain" />
                </div>
                <Typography variant="p" color="white" className="leading-relaxed opacity-90 text-sm xl:text-base min-[3800px]:text-xl">
                  {text}
                </Typography>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="w-fit pt-2">
            <Button text="View Product" href="#" showIcon={false} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Advanced;
