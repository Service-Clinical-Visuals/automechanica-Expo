"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function Quality() {
  const certificates = [
    "/moto/yavuzsan-otomotiv/q2.png",
    "/moto/yavuzsan-otomotiv/q3.png",
    "/moto/yavuzsan-otomotiv/q4.png"
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Top Header & Explore More Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-6" data-aos="fade-up">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <Typography variant="h2" className="oswald font-semibold section-title text-[#272727] tracking-wide leading-tight">
              Certificates & Documents
            </Typography>
            <div className="w-45 h-[3px] bg-[#0F5AA6] mt-1 mb-4 rounded-full"></div>
            <Typography variant="p" className="rubik text-[#4B5563] text-base xl:text-[16px] leading-relaxed">
              Yavuzsan follows internationally recognized quality standards to ensure reliable, safe, and high-performance brake system products. Our certifications reflect our commitment to quality management, continuous improvement, and excellence in automotive manufacturing.
            </Typography>
          </div>

          <div className="shrink-0">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-[#0F5AA6] hover:bg-[#0c4885] text-white font-medium text-[16px] px-7 h-[50px] min-h-[50px] rounded-md transition-all duration-300 rubik shadow-md hover:shadow-lg w-fit"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex items-center" data-aos="fade-up" data-aos-delay="100">

          {/* Left Column: Big Logo Box */}
          <div className="lg:col-span-6 w-full h-full bg-white justify-center">
            <img
              src="/moto/yavuzsan-otomotiv/q1.png"
              alt="Yavuzsan Brake Discs & Brake Drums"
              className="w-auto h-auto object-contain"
            />
          </div>

          {/* Right Column: Description & 3 Certificate Cards */}
          <div className="lg:col-span-6 flex flex-col item-center justify-between text-left">
            <Typography variant="p" className="rubik text-[#4B5563] text-sm sm:text-base leading-relaxed mb-5">
              Driven by a commitment to quality and continuous improvement, these certifications demonstrate compliance with globally recognized automotive standards. They reflect a strong focus on manufacturing excellence, advanced production processes, and strict quality management. By meeting international requirements, every brake system product is designed to deliver reliable performance, enhanced safety, long-lasting durability, and consistent quality for customers worldwide.
            </Typography>

            {/* Certificate Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="transition-all duration-300 aspect-[3/4]"
                >
                  <img
                    src={cert}
                    alt={`Certificate ${idx + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
