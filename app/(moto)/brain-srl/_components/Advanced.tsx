"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Advanced() {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">

        {/* Left Side: Video Player */}
        <div className="w-full xl:col-span-7 aspect-video rounded-3xl overflow-hidden shadow-lg relative order-2 xl:order-1" data-aos="fade-right">
          <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full xl:col-span-5 flex flex-col gap-8 order-1 xl:order-2" data-aos="fade-left">
          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="primary" font="bebas" className="uppercase tracking-wide">
              ADVANCED CATALYTIC CONVERTER TECHNOLOGY
            </Typography>
            <Typography variant="p" color="dark" font="lato" className="text-gray-600 leading-relaxed text-sm md:text-base">
              Catalytic converters play a crucial role in reducing harmful vehicle emissions by converting toxic exhaust gases into less harmful substances before they are released into the atmosphere. Designed for durability and optimal exhaust flow, they help improve environmental performance while supporting engine efficiency.
            </Typography>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <img src="/moto/brain-srl/settings2.png" alt="settings" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="h4" color="primary" font="bebas" className="uppercase  tracking-wide">
                  EFFICIENT EMISSION CONTROL
                </Typography>
                <Typography variant="p" color="dark" font="lato" className="text-sm text-gray-600 leading-relaxed">
                  Transforming harmful gases into cleaner exhaust emissions is a crucial process that helps reduce air pollution and protect the environment.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <img src="/moto/brain-srl/settings2.png" alt="settings" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="h4" color="primary" font="bebas" className="uppercase tracking-wide">
                  HIGH-QUALITY CONSTRUCTION
                </Typography>
                <Typography variant="p" color="dark" font="lato" className="text-sm text-gray-600 leading-relaxed">
                  Constructed using high-quality, durable materials, this product is designed to provide a long service life, ensuring reliability and performance for years to come.
                </Typography>
              </div>
            </div>
          </div>

          <div className="mt-1">
            <Button text="EXPLORE OUR PRODUCT" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
}
