"use client";

import React from "react";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Advance = () => {
  return (
    <section className="w-full py-16 lg:py-15 bg-primary text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">

        {/* Top Section: Video & Content */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-12 items-center">

          {/* Left: Video (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="w-full order-2 xl:col-span-7 xl:order-1 relative aspect-video  rounded-[24px] xl:rounded-[32px] overflow-hidden shadow-2xl bg-white/5 " data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="w-full xl:col-span-5 order-1 xl:order-2 flex flex-col gap-6" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Advanced Cabin Air Filtration
            </Typography>

            <Typography variant="p" color="white" className="opacity-90 leading-relaxed text-sm lg:text-base">
              Eurogielle Cabin Air Filters are designed to improve the quality of the air inside every vehicle. Manufactured with advanced filtration technology and premium materials, they effectively capture dust, pollen, allergens, pollutants, and harmful particles, ensuring a healthier, safer, and more comfortable driving experience. Built for outstanding performance and durability, our filters meet the demands of modern automotive applications.
            </Typography>

            <ul className="flex flex-col gap-5 my-2">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <Typography variant="p" color="white" className="opacity-90 leading-snug text-sm lg:text-base">
                  Available in Fiber, Activated Carbon, Granular Carbon, and Carbotex filtration options to meet diverse requirements.
                </Typography>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <Typography variant="p" color="white" className="opacity-90 leading-snug text-sm lg:text-base">
                  Effectively removes dust, pollen, smog, and harmful airborne contaminants for cleaner cabin air.
                </Typography>
              </li>
            </ul>

            <div className="pt-4">
              <Button text="View Specifications" href="#" />
            </div>
          </div>

        </div>

        {/* Bottom Section: Benefit Cards (Order 3 on all) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full order-3" data-aos="fade-up">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-center shadow-xl border border-gray-100 transition-transform duration-300 hover:shadow-2xl">
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
                <Typography variant="p" className="text-gray-700 leading-relaxed text-sm lg:text-base">
                  Produced under strict quality control standards to ensure consistent reliability and performance.
                </Typography>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
                <Typography variant="p" className="text-gray-700 leading-relaxed text-sm lg:text-base">
                  Designed to resist moisture, corrosion, and harsh operating conditions for long-lasting performance.
                </Typography>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-center shadow-xl border border-gray-100 transition-transform duration-300 hover:shadow-2xl">
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
                <Typography variant="p" className="text-gray-700 leading-relaxed text-sm lg:text-base">
                  Suitable for passenger cars, commercial vehicles, trucks, agricultural, and industrial applications.
                </Typography>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
                <Typography variant="p" className="text-gray-700 leading-relaxed text-sm lg:text-base">
                  Engineered for maximum durability, enhanced safety, and extended service life in every driving condition.
                </Typography>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Advance;
