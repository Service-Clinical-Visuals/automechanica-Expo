"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Protection() {
  const benefits = [
    "Superior engine protection against wear, corrosion, and component damage",
    "Excellent resistance to thermal breakdown and oxidation",
    "Superior sludge, varnish, and deposit control",
    "Enhanced engine cleanliness and reliability",
    "Reliable performance in extreme operating conditions",
    "Extended engine life and reduced maintenance costs"
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary text-white overflow-hidden">
      <div className="custom-container">

        {/* Desktop Layout: 2 Columns */}
        <div className="flex flex-col xl:flex-row gap-2 lg:gap-4 items-stretch">

          {/* Left Column */}
          <div className="w-full xl:w-[55%] flex flex-col justify-between  gap-2">

            {/* Text Content (Order 1 on mobile) */}
            <div className="order-1 flex flex-col gap-4" data-aos="fade-right">
              <Typography variant="h2" color="white" weight="bold">
                Advanced Engine Protection For Modern Vehicles
              </Typography>

              {/* Decorative line */}
              <div className="relative w-[90%] mt-4">
                <div className="h-[2px]  bg-gray-300"></div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 border-2 border-gray-500 bg-white"></div>
              </div>

              <Typography variant="p" color="white" className="mt-2 mb-4">
                Exxol Engine Oils are engineered to provide outstanding protection and performance for today's demanding engines. Developed using high-quality base oils and advanced additive technologies, these lubricants help safeguard critical engine components against wear, corrosion, oxidation, and deposits. Modern engines operate under challenging conditions, including higher temperatures, greater power outputs, and longer service intervals. Exxol's advanced formulations are designed to meet these challenges by maintaining a strong lubricating film that protects engine parts from metal-to-metal contact and premature wear.
              </Typography>
            </div>

            {/* Video (Order 4 on mobile) */}
            <div className="order-4 xl:order-2 " data-aos="fade-up" data-aos-delay="200">
              <div className="w-full aspect-video bg-gray-800/50 border border-white/10 flex items-center justify-center relative overflow-hidden rounded-sm">
                <div className="absolute inset-0">
                  <DynamicVideoPlayer type="360" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="w-full xl:w-[45%] flex flex-col  gap-4  p-1 md:p-6 ">

            {/* Image (Order 3 on mobile) */}
            <div className="order-3 xl:order-1 /50  relative w-full aspect-[16/10]" data-aos="fade-left">
              <img
                src="/moto/exol/section3.png"
                alt="Exol Engine Oils"
                className="w-full h-full object-fill rounded-sm"
              />
            </div>

            {/* List & Button (Order 2 on mobile) */}
            <div className="order-2 xl:order-2 flex flex-col gap-6" data-aos="fade-left" data-aos-delay="100">
              <div className="flex flex-col gap-2 mt-1">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <Typography variant="p" color="white" className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      {benefit}
                    </Typography>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <Button text="Discover Product Performance" variant="secondary" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
