"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

export default function Creating() {
  return (
    <section className="w-full py-16 bg-transparent overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14 items-center">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center w-full lg:max-w-[85%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-4">
            Creating Sustainable Value For All
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed text-sm md:text-base lg:text-lg">
            At PETRONAS, our aim is to deliver energy solutions that fuel progress in a responsible manner. Our commitment is to conduct and grow our business in ways that contribute positively to society and the environment. This is guided by our four sustainability targets, which are aligned with the United Nations' 2030 Sustainable Development Goals. Net Zero Carbon Emissions 2050 will expand PETRONAS' efforts to reduce carbon emissions to net zero and create new and inclusive opportunities that contribute towards a just transition everywhere we operate.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col md:flex-row w-full gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="100">

          {/* Card 1 */}
          <div className="group border border-white/40 relative w-full md:w-[58.7%] aspect-[963/580] rounded-3xl overflow-hidden shadow-md cursor-pointer">
            <img
              src="/moto/petronas/create1.jpg"
              alt="Creating Sustainable Value 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 lg:p-10">
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-3">
                <Typography variant="h2" color="white" className="font-semibold text-xl lg:text-2xl">
                  New Energy Vehicles
                </Typography>
                <Typography variant="p" color="white" className="text-sm leading-relaxed mb-3 opacity-90 max-w-[95%]">
                  The automotive industry is at the dawn of a new era with New Energy Vehicles (NEVs) becoming progressively more important across the globe. At PETRONAS we are speeding up the development of fluids to support our customers in adopting NEVs, in the future, for the future.
                </Typography>
                <div className="flex items-center gap-2 bg-primary w-max px-6 py-2.5 rounded-tr-[1.2rem] rounded-bl-[1.2rem] hover:bg-primary-hover transition-colors group/btn">
                  <span className="text-white text-sm font-medium">Read More</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group border border-white/40 relative w-full md:w-[41.3%] aspect-[677/580] rounded-3xl overflow-hidden shadow-md cursor-pointer">
            <img
              src="/moto/petronas/create2.jpg"
              alt="Creating Sustainable Value 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
