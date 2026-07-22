"use client";

import React, { useState } from "react";
import Link from "next/link";

const brands = ["Aksoil", "Matador", "Brentol"];
const products = [
  { img: "/moto/alkim-petrokimya/yellow.png", name: "Gold Series 0W/20" },
  { img: "/moto/alkim-petrokimya/blue.png", name: "Hybrid Gold Series 0W/16" },
];

export default function Products() {
  const [activeBrand, setActiveBrand] = useState("Aksoil");

  return (
    <section className="py-20 xl:py-20 relative bg-[#1c1d21] overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage: "url('/moto/alkim-petrokimya/brands-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="custom-container relative z-10">

        {/* Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 sm:w-20 md:w-24 h-[1.5px] bg-[#EA203B]"></div>
            <h2 className="text-white section-title orbitron font-semibold">
              Our Products
            </h2>
            <div className="w-12 sm:w-20 md:w-24 h-[1.5px] bg-[#EA203B]"></div>
          </div>
          <p className="text-[#FFFFFF] dmsans section-text max-w-7xl mx-auto">
            Explore Alkim Petrokimya's comprehensive range of premium lubricants and process oils, engineered to deliver reliable performance, superior protection, and long-lasting efficiency across automotive, industrial, marine, and manufacturing applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">

            {/* Left Sidebar */}
            <div className="bg-[#EA203B] w-full p-4 md:p-4 flex flex-col shadow-xl h-[80%]" data-aos="fade-right">
              {/* Sidebar Title */}
              <div className="flex items-center justify-center gap-2 mb-5">
                <div className="w-8 md:w-12 h-[1px] bg-white"></div>
                <h3 className="text-white card-title orbitron font-medium whitespace-nowrap">Our Brands</h3>
                <div className="w-8 md:w-12 h-[1px] bg-white"></div>
              </div>

              {/* Brand List */}
              <div className="flex flex-col gap-4  flex-grow">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setActiveBrand(brand)}
                    className={`text-left px-5 py-3 dmsans font-medium text-base transition-colors ${activeBrand === brand
                      ? "bg-white text-[#1D1D1B]"
                      : "bg-transparent text-white hover:bg-white/10"
                      }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              {/* Bottom Separator & Button */}
              <div className="w-full h-[1.5px] bg-white mb-6 mt-4"></div>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="bg-white text-[#EA203B] hover:bg-gray-100 transition-colors px-6 py-2 orbitron font-semibold btn-text"
                >
                  View All Products
                </Link>
              </div>
            </div>

            {/* Right side products */}
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center justify-center w-auto h-auto p-8 backdrop-blur-sm" data-aos="fade-left" data-aos-delay={idx * 100}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-auto h-auto max-h-[350px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
