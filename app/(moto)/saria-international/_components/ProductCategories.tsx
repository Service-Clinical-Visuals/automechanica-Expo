"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function ProductCategories() {
  const products = [
    {
      name: "TC-W3 2 Stroke Motor\nOil",
      image: "/moto/saria-international/1.png"
    },
    {
      name: "Spray Paint - Paint\nRemover",
      image: "/moto/saria-international/2.png"
    },
    {
      name: "Foaming Upholstery\nShampoo",
      image: "/moto/saria-international/3.png"
    },
    {
      name: "Carburetor and Choke\nCleaner Spray",
      image: "/moto/saria-international/4.png"
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-12" data-aos="fade-up">
          <div className="max-w-4xl">
            <h2 className="oswald-font font-semibold text-[#272727] section-title mb-3">
              Our Product Categories
            </h2>
            <p className="lato-font text-[#4B5563] section-text font-normal leading-relaxed">
              From advanced lubricants to essential maintenance products, LION delivers reliable automotive solutions designed to enhance engine performance, provide lasting protection, and keep vehicles operating at their best in every condition.
            </p>
          </div>
          
          <div className="flex-shrink-0 pt-2 xl:pt-0">
            <Button href="#">
              View More
            </Button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white shadow-lg border border-gray-100 p-4 rounded flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300">
    
                <img 
                  src={product.image} 
                  alt={product.name.replace('\n', ' ')}
                  className="w-full h-full object-contain p-2 mb-2"
                />
              
              {/* Product Name */}
              <h3 className="oswald-font font-semibold text-[#484848] text-center card-text2 px-2 whitespace-pre-line leading-snug pb-2">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
