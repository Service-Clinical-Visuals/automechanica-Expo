"use client";

import React, { useState } from "react";
import { 
  FaCarSide, 
  FaShuttleVan, 
  FaTruck, 
  FaMotorcycle, 
  FaTractor, 
  FaSnowplow, 
  FaChevronDown,
  FaOilCan
} from "react-icons/fa";

export default function OilFinder() {
  const [activeCategory, setActiveCategory] = useState("Cars");

  const categories = [
    { name: "Cars", icon: "/moto/rowe/oil1.png"},
    { name: "Light commercial Vehicles (<7.5t)", icon: "/moto/rowe/oil2.png" },
    { name: "Trucks and Buses (>7.5t)", icon: "/moto/rowe/oil3.png" },
    { name: "Motorcycles, Mopeds, ATV/UTV", icon: "/moto/rowe/oil4.png" },
    { name: "Agriculture Equipment", icon: "/moto/rowe/oil6.png" },
    { name: "Constructions, Mining and Materials Handling Equipment", icon: "/moto/rowe/oil5.png" },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Tool Pattern Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none abtbg"
        style={{
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="custom-container relative z-10">
        
        {/* Title */}
        <div className="flex justify-center items-center gap-3 mb-16" data-aos="fade-down">
         <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide orbitron">
            OIL FINDER
          </h2>
          <img src="/moto/rowe/mdi_oil1.png" alt="Oil Finder" className="max-w-12 item-center object-contain " />
        </div>

        {/* Top Two Columns with OR */}
        {/* Top Two Columns with OR */}
        <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between gap-14 md:gap-28 lg:gap-32 mb-16 w-full lg:w-[100%] mx-auto">
          <div className="flex-1 w-full flex flex-col gap-3 relative z-10" data-aos="fade-right">
            <p className="text-white font-bold text-sm md:text-[18px]">Do you have your manual/service logbook to hand?</p>
            <div className="relative">
              <select defaultValue="" className="w-full appearance-none bg-white text-gray-500 py-3.5 pl-6 pr-12 outline-none text-sm md:text-[15px] font-medium cursor-pointer">
                <option value="" disabled hidden>Select Approval</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <img src="/moto/rowe/chevron-down.png" alt="Chevron Down" className="w-8 h-8 object-contain opacity-70" />
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center relative z-10 mb-0 md:mb-1" data-aos="zoom-in">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#e61919] flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-lg">
              OR
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col gap-3 relative z-10" data-aos="fade-left">
            <p className="text-white font-bold text-sm md:text-[18px]">Do you have your manual/service logbook to hand?</p>
            <div className="relative">
              <select defaultValue="" className="w-full appearance-none bg-white text-gray-500 py-3.5 pl-6 pr-12 outline-none text-sm md:text-[15px] font-medium cursor-pointer">
                <option value="" disabled hidden>Select Approval</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <img src="/moto/rowe/chevron-down.png" alt="Chevron Down" className="w-8 h-8 object-contain opacity-70" />
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-white/80 mb-12" data-aos="fade-up"></div>

        {/* Vehicle Search Section */}
        <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide orbitron text-center mb-10" data-aos="fade-up">
          Vehicle Search
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 w-full" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.name)}
              className={`bg-white flex flex-col items-center justify-center text-center gap-2 py-4 sm:py-6 px-2 transition-all duration-300 ${
                activeCategory === cat.name 
                  ? 'border-b-[4px] border-[#e61919] shadow-lg' 
                  : 'border-b-[4px] border-transparent hover:border-gray-200'
              }`}
            >
              <div className={`flex-shrink-0 h-12 sm:h-14 md:h-16 flex items-center justify-center mb-2 transition-colors duration-300 `}>
                <img src={cat.icon} alt="" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="text-black font-medium leading-snug w-full px-1 mt-2 flex items-start justify-center h-[40px] md:h-[50px]">
               <p className="text-sm md:text-[18px] line-clamp-2"> {cat.name} </p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Search Form */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-6 items-center w-full" data-aos="fade-up" data-aos-delay="200">
          
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative h-[52px]">
              <select defaultValue="" className="w-full appearance-none bg-white text-gray-500 py-3.5 pl-6 pr-12 outline-none text-sm md:text-[15px] font-medium cursor-pointer">
                <option value="" disabled hidden>Manufacturer</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <img src="/moto/rowe/chevron-down.png" alt="Chevron Down" className="w-5 h-5 object-contain opacity-70" />
              </div>
            </div>
            <div className="relative h-[52px]">
               <select defaultValue="" className="w-full appearance-none bg-white text-gray-500 py-3.5 pl-6 pr-12 outline-none text-sm md:text-[15px] font-medium cursor-pointer">
                <option value="" disabled hidden>Model *</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <img src="/moto/rowe/chevron-down.png" alt="Chevron Down" className="w-5 h-5 object-contain opacity-70" />
              </div>
            </div>
            <div className="relative h-[52px]">
               <select defaultValue="" className="w-full appearance-none bg-white text-gray-500 py-3.5 pl-6 pr-12 outline-none text-sm md:text-[15px] font-medium cursor-pointer">
                <option value="" disabled hidden>Type *</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <img src="/moto/rowe/chevron-down.png" alt="Chevron Down" className="w-5 h-5 object-contain opacity-70" />
              </div>
            </div>
          </div>

          <div className="xl:col-span-4 h-full">
            <div className="w-full h-full bg-[#404040] py-6 px-6 flex flex-col items-center justify-center text-center text-white leading-relaxed">
              <p className="text-white font-medium text-sm md:text-[16px]">Can't find the right oil?</p>
             <p className="text-white text-sm md:text-[18px] font-medium leading-[1.8]">
                Please feel free to get in touch with <br className="hidden lg:block"/>
                us using this <a href="#" className="underline font-semibold hover:text-gray-200 transition-colors">form</a>.
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
