"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  {
    id: 1,
    icon: "/moto/ampro/d1.png",
    title: "Cleaner Exhaust Emissions : ",
    description: "Monitors NOx levels to help reduce harmful vehicle emissions",
  },
  {
    id: 2,
    icon: "/moto/ampro/d2.png",
    title: "Accurate Monitoring : ",
    description: "Provides precise NOx data for efficient emission control.",
  },
];

const SustainabilityTech = () => {
  return (
    <section
      className="w-full py-16 xl:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/moto/ampro/bg6.png')" }}
    >
      <div className="custom-container flex flex-col 2xl:grid 2xl:grid-cols-12 gap-10 min-[3800px]:gap-16 items-center">

        {/* Left: Content */}
        <div className="w-full 2xl:col-span-4 flex flex-col gap-6 min-[3800px]:gap-10 order-1 2xl:order-1" data-aos="fade-right">

          {/* Heading Group */}
          <div className="flex flex-col gap-3 min-[3800px]:gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 min-[3800px]:w-4 min-[3800px]:h-4 rounded-full bg-secondary"></span>
              <Typography variant="h4" color="secondary" className="font-bold uppercase tracking-wider text-sm min-[3800px]:text-2xl">
                Sustainability
              </Typography>
            </div>
            <Typography variant="h2" color="white" className="font-bold leading-tight min-[3800px]:text-7xl">
              Cleaner Technology for Sustainability
            </Typography>
          </div>

          {/* Text Paragraph */}
          <Typography variant="p" color="white" className="leading-relaxed text-white/90 min-[3800px]:text-3xl">
            NOx sensors play a crucial role in the sustainable development of vehicles and other combustion systems. By measuring the
            nitrogen oxide content in exhaust gases, they help to reduce environmental pollution and ensure compliance with emissions
            standards and environmental regulations.
          </Typography>

          {/* Feature Blocks */}
          <div className="flex flex-col gap-4 min-[3800px]:gap-8 mt-2">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="bg-[#689B4C] rounded-lg p-4 lg:p-5 xl:p-3 2xl:p-5 flex items-center gap-4 min-[3800px]:gap-8 shadow-md"
                data-aos="fade-up"
                data-aos-delay={100 + (index * 100)}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 shrink-0 flex items-center justify-center">
                  <img src={feature.icon} alt="icon" className="w-full h-full object-contain" />
                </div>
                <Typography variant="p" color="white" className="leading-snug text-sm lg:text-base xl:text-sm 2xl:text-base min-[3800px]:text-2xl">
                  <strong>{feature.title}</strong>
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-4" data-aos="fade-up" data-aos-delay="300">
            <Button text="Know More" href="#knowmore" className="!w-max" />
          </div>

        </div>

        {/* Right: Video */}
        <div className="w-full 2xl:col-span-8 order-2 2xl:order-2 relative aspect-video overflow-hidden rounded-xl " data-aos="fade-left">
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default SustainabilityTech;
