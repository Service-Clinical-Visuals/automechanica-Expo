"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function ProductSolutions() {
  const [activeCategory, setActiveCategory] = useState("Motor Oils Automotive");
  const [currentPage, setCurrentPage] = useState(0);
  
  const categories = [
    "Motor Oils Automotive",
    "Gear Oils",
    "Hydraulic Oils"
  ];

  const allProducts = {
    "Motor Oils Automotive": [
      { name: "Enersynth (P)HEV 0W-8", image: "/moto/kroon-oil/pro1.png" },
      { name: "Meganza MSP FE 0W-16", image: "/moto/kroon-oil/pro2.png" },
      { name: "Enersynth (P)HEV 0W-16", image: "/moto/kroon-oil/pro3.png" },
      { name: "Presteza MSP 0W-20", image: "/moto/kroon-oil/pro4.png" },
      { name: "Helar FE LL-04 0W-20", image: "/moto/kroon-oil/pro5.png" },
      { name: "Avanza MSP 0W-20", image: "/moto/kroon-oil/pro6.png" },
    ],
    "Gear Oils": [
      { name: "SP Gear 1071", image: "/moto/kroon-oil/pro7.png" },
      { name: "SP Gear 1081", image: "/moto/kroon-oil/pro8.png" },
      { name: "SP Gear 5015", image: "/moto/kroon-oil/pro9.png" },
      { name: "Syngear MT/LD 75W-80", image: "/moto/kroon-oil/pro10.png" },
      { name: "Syngear XLD 75W-90", image: "/moto/kroon-oil/pro11.png" },
      { name: "Syngear TDL 75W-90", image: "/moto/kroon-oil/pro12.png" },
    ],
    "Hydraulic Oils": [
      { name: "SP Fluid 3013", image: "/moto/kroon-oil/pro13.png" },
      { name: "SP Fluid 3023", image: "/moto/kroon-oil/pro14.png" },
      { name: "LHM +", image: "/moto/kroon-oil/pro17.png" },
      { name: "SP Fluid 6033", image: "/moto/kroon-oil/pro15.png" },
      { name: "SP Fluid 6036", image: "/moto/kroon-oil/pro16.png" },
    ]
  };

  const currentCategoryProducts = allProducts[activeCategory as keyof typeof allProducts] || [];
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(currentCategoryProducts.length / itemsPerPage);
  
  const currentProducts = currentCategoryProducts.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  return (
    <section className="py-16 xl:py-24 ">
      <div className="custom-container px-5 xl:px-8">
        <div className="flex flex-col gap-10 mb-12">
          {/* Top Row: Heading and Paragraph */}
          <div className="flex flex-col xl:flex-row justify-between items-center gap-6" data-aos="fade-up">
            <h2 className="section-title font-normal text-white tracking-wide anton-font xl:w-1/2 text-left">
              Explore Our Lubrication Solutions
            </h2>
            <p className="section-text text-[#ffffff] font-normal leading-[1.8] oswald-font text-left xl:text-right xl:w-1/2 max-w-xl">
              Discover high-performance Kroon-Oil engine oils designed to maximize engine life, improve fuel efficiency, and meet the latest OEM and industry standards.
            </p>
          </div>

          {/* Bottom Row: Tabs and View All Button */}
          <div className="flex flex-col xl:flex-row justify-between items-center gap-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-wrap gap-4 justify-center xl:justify-start w-full xl:w-auto">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(0);
                  }}
                  className={`px-6 py-2 rounded-xl font-normal header-link transition-colors anton-font tracking-wider border ${
                    activeCategory === category
                      ? "bg-[#FDCC0B] text-[#050404] border-[#FDCC0B]"
                      : "bg-transparent text-white border-[#ffffff]/80 hover:border-gray-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex justify-center xl:justify-end w-full xl:w-auto">
              <Button text="View All Products" />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
          {currentProducts.map((product, idx) => (
            <div key={idx} className="bg-[#181818] rounded-2xl p-8 flex flex-col items-center border border-gray-800 hover:border-gray-600 transition-colors group cursor-pointer shadow-lg">
              <div className="w-full aspect-square mb-6 relative flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-[80%] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
              </div>
              <h3 className="card-title font-normal text-white text-center anton-font tracking-wider">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-10 h-1.5 rounded-full transition-colors ${
                  currentPage === idx ? "bg-[#FFCB05]" : "bg-gray-700 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
