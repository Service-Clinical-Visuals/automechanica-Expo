"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function ProductRange() {
  const products = [
    {
      image: "/moto/celikis/pro1.png",
      title: "Gearboxes and Differentials",
      description: "Our spare parts, fully interchangeable with original components, are meticulously manufactured using the advanced production systems.",
    },
    {
      image: "/moto/celikis/pro2.png",
      title: "Customized Production",
      description: "Based on our industry experience since 1962 and utilizing the best machinery in the market, we are capable of producing fully equipped components for assembly lines.",
    },
    {
      image: "/moto/celikis/pro3.png",
      title: "Complementary products",
      description: "By sourcing parts from original manufacturers (Premium OE brands) or trusted suppliers (Aftermarket), we ensure that our spare parts consistently deliver the highest quality.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 mb-12">
          <div className="max-w-5xl" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-primary"></div>
              <h2 className="section-title text-[#005CA9] font-semibold">Transmission Product Range</h2>
            </div>
            <p className="section-text text-[#4B5563] leading-[1.8] font-normal">
              With our innovative and continuously evolving approach, we prioritize quality in every product. Our products are renowned for their superior reliability and unmatched quality. By offering solutions tailored to your needs, we go beyond meeting your expectations.
            </p>
          </div>
          <div data-aos="fade-left" className="flex-shrink-0">
            <Button href="#" variant="primary" hasArrow>
              View all Categories
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div 
              key={index}
              className={index === 2 ? "md:col-span-2 xl:col-span-1 flex justify-center" : ""}
            >
              <div 
                data-aos="fade-up" 
                data-aos-delay={index * 150}
                className={`h-full bg-white rounded-lg shadow-lg border border-gray-50 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] w-full ${index === 2 ? 'md:max-w-[calc(50%-1.25rem)] xl:max-w-none' : ''}`}
              >
              <div className="w-full aspect-[4/3] sm:aspect-[3/2] xl:aspect-[4/3] relative overflow-hidden bg-[#F8FAFC]">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="card-title font-semibold text-[#121C22] mb-4">{product.title}</h3>
                <p className="section-text text-[#4B5563] leading-[1.8] font-normal">
                  {product.description}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
