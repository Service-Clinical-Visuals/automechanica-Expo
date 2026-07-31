"use client";

import React from "react";
import Typography from "./Typography";

const Quality = () => {
  return (
    <section id="quality" className="relative w-full">
      {/* Background Split: Top 40% Dark Blue (#0E2B44), Bottom 60% White */}
      <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
        <div className="h-[40%] xl:h-[45%] min-[3200px]:h-[60%] w-full bg-secondary"></div>
        <div className="h-[60%] xl:h-[55%] min-[3200px]:h-[40%] w-full bg-white"></div>
      </div>

      <div className="custom-container relative z-10 py-16">
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-10 items-center mt-5">

          {/* Left Column: Text & Logos */}
          <div className="flex flex-col xl:col-span-4 w-full h-full justify-between gap-8" data-aos="fade-right">

            {/* Top Text Area (Aligns with Dark Blue Background) */}
            <div className="flex flex-col gap-4 pt-4">
              <Typography variant="h4" color="primary" className="font-bold">
                Quality & Certifications
              </Typography>
              <Typography variant="h2" color="white" className="font-bold leading-tight">
                One of the most modern in the market
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed">
                Certified to meet international standards, ensuring consistent quality and performance.
              </Typography>
            </div>

            {/* Bottom Logos Area (Aligns with White Background) */}
            <div className="flex flex-col gap-6 min-[2100px]:gap-12 min-[3200px]:gap-20 pb-10">
              <div className="w-full flex items-start mb-5 min-[2100px]:mb-10 min-[3200px]:mb-16">
                <img
                  src="/moto/MC-filter/quality1.png"
                  alt="TecAlliance Certified Data Supplier"
                  className="quality-logo-main h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap justify-between gap-4 xl:gap-10 min-[2100px]:gap-14 min-[3200px]:gap-20 mb-2">
                <img
                  src="/moto/MC-filter/quality2.png"
                  alt="TUV Profi Cert 1"
                  className="quality-logo-sub w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="/moto/MC-filter/quality3.png"
                  alt="TUV Profi Cert 2"
                  className="quality-logo-sub w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="/moto/MC-filter/quality4.png"
                  alt="Certified by TUV Thuringen"
                  className="quality-logo-sub w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Large Image */}
          <div className="w-full xl:col-span-8 h-full flex items-center justify-center" data-aos="fade-left" data-aos-delay="100">
            <img
              src="/moto/MC-filter/section3.png"
              alt="Quality Facility Overview"
              className="quality-section-img w-full h-auto object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quality;
