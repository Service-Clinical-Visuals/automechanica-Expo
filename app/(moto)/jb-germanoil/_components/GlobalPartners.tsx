"use client";
import React from "react";

export default function GlobalPartners() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="custom-container flex flex-col xl:flex-row items-center gap-8 lg:gap-10 px-8 md:px-12 lg:px-28">
        
        {/* Left: Certifications Image */}
        <div className="order-2 xl:order-1 w-full xl:w-1/2 flex justify-center xl:justify-start" data-aos="fade-right">
          <img 
            src="/moto/jb-germanoil/certificates.png" 
            alt="Trusted Certifications" 
            className="w-full max-w-[750px] h-auto object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="order-1 xl:order-2 w-full xl:w-1/2 flex flex-col items-start" data-aos="fade-left">
          <h2 className="aldrich-font section-title text-[#2a2a2a] mb-6 tracking-wide leading-tight">
            Trusted By Global Partners
          </h2>
          <p className="akshar-font section-text text-[#4a4a4a] leading-relaxed max-w-3xl">
            At JB GERMANOIL, strong partnerships are built on quality, reliability, and trust. Our internationally recognized certifications reflect our commitment to delivering premium lubricants that meet the highest industry standards. By combining German engineering, advanced manufacturing, and customer-focused solutions, we help distributors, wholesalers, and private-label partners grow with confidence.
          </p>
        </div>

      </div>
    </section>
  );
}
