"use client";

import React from "react";
import { Settings } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Assemblies",
    image: "/moto/sm-motorenteile-gmbh/product1.png",
    link: "#"
  },
  {
    title: "Exhaust Valves",
    image: "/moto/sm-motorenteile-gmbh/product2.png",
    link: "#"
  },
  {
    title: "Hydraulic tappets",
    image: "/moto/sm-motorenteile-gmbh/product3.png",
    link: "#"
  },
  {
    title: "Inlet Valves",
    image: "/moto/sm-motorenteile-gmbh/product4.png",
    link: "#"
  }
];

export default function Products() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        {/* Header row: Heading (left) and Link (right) */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <img src="/moto/sm-motorenteile-gmbh/setting.png" alt="Setting" className="w-auto h-auto object-contain" />
            <h2 className="section-title text-[#1D1D1B] orbitron-font font-semibold">
              Our Product Categories
            </h2>
          </div>
          <Link href="#" className="btn-text text-[#E4200E] hover:text-red-700 dmsans-font font-DM Sans hover:underline">
            View All Categories...
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={index}
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

              {/* Text content */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="card-title text-white font-bold dmsans-font mb-1">
                  {category.title}
                </h3>
                <span className="btn-text text-white dmsans-font border-b border-white pb-0.5">
                  View Products
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
