"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="choose" className="w-full py-16 min-[3200px]:py-[120px] bg-[#F9F9F9]">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 items-center">

        {/* Content (Heading + Text + Button) */}
        {/* Mobile: Order 1, Desktop: Col 1-6 */}
        <div className="flex flex-col gap-6 order-1 xl:col-start-1 xl:col-span-5 w-full" data-aos="fade-right">

          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="secondary" className="font-bold">
              Cabin Filter
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Advanced Cabin Air Filtration Protection
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Our cabin filters are engineered to protect drivers and passengers from harmful airborne pollutants, ensuring a cleaner and healthier in-car environment. Designed with advanced multi-layer filtration technology, they effectively block dust, pollen, exhaust gases, and other contaminants that can impact comfort and respiratory health. Built with high-quality materials and precision, these filters ensure optimal airflow and keep ventilation and AC systems clean and efficient.
            </Typography>

            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-primary mt-1.5 shrink-0"></span>
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Multi-layer filtration system including activated carbon for gas & odor absorption
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-primary mt-1.5 shrink-0"></span>
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Maintains clean HVAC systems and supports consistent airflow performance
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-primary mt-1.5 shrink-0"></span>
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Effectively removes dust, pollen, and harmful airborne particles from cabin air
                </Typography>
              </li>
            </ul>
          </div>

          <div className="w-full mt-2" data-aos="fade-right" data-aos-delay="100">
            <Button text="Explore Cabin Filter" variant="secondary" href="#choose" />
          </div>
        </div>

        {/* Video */}
        {/* Mobile: Order 2, Desktop: Col 7-12 */}
        <div className="w-full order-2 xl:col-start-6 xl:col-span-7 aspect-video relative rounded-lg overflow-hidden shadow-sm" data-aos="zoom-in">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
