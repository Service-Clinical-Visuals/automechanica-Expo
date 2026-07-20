"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Brands() {
  const brands = [
    "/moto/exol/brand1.png",
    "/moto/exol/brand2.png",
    "/moto/exol/brand3.png",
    "/moto/exol/brand4.png",
    "/moto/exol/brand5.png",
    "/moto/exol/brand6.png",
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-dark">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <Typography variant="h2" color="primary" weight="bold" className="mb-2">
            Our Trusted Brands
          </Typography>

          <div className="relative w-[20%] mb-3 ">
            <div className="h-[2px]  bg-gray-300"></div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 border-2 border-gray-500 bg-white"></div>
          </div>

          <Typography variant="p" className="text-[#666666] xl:max-w-[70%] w-full mx-auto  leading-relaxed">
            At the heart of our success is a diverse portfolio of trusted lubricant brands designed to meet the evolving needs of automotive, commercial, industrial, and agricultural markets. Each brand is developed with a focus on quality, performance, and reliability, offering specialized solutions for different vehicle types, operating conditions, and customer requirements.
          </Typography>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full  mb-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-3  shadow-lg hover:shadow-md transition-shadow aspect-[12/5] flex items-center justify-center rounded-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-full relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img
                  src={brand}
                  alt={`Trusted Brand ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div data-aos="fade-up">
          <Button text="View Brand Portfolio" variant="primary" />
        </div>

      </div>
    </section>
  );
}
