"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="relative w-full py-16 xl:py-24 bg-white">
      <div className="custom-container  flex flex-col gap-8 xl:gap-10">
        
        {/* Top Header Section Card */}
        <div className="bg-[#f7f8f8] rounded-3xl p-8 md:p-12 xl:p-16" data-aos="fade-up">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16">
            {/* Left: Title & Paragraphs */}
            <div className="xl:col-span-7 flex flex-col gap-6 ">
              <h2 className="text-[#212121] section-title font-bold tracking-wide oswald-font">
                AHG Autoteile GmbH
              </h2>
              <div className="flex flex-col gap-4 text-[#585858]">
                <p className="section-text font-normal oswald-font leading-[1.6] tracking-wider">
                  Welcome to AHG GmbH, your expert partner for diesel particulate filters and catalytic converters. For over 15 years, we have been active in this demanding market and have established ourselves as a reliable manufacturer and supplier of high-quality products.
                </p>
                <p className="section-text font-normal oswald-font leading-[1.6] tracking-wider">
                  With more than 40 dedicated employees and over 15,000 m² of warehouse space, we are ideally equipped to offer our customers a wide range of first-class products and fast, reliable service.
                </p>
              </div>
            </div>

            {/* Right: Subtitle & Button */}
            <div className="xl:col-span-5 flex flex-col justify-center xl:items-end gap-6 xl:text-right">
              <h3 className="side-text  font-semibold tracking-wide oswald-font text-[#212121] leading-[1.4] max-w-xs">
                Your Partner For Quality And Trust In The Automotive Sector.
              </h3>
              <Button text="AHG-Autoteile GmbH" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10">
          
          {/* Left Card: Why Choose */}
          <div className="xl:col-span-4 bg-[#f7f8f8] rounded-3xl p-8 md:p-12 flex flex-col gap-8 xl:gap-12 justify-center" data-aos="fade-right">
            <h2 className="side-title font-semibold tracking-wide oswald-font text-[#212121]">
              Why Choose AHG GmbH
            </h2>
            
            <ul className="flex flex-col gap-4">
              {[
                "15+ Years of Industry Expertise – Delivering proven automotive solutions.",
                "40+ Dedicated Professionals – Committed to quality and innovation.",
                "15,000+ m² Warehouse & Distribution Facility – Ensuring efficient product availability.",
                "High-Quality Manufacturing Standards – Built for lasting durability."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="/moto/ahg/bluechk.png" alt="Check" className="w-5 h-5 xl:w-6 xl:h-6 object-contain flex-shrink-0 mt-0.5" />
                  <span className="header-link font-normal oswald-font text-[#585858] leading-[1.6] tracking-wider">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: Image */}
          <div className="xl:col-span-8 h-[400px] md:h-[600px]  rounded-4xl overflow-hidden" data-aos="fade-left">
            <img 
              src="/moto/ahg/why.png" 
              alt="AHG Facility" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
