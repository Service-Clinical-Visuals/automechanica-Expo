"use client";

import React from "react";

const brands = [
  { img: "/moto/alkim-petrokimya/brand1.png", name: "AKSOIL" },
  { img: "/moto/alkim-petrokimya/brand2.png", name: "BRENTOL" },
  { img: "/moto/alkim-petrokimya/brand3.png", name: "MATADOR" },
];

export default function Partners() {
  return (
    <section className="py-20 xl:py-20 relative  overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: "url('/moto/alkim-petrokimya/partner-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="custom-container relative z-10 mt-5 mb-5">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-10" data-aos="fade-up">
          <div className="w-12 sm:w-20 md:w-24 h-[1.5px] bg-[#EA203B]"></div>
          <h2 className="text-white orbitron font-semibold  section-title">
            Our Brands
          </h2>
          <div className="w-12 sm:w-20 md:w-24 h-[1.5px] bg-[#EA203B]"></div>
        </div>

        {/* Brands Grid inside glass box */}
        <div
          className="w-full max-w-[1350px] mx-auto  flex flex-col items-center justify-center p-4 sm:p-8"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            backgroundImage: "url('/moto/alkim-petrokimya/small-bg.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 items-center justify-items-center">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-auto"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-auto h-auto object-contain drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
