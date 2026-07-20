"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "High-Voltage Performance",
    desc: "Delivers a strong and consistent spark for efficient combustion."
  },
  {
    title: "Smooth Engine Operation",
    desc: "Reduces engine misfires and enhances overall driving performance."
  },
  {
    title: "Improved Fuel Efficiency",
    desc: "Optimizes combustion for lower fuel consumption and reduced emissions."
  }
];

export default function PrecisionIgnition() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="custom-container">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start" data-aos="fade-up">
          {/* Left: Large video */}
          <div className="xl:col-span-8 order-2 xl:order-1">
            <div className="rounded-[16px] overflow-hidden bg-[#f3f5f3] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="aspect-[16/10] md:aspect-[16/9] w-full">
                <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Title + features */}
          <div className="xl:col-span-4 order-1 xl:order-2">
            <Typography variant="h1" color="primary" className="mb-4">Precision Emission Control</Typography>
            <Typography variant="p" color="muted" className="mb-6">Designed for heavy-duty vehicles, SOYLU EXHAUST & AUTOMOTIVE A.S. NOx Sensors provide dependable emission monitoring while enhancing engine efficiency and reducing environmental impact. Every sensor is manufactured to deliver long-lasting reliability and consistent performance.</Typography>

            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <Typography variant="span" color="primary" className="font-semibold">Fast & Stable Response – </Typography>
                  <Typography variant="span" color="muted">Delivers accurate real-time emission data for consistent, precise engine monitoring and system performance.</Typography>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <Typography variant="span" color="primary" className="font-semibold">Enhanced Fuel Efficiency – </Typography>
                  <Typography variant="span" color="muted">Supports optimized combustion, helping improve fuel economy while maximizing overall engine performance, efficiency, and reliability.</Typography>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/Subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <Typography variant="span" color="primary" className="font-semibold">Corrosion-Resistant Design – </Typography>
                  <Typography variant="span" color="muted">Manufactured with durable materials to withstand harsh operating environments, ensuring long-term reliability and durability.</Typography>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/soylu/Subtract.png" alt="check" className="w-4 h-4 object-contain" />
                </div>
                <div>
                  <Typography variant="span" color="primary" className="font-semibold">Easy System Integration – </Typography>
                  <Typography variant="span" color="muted">Compatible with a wide range of commercial vehicle makes, models, and engine management systems.</Typography>
                </div>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-6 mb-5">
          <div className="h-0 w-[1680px] max-w-full border-t border-[#00000042]" />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
          <Typography variant="p" color="muted" className="max-w-4xl">Delivering Advanced NOx Sensor Technology That Ensures Precise Emission Monitoring, Optimized Engine Efficiency, And Reliable Performance For Modern Heavy-Duty Commercial Vehicles.</Typography>
          <div>
            <Button text="Explore Product" variant="primary" />
          </div> 
        </div>

      </div>
    </section>
  );
}
