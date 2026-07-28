"use client";

import React from "react";

const galleryImages = [
  "/moto/swd/p1.png",
  "/moto/swd/p2.png",
  "/moto/swd/p3.png"
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="font-primary font-bold text-3xl md:text-4xl lg:text-[42px] text-[#2D3B6F] leading-tight">
            Our Product Gallery
          </h2>
          <p className="font-secondary font-normal text-[#222222] text-sm md:text-base lg:text-lg leading-relaxed">
            Keep your engine running at its best with Rheinol Engine Oil from SWD Lubricants. Formulated using advanced additive technology and premium-quality base oils, it delivers outstanding lubrication, reduces engine wear, and ensures reliable performance under all driving conditions.
          </p>
        </div>

        {/* 3-Column Product Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 w-full mt-10 md:mt-12" data-aos="fade-up" data-aos-delay="100">
          {galleryImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className="w-full h-full relative"
            >
              <img
                src={imgSrc}
                alt={`Rheinol Product Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/moto/swd/abt.png";
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
