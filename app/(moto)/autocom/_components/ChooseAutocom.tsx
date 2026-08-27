"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ChooseAutocom() {
  const benefits = [
    {
      title: "Reduced Technician Error",
      desc: "Guided calibration procedures minimise mistakes and ensure consistent, accurate results throughout every calibration process."
    },
    {
      title: "Faster Workshop Workflow",
      desc: "Quick setup and an efficient calibration process help reduce downtime and improve overall workshop productivity."
    },
    {
      title: "Broad Vehicle Compatibility",
      desc: "Supports a wide range of vehicle brands and models, making it suitable for diverse workshop requirements."
    }
  ];

  return (
    <section className="relative w-full bg-secondary py-16 bg-[var(--background)] overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-10">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 border-b border-white/40 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:max-w-[65%] xl:max-w-[60%]">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Why Choose Autocom ADAS Calibration?
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              As vehicle technology continues to evolve, accurate ADAS calibration has become an essential part of modern vehicle servicing. Autocom provides workshops with an integrated solution that combines advanced diagnostic capabilities, intelligent software guidance, and dependable calibration equipment.
            </Typography>
          </div>
          <div className="flex-shrink-0 mt-2">
            <Button text="View All Products" href="#" showIcon={true} />
          </div>
        </div>

        {/* Content Block */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center w-full">

          {/* Left Column: Text & Benefits */}
          <div className="flex flex-col gap-6 xl:w-[35%] xl:shrink-0 max-[1500px]:order-1" data-aos="fade-right" data-aos-delay="200">
            <Typography variant="p" color="white" className="leading-relaxed">
              Our platform is designed to reduce workshop downtime while ensuring every calibration follows manufacturer-recommended procedures. By simplifying complex processes and providing clear instructions, Autocom enables technicians of all experience levels to achieve reliable and repeatable results.
            </Typography>
            <Typography variant="p" color="white" className="font-semibold mb-2">
              Benefits
            </Typography>

            <div className="flex flex-col gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start border border-white/20 rounded-xl p-4 md:p-5  backdrop-blur-sm">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-[#001A3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <Typography variant="p" color="white" className="leading-relaxed text-sm md:text-base">
                    <strong>{benefit.title}</strong> – {benefit.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video Player */}
          <div className="w-full aspect-video  xl:flex-grow rounded-2xl overflow-hidden shadow-2xl relative bg-[#171717] max-[1500px]:order-2" data-aos="fade-left" data-aos-delay="300">
            <DynamicVideoPlayer type="short-2" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </section>
  );
}
