"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Products() {
  const [activeTab, setActiveTab] = useState("FCS Light Duty");

  const products = [
    {
      category: "FCS Light Duty",
      image: "/moto/fcs/p1.png",
      title: "Complete Strut Assemblies",
      desc: "Fast installation with OE-quality performance and application-specific design.",
    },
    {
      category: "FCS Light Duty",
      image: "/moto/fcs/p2.png",
      title: "Bare Shocks & Structs",
      desc: "Enhance steering, handling, braking, and safety with FCS struts and shock absorbers.",
    },
    {
      category: "FCS Light Duty",
      image: "/moto/fcs/p3.png",
      title: "lift Supports",
      desc: "The OE fit design of our lift supports ensure a perfect fit and optimal performance.",
    },
    {
      category: "FCS Heavy Duty",
      image: "/moto/fcs/p4.png",
      title: "Heavy Duty Shock Absorbers",
      desc: "Reliable damping, improved stability, and enhanced ride control for commercial vehicles.",
    },
    {
      category: "FCS Heavy Duty",
      image: "/moto/fcs/p5.png",
      title: "Heavy Duty Air Springs",
      desc: "Adjustable load support for stable ride height, reduced wear, and reliable performance.",
    }
  ];

  const filteredProducts = activeTab === "View All"
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#272727] oswald-font font-semibold mb-4">
            Our Product Range
          </h2>
          <p className="rubik-font text-[#4B5563] section-text max-w-3xl mx-auto leading-relaxed">
            FCS delivers OE-quality ride control solutions for passenger vehicles and commercial fleets, engineered for reliable, smooth, and long-lasting performance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {["FCS Light Duty", "FCS Heavy Duty", "View All"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-[4px] oswald-font font-semibold text-[16px] transition-colors ${activeTab === tab
                ? "bg-[#163683] text-white"
                : "bg-[#E5E7EB] text-[#272727] hover:bg-[#D1D5DB]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8" data-aos="fade-up" data-aos-delay="200">
          {filteredProducts.map((product, index) => (
            <div key={index} className="flex flex-col w-full bg-white border border-[#E5E7EB] p-1 rounded-[8px] text-center group transition-shadow hover:shadow-md">
              {/* Image Container */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400 rounded-md">Image</div>' }}
                />
              </div>

              {/* Content */}
              <h3 className="card-title text-[#272727] mt-1 oswald-font font-semibold mb-3">
                {product.title}
              </h3>
              <p className="rubik-font text-[#4B5563] card-text font-regular leading-relaxed mb-3 flex-grow">
                {product.desc}
              </p>

              {/* Link */}
              <Link href="#" className="text-[#163683] oswald-font underline section-text font-semibold hover:underline mt-auto mb-2">
                View Products
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
