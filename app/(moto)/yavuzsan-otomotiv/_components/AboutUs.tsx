"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-10 items-center">

          {/* Left Column: Facility Image */}
          <div className="xl:col-span-6 order-2 xl:order-1 sticky " data-aos="fade-right">
            <div className="relative w-full ">
              <img
                src="/moto/yavuzsan-otomotiv/about.png"
                alt="Yavuzsan Facility & Warehouse"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Text Content & Button */}
          <div className="xl:col-span-6 order-1 xl:order-2 flex flex-col gap-6 item-center" data-aos="fade-left">

            {/* Section Heading */}
            <div className="flex flex-col items-start">
              <Typography variant="h2" className="oswald font-semibold section-title text-[#272727] tracking-wide leading-tight">
                About Yavuzsan
              </Typography>
              <div className="w-45 h-[3px] bg-[#0F5AA6] mt-1 rounded-full"></div>
            </div>

            {/* Paragraphs - Exact wording from Image 2 */}
            <div className="flex flex-col gap-3 text-[#4B5563] rubik text-base xl:text-[16px] leading-relaxed">
              <p>
                Yavuzsan is a premium brake system brand and a global leader in Original Equipment and aftermarket brake components. With over five decades of experience, the company continues to drive innovation through advanced engineering and technology, delivering reliable braking solutions focused on safety, performance, and durability.
              </p>
              <p>
                Trusted by leading vehicle manufacturers worldwide, Yavuzsan delivers high-quality brake solutions through advanced technology, precision engineering, and strict quality standards for safety and durability.
              </p>
              <p>
                Through continuous research, innovative development, and rigorous testing, Yavuzsan ensures the safety and durability of its products under all driving conditions. Quality remains at the core of every solution, helping customers stay safe and in control on every journey.
              </p>
            </div>

            {/* Button */}
            <div className="mt-1">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-[#0F5AA6] hover:bg-[#0c4885] text-white font-medium text-[16px] px-7 h-[50px] min-h-[50px] rounded-md transition-all duration-300 rubik shadow-md hover:shadow-lg w-fit"
              >
                Know About Us
              </Link>
            </div>

          </div>

        </div>

        {/* Mission and Vision Cards - Spanning Full Width Below Photo & Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 mt-10 xl:mt-14 flex item-center" data-aos="fade-up">

          {/* Mission Card */}
          <div className="flex items-center gap-4 rounded-xl bg-white shadow-sm hover:border-[#0F5AA6]/40 transition-colors">
            <img src="/moto/yavuzsan-otomotiv/Group1.png" alt="Mission" className="w-auto h-auto object-contain" />

            <div className="flex flex-col">
              <Typography variant="h3" className="oswald font-bold text-[#202020] text-xl mb-1">
                Mission
              </Typography>
              <Typography variant="p" className="rubik text-[#494949] text-xs sm:text-[13px] xl:text-[14px] leading-relaxed">
                To deliver innovative, reliable, and high-quality products that exceed customer expectations and meet the highest industry standards.
              </Typography>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex items-center gap-4 rounded-xl  bg-white shadow-sm hover:border-[#0F5AA6]/40 transition-colors">
            <img src="/moto/yavuzsan-otomotiv/Group2.png" alt="Vision" className="w-auto h-auto object-contain" />
            <div className="flex flex-col">
              <Typography variant="h3" className="oswald font-bold text-[#202020] text-xl mb-1">
                Vision
              </Typography>
              <Typography variant="p" className="rubik text-[#494949] text-xs sm:text-[13px] xl:text-[14px] leading-relaxed">
                To be the world leader in the production of automotive spare parts OEM, OES and Aftermarket Brake systems
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
