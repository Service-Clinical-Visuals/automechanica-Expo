"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      title: "Star Air Cooled Brake Disc",
      image: "/moto/yavuzsan-otomotiv/p1.png",
      category: "disc",
      link: "#"
    },
    {
      title: "Sandero Brake Drum",
      image: "/moto/yavuzsan-otomotiv/p2.png",
      category: "drum",
      link: "#"
    },
    {
      title: "Toyota Coaster Brake Drum",
      image: "/moto/yavuzsan-otomotiv/p4.png",
      category: "drum",
      link: "#"
    },
    {
      title: "Air Cooled Brake Disc",
      image: "/moto/yavuzsan-otomotiv/p5.png",
      category: "disc",
      link: "#"
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Top Header & Filter Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12" data-aos="fade-up">

          {/* Left: Heading & Description */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <Typography variant="h2" className="oswald font-semibold section-title text-[#272727] tracking-wide leading-tight">
              Explore Our Products
            </Typography>
            <div className="w-50 h-[3px] bg-[#0F5AA6] mt-1 mb-4 rounded-full"></div>
            <Typography variant="p" className="rubik text-[#4B5563] text-base xl:text-[16px] leading-relaxed">
              Premium brake system components engineered with innovation, quality, and reliability to ensure safety and superior performance for every vehicle.
            </Typography>
          </div>

          {/* Right: Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab("disc")}
              className={`font-medium text-sm md:text-[15px] px-5 py-2.5 rounded-md transition-all duration-300 rubik ${
                activeTab === "disc" ? "bg-[#0F5AA6] text-white shadow-md" : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
              }`}
            >
              Brake Disc
            </button>
            <button
              onClick={() => setActiveTab("drum")}
              className={`font-medium text-sm md:text-[15px] px-5 py-2.5 rounded-md transition-all duration-300 rubik ${
                activeTab === "drum" ? "bg-[#0F5AA6] text-white shadow-md" : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
              }`}
            >
              Brake Drum
            </button>
            <button
              onClick={() => setActiveTab("pulley")}
              className={`font-medium text-sm md:text-[15px] px-5 py-2.5 rounded-md transition-all duration-300 rubik ${
                activeTab === "pulley" ? "bg-[#0F5AA6] text-white shadow-md" : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
              }`}
            >
              Crankshaft Pulley
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`font-medium text-sm md:text-[15px] px-6 py-2.5 rounded-md transition-all duration-300 rubik ${
                activeTab === "all" ? "bg-[#0F5AA6] text-white shadow-md" : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
              }`}
            >
              View All
            </button>
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#0F5AA6]/40 transition-all duration-300 group"
            >
              {/* Image Box */}
              <div className="relative w-full aspect-square  p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Box */}
              <div className="p-5 flex flex-col items-center justify-between flex-grow text-center bg-white">
                <Typography variant="h3" className="oswald font-bold text-[#202020] text-lg md:text-xl mb-4">
                  {prod.title}
                </Typography>

                {/* Divider & Link */}
                <div className="w-full border-t border-gray-100 pt-3 mt-auto">
                  <Link
                    href={prod.link}
                    className="inline-flex items-center justify-center gap-1 text-[#0F5AA6] hover:text-[#0c4885] rubik font-semibold text-sm transition-colors"
                  >
                    View The Product &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
