"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Journey() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">

        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6  border-b border-gray-300 pb-8 lg:pb-12 order-1 xl:order-1 mb-8 " data-aos="fade-up">

          <div className="flex flex-col gap-4 xl:w-[70%] order-1 xl:order-1">
            <Typography variant="h2" color="dark" className="font-semibold leading-tight mb-2">
              Power Solutions For Every Journey
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed max-w-full xl:max-w-[95%] order-2 xl:order-2">
              Discover Mutlu Akü ve Malzemeleri San. A.Ş. specialized battery solutions designed for diverse mobility needs. From high-performance taxi batteries built for intensive daily use to reliable caravan batteries engineered for extended off-grid power, our advanced technologies deliver dependable performance, durability, and long-lasting energy wherever the road takes you.
            </Typography>
          </div>

          <div className="flex-shrink-0 order-3 xl:order-2 mt-4 xl:mt-0 flex justify-start xl:justify-end">
            <Button text="Explore Solutions" href="#" showIcon={true} variant="primary" />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 w-full order-4 xl:order-2">
          <div className="w-full aspect-[4/3] overflow-hidden shadow-xl relative group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/moto/mutlu/journey1.png"
              alt="Taxi Battery Journey"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col justify-end gap-3 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 z-20 pointer-events-none">
              <Typography variant="h4" color="white" className="font-bold leading-tight">
                High Performance Under Intense Work Hours.
              </Typography>
              <Typography variant="p" color="white" className="text-sm md:text-base leading-relaxed opacity-90">
                Long-lasting EFB and SFB series batteries for professionals.
              </Typography>
              <div className="mt-4 pointer-events-auto w-fit">
                <Button text="Taxi Batteries" href="#" showIcon={true} variant="primary" />
              </div>
            </div>
          </div>
          <div className="w-full aspect-[4/3] overflow-hidden shadow-xl relative group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/moto/mutlu/journey2.png"
              alt="Caravan Battery Journey"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col justify-end gap-3 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 z-20 pointer-events-none">
              <Typography variant="h4" color="white" className="font-bold leading-tight">
                The Camp Enthusiast's Friend
              </Typography>
              <Typography variant="p" color="white" className="text-sm md:text-base leading-relaxed opacity-90">
                Gel, AGM, and Full Energy technology batteries for your caravans.
              </Typography>
              <div className="mt-4 pointer-events-auto w-fit">
                <Button text="Caravan Batteries" href="#" showIcon={true} variant="primary" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
