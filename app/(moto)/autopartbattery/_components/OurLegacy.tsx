"use client";
import React from "react";
import Button from "./Button";

export default function OurLegacy() {
  return (
    <section className="py-16 md:py-24 bg-white w-full overflow-hidden border-b border-gray-100">
      <div className="custom-container flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 
          className="oswald-font text-[#000000] section-title font-semibold  tracking-wide mb-6 md:mb-8"
          data-aos="fade-up"
        >
          Our Legacy
        </h2>

        {/* Top Description Text */}
        <p 
          className="lato-font text-[#333333] section-text font-normal max-w-7xl mx-auto mb-10 md:mb-14 leading-relaxed"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          AUTOPART has been manufacturing high-quality starter batteries since 1982 for passenger vehicles, commercial trucks, agricultural machinery, boats, and camper vans. With a modern 21,000 m² production facility, we produce 2.5 million batteries annually, supplying customers in 50+ countries worldwide.
        </p>

        {/* Images Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full mb-10 md:mb-14" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <div className="w-full aspect-[16/10] relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 shadow-md group">
            <img 
              src="/moto/autopartbattery/legacy1.png" 
              alt="AUTOPART Production Facility Building" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback to mannol office or placeholder if image is not placed yet in folder
                e.currentTarget.src = "/moto/mannol/who1.png";
              }}
            />
          </div>
          <div className="w-full aspect-[16/10] relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 shadow-md group">
            <img 
              src="/moto/autopartbattery/legacy2.png" 
              alt="AUTOPART Automated Factory Interior" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback to mannol warehouse or placeholder if image is not placed yet in folder
                e.currentTarget.src = "/moto/mannol/who2.png";
              }}
            />
          </div>
        </div>

        {/* Bottom Description and CTA Button */}
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 w-full text-left  rounded-2xl  " 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <p className="lato-font text-[#333333] section-text font-normal flex-1 leading-relaxed">
            Driven by innovation, advanced manufacturing, and continuous research, we are committed to delivering reliable, high-performance battery solutions that meet the highest quality standards.With a focus on quality and continuous improvement, we create battery solutions built to perform in the most demanding conditions.
          </p>
          <div className="flex-shrink-0 w-full md:w-auto text-center md:text-right">
            <Button href="#" variant="red" className="w-full md:w-auto">
              Learn More
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
