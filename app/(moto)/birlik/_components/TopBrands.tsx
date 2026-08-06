"use client";
import React from "react";

const brands = [
  { id: 1, name: "Mercedes", image: "/moto/birlik/1.png" },
  { id: 2, name: "Alfa Romeo", image: "/moto/birlik/2.png" },
  { id: 3, name: "Audi", image: "/moto/birlik/3.png" },
  { id: 4, name: "Bedford", image: "/moto/birlik/4.png" },
  { id: 5, name: "Belarus", image: "/moto/birlik/5.png" },
  { id: 6, name: "Caterpillar", image: "/moto/birlik/6.png" },
];

export default function TopBrands() {
  return (
    <section className="py-16 md:py-24 bg-[#1f5dd2]">
      <div className="custom-container flex flex-col gap-12 md:gap-16">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="sora-font section-title font-semibold text-[#ffffff]">
            Our Top Brands
          </h2>
          <p className="manrope-font section-text text-white leading-relaxed">
            Check out our top brands of cylinder head gaskets and sealing components, designed for exceptional engine protection, perfect fit, and consistent performance. Each product is crafted to high-quality standards, guaranteeing durability, efficiency, and reliable sealing for various vehicle applications.
          </p>
        </div>

        {/* Brands Carousel / Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="100">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className="rounded-2xl border border-white/40 p-[6px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-[#f8f9fa] rounded-xl w-34 h-22 md:w-48 md:h-28 flex items-center justify-center p-4">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                 
                />
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
