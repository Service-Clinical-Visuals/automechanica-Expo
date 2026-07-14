"use client";

import React from "react";
import Button from "./Button";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-16 xl:py-24 bg-white">
      <div className="custom-container bg-[#ffffff] flex flex-col gap-12 xl:gap-16">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-6" data-aos="fade-up">
          <h2 className="section-title font-bold tracking-wide oswald-font text-[#212121]">
            Why Choose AHG GmbH?
          </h2>
          <p className="section-text font-normal oswald-font text-[#585858] leading-[1.6] tracking-wider">
            At AHG GmbH, we combine years of industry expertise with a commitment to quality, innovation, speed, and customer satisfaction. From tailored solutions and efficient logistics to expert technical support and reliable product availability, we deliver high-performance automotive solutions that meet the evolving needs of customers while ensuring exceptional service, consistent quality, and long-term business partnerships.
          </p>
        </div>

        {/* Middle: 3-Column Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10">
          
          {/* Left Card */}
          <div 
            className="xl:col-span-3 bg-white border border-gray-100 drop-shadow-lg rounded-tl-4xl rounded-br-4xl p-8 xl:p-10 flex flex-col justify-center gap-8"
            data-aos="fade-right"
          >
            <div className="flex flex-col gap-4">
              <h3 className="card-title font-semibold tracking-wide oswald-font text-[#212121]">
                Experience And Expertise
              </h3>
              <p className="header-link font-normal oswald-font text-[#585858] leading-[1.6] tracking-wider">
                With our many years of experience and comprehensive know-how in the industry, we offer professional advice and first-class products.
              </p>
            </div>
            
            <hr className="border-t border-gray-200 w-full" />
            
            <div className="flex flex-col gap-4">
              <h3 className="card-title font-semibold tracking-wide oswald-font text-[#212121]">
                Fast Delivery Times
              </h3>
              <p className="header-link font-normal oswald-font text-[#585858] leading-[1.6] tracking-wider">
                Thanks to efficient production processes and optimized logistics, we guarantee short delivery times.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="xl:col-span-6 h-[300px] xl:h-auto rounded-tl-4xl rounded-br-4xl overflow-hidden drop-shadow-lg" data-aos="zoom-in">
            <img 
              src="/moto/ahg/whychoose.png" 
              alt="AHG Facility" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card */}
          <div 
            className="xl:col-span-3 bg-white border border-gray-100 drop-shadow-lg rounded-tl-4xl rounded-br-4xl p-8 xl:p-10 flex flex-col justify-center gap-8"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-4">
             <h3 className="card-title font-semibold tracking-wide oswald-font text-[#212121]">
                Tailor-Made Solutions
              </h3>
              <p className="header-link font-normal oswald-font text-[#585858] leading-[1.6] tracking-wider">
                We offer customized solutions specifically tailored to the needs of our customers, thus positioning ourselves as the preferred partner.
              </p>
            </div>
            
            <hr className="border-t border-gray-200 w-full" />
            
            <div className="flex flex-col gap-4">
            <h3 className="card-title font-semibold tracking-wide oswald-font text-[#212121]">
                Excellent Customer Service
              </h3>
             <p className="header-link font-normal oswald-font text-[#585858] leading-[1.6] tracking-wider">
                Our dedicated team offers fast and competent support as well as comprehensive technical assistanc
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 mt-4" data-aos="fade-up">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            <div className="xl:col-span-8">
               <p className="section-text font-normal oswald-font text-[#585858] leading-[1.6] max-w-5xl tracking-wider">
                Our experience, technical expertise, and customer-focused approach make AHG GmbH a trusted automotive partner. From high-quality products and tailored solutions to efficient logistics and expert support, we deliver reliable solutions for lasting customer success.
              </p>
            </div>
            <div className="xl:col-span-4 flex xl:justify-end">
              <Button text="Explore Our Solutions" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
