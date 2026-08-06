"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

const products = [
  {
    id: 1,
    image: "/moto/repairify/1.png",
    title: "AsTech 8",
    description: "AsTech 8 is a compact diagnostic tool designed for fast health scans, fault code clearing, and multi-brand vehicle diagnostics.",
  },
  {
    id: 2,
    image: "/moto/repairify/2.png",
    title: "Digital ADAS Calibration Unit",
    description: "AsTech Digital ADAS Solution for fast, accurate, and OEM-compliant ADAS camera, radar, and LIDAR calibration.",
  },
  {
    id: 3,
    image: "/moto/repairify/3.png",
    title: "AsTech Remote Device",
    description: "AsTech Remote Diagnostic Device provides fast OEM-level remote diagnostics with expert technician support.",
  },
  {
    id: 4,
    image: "/moto/repairify/4.png",
    title: "All in One",
    description: "AsTech All-in-One delivers diagnostics, calibration, and remote OEM support in one powerful device.",
  }
];

export default function ProductPortfolio() {
  return (
    <section className="py-20 md:py-28 bg-white" id="products">
      <div className="custom-container flex flex-col items-center gap-12 md:gap-16">
        
        {/* Header */}
        <div className="max-w-7xl flex flex-col items-center text-center gap-6" data-aos="fade-up">
           <h2 className="adlam-font section-title text-black ">Our Product Portfolio</h2>
          <p className="inter-font section-text text-[#1e1e1e] leading-relaxed">
            Discover Repairify's comprehensive range of automotive diagnostic and ADAS calibration solutions, engineered to deliver OEM-level accuracy, faster workflows, and reliable performance. From advanced digital calibration systems to intelligent diagnostic tools and remote support services, every solution is designed to help workshops service modern vehicles with confidence and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full" data-aos="fade-up" data-aos-delay="100">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl border border-[#96c1f5] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-6 items-center hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Container */}
              <div className="w-full aspect-square mb-6 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow w-full text-left">
                <h3 className="adlam-font card-text text-black font-normal mb-3">{product.title}</h3>
                <p className="inter-font section-text text-black mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
                
                <div className="w-full flex justify-center mt-auto">
                  <Button href="#view-product" className="px-8 py-2.5 w-max">
                    View Product
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
