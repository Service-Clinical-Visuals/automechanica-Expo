"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";


export default function ProductShowcase() {
  const features = [
    {
      title: "ENGINE CLEANLINESS",
      description: "Specialized detergent and dispersant technology minimizes sludge and deposit formation, keeping the engine cleaner for consistent performance."
    },
    {
      title: "RELIABLE PERFORMANCE",
      description: "Engineered for excellent thermal stability and viscosity control, ensuring smooth operation and dependable protection in both daily driving and demanding conditions."
    },
    {
      title: "HIGH TEMPERATURE STABILITY",
      description: "Formulated to withstand extreme operating temperatures, ensuring consistent oil performance, enhanced oxidation resistance, and dependable engine protection."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="custom-container">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center mb-16 md:mb-24">
          {/* Left Video */}
          <div data-aos="fade-right" className=" order-2 xl:order-1 w-full relative aspect-video overflow-hidden xl:col-span-7">
            <DynamicVideoPlayer 
              type="360" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className=" order-1 xl:order-2 flex flex-col items-start xl:col-span-5">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-primary transform rotate-45"></div>
              <span className="text-primary dm-sans font-semibold header-btn  uppercase">
                PRODUCT SHOWCASE
              </span>
            </div>

            <h2 className="section-title text-[#242424] mb-6 leading-tight oswald font-semibold">
              PRECISION ENGINE LUBRICATION
            </h2>

            <p className="section-text text-[#484848] dm-sans font-normal mb-6 leading-[1.7]">
              Pakelo has been engineering premium lubricants in Italy, combining advanced research, high-quality base oils, and innovative additive technology. Designed for modern gasoline and diesel engines, Pakelo engine oils help reduce friction, minimize wear, maintain engine cleanliness, and deliver reliable performance across demanding driving conditions. Manufactured to certified quality standards, every lubricant is developed to maximize engine efficiency, durability, and long-term protection.
            </p>

            {/* Mobile, Tablet, & 2XL+ Only Content */}
            <div className="flex xl:hidden 2xl:flex flex-col items-start w-full">
              <p className="card-title text-[#484848] oswald font-medium mb-6 leading-[1.5]">
                High-performance lubrication forms a durable protective film that helps reduce friction and extends the service life of critical engine components.
              </p>

              <Button href="#" variant="red">
                Explore Product
              </Button>
            </div>
          </div>

          {/* Laptop Only (1280px - 1535px) Centered Below */}
          <div data-aos="fade-up" className="hidden xl:flex 2xl:hidden xl:order-3 xl:col-span-12 flex-col items-center text-center mt-4">
            <p className="card-title text-[#484848] oswald font-medium mb-10 leading-[1.8] max-w-4xl mx-auto">
              High-performance lubrication forms a durable protective film that helps reduce friction and extends the service life of critical engine components.
            </p>

            <Button href="#" variant="red">
              Explore Product
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#f7f7f7] rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-primary oswald section-text-2 font-medium  uppercase mb-4">
                {feature.title}
              </h3>
              <p className="section-text text-[#484848] dm-sans font-normal  leading-[1.8]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
