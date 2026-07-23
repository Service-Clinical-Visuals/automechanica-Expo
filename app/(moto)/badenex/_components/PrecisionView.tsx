"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
export default function PrecisionView() {
  return (
    <section className="py-20 xl:py-20 bg-[url('/moto/badenex/bg.png')] bg-cover bg-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/moto/sigam/bg.png')] bg-repeat bg-center"></div>

      <div className="custom-container relative z-10">
        {/* Top Centered Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-5xl min-[2560px]:max-w-[70%] min-[3800px]:max-w-[80%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="section-title title-bordered oswald-font text-white font-semibold tracking-wide">
            Performance-Driven Lubrication Solutions
          </h2>
          <p className="text-white lato-font section-text max-w-4xl min-[2560px]:max-w-[80%] min-[3800px]:max-w-[90%] leading-relaxed opacity-90 ">
            Discover premium engine oils and automotive lubricants engineered with advanced technology to provide superior protection, improved efficiency, and reliable performance across various vehicle applications.
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full h-[300px] sm:h-[400px] xl:h-[500px] rounded-lg shadow-2xl overflow-hidden relative">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
