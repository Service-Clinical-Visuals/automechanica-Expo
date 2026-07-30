"use client";

import React from "react";

const productsData = [
  { title: "Oil Filters", img: "/moto/hannfilter/p1.png" },
  { title: "Fuel Filters", img: "/moto/hannfilter/p2.png" },
  { title: "Air Filters", img: "/moto/hannfilter/p3.png" }
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 md:py-20 bg-[#F1F1F1] overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="section-title font-primary font-medium text-[#111111] leading-tight">
            Our Featured Products
          </h2>
          <p className="section-text font-secondary font-normal text-[#484848] leading-relaxed">
            Hann Filter Is Expanding Its Product Range By Giving Great Importance To R&D. Our Company Mission Is Providing Clients High Efficiency & Quality Air Filters At Competitive Prices & Great Customer Service While Giving Direction To The Market With Continuous Innovation.
          </p>
        </div>

        {/* 3-Column Product Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-10 md:mt-12" data-aos="fade-up" data-aos-delay="100">
          {productsData.map((product, idx) => (
            <div
              key={idx}
              className="w-full bg-[#0000AE] rounded-[24px] p-3 md:p-4 flex flex-col gap-2 shadow-xl transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="w-full relative flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/moto/swd/abt.png";
                  }}
                />
              </div>
              <div className="flex flex-col items-center text-center pt-2 pb-4 gap-4">
                <h3 className="font-primary text-white text-2xl md:text-3xl font-medium tracking-wide">
                  {product.title}
                </h3>
                <button className="bg-white text-[#0000AE] hover:bg-gray-100 font-secondary font-bold text-[14px] md:text-[16px] w-[85%] py-3 rounded-lg transition-colors">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
