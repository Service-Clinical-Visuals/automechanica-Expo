"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Quality = () => {
  return (
    <section className="w-full py-16 min-[3800px]:py-24 bg-primary overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[3800px]:gap-20">

        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">

          {/* Video (Mobile: Order 1, Desktop: Col 1-7) */}
          <div className="w-full order-1 xl:order-none xl:col-span-7" data-aos="fade-right">
            <div className="w-full aspect-video relative shadow-2xl overflow-hidden  rounded-2xl">
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content (Mobile: Order 2, Desktop: Col 8-12) */}
          <div className="flex flex-col gap-6 order-2 xl:order-none xl:col-span-5 w-full" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Quality Standards
            </Typography>
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                Committed to delivering reliable aftermarket solutions through advanced quality processes, precision engineering, and continuous improvement. Every product is developed with strict quality controls to ensure durability, performance, and compliance with global automotive standards.
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                Through rigorous validation testing, advanced inspections, and certified quality systems, each component is evaluated for reliability, durability, and performance. Our commitment to quality excellence ensures trusted automotive solutions that meet global customer needs.
              </Typography>
            </div>
            <div className="w-fit pt-2">
              <Button text="Know More" href="#" showIcon={false} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Quality;
