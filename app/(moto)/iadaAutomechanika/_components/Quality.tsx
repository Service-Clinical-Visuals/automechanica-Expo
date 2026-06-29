"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function Quality() {
  return (
    <section className="w-full bg-[#202020] py-16 text-white" data-aos="fade-up">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 items-center mb-16">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] !font-normal !text-[#ffffff] leading-tight amaranth">
              Quality
            </h2>
            <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
              IADA guarantees exceptional product and service quality through exhaustive quality control of the raw materials used and the products manufactured in each of the production phases. We have a quality laboratory equipped with all the necessary equipment and instruments to constantly monitor our products and processes. Additionally, since 2006 our quality and environmental management system is internationally recognized and we have the ISO 9001: 2015 and ISO 14001: 2015 certifications granted by Applus.
            </p>
            
            <div className="flex flex-col gap-5 mt-4">
              <div className="flex items-start gap-3">
                 <CheckCircle2 className="fill-[#C00027] text-[#202020] flex-shrink-0 mt-[2px]" size={22} />
                 <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
                   <strong className="!text-white font-normal">Strict Quality Control</strong> - Comprehensive testing and monitoring of raw materials and products throughout every production stage.
                 </p>
              </div>
              <div className="flex items-start gap-3">
                 <CheckCircle2 className="fill-[#C00027] text-[#202020] flex-shrink-0 mt-[2px]" size={22} />
                 <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
                   <strong className="!text-white font-normal">Certified Excellence</strong> - ISO 9001:2015 and ISO 14001:2015 certified, ensuring internationally recognized quality and environmental standards.
                 </p>
              </div>
            </div>

            <div className="mt-6">
               <Button href="#">Learn More About Us</Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full aspect-video md:aspect-[16/9] lg:aspect-auto lg:h-[420px] rounded-sm overflow-hidden border border-gray-800">
             <img 
               src="/moto/iadaAutomechanika/quality1.jpg" 
               alt="Quality Assurance" 
               className="w-full h-full object-cover" 
             />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#ffffff]/70 mb-12 opacity-50" />

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* Card 1: Customer Service */}
          <div className="border border-[#ffffff]/30 p-5 flex flex-col sm:flex-row gap-6 items-center bg-[#202020] hover:bg-[#252525] transition-colors duration-300">
             <div className="w-40 sm:w-48 lg:w-60 xl:w-65 aspect-square flex-shrink-0 overflow-hidden border border-gray-800">
                <img 
                  src="/moto/iadaAutomechanika/quality2.jpg" 
                  alt="Customer Service" 
                  className="w-full h-full object-cover" 
                />
             </div>
             <div className="flex flex-col gap-3 py-1">
                <h3 className="font-normal !text-[#ffffff] text-sm md:text-[22px] amaranth leading-tight">Customer Service</h3>
                <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
                  There is nothing more important to IADA than its Clients. They are the center of the company's actions and our main challenge is their loyalty through an excellent product and service that exceeds all their expectations. The high requirements from our customers is the force that drives us to improve day after day.
                </p>
             </div>
          </div>

          {/* Card 2: I+D+i */}
          <div className="border border-[#ffffff]/30 p-5 flex flex-col sm:flex-row gap-6 items-center bg-[#202020] hover:bg-[#252525] transition-colors duration-300">
             <div className="w-40 sm:w-48 lg:w-60 xl:w-65 aspect-square flex-shrink-0 overflow-hidden border border-gray-800">
                <img 
                  src="/moto/iadaAutomechanika/quality3.jpg" 
                  alt="I+D+i" 
                  className="w-full h-full object-cover" 
                />
             </div>
             <div className="flex flex-col gap-3 py-1">
                <h3 className="font-normal !text-[#ffffff] text-sm md:text-[22px] amaranth leading-tight">I+D+i</h3>
                <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
                  The unstoppable process of evolution in which the automotive sector is, makes it vital to develop a decisive policy of innovation, research and development of new products. 10% of IADA's staff works in the R&D laboratory and are exclusively dedicated to constantly innovating and improving the formulas of our products.
                </p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
