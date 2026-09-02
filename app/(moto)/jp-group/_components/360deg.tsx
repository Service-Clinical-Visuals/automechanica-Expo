"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="choose"
      className="w-full py-16 bg-[#F9F9F9] relative"
    >
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Content (Mobile: Order 1, Desktop: Left Column) */}
        <div className="flex flex-col gap-6 order-1 lg:col-span-5 w-full" data-aos="fade-right">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="primary" className="font-bold">
              Reliable Brake Disc
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              High-Performance Brake Discs for Reliable Stopping Power
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="dark" className="leading-relaxed">
              Our brake discs are engineered to deliver consistent braking performance, safety, and durability across a wide range of driving conditions. Manufactured using high-quality materials and precision machining, they ensure optimal heat dissipation, reduced vibration, and smooth braking response.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              Designed to meet strict quality standards, our brake discs provide reliable stopping power for passenger cars and commercial vehicles, ensuring safety and confidence on every journey.
            </Typography>

            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-start gap-3">
                <img src="/moto/jp-group/star.png" alt="star" className="w-4 h-4 object-contain mt-1 shrink-0" />
                <Typography variant="p" color="dark">
                  Precision-engineered for consistent and reliable braking performance
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/jp-group/star.png" alt="star" className="w-4 h-4 object-contain mt-1 shrink-0" />
                <Typography variant="p" color="dark">
                  High-quality materials for effective heat dissipation and durability
                </Typography>
              </li>
            </ul>
          </div>

          <div className="mt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Brake Discs" variant="primary" href="#products" />
          </div>
        </div>

        {/* Video (Mobile: Order 3, Desktop: Right Column) */}
        <div className="w-full order-3 lg:order-2 lg:col-span-7 aspect-video relative rounded-lg overflow-hidden bg-white/5 border border-black/10" data-aos="zoom-in" data-aos-delay="200">
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
