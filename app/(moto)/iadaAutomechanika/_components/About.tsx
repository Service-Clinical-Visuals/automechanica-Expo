"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="fill-[#C00027] text-white flex-shrink-0 " size={24} />
    <span className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] amaranth font-normal ">{text}</span>
  </div>
);

export default function About() {
  return (
    <section className="w-full py-16" data-aos="fade-up">
      <div className="custom-container">
        
        {/* Top Section: Images & Text */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          
          {/* Left side: Images */}
          <div className="relative w-full aspect-auto rounded-2xl mb-8 lg:mb-0">
            {/* Main image */}
            <div className="w-full h-full rounded-2xl overflow-hidden">
               <img 
                 src="/moto/iadaAutomechanika/abt.png" 
                 alt="IADA Factory" 
                 className="w-full h-full object-cover" 
               />
            </div>
          
          </div>

          {/* Right side: Text Content */}
          <div className="flex flex-col gap-6 pt-12 lg:pt-0">
            <div className="border-b border-gray-300 pb-4 mb-2">
               <h2 className="text-3xl md:text-4xl lg:text-[38px] !font-normal text-[#1e1e1e] leading-tight amaranth">
                 About Our Company
               </h2>
            </div>
            
            <p className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
               In 1957, Mr. Manuel Brustenga founded IADA with the aim of producing an innovative brake fluid to fit out the Pegaso trucks manufactured by ENASA in Barcelona. Since then, the obsession with quality and technological innovation in the development of new products has allowed us to adapt to the needs of our clients, both national and export.
            </p>
            
            <p className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
               Over the years, our product range has significantly expanded to encompass a diverse array of offerings. We now provide all types of lubricants, coolants, power steering fluids, automatic transmission fluids, additives, greases, and an extensive selection of cleaning and maintenance products for vehicles. This comprehensive portfolio has been instrumental in solidifying IADA's leadership in the manufacturing and marketing of chemical products tailored for the automotive aftermarket. Our commitment to innovation ensures that we continuously meet the evolving needs of our customers, while our rigorous quality standards guarantee the reliability of every product we offer.
            </p>
            
            <div className="pt-2">
               <Button href="#">Know More</Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Features Box */}
        <div className="mt-20 md:mt-24 bg-white rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.2)] p-6 md:p-10 px-8 md:px-20 lg:px-30">
           <div className="grid grid-cols-1 xl:grid-cols-3">
             
             {/* Column 1 */}
             <div className="flex flex-col gap-2 lg:gap-5 pb-4 border-b border-gray-200 xl:border-b-0 xl:pb-0 xl:pr-8 xl:border-r">
                <FeatureItem text="Superior Engine Protection Technology" />
                <FeatureItem text="Enhanced Fuel Efficiency Benefits" />
                <FeatureItem text="Outstanding Engine Cleanliness Protection" />
             </div>
             
             {/* Column 2 */}
             <div className="flex flex-col gap-2 lg:gap-5 py-6 border-b border-gray-200 xl:border-b-0 xl:py-0 xl:px-8 xl:border-r">
                <FeatureItem text="High Performance Lubrication Solutions" />
                <FeatureItem text="Excellent Thermal Stability Performance" />
                <FeatureItem text="Extended Equipment Life Span" />
             </div>

             {/* Column 3 */}
             <div className="flex flex-col gap-2 lg:gap-5 pt-4  xl:pt-0 xl:pl-8">
                <FeatureItem text="Reliable Performance in All Conditions" />
                <FeatureItem text="Versatile Applications Across Industries" />
                <FeatureItem text="Exceeds Manufacturer Standards Consistently" />
             </div>

           </div>
        </div>
        
      </div>
    </section>
  );
}
