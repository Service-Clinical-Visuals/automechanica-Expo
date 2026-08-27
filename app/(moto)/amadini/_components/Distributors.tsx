"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AmadiniButton from "./AmadiniButton";

export default function Distributors() {
  const distributorLogos = [
    "/moto/amadini/d1.png",
    "/moto/amadini/d2.png",
    "/moto/amadini/d3.png",
    "/moto/amadini/d4.png",
    "/moto/amadini/d5.png",
    "/moto/amadini/d6.png",
    "/moto/amadini/d7.png",
    "/moto/amadini/d8.png",
  ];

  return (
    <section className="w-full bg-[#005484] py-16 md:py-24 mt-2 mb-2  ">
      <div className="custom-container px-6 md:px-12 xl:px-20 flex flex-col">
        
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="section-title font-semibold text-[#ffffff] leading-tight mb-6">
            Nationwide Distributors
          </h2>
          <p className="text-[#ffffff] section-text leading-relaxed max-w-6xl mx-auto">
            Our trusted network of nationwide distributors and industry partners enables Amadini to deliver premium automotive solutions with exceptional availability, reliable service, and comprehensive market coverage. Together, we ensure customers receive quality products, dependable support, fast delivery, consistent performance, and lasting value wherever they operate.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-16">
          {distributorLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-3 md:p-6 flex items-center justify-center aspect-[2/1] md:aspect-[3/2] shadow-md hover:shadow-lg transition-shadow "
            >
              <img
                src={logo}
                alt={`Distributor logo ${index + 1}`}
                className="object-contain p-1 md:p-2 h-full w-full"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/50 mb-8"></div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-white section-text leading-relaxed max-w-5xl">
            By partnering with recognized distributors and leading automotive specialists, Amadini strengthens its supply network and expands product accessibility across multiple markets. These strategic collaborations ensure efficient distribution, technical excellence, and a consistent commitment to quality, and customer satisfaction.
          </p>
          <div className="flex-shrink-0">
            <AmadiniButton
              href="/amadini/products"
              variant="secondary"
            >
              View All Products
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1V13M13 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </AmadiniButton>
          </div>
        </div>

      </div>
    </section>
  );
}
