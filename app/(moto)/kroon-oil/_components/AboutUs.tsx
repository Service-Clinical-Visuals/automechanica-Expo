"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="relative w-full py-16 xl:py-24 ">
      <div className="custom-container px-5 xl:px-8">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12 xl:mb-16">
          
          {/* Left: Title & Buttons */}
          <div className="xl:col-span-6 flex flex-col justify-between items-start gap-8" data-aos="fade-right">
            <h2 className="section-title font-normal text-white  tracking-wide anton-font">
              About Kroon-Oil
            </h2>
            
            <Button text="Learn More" />
          </div>

          {/* Right: Paragraph */}
          <div className="xl:col-span-6 flex xl:justify-end items-end" data-aos="fade-left">
            <p className="section-text text-[#ffffff] font-normal leading-[1.8] oswald-font text-left xl:text-right max-w-xl">
              Kroon-Oil has developed and produced high-quality lubricants and maintenance products for over 100 years. We focus on innovation and quality, export our products globally, and provide customer-oriented solutions and technical support.
            </p>
          </div>
        </div>

        {/* Bottom Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 xl:gap-10 min-h-[350px] xl:h-[450px] xl:h-[550px]" data-aos="fade-up">
          <div className="md:col-span-2 h-[300px] md:h-full rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg border border-gray-800">
            <img src="/moto/kroon-oil/abt1.png" alt="Kroon-Oil Lab" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="md:col-span-1 h-[300px] md:h-full rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg border border-gray-800">
            <img src="/moto/kroon-oil/abt2.png" alt="Kroon-Oil Pumping Gas" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="md:col-span-1 h-[300px] md:h-full rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg border border-gray-800">
            <img src="/moto/kroon-oil/abt3.png" alt="Kroon-Oil Gears" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
