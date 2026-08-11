"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PrecisionManufacturing() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#0c1e40]">
      <div className="custom-container flex flex-col items-center text-center">
        
        {/* Text Content */}
        <div className="max-w-5xl mb-12" data-aos="fade-up">
          <h2 className="section-title oswald font-semibold text-white mb-6">
            Precision Manufacturing in Every Component
          </h2>
          <p className="section-text dm-sans text-white leading-relaxed max-w-5xl mx-auto">
            STRONG ENERJİ develops high-performance engine oils designed to deliver outstanding protection, efficiency, and
            reliability for modern gasoline and diesel engines. Formulated with premium base oils and advanced additive
            technology, our lubricants help reduce engine wear, maintain cleanliness.
          </p>
        </div>

        {/* 360 Video Player */}
        <div 
          className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 bg-black/20"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Button href="#" variant="solid-white" className="rounde">
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
