"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 bg-[#F8FAFC]">
      <div className="custom-container">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <Typography variant="h2" className="oswald font-semibold section-title text-[#272727] tracking-wide leading-tight">
            The Technology Behind Safe Braking
          </Typography>
          <div className="w-45 h-[3px] bg-[#0F5AA6] mt-1 mb-4 rounded-full"></div>
          <Typography variant="p" className="rubik text-[#4B5563] text-base xl:text-[16px] leading-relaxed">
            Yavuzsan provides technical insights into brake components, helping customers understand their role in vehicle safety, control, and reliable braking performance.
          </Typography>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Column: Text & Features */}
          <div className="flex flex-col gap-6 text-left lg:col-span-6" data-aos="fade-right">
            <Typography variant="p" className="rubik text-[#4B5563] text-base xl:text-[16px] leading-relaxed">
              Through detailed technical information, Yavuzsan helps customers better understand brake components, supporting accurate product selection, proper maintenance, and reliable braking performance. By providing clear specifications, application details, and product guidance, we enable customers to make informed decisions with confidence.
            </Typography>

            {/* Feature Items */}
            <div className="flex flex-col gap-6 mt-2">

              {/* Brake Lining */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0F5AA6]/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <img src="/moto/yavuzsan-otomotiv/tec1.png" alt="Brake Lining" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex flex-col">
                  <Typography variant="h3" className="oswald font-bold text-[#202020] text-lg md:text-xl mb-1">
                    Brake Lining
                  </Typography>
                  <Typography variant="p" className="rubik text-[#4B5563] text-sm md:text-base leading-relaxed">
                    Brake lining provides the friction needed for safe and reliable braking, delivering consistent stopping power and long-lasting performance.
                  </Typography>
                </div>
              </div>

              {/* Brake Disc */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0F5AA6]/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <img src="/moto/yavuzsan-otomotiv/tec2.png" alt="Brake Disc" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex flex-col">
                  <Typography variant="h3" className="oswald font-bold text-[#202020] text-lg md:text-xl mb-1">
                    Brake Disc
                  </Typography>
                  <Typography variant="p" className="rubik text-[#4B5563] text-sm md:text-base leading-relaxed">
                    Brake lining creates the friction needed for safe and reliable vehicle braking, delivering consistent stopping power and durability.
                  </Typography>
                </div>
              </div>

            </div>

            {/* Know More Button */}
            <div className="mt-2">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-[#0F5AA6] hover:bg-[#0c4885] text-white font-medium text-[16px] px-7 h-[50px] min-h-[50px] rounded-md transition-all duration-300 rubik shadow-md hover:shadow-lg w-fit"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Right Column: Video Box */}
          <div className="w-full aspect-video relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl border border-gray-200 flex items-center justify-center lg:col-span-6" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
