"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Products() {
  const products = [
    {
      title: "Motor Oils",
      image: "/moto/rowe/productq.png", 
    },
    {
      title: "Motorcycle Oils",
      image: "/moto/rowe/product2.png",
    },
    {
      title: "Racing products",
      image: "/moto/rowe/product3.png",
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f9f9f9]">
      <div className="custom-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
       
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide" data-aos="fade-up">
            Our Products
          </h2>
          <div data-aos="fade-left">
            <Button href="#">
              View All Products
            </Button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="relative w-full aspect-[3/2] overflow-hidden z-0">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div 
                className="bg-[#e61919] text-white ml-7  mr-7 py-4 md:py-5 px-6 md:px-8 w-[90%] z-10 relative flex items-center justify-center shadow-lg -mt-[15px] md:-mt-[22px]"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)' }}
              >
                <h3 className="text-white text-sm md:text-[18px] orbitron font-medium tracking-wide text-center">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
