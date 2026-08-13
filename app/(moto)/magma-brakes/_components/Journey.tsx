"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Check } from "lucide-react";

export default function Journey() {
  const points = [
    "Engineered with high-quality friction compounds for dependable braking performance.",
    "Provides quick pedal response and precise stopping power for enhanced driver confidence.",
    "Built with durable materials that extend brake pad life under normal and demanding conditions."
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white">
      <div className="custom-container flex flex-col items-center">

        {/* 12-Column Grid Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Video Player (col-span-7) */}
          <div
            className="w-full lg:col-span-7 order-2 lg:order-1 aspect-video relative  flex items-center justify-center overflow-hidden"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Content (col-span-5) */}
          <div className="w-full lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2" data-aos="fade-left">

            <Typography variant="h1" color="dark" weight="bold" className="font-oswald leading-tight">
              Precision Braking For Every Journey
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="font-oswald  text-[#6E777D] text-[13px] md:text-[14px] leading-relaxed">
                MAGMA Brake Pads are engineered to deliver reliable stopping power, exceptional durability, and consistent performance across a wide range of driving conditions. Manufactured using premium friction materials and advanced production technology, they provide smooth, quiet braking while minimizing wear on both the brake pads and rotors.
              </Typography>

              <Typography variant="p" color="muted" className="font-oswald text-[#6E777D] text-[13px] md:text-[14px] leading-relaxed">
                Whether you're driving through city traffic, cruising on highways, or operating under demanding conditions, MAGMA Brake Pads are designed to provide the confidence, safety, and control you need on every journey.
              </Typography>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-4 mt-2 mb-2">
              {points.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-5 md:h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="muted" className="font-oswald leading-snug">
                    {text}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                text="EXPLORE PRODUCTS"
                href="#products"
                showIcon={false}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
