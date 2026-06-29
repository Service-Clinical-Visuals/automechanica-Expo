"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Button from "./Button";

const productData: Record<string, {title: string, image: string}[]> = {
  "Lubricants": [
    { title: "Motor Oils - Light Vehicle", image: "/moto/iadaAutomechanika/exp1.png" },
    { title: "Motor Oils - Heavy Vehicle", image: "/moto/iadaAutomechanika/exp2.png" },
    { title: "Gear And Transmission Oils", image: "/moto/iadaAutomechanika/exp3.png" },
    { title: "Hydraulic And Farm Oils", image: "/moto/iadaAutomechanika/exp4.png" },
  ],
  "Brakes & Transmissions": [
    { title: "Brake fluid", image: "/moto/iadaAutomechanika/exp5.png" },
    { title: "Automatic transmission fluids", image: "/moto/iadaAutomechanika/exp6.png" },
  ],
  "Coolants and Antifreezes": [
    { title: "E-MOBILITY", image: "/moto/iadaAutomechanika/exp7.png" },
    { title: "Coolants - Antifreezes", image: "/moto/iadaAutomechanika/exp8.png" },
    { title: "Glycogel - Organic", image: "/moto/iadaAutomechanika/exp9.png" },
    { title: "Glyco-Truck", image: "/moto/iadaAutomechanika/exp10.png" },
  ],
  "Car Care & Cleaners": [
    { title: "Car Care", image: "/moto/iadaAutomechanika/exp11.png" },
    { title: "Windshield Cleaners", image: "/moto/iadaAutomechanika/exp12.png" },
    { title: "Professional Cleaning Products", image: "/moto/iadaAutomechanika/exp13.png" },
    { title: "Red Line", image: "/moto/iadaAutomechanika/exp14.png" },
  ],
  "Additives and greases": [
    { title: "Additives - Car Additives", image: "/moto/iadaAutomechanika/exp15.png" },
    { title: "Additives - Cargo Additives", image: "/moto/iadaAutomechanika/exp16.png" },
    { title: "Greases", image: "/moto/iadaAutomechanika/exp17.png" },
  ]
};

const categories = Object.keys(productData);

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Lubricants");

  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    setActiveCategory(currentIndex > 0 ? categories[currentIndex - 1] : categories[categories.length - 1]);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    setActiveCategory(currentIndex < categories.length - 1 ? categories[currentIndex + 1] : categories[0]);
  };

  return (
    <section className="w-full py-16">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8" data-aos="fade-down">
          <div className="max-w-6xl">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] !font-normal text-[#1e1e1e] leading-tight amaranth">
              High-Performance Automotive Solutions
            </h2>
            {/* <p className="text-gray-600 text-sm md:text-base leading-[1.8] font-medium"> */}
            <p className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth mt-4">
              Our extensive range of automotive products is formulated with advanced technology to improve performance, extend equipment life, minimize maintenance, and meet the demands of modern vehicles and machinery.
            </p>
          </div>
          <div className="flex-shrink-0">
             <Button href="#">View All Products</Button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-10" />

        {/* Categories Section */}
        <div className="flex items-center justify-center gap-4 xl:gap-6 mb-12 w-full">
           <button 
             onClick={handlePrevCategory}
             className="hidden xl:flex flex-shrink-0 w-8 h-8 rounded-full bg-[#C00027] text-white items-center justify-center hover:bg-[#a00020] transition-colors shadow-sm"
           >
             <ArrowLeft size={16} strokeWidth={3} />
           </button>
           
           <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-2 xl:gap-y-0 xl:gap-x-6 w-full xl:w-auto">
             {categories.map((category, index) => (
               <React.Fragment key={category}>
                 <button 
                   onClick={() => setActiveCategory(category)}
                   className={`flex-shrink-0 text-[13px] sm:text-sm xl:text-[18px] font-normal amaranth transition-all duration-300 border xl:border-none rounded-full xl:rounded-none px-4 py-2 xl:px-0 xl:py-0 ${activeCategory === category ? 'bg-[#C00027] border-[#C00027] text-white xl:bg-transparent xl:text-[#C00027]' : 'bg-white border-gray-200 text-gray-600 xl:bg-transparent xl:text-gray-500 hover:bg-gray-50 xl:hover:bg-transparent hover:text-gray-800'}`}
                 >
                   {category}
                 </button>
                 {index < categories.length - 1 && (
                   <div className="hidden xl:block flex-shrink-0 w-[2px] h-4 bg-gray-300"></div>
                 )}
               </React.Fragment>
             ))}
           </div>

           <button 
             onClick={handleNextCategory}
             className="hidden xl:flex flex-shrink-0 w-8 h-8 rounded-full bg-[#C00027] text-white items-center justify-center hover:bg-[#a00020] transition-colors shadow-sm"
           >
             <ArrowRight size={16} strokeWidth={3} />
           </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData[activeCategory]?.map((card, index) => (
            <div key={index} className="bg-white shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300 p-4" data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Image Container with Inner Border */}
           
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-95 transition-transform duration-500"
                />
              
              {/* Content sits naturally below with no forced gap, empty space fills the bottom */}
              <div className="flex flex-col items-start flex-grow">
                <h3 className="font-normal text-[#1e1e1e] text-sm md:text-[22px] amaranth mb-4 leading-tight">{card.title}</h3>
                <Link href="#" className="inline-flex items-center gap-2 text-[#C00027] font-semibold text-sm md:text-[18px] underline underline-offset-4 decoration-2 amaranth">
                  View Products
                  <span className="w-5 h-5 rounded-full bg-[#C00027] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                     <ArrowUpRight size={12} strokeWidth={3} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
