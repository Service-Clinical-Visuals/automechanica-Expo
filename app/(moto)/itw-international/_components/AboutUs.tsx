"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="about-us">
      <div className="custom-container">
        {/* Text Content */}
        <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="section-title font-semibold text-[#333333] mb-6 ">
            About ITW
          </h2>
          <p className="section-text text-[#585858] font-medium">
            ITW is one of the largest global manufacturers of OE and Aftermarket automotive products. Since 2011, ITW's manufacturing quality has been recognized within the industry beginning with Universal Joints, Water Pumps, air compressor , and airvalveblock,valve cover . Over the years ITWmanufacturing quality expanded into a variety of quality parts now including Wheel Bearings and Hub Assemblies, Fuel Pumps, Fan Clutches, and Steering &amp; Suspension parts.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <img
            src="/moto/itw-international/abt.jpg"
            alt="About ITW - Black Sports Car"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
