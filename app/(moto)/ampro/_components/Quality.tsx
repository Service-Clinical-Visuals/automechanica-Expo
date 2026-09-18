"use client";

import React from "react";
import Typography from "./Typography";

const Quality = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[3800px]:gap-16 items-center">

        {/* Left: Image */}
        <div className="w-full xl:col-span-6 order-2 xl:order-1 relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '821/507' }} data-aos="fade-right">
          <img
            src="/moto/ampro/section55.png"
            alt="OE-Level Quality"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full xl:col-span-6 flex flex-col gap-6 min-[3800px]:gap-10 order-1 xl:order-2">

          {/* Heading Group */}
          <div className="flex flex-col gap-3 min-[3800px]:gap-5" data-aos="fade-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 min-[3800px]:w-4 min-[3800px]:h-4 rounded-full bg-secondary"></span>
              <Typography variant="h4" color="secondary" className="font-bold uppercase tracking-wider text-sm min-[3800px]:text-2xl">
                Quality
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight min-[3800px]:text-7xl">
              Engineered for OE-Level Quality
            </Typography>
          </div>

          {/* Text Paragraph */}
          <Typography variant="p" color="muted" className="leading-relaxed min-[3800px]:text-3xl" data-aos="fade-left" data-aos-delay="100">
            We provide high-quality NOx sensors for the automotive aftermarket and OEMs, combining rigorous
            testing, individual calibration, and fully integrated manufacturing to ensure reliable OE-level
            performance.
          </Typography>

          {/* List Items */}
          <div className="flex flex-col gap-4 min-[3800px]:gap-8 mt-2" data-aos="fade-left" data-aos-delay="200">
            {[
              "We are the leading NOx manufacturer supplying the automotive aftermarket and OEMs.",
              "Genuine OE quality level: each sensor is tested for over 5 days and individually calibrated.",
              "100% newly produced, with a high level of vertical integration: from the basic chemicals to the finished product, we manufacture everything in one factory.",
              "Completely independently developed hardware and software",
              "1:1 replacement for original parts"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 min-[3800px]:gap-6">
                <div className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 flex items-center justify-center mt-1">
                  <img src="/moto/ampro/vector.png" alt="check" className="w-full h-full object-contain" />
                </div>
                <Typography variant="p" color="muted" className="leading-snug text-[15px] xl:text-base min-[3800px]:text-2xl pt-1">
                  {text}
                </Typography>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Quality;
