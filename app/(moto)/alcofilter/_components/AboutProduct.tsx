"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function AboutProduct() {
  return (
    <section className="py-16 md:py-24 w-full" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[3px] h-[22px] bg-[#E10600]"></div>
              <span className="outfit-font font-medium text-[#E10600] header-sublink 
               ">
              About Product
            </span>
          </div>
          
            <h2 className="section-title oswald-font text-[#202020] leading-tight mb-6 font-medium max-w-3xl">
            Advanced Filtration For Cleaner Systems And Efficiency
          </h2>
          
           <p className="outfit-font text-[#121212] section-text mb-4 leading-[1.6] font-normal max-w-3xl mx-auto">
            Explore a complete range of high-performance filtration solutions designed for every application. 
            Engineered for reliability, efficiency, and long-lasting protection.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column - Content */}
          <div className="w-full text-left order-2 xl:order-1 xl:col-span-5" data-aos="fade-right">
            <h3 className="oswald-font text-[#E10600] section-text-1 font-medium mb-6">
              Cabin Filter
            </h3>
            
            <p className="outfit-font text-[#121212] section-text mb-4 leading-[1.6] font-normal">
              ALCO cabin filters are designed to deliver clean, healthy air inside the vehicle by effectively capturing dust, pollen, and harmful airborne particles. Built with advanced filtration media, they enhance cabin comfort while ensuring optimal airflow and long-lasting performance.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Traps dust, pollen, and pollutants for improved air quality
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Ensures smooth airflow for enhanced driving comfort
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Supports efficient HVAC system performance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Available in standard and activated carbon variants
                </span>
              </li>
            </ul>

            <Button href="#" variant="primary" className="font-bold gap-2">
              <span>Explore Cabin Filters</span>
              <img src="/moto/alcofilter/btnarrow.png" alt="Arrow" className="w-4 h-4 object-contain brightness-0 invert" />
            </Button>
          </div>

          {/* Right Column - 360 Video */}
          <div className="w-full relative aspect-video bg-gray-200 rounded-sm overflow-hidden order-1 xl:order-2 flex items-center justify-center xl:col-span-7" data-aos="fade-left">
           
            {/* Try to load dynamic video if available, else it will just be background */}
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
