"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-white w-full border-b border-gray-100">
      <div className="custom-container flex flex-col items-center text-center">
        
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-6" data-aos="fade-up">
          <div className="w-16 md:w-30 h-[2px] bg-[#FCC917]"></div>
          <h2 className="sora-font text-[#1F2A44] section-title font-semibold whitespace-nowrap">Who we are</h2>
          <div className="w-16 md:w-30 h-[2px] bg-[#FCC917]"></div>
        </div>

        {/* Description Text */}
        <p className="poppins-font text-[#000000] section-text font-normal max-w-7xl mx-auto mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Founded in 1993, MANNOL is a trusted German lubricant brand known for high-quality automotive and industrial lubricants. The company combines advanced manufacturing with innovative technology to deliver reliable, high-performance solutions. Its extensive product range includes engine oils, transmission fluids, coolants, additives, greases, and car care products. Trusted by customers in over 130 countries, MANNOL products are designed to protect modern engines and machinery. The brand remains committed to quality, efficiency, and long-lasting performance.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full mb-12" >
          <div className="w-full aspect-[4/3] lg:aspect-[16/10] relative overflow-hidden bg-gray-100" data-aos="fade-right" data-aos-delay="200">
            <img 
              src="/moto/mannol/who1.png" 
              alt="MANNOL Office Building" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x600/eeeeee/999999?text=MANNOL+Office";
              }}
            />
          </div>
          <div className="w-full aspect-[4/3] lg:aspect-[16/10] relative overflow-hidden bg-gray-100" data-aos="fade-left" data-aos-delay="200">
            <img 
              src="/moto/mannol/who2.png" 
              alt="MANNOL Factory Warehouse" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x600/eeeeee/999999?text=MANNOL+Factory";
              }}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="300">
          <Button href="#">
            Discover Our Story
          </Button>
        </div>

      </div>
    </section>
  );
}
