"use client";

import React, { useState } from "react";
import { ChevronDown, Building2, Car, Settings } from "lucide-react";

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState("vehicle");

  return (
    <section className="bg-[#323232] py-16 w-full">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-16">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 rounded-2xl flex justify-center lg:justify-start items-center w-full lg:w-auto mb-6 lg:mb-0" data-aos="fade-right">
            <img 
              src="/moto/alcofilter/icon.png" 
              alt="ALCO Logo" 
              className="w-[250px] md:w-[350px] xl:w-[450px] h-auto object-contain brightness-0 invert" 
            />
          </div>

          {/* Search Form Area */}
          <div className="flex-1 w-full flex flex-col gap-6" data-aos="fade-left">
            
            {/* Tabs */}
            <div className="grid grid-cols-2 lg:flex items-center justify-center gap-2 lg:gap-4 mb-4 lg:mb-2 lg:pr-20">
              <button 
                onClick={() => setActiveTab("vehicle")}
                className={`w-full lg:w-auto px-2 lg:px-10 py-3 lg:py-2.5 oswald-font font-semibold header-link transition-colors leading-tight ${
                  activeTab === "vehicle" 
                    ? "bg-[#E10600] text-white border border-[#E10600]" 
                    : "bg-transparent border border-gray-400 text-white hover:border-white"
                }`}
              >
                Search <br className="lg:hidden" /> by <br className="lg:hidden" /> Vehicle
              </button>
              <button 
                onClick={() => setActiveTab("part")}
                className={`w-full lg:w-auto px-2 lg:px-10 py-3 lg:py-2.5 oswald-font font-semibold header-link transition-colors leading-tight ${
                  activeTab === "part" 
                    ? "bg-[#E10600] text-white border border-[#E10600]" 
                    : "bg-transparent border border-gray-400 text-white hover:border-white"
                }`}
              >
                Search <br className="lg:hidden" /> by Part <br className="lg:hidden" /> Number
              </button>
            </div>

            {/* Dropdowns */}
            {activeTab === "vehicle" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Manufacturer */}
              
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none text-white ">
                    <img src="/moto/alcofilter/1.png" alt="Icon" className="w-6 h-6 object-contain " />
                  </div>
                  <div className="w-full bg-transparent border border-gray-400 text-white rounded-lg py-3 pl-16 pr-10 hover:border-white transition-colors outfit-font section-text-2 font-normal flex items-center cursor-pointer">
                    Choose Manufacturer
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-white ">
                    <img src="/moto/alcofilter/dwnarrow.png" alt="Dropdown" className="w-[20px] h-auto " />
                  </div>
                </div>

                {/* Model */}
              
                 <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none text-white ">
                    <img src="/moto/alcofilter/2.png" alt="Icon" className="w-6 h-6 object-contain " />
                  </div>
                  <div className="w-full bg-transparent border border-gray-400 text-white rounded-lg py-3 pl-16 pr-10 hover:border-white transition-colors outfit-font section-text-2 font-normal flex items-center cursor-pointer">
                    Choose Model
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-white ">
                    <img src="/moto/alcofilter/dwnarrow.png" alt="Dropdown" className="w-[20px] h-auto " />
                  </div>
                </div>

                {/* Motor */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none text-white ">
                    <img src="/moto/alcofilter/3.png" alt="Icon" className="w-6 h-6 object-contain " />
                  </div>
                  <div className="w-full bg-transparent border border-gray-400 text-white rounded-lg py-3 pl-16 pr-10 hover:border-white transition-colors outfit-font section-text-2 font-normal flex items-center cursor-pointer">
                    Choose Motor
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-white ">
                    <img src="/moto/alcofilter/dwnarrow.png" alt="Dropdown" className="w-[20px] h-auto " />
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "part" && (
               <div className="grid grid-cols-1 gap-4">
                  <div className="relative max-w-md mx-auto w-full">
                    <input 
                      type="text" 
                      placeholder="Enter Part Number..."
                      className="w-full bg-transparent border border-gray-400 text-white rounded-md py-3 px-4 outline-none hover:border-white focus:border-white transition-colors outfit-font text-[14px]"
                    />
                  </div>
               </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-6 lg:mt-4">
              <button className="bg-white text-black font-medium header-sublink outfit-font py-3 lg:py-2.5 w-full md:w-auto px-10 lg:px-24 rounded-[4px] hover:bg-gray-100 transition-colors ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
