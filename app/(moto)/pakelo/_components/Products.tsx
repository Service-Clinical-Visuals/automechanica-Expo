"use client";

import React, { useState } from "react";
import Button from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      image: "/moto/pakelo/pro11.png",
      title: "HELIUM EVO - SAE 10W-30",
      imageBg: "bg-[#EAEAEA]",
      badge: "/moto/pakelo/p1.png",
     
    },
    {
      image: "/moto/pakelo/pro22.png",
      title: "HELIUM FXT - SAE 0W-16",
      imageBg: "bg-[#EAEAEA]",
      badge: "/moto/pakelo/p2.png",
     
    }
    ,
     {
      image: "/moto/pakelo/pro33.png",
      title: "HELIUM EVO - SAE 10W-30",
      imageBg: "bg-[#EAEAEA]",
      badge: "/moto/pakelo/p2.png",
      
    },
     {
      image: "/moto/pakelo/pro44.png",
      title: "HELIUM EVO - SAE 10W-30",
      imageBg: "bg-[#EAEAEA]",
      badge: "/moto/pakelo/p2.png",
     
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= products.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, products.length - 2) : prev - 2));
  };

  return (
    <section className="bg-[#242424] py-16 md:py-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-10 items-center">
          
          {/* Left Text Content */}
          <div data-aos="fade-right" className="flex flex-col xl:pr-8">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-primary transform rotate-45"></div>
              <span className="text-primary dm-sans font-semibold header-btn  uppercase">
                Products
              </span>
            </div>

            <h2 className="section-title text-white mb-6 leading-tight oswald font-semibold">
              DISCOVER OUR PRODUCTS
            </h2>

            <p className="section-text text-white dm-sans font-normal mb-5 leading-[1.8]">
              Pakelo stands out among lubricant brands for its reliability and consistently high performance. We only produce lubricating oil capable of bringing real benefits and technological innovation to the market.
            </p>

            <p className="section-text text-white dm-sans font-normal mb-8 leading-[1.8]">
              Agricultural and industrial machinery, wheeled vehicles, boats: every component requires a specific lubricating oil to maintain high performance over time. Discover our lines of lubricating oils, greases and fluids designed for professional use.
            </p>

            {/* Slider Controls */}
            <div className="flex gap-4">
              <button onClick={prevSlide} className="group w-14 h-14 bg-white hover:bg-primary text-[#121C22] hover:text-[#E41316] transition-colors duration-300 flex items-center justify-center transform skew-x-[-15deg] border border-transparent">
                <span className="transform skew-x-[15deg] group-hover:-translate-x-1 transition-transform duration-300">
                  <ArrowLeft size={24} strokeWidth={2.5} />
                </span>
              </button>
              <button onClick={nextSlide} className="group w-14 h-14 bg-white hover:bg-primary text-[#121C22] hover:text-[#E41316] transition-colors duration-300 flex items-center justify-center transform skew-x-[-15deg] border border-transparent">
                <span className="transform skew-x-[15deg] group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={24} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Product Cards */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {products.slice(currentIndex, currentIndex + 2).map((product, index) => (
              <div 
                key={currentIndex + index} 
                className="bg-white rounded-2xl p-6  flex flex-col items-center group transition-transform hover:-translate-y-2 hover:shadow-2xl h-full animate-in fade-in zoom-in duration-500 "
              >
                {/* Image Container */}
                <div className={`w-full ${product.imageBg} rounded-2xl mb-8 overflow-hidden relative  flex  `}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 "
                  />
                </div>

                {/* Product Info */}
                <h3 className="section-text-2 text-[#242424] oswald uppercase font-medium mb-6 text-center">
                  {product.title}
                </h3>

                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                  {product.badge && (
                    <img src={product.badge} alt="badge" className="h-10 object-contain" />
                  )}
                </div>

                {/* Button */}
                <div className="mt-auto w-full flex items-center justify-center">
                  <Button href="#" variant="red" >
                    View Product
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
