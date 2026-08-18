"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Fresh = () => {
  return (
    <section id="fresh" className="w-full py-12 md:py-16 2xl:py-24 bg-[#F1F1F1] overflow-hidden">
      <div className="custom-container flex flex-col gap-12 ">

        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center gap-4  mx-auto" data-aos="fade-up">
          <div className="inline-block flex flex-col items-center">
            <Typography variant="h5" color="primary" className="font-bold uppercase tracking-wider text-sm">
              FRESH PROTECTION
            </Typography>
            <div className="w-full h-[2px] bg-secondary mt-1"></div>
          </div>
          <Typography variant="h2" color="dark" className="font-bold  leading-tight">
            Experience Cleaner Air with Advanced<br className="hidden md:block" /> Cabin Filtration Technology
          </Typography>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col xl:flex-row gap-12  items-center">

          {/* Left: Video */}
          <div className="w-full xl:w-7/12" data-aos="fade-right">
            <div className="w-full bg-white rounded-[2rem] overflow-hidden shadow-xl aspect-[16/9] relative flex items-center justify-center">
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text & Bullets */}
          <div className="w-full xl:w-5/12 flex flex-col gap-8" data-aos="fade-left">

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base">
                Every drive deserves fresh, clean air. MC Air Filter cabin air filters are designed with advanced filtration technology to capture dust, pollen, soot, and other airborne contaminants before they enter your vehicle's cabin. The result is a healthier environment for drivers and passengers while maintaining consistent airflow through the climate control system.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base">
                Built with premium materials and manufactured to meet stringent quality standards, our cabin air filters provide reliable performance, long service life, and an exact fit for a wide range of vehicle applications.
              </Typography>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-6">
              {/* Bullet 1 */}
              <div className="flex items-start gap-4">
                <img src="/moto/mc-filter/vector1.png" alt="Bullet Icon" className="w-6 h-6 object-contain shrink-0 mt-1" />
                <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base">
                  <span className="font-bold text-[#1B1150]">Efficient Particle Capture</span> – Removes harmful airborne contaminants for cleaner, healthier cabin air.
                </Typography>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start gap-4">
                <img src="/moto/mc-filter/vector1.png" alt="Bullet Icon" className="w-6 h-6 object-contain shrink-0 mt-1" />
                <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base">
                  <span className="font-bold text-[#1B1150]">Consistent HVAC Performance</span> – Maintains smooth airflow to support heating and air conditioning efficiency.
                </Typography>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button text="Explore Our Solutions" href="#explore" variant="primary" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Fresh;
