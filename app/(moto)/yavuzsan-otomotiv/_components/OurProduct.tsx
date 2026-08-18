"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function OurProduct() {
  const points = [
    "Eco-friendly production with sustainable manufacturing practices.",
    "Reduced emissions through advanced filtration systems.",
    "Responsible waste recycling and resource management.",
    "Efficient energy usage for environmentally conscious production.",
    "Safe, high-quality products made with responsible materials."
  ];

  return (
    <section className="py-16 xl:py-20 bg-[#081A33] text-white">
      <div className="custom-container">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <Typography variant="h2" className="oswald font-semibold section-title text-white tracking-wide leading-tight">
            Committed to Environmental Responsibility
          </Typography>
          <div className="w-45 h-[3px] bg-[#0F5AA6] mt-1 mb-4 rounded-full"></div>
          <Typography variant="p" className="rubik text-[#E0E0E0] text-base xl:text-[16px] leading-relaxed">
            Yavuzsan combines advanced technology with eco-friendly practices to produce sustainable brake solutions while protecting the environment and ensuring quality.
          </Typography>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Column: Text & Bullet Points */}
          <div className="flex flex-col justify-between text-left lg:col-span-6 h-full" data-aos="fade-right">
            <div>
              <Typography variant="p" className="rubik text-white text-base xl:text-[16px] leading-relaxed mb-6">
                Environmental responsibility is the center of modern manufacturing through the use of sustainable technologies and eco-friendly production practices. Continuous improvements help reduce emissions, minimize waste, and ensure efficient use of resources. By combining innovation, quality standards, and environmental awareness, reliable brake system solutions can be developed while contributing to a safer and greener future.
              </Typography>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-3">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#ED1C24] font-bold text-xl leading-none mt-0.5">-</span>
                    <Typography variant="span" color="none" className="text-[#E0E0E0] rubik font-normal text-sm sm:text-base leading-snug">
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Row: Summary Text & Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10 pt-4 border-t border-white/10">
              <Typography variant="p" className="rubik text-[#D1D5DB] text-xs sm:text-sm leading-relaxed max-w-4xl">
                Together, these sustainable practices help create a cleaner, safer, and more sustainable future for our communities and future generations.
              </Typography>

              <Link
                href="#"
                className="inline-flex items-center justify-center bg-[#0F5AA6] hover:bg-[#0c4885] text-white font-medium text-[16px] px-7 h-[50px] min-h-[50px] rounded-md transition-all duration-300 rubik shadow-md hover:shadow-lg shrink-0 w-fit"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column: Video Box */}
          <div className="w-full aspect-video relative overflow-hidden rounded-2xl bg-white/5 border border-white/15 shadow-2xl flex items-center justify-center lg:col-span-6" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
