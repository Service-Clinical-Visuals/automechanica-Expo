"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section className="w-full bg-[#01195d] py-16 md:py-24 overflow-hidden text-white">
      <div className="custom-container">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          {/* 360 Video Player Box */}
          <div
            className="order-2 xl:order-1 w-full max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto aspect-video rounded-4xl overflow-hidden shadow-2xl xs:mt-10 md:mt-0 mb-10 md:mb-14 border border-white/10 xs:mt-10 lg:mt-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heading */}
          <h2
            className="order-1 xl:order-2 anton-font font-normal text-white section-title leading-tight mb-6 tracking-wide"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Engineered For Superior Braking Performance
          </h2>

          {/* Description Paragraph */}
          <p
            className="order-1 xl:order-2  oswald-font font-normal text-white section-text leading-relaxed max-w-5xl mx-auto xs:mb-5 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            AYD Oto Endüstri ve Sanayi Tic. A.Ş. develops premium brake pads designed to deliver reliable stopping power, maximum safety, and consistent performance. Manufactured with advanced friction materials, our brake pads ensure dependable braking across a wide range of driving conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
