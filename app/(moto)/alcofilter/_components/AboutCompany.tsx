"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function AboutCompany() {
  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Column - Image */}
          <div className="order-2 xl:order-1 w-full bg-[#f8f8f8] p-8 md:p-12 flex justify-center items-center rounded-sm" data-aos="fade-right">
            {/* The image is currently missing in the directory, using a fallback path that the user can upload to */}
            <img 
              src="/moto/alcofilter/abt.png" 
              alt="ALCO Filters" 
              className="w-full h-auto object-contain max-h-[500px]"
            
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 xl:order-2 w-full text-left" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-[22px] bg-[#E10600]"></div>
              <span className="outfit-font font-medium text-[#E10600] header-sublink 
               ">
                About Company
              </span>
            </div>
            
            <h2 className="section-title oswald-font text-[#202020] leading-tight mb-6 font-medium">
              Leading the Way in Filtration Solutions
            </h2>
            
            <p className="outfit-font text-[#121212] section-text mb-4 leading-[1.6] font-normal">
              ALCO Filters is a leading European aftermarket filtration manufacturer with over 50 years of industry
              expertise, dedicated to delivering reliable, high-performance solutions across global markets. With a
              comprehensive product range covering automotive and industrial applications, the company focuses on
              quality, innovation, and precision engineering. Trusted by customers worldwide, ALCO Filters continues
              to set standards in performance, durability, and consistent reliability.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Manufactures filters for cars, trucks, earth-moving equipment, and stationary engines.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="outfit-font text-[#121212] section-text leading-[1.6] font-normal">
                  Offers 3,400+ oil, air, fuel, cabin, and hydraulic filter types.
                </span>
              </li>
            </ul>

            <Button href="#" variant="primary" className="font-bold gap-2">
              <span>Know More</span>
              <img src="/moto/alcofilter/btnarrow.png" alt="Arrow" className="w-4 h-4 object-contain brightness-0 invert" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
