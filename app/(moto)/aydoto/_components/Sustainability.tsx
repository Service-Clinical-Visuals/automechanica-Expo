"use client";
import React from "react";

export default function Sustainability() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden px-4 lg:px-16">
      <div className="custom-container">
        {/* Top Text Section */}
        <div
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 md:mb-14 "
          data-aos="fade-up"
        >
          <h2 className="anton-font font-normal text-[#2a2a2a] section-title leading-tight mb-8 tracking-wide">
            Sustainability
          </h2>
          <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed">
            At AYD Sustainability plays an integral part of our current & future strategies & Investments. Keeping ahead of all the current legislation requirements is a Top Priority for our Company & all of our employees who have all embraced this important activity. We are committed to sustainability through renewable energy, responsible recycling, and continuous environmental improvement.
          </p>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-gray-200/80 mb-10 md:mb-14" />

        {/* Bottom Banner Image */}
        <div
          className="w-full aspect-[21/9] md:aspect-[21/8] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl relative group"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/moto/aydoto/bg1.jpg"
            alt="AYD Renewable Energy and Sustainability"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={(e) => {
              // Fallback to bg.png if bg1.jpg fails
              e.currentTarget.src = "/moto/aydoto/bg.png";
            }}
          />
        </div>
      </div>
    </section>
  );
}
