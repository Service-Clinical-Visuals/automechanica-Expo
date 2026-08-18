"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = {
  "Brake Pads": [
    { id: 1, name: "G95", image: "/moto/frenos-sauleda/1.png" },
    { id: 2, name: "MM-MEX", image: "/moto/frenos-sauleda/2.png" },
    { id: 3, name: "FAG18/15", image: "/moto/frenos-sauleda/3.png" },
    { id: 4, name: "GHFM", image: "/moto/frenos-sauleda/4.png" },
    { id: 5, name: "FAG/M", image: "/moto/frenos-sauleda/5.png" },
  ],
  "Clutch Facings": [
    { id: 6, name: "G95", image: "/moto/frenos-sauleda/6.png" },
    { id: 7, name: "FAG/M", image: "/moto/frenos-sauleda/7.png" },
    { id: 8, name: "NT-DV", image: "/moto/frenos-sauleda/8.png" },
    { id: 9, name: "MM", image: "/moto/frenos-sauleda/9.png" },
    { id: 10, name: "FAG/M", image: "/moto/frenos-sauleda/10.png" },
  ],
  "Press Blocks": [
    { id: 11, name: "FAG/M", image: "/moto/frenos-sauleda/11.png" },
    { id: 12, name: "MM", image: "/moto/frenos-sauleda/12.png" },
    { id: 13, name: "NT-DV", image: "/moto/frenos-sauleda/13.png" },
    { id: 14, name: "G05", image: "/moto/frenos-sauleda/14.png" },
    { id: 15, name: "FAG/M", image: "/moto/frenos-sauleda/15.png" },
  ],
  "Other": [
    { id: 16, name: "G95", image: "/moto/frenos-sauleda/1.png" },
    { id: 17, name: "MM-MEX", image: "/moto/frenos-sauleda/2.png" },
    { id: 18, name: "FAG18/15", image: "/moto/frenos-sauleda/3.png" },
    { id: 19, name: "GHFM", image: "/moto/frenos-sauleda/4.png" },
    { id: 20, name: "FAG/M", image: "/moto/frenos-sauleda/5.png" },
  ]
};

type CategoryName = keyof typeof categories;

export default function ProductRange() {
  const [activeTab, setActiveTab] = useState<CategoryName>("Brake Pads");

  const handleTabClick = (tabName: CategoryName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        
        {/* Top Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
         <h3 className="sora text-[var(--color-primary)] section-text font-semibold mb-2">Our Product Range</h3>
         <h2 className="section-title text-[#202020] sora font-semibold leading-tight">
            Comprehensive Range of Automotive Components
          </h2>
            <p className="section-text text-[#404040] font-regular inter leading-relaxed">
            Our product range includes a wide selection of high-performance gaskets and engine components, designed to meet the demands of modern vehicles. Each product is engineered with precision and built using quality materials to ensure durability, reliability, and optimal performance in every application.
          </p>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-center">
          
          {/* Sidebar Tabs */}
          <div className="w-full xl:w-64 flex-shrink-0 flex flex-col" data-aos="fade-right">
            <div className="flex flex-col gap-4">
              {(Object.keys(categories) as CategoryName[]).map((tabName) => {
                const isActive = activeTab === tabName;
                return (
                  <button 
                    key={tabName}
                    onClick={() => handleTabClick(tabName)}
                    className={`flex items-center justify-between px-5 py-3 font-semibold sora product-link transition-all ${
                      isActive 
                        ? "bg-[var(--color-primary)] text-white" 
                        : "bg-white border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[#fff9f9]"
                    }`}
                  >
                    <span className={`font-semibold sora product-link ${isActive ? "text-white" : "text-[var(--color-primary)]"}`}>{tabName}</span>
                    <ChevronRight size={18} />
                  </button>
                );
              })}
            </div>
            
            <div className="flex justify-center mt-4">
              <Link 
                href="/frenos-sauleda/products"
                className="inline-block px-6 py-3 bg-white border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold sora hover:bg-[var(--color-primary)] hover:text-white transition-all text-center"
              >
                View All Product
              </Link>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow flex flex-wrap justify-center gap-4" data-aos="fade-left" key={activeTab}>
            {categories[activeTab].map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col border border-gray-300 overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 animate-in fade-in zoom-in-95 w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] xl:w-[calc(20%-0.8rem)]"
              >
                {/* Product Image */}
                <div className="w-full  flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover p-2"
                  />
                </div>
                
                {/* Product Details */}
                <div className="p-4 flex flex-col items-center text-center gap-4 flex-grow justify-between">
                  <h4 className="sora font-semibold text-[#2a2a2a] footer-link">
                    {product.name}
                  </h4>
                  <Link 
                    href={`/frenos-sauleda/products/${product.id}`}
                    className="inline-block sora header-link border border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-1.5  font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
