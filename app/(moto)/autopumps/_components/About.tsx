"use client";

import React from "react";
import AutopumpsButton from "./AutopumpsButton";

export default function About() {
  return (
    <section className="py-16 md:py-24 relative bg-white  overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[700px] h-full  pointer-events-none -z-0">
        <img
          src="/moto/autopumps/globe.png"
          alt="Watermark"
          className="w-full h-auto object-contain object-top-right "
        />
      </div>

      <div className="custom-container relative z-10 px-6 xl:px-16">
        {/* Top Text & Button Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="max-w-4xl">
            <h2 className="section-title text-[#2a2a2a] mb-4">
              More Than Just Pumps
            </h2>
            <p className="section-text text-[#585858] leading-relaxed">
              At Autopumps UK, we are redefining excellence in engine and pump components. Our mission is to be a global leader in aftermarket solutions, combining innovation with precision engineering. With a strong commitment to quality, durability, and performance, we ensure our products meet the highest standards, keeping vehicles running smoothly.
            </p>
          </div>
          <div className="flex-shrink-0">
            <AutopumpsButton href="/autopumps/about" variant="primary">
              Learn More About Us
            </AutopumpsButton>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-[#000000]/74 mb-8 md:mb-12"></div>

        {/* Factory Image */}
        <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="/moto/autopumps/abr.png"
            alt="Autopumps Factory"
            className="w-full h-auto object-cover rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
