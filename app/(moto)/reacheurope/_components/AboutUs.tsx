"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left Image */}
          <div className="w-full xl:col-span-6 h-full min-h-[400px] flex" data-aos="fade-right">
            <img
              src="/moto/reacheurope/abt.png"
              alt="REACH Facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 xl:col-span-6" data-aos="fade-left">
            {/* Heading */}
            <div>
              <h2 className="section-title text-[#000000] rajdhani-font font-bold">The REACH Difference</h2>
            </div>

            {/* Paragraph */}
            <div className="text-black lato-font section-text tracking-normal leading-relaxed">
              <p>
                For more than 25 years, REACH Cooling Group has been delivering innovative thermal management and HVAC solutions to the global automotive aftermarket. With a portfolio of over 20,000 premium products, the company provides comprehensive coverage for passenger cars, light commercial vehicles, heavy-duty trucks, and electric vehicles. Manufactured in state-of-the-art facilities under IATF 16949 quality standards, every product is engineered to meet or exceed OE specifications for performance, durability, and reliability. Backed by a global distribution network spanning 176 countries and regions, REACH ensures fast delivery, extensive vehicle coverage, and dependable customer support. Through continuous innovation, advanced engineering, and a commitment to quality, REACH remains a trusted partner for distributors and automotive professionals worldwide, helping keep vehicles running efficiently in every driving condition.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2">
              <Button href="#" variant="primary" className="btn-text">
                Learn More
              </Button>
            </div>

            {/* Cards / Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4" data-aos="fade-up" data-aos-delay="300">
              {/* Card 1 */}
              <div className="bg-[url('/moto/reacheurope/abtbg.png')] bg-cover bg-center bg-no-repeat p-6 flex flex-col items-center justify-center text-center gap-2 min-h-[140px]">
                <h3 className="text-[#004a8b] text-4xl lg:text-5xl font-bold rajdhani-font">25+</h3>
                <p className="lato-font text-[#004a8b] text-sm font-semibold">
                  Years of Industry Experience
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[url('/moto/reacheurope/abtbg.png')] bg-cover bg-center bg-no-repeat p-6 flex flex-col items-center justify-center text-center gap-2 shadow-sm border border-gray-100 min-h-[140px]">
                <h3 className="text-[#004a8b] text-4xl lg:text-5xl font-bold rajdhani-font">20,000+</h3>
                <p className="lato-font text-[#004a8b] text-sm font-semibold">
                  Premium Products
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[url('/moto/reacheurope/abtbg.png')] bg-cover bg-center bg-no-repeat p-6 flex flex-col items-center justify-center text-center gap-2 shadow-sm border border-gray-100 min-h-[140px]">
                <h3 className="text-[#004a8b] text-4xl lg:text-5xl font-bold rajdhani-font">176</h3>
                <p className="lato-font text-[#004a8b] text-sm font-semibold">
                  Countries & Regions Served
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
