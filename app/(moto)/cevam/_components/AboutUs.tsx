"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">

          {/* Left Image */}
          <div className="w-full lg:col-span-5 xl:col-span-5 h-full flex order-1" data-aos="fade-right">
            <img
              src="/moto/cevam/abt.png"
              alt="CEVAM Facility"
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-4 lg:col-span-7 xl:col-span-7 order-2" data-aos="fade-left">
            {/* Heading */}
            <div>
              <h2 className="section-title text-[#272727] oswald-font font-semibold leading-tight">Trusted Experts in Standard Exchange</h2>
            </div>

            {/* Paragraph */}
            <div className="text-[#4B5563] rubik-font section-text tracking-normal leading-relaxed space-y-4">
              <p>
                <strong className="text-[#272727]">CEVAM</strong> is a leading specialist in remanufactured automotive components, including alternators, starters, and transmissions. With over 35 years of experience, CEVAM delivers OE-quality products with reliable performance, fast service, and cost-effective solutions for the global automotive market.
              </p>
              <p>
                Built on decades of expertise and continuous innovation, CEVAM has expanded its capabilities through advanced facilities, strategic growth, and continuous improvement. Today, the company delivers high-quality standard exchange solutions for rotating machines, transmission systems, steering components, and air conditioning compressors, providing reliable performance and trusted automotive solutions to customers worldwide.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2 flex">
              <Button href="#" variant="outline">
                Know About Us
              </Button>
            </div>

            {/* Stats Block */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 pt-8 text-center">
              <div className="border-r border-gray-200 lg:border-r lg:border-gray-200 flex flex-col items-center justify-center">
                <span className="text-4xl lg:text-[48px] font-semibold text-[#0195DA] oswald-font">240</span>
                <span className="section-text font-semibold text-[#272727] oswald-font mt-2">Years of Experience</span>
              </div>
              <div className="border-0 lg:border-r lg:border-gray-200 flex flex-col items-center justify-center">
                <span className="text-4xl lg:text-[48px] font-semibold text-[#0195DA] oswald-font">5</span>
                <span className="section-text font-semibold text-[#272727] oswald-font mt-2">Country</span>
              </div>
              <div className="border-r border-gray-200 lg:border-r lg:border-gray-200 flex flex-col items-center justify-center">
                <span className="text-4xl lg:text-[48px] font-semibold text-[#0195DA] oswald-font">5</span>
                <span className="section-text font-semibold text-[#272727] oswald-font mt-2">Sites</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl lg:text-[48px] font-semibold text-[#0195DA] oswald-font">35</span>
                <span className="section-text font-semibold text-[#272727] oswald-font mt-2">€M in revenue</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
