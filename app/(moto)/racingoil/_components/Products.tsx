"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  // Slide 1
  [
    {
      id: 1,
      img: "/moto/racingoil/cat1.png",
      title: "Light Vehicles",
      desc: "Premium oils for passenger cars and light vehicles",
      colSpan: "md:col-span-2"
    },
    {
      id: 2,
      img: "/moto/racingoil/cat2.png",
      title: "HEAVY VEHICLES",
      desc: "Special lubricants for heavy vehicles and trucks",
      colSpan: "md:col-span-1"
    },
    {
      id: 3,
      img: "/moto/racingoil/cat3.png",
      title: "HYDRAULICS",
      desc: "High-quality, high-performance hydraulic oils",
      colSpan: "md:col-span-1"
    }
  ],
  // Slide 2
  [
    {
      id: 4,
      img: "/moto/racingoil/cat4.png",
      title: "AGRICULTURE",
      desc: "Lubrication solutions for agricultural machinery and tractors",
      colSpan: "md:col-span-2"
    },
    {
      id: 5,
      img: "/moto/racingoil/cat5.png",
      title: "TRANSMISSIONS",
      desc: "Smooth Shifting with Advanced Transmission Protection",
      colSpan: "md:col-span-1"
    },
    {
      id: 6,
      img: "/moto/racingoil/cat6.png",
      title: "MOTORCYCLES",
      desc: "High-performance lubricants for motorcycles",
      colSpan: "md:col-span-1"
    }
  ],
  // Slide 3
  [
    {
      id: 7,
      img: "/moto/racingoil/cat7.png",
      title: "BRAKE FLUID",
      desc: "Reliable Braking Performance in Every Driving Condition",
      colSpan: "md:col-span-2"
    },
    {
      id: 8,
      img: "/moto/racingoil/cat8.png",
      title: "MARINE",
      desc: "Premium Marine Lubricants for Maximum Engine Protection",
      colSpan: "md:col-span-1"
    },
    {
      id: 9,
      img: "/moto/racingoil/cat9.png",
      title: "INDUSTRIAL",
      desc: "High-Performance Industrial Oils for Every Application Requirement",
      colSpan: "md:col-span-1"
    }
  ]
];

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="products" className="w-full min-h-screen flex flex-col justify-center py-16 md:py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-5xl mx-auto px-4" data-aos="fade-up">
          <h2 className="section-title font-primary font-bold text-[#222222] leading-tight">
            Our Categories
          </h2>
          <p className="section-text font-secondary text-[#585858] leading-relaxed">
            Explore Racing Oil's comprehensive range of premium lubricants and maintenance products, engineered to meet the demands of automotive, agricultural, industrial, marine, and commercial applications. From engine oils and transmission fluids to greases, brake fluids, antifreeze, additives, and cleaning products, our solutions deliver reliable protection, maximum performance, and long-lasting efficiency across every sector.
          </p>
        </div>

        {/* Slider Container */}
        <div className="w-full mt-8 md:mt-12 px-4 lg:px-8" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 w-full animate-fade-in-up">
            {slides[currentSlide].map((product) => (
              <div
                key={product.id}
                className={`${product.colSpan} w-full h-[320px] md:h-[400px] lg:h-[460px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-md group relative cursor-pointer`}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/moto/racingoil/abt.png";
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-primary font-bold card-title text-white mb-1 md:mb-2">
                      {product.title}
                    </h3>
                    <p className="font-secondary card-text text-white/90 mb-4 md:mb-6">
                      {product.desc}
                    </p>
                    <button className="btn-text bg-[#011689] text-white font-secondary font-semibold py-2 px-5 rounded flex items-center gap-2 hover:bg-[#0220bc] transition-colors w-fit">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex items-center justify-center gap-2 mt-10" data-aos="fade-up">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-10 bg-[#011689]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
