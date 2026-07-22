"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-20 xl:py-20 bg-white overflow-hidden">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* Left: 360 Video Player */}
          <div className="order-2 xl:order-1 w-full aspect-video relative overflow-hidden bg-gray-100" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 xl:order-2 flex flex-col items-start gap-6" data-aos="fade-left">
            {/* Heading with Underline */}
            <div className="flex flex-col w-full">
              <h2 className="text-[#212121] orbitron font-semibold section-title leading-snug">
                Experience Performance from Every Angle
              </h2>
              <div className="w-full h-[2px] bg-[#EA203B] mt-2"></div>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 text-[#333333] dmsans section-text leading-relaxed tracking-wide">
              <p>
                Explore Alkim Petrokimya's premium engine oils through an interactive 360° product view designed to showcase every detail of the packaging and product. Rotate, zoom, and inspect the product from every angle for a more engaging and informative browsing experience.
              </p>
              <p>
                Developed with advanced lubricant technology and high-quality base oils, our engine oils deliver exceptional engine protection, improved fuel efficiency, and reliable performance across a wide range of driving conditions. Every formulation is engineered to meet international quality standards and the demands of modern engines.
              </p>
              <p>
                Engineered to deliver consistent performance, helping extend engine life. Trusted lubrication solutions designed for maximum efficiency, durability, and long-lasting engine protection.
              </p>
            </div>

            {/* Button */}
            <div className="mt-0">
              <Button href="#" variant="primary" className="rounded-none bg-[#EA203B] hover:bg-red-700 text-white px-8 py-3 transition-colors">
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
