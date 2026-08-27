"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Products() {
  const [activeTab, setActiveTab] = useState("Camshaft");

  const products = [
    {
      id: "71-1001",
      image: "/moto/ijsgroup/1.png",
      name: "71-1001",
      category: "Camshaft"
    },
    {
      id: "71-1002",
      image: "/moto/ijsgroup/9.png",
      name: "71-1002",
      category: "Camshaft"
    },
    {
      id: "71-1003",
      image: "/moto/ijsgroup/2.png",
      name: "71-1003",
      category: "Camshaft"
    },
    {
      id: "10-1001",
      image: "/moto/ijsgroup/3.png",
      name: "10-1001",
      category: "Wheel Hub"
    },
    {
      id: "10-1009",
      image: "/moto/ijsgroup/4.png",
      name: "10-1009",
      category: "Wheel Hub"
    },
    {
      id: "10-1010",
      image: "/moto/ijsgroup/5.png",
      name: "10-1010",
      category: "Wheel Hub"
    },
    {
      id: "60-1001",
      image: "/moto/ijsgroup/6.png",
      name: "60-1001",
      category: "Oil Pump"
    },
    {
      id: "60-1002",
      image: "/moto/ijsgroup/7.png",
      name: "60-1002",
      category: "Oil Pump"
    },
    {
      id: "60-1003",
      image: "/moto/ijsgroup/8.png",
      name: "60-1003",
      category: "Oil Pump"
    },
  ];

  const filteredProducts = activeTab === "View All Categories" 
    ? products 
    : products.filter(product => product.category === activeTab);

  const tabs = ["Camshaft", "Wheel Hub", "Oil Pump", "View All Categories"];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      
      {/* Desktop Vertical Watermark Right */}
      <div className="hidden lg:flex items-center justify-center absolute right-0 top-0 bottom-0 w-24 xl:w-20 z-0 opacity-20 pointer-events-none select-none">
        <span 
          className="oswald-font font-semibold titles tracking-widest uppercase origin-center rotate-90 whitespace-nowrap"
          style={{ 
            WebkitTextStroke: "2px #247EA3",
            color: "transparent"
          }}
        >
          Our Products
        </span>
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-8 max-w-4xl" data-aos="fade-up">
          <h2 className="oswald-font font-semibold section-title text-[#212121] mb-8">
            <span>High-precision parts for <span className="relative">every engine<span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#006DA4]"></span></span></span>
          </h2>
          <p className="sora-font section-text text-[#212121] leading-relaxed mx-auto">
            Precision-engineered engine components manufactured to the highest industry standards. Trusted by customers worldwide with over one million parts produced annually.
          </p>
        </div>

        {/* Categories / Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 border border-[#247EA3] oswald-font font-normal btn-text1 transition-colors ${
                activeTab === tab 
                  ? "bg-[#247EA3] text-white" 
                  : "bg-transparent text-[#247EA3] hover:bg-[#247EA3] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="flex flex-col border border-gray-200 bg-white shadow-sm p-4 text-center group w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.5rem)]"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100 + 200}
            >
              <div className="w-full aspect-[4/3] bg-[#BABABA]/20 mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`Product ${product.name}`} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="oswald-font font-semibold card-text md:text-2xl text-[#247EA3] mb-5">
                {product.name}
              </h3>
              <div className="flex justify-center pb-2">
                <Button href="#">
                  View Product
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
