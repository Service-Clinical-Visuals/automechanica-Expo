"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Quality() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/moto/fcs/bg.png')" }}
      />

      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Content */}
          <div className="flex flex-col lg:col-span-6" data-aos="fade-right">
            <h2 className="section-title text-white oswald-font font-semibold mb-4">
              Our Commitment to Quality
            </h2>

            <div className="flex flex-col gap-3 text-gray-300 rubik-font section-text font-regular leading-relaxed mb-5">
              <p>
                At FCS, quality is at the core of everything we do. Through advanced engineering, precision manufacturing, and continuous improvement, we develop ride control solutions that deliver exceptional performance, reliability, and durability. Backed by rigorous testing and strict quality standards, every product is designed to provide consistent performance, enhanced safety, and long-lasting value for customers worldwide.
              </p>
              <p>
                Every FCS product undergoes rigorous quality inspections, reliability testing, and durability validation to ensure OE-level performance. Supported by state-of-the-art equipment, continuous process improvements, and a dedicated team, we are committed to delivering dependable suspension solutions trusted by customers worldwide.
              </p>
            </div>

            <Button href="#" variant="primary" className="!bg-[#163683] !border-[#163683] gap-2 w-fit">
              Explore <ArrowRight size={18} />
            </Button>
          </div>

          {/* Right Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-xl lg:col-span-6 flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
