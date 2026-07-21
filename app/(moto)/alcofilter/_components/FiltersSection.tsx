"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function FiltersSection() {
  return (
    <section className="py-16 md:py-24 w-full bg-[#f9f9f9]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column - Video 2 */}
          <div className="order-2 xl:order-1 w-full relative aspect-video bg-gray-200 rounded-sm overflow-hidden flex items-center justify-center xl:col-span-7" data-aos="fade-right">
           
            
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
           
          </div>

          {/* Right Column - Content */}
          <div className="order-1 xl:order-2 w-full text-left xl:col-span-5" data-aos="fade-left">
            <h3 className="oswald-font text-[#E10600] section-text-1 font-medium mb-6">
              Filters
            </h3>
            
             <p className="outfit-font text-[#121212] section-text mb-4 leading-[1.6] font-normal">
              ALCO Filters offers a comprehensive range of high-performance filtration solutions for automotive, industrial, and heavy-duty applications. Designed with precision and built to meet international standards, each product ensures efficient filtration, system protection, and long-lasting reliability across diverse operating conditions.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Wide range: Oil, Air, Fuel, Cabin, and Hydraulic filters
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Compatible with passenger cars, trucks, and industrial equipment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Engineered for high efficiency and consistent performance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
               <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Manufactured to meet global quality standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
               <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Designed for durability and extended service life
                </span>
              </li>
            </ul>

            <Button href="#" variant="primary" className="font-bold gap-2">
              <span>Explore all Products</span>
              <img src="/moto/alcofilter/btnarrow.png" alt="Arrow" className="w-4 h-4 object-contain brightness-0 invert" />
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
