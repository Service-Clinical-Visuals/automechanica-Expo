"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function BrakePads() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F9F9F9]">
      <div className="custom-container flex flex-col items-center">

        {/* Top Header Section */}
        <div className="w-full flex flex-col items-center text-center mb-8" data-aos="fade-up">
          <Typography variant="h1" color="dark" weight="bold" className="font-oswald uppercase mb-4">
            MAGMA Brake Pads
          </Typography>
          <Typography variant="p" className="text-[#6E777D] font-oswald max-w-full lg:max-w-[60%] text-[14px] md:text-[16px]">
            MAGMA Brake Pads are designed to deliver exceptional braking performance, superior durability, and uncompromising safety for a wide range of passenger vehicles, SUVs, and light commercial vehicles.
          </Typography>
        </div>
        <div className="border-black/20 border-t w-full mb-5 h-[20px]" />


        {/* 12-Column Grid Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* 360 Video Player (col-span-7) */}
          <div
            className="w-full lg:col-span-7 order-2 lg:order-1 aspect-video relative bg-[#e0e0e0] flex items-center justify-center overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Content (col-span-5) */}
          <div className="w-full lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="400">

            <Typography variant="h2" className="text-[var(--color-primary)] font-oswald font-bold leading-tight">
              Superior Stopping Performance
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="text-[#6E777D] font-oswald text-[13px] md:text-[14px] leading-relaxed">
                Manufactured using premium-quality friction materials and advanced engineering processes, our brake pads provide consistent stopping power, reduced noise, and excellent heat resistance even under the most demanding driving conditions. Whether navigating busy city traffic, cruising on highways, or driving in extreme environments, MAGMA Brake Pads ensure smooth, responsive, and reliable braking performance every time you press the pedal.
              </Typography>

              <Typography variant="p" color="muted" className="text-[#6E777D] font-oswald text-[13px] md:text-[14px] leading-relaxed">
                Every MAGMA Brake Pad is developed to meet stringent quality standards and undergoes rigorous testing to ensure maximum reliability, optimal performance, and extended service life. With innovative friction technology and precision manufacturing.
              </Typography>
            </div>

            <div className="flex flex-col gap-4 mb-1">
              <p className="leading-relaxed font-oswald text-[#6E777D]">
                <strong className="text-[var(--color-primary)] font-oswald">Superior Stopping Power</strong> - Engineered with advanced friction compounds to deliver fast, responsive, and dependable braking performance.
              </p>

              <p className="leading-relaxed font-oswald  text-[#6E777D]">
                <strong className="text-[var(--color-primary)]">High Heat Resistance</strong> - Designed to withstand extreme temperatures generated during heavy braking while maintaining consistent braking efficiency.
              </p>
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
