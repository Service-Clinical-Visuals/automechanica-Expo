"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 relative bg-white overflow-hidden text-black">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: "url('/moto/segar/bg.png')" }}
      ></div>

      <div className="custom-container relative z-10 flex flex-col items-center">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center mb-10 max-w-4xl mx-auto">
          <h3 className="text-[#DF1222] roboto-font font-semibold section-text mb-2">Battery Solutions</h3>
          <h2 className="section-title text-[#202020] roboto-font font-semibold leading-tight mb-4">
            Reliable Automotive Batteries for Every Journey
          </h2>
          <p className="text-[#404040] font-normal outfit-font section-text">
            We provide a range of high-performance automotive batteries designed to deliver dependable starting power, long service life, and consistent performance. Engineered with advanced technology and quality materials, our batteries support modern vehicle requirements while ensuring efficiency and reliability in all driving conditions.
          </p>
        </div>

        {/* Red Line Divider */}
        <div className="w-1/2 h-[1px] bg-[#DF1222] mb-12"></div>

        {/* 360 Video Player */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-gray-100 relative max-w-7xl h-full overflow-hidden rounded-lg flex items-center justify-center mb-12" data-aos="fade-up">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button href="#" variant="primary-outline" className="flex items-center gap-2 rounded-md font-medium px-8 py-3 bg-white hover:bg-white hover:text-[#DF1222] btn-text">
            Explore Product <ArrowRight size={18} />
          </Button>
        </div>

      </div>
    </section>
  );
}
