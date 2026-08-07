"use client";

import React, { useState, useEffect } from "react";
import AutopumpsButton from "./AutopumpsButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  { id: 1, name: "TRANSMISSION", image: "/moto/autopumps/p1.png" },
  { id: 2, name: "WATER PUMPS", image: "/moto/autopumps/p2.png" },
  { id: 3, name: "OIL PUMPS", image: "/moto/autopumps/p3.png" },
  { id: 4, name: "TIMING KITS", image: "/moto/autopumps/p4.png" },
  { id: 5, name: "CYLINDER HEADS", image: "/moto/autopumps/p5.png" },
  { id: 6, name: "GASKETS", image: "/moto/autopumps/p6.png" },
];

export default function ProductsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        {/* Top Text & Button Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="max-w-4xl">
            <h2 className="section-title text-[#2a2a2a] mb-4">
              Your Complete Engine Partner
            </h2>
            <p className="section-text text-[#585858] leading-relaxed">
              At Autopumps UK, we offer more than pumps. Our comprehensive range of OE-quality engine components is engineered for precision, durability, and reliable performance. From timing systems and cylinder heads to cooling, lubrication, gaskets, and valve train components, we provide complete solutions for the modern automotive aftermarket.
            </p>
          </div>
          <div className="flex-shrink-0">
            <AutopumpsButton href="/autopumps/products" variant="primary">
              Explore Our Products
            </AutopumpsButton>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-[#000000]/74 mb-16 md:mb-24"></div>

        {/* Slider Section */}
        <div className="relative w-full max-w-[1500px] mx-auto flex items-center justify-center">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-4 z-20 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#064da1] text-white hover:bg-[#053d82] transition-colors shadow-lg"
            aria-label="Previous Product"
          >
            <ArrowLeft size={28} strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-4 z-20 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#064da1] text-white hover:bg-[#053d82] transition-colors shadow-lg"
            aria-label="Next Product"
          >
            <ArrowRight size={28} strokeWidth={2.5} />
          </button>

          {/* Slider Content */}
          <div className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center">
            {products.map((product, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={product.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95'}`}
                >
                  {/* Product Image */}
                  <div className="relative aspect-square w-[220px] h-[220px] md:w-[350px] md:h-[350px] xl:w-[700px] xl:h-[700px]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
