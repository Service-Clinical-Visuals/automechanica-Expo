"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Explore360() {
  return (
    <section className="w-full relative py-16 min-[2100px]:py-24 bg-primary text-white">
      <div className="custom-container flex flex-col items-center gap-5 min-[2100px]:gap-10 w-full">

        <div className="flex flex-col items-center text-center  gap-4 min-[2100px]:gap-6  " data-aos="fade-up">
          <Typography variant="h2" color="white" className="tracking-wide mb-2">
            360° Product Experience
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[65%]">
            Experience the Mutlu Akü ve Malzemeleri San. A.Ş. AGM Battery through our interactive 360° product view. Examine every angle of its advanced construction, premium materials, and precision engineering, designed to deliver dependable starting power, long-lasting durability, and outstanding performance for today's demanding automotive applications, ensuring maximum efficiency, safety, and long-term operational reliability.
          </Typography>
        </div>

        <div className="w-full aspect-video xl:aspect[21/9] xl:max-w-[69%] rounded-xl md:rounded-2xl overflow-hidden  relative flex items-center justify-center" data-aos="fade-up" data-aos-delay="100">
          <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500" />
        </div>

      </div>
    </section>
  );
}
