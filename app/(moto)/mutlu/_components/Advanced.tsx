"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Advanced() {
  return (
    <section className="w-full py-16  bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col">

        <div className="w-full order-1 xl:order-3 flex flex-col xl:flex-row items-center justify-between gap-6" data-aos="fade-up">

          <div className="flex flex-col gap-4 xl:w-[75%] order-1">
            <Typography variant="h2" color="dark" className="font-semibold leading-tight mb-2">
              Advanced AGM Battery Technology
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed max-w-full xl:max-w-[95%] order-2">
              Mutlu Akü ve Malzemeleri San. A.Ş. manufactures premium AGM (Absorbent Glass Mat) batteries engineered to deliver exceptional starting power, outstanding durability, and reliable energy performance. Designed for modern vehicles equipped with Start-Stop technology and advanced electrical systems, our AGM batteries provide dependable operation in the most demanding driving conditions.
            </Typography>
          </div>

          <div className="flex-shrink-0 order-3 mt-4 xl:mt-0 flex justify-start xl:justify-end">
            <Button text="Explore AGM Batteries" href="#" showIcon={true} variant="primary" />
          </div>

        </div>

        <hr className="w-full border-t border-black/40 my-8  order-2" />

        <div className="w-full aspect-video items-center justify-center mx-auto md:aspect-[16/9] xl:max-w-[70%] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl order-3 xl:order-1" data-aos="zoom-in">
          <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
