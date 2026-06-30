"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AdvancedEngineProtection() {
  return (
    <section className="w-full py-20 bg-[#1e1e1e]">
      <div className="custom-container">
        
        {/* Title */}
        <div className="text-center mb-8" data-aos="fade-down">
           <h2 className="text-3xl md:text-4xl lg:text-[38px] !font-normal !text-[#ffffff] leading-tight amaranth">
             Advanced Engine Protection
           </h2>
        </div>
        
        {/* Divider */}
        <hr className="border-[#ffffff]/90 mb-12 opacity-60" />

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 items-center mb-20">
          
          {/* Left side: Placeholder Image/Video */}
          <div className="w-full aspect-video  shadow-md overflow-hidden relative" data-aos="fade-right">
             <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>

          {/* Right side: Text Content */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
               At IADA, we develop high-quality engine oils that provide outstanding protection, efficiency, and reliability for today's modern engines. Manufactured using carefully selected base oils and advanced additive technology, our engine oils are designed to reduce friction, minimize wear, and maintain exceptional engine cleanliness under a wide range of operating conditions.
            </p>
            
             <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
               Whether for passenger cars, commercial vehicles, motorcycles, or heavy-duty equipment, IADA engine oils deliver excellent lubrication from cold starts to high-temperature operation. Their superior thermal and oxidation stability helps prevent sludge and deposit formation while extending oil life and reducing maintenance requirements. Engineered to meet the demanding performance standards of modern gasoline and diesel engines, our lubricants ensure smooth operation, improved fuel efficiency, and long-lasting engine protection.
            </p>
            
             <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
               With a comprehensive portfolio of synthetic, semi-synthetic, and mineral engine oils, IADA offers reliable lubrication solutions tailored to diverse vehicle types.
            </p>

            <div className="mt-4">
               <Button href="#" className="whitespace-nowrap">Explore Products</Button>
            </div>
          </div>
        </div>

        {/* Bottom Cards with Hexagons */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
           
           {/* Card 01 */}
           <div className="flex items-stretch relative group" data-aos="fade-up">
              {/* Hexagon */}
              <div className="w-[100px] h-[115px] bg-[#C00027] flex items-center justify-center text-[#ffffff]/68 amaranth text-5xl  flex-shrink-0 z-10 transition-transform group-hover:scale-105"
                   style={{ 
                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', 
                     marginRight: '-20px', 
                     marginTop: 'auto', 
                     marginBottom: 'auto' 
                   }}>
                 01
              </div>
              {/* White Box */}
              <div className="bg-white flex items-center p-6 pl-12 flex-grow shadow-md z-0 ">
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="fill-[#C00027] text-white flex-shrink-0 mt-1" size={24} />
                    <p className="!text-[#5e676] text-sm md:text-[18px] leading-[1.6] text-justify font-normal amaranth">
                     <strong className=" text-[#353a3d]">Superior Engine Protection</strong> - Minimizes wear, reduces friction, and protects critical engine components to extend engine life and maintain reliable performance.
                   </p>
                 </div>
              </div>
           </div>

           {/* Card 02 */}
           <div className="flex items-stretch relative group" data-aos="fade-up" data-aos-delay="150">
              {/* Hexagon */}
              <div className="w-[100px] h-[115px] bg-[#C00027] flex items-center justify-center text-[#ffffff]/68 amaranth text-5xl  flex-shrink-0 z-10 transition-transform group-hover:scale-105"
                   style={{ 
                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', 
                     marginRight: '-20px', 
                     marginTop: 'auto', 
                     marginBottom: 'auto' 
                   }}>
                 02
              </div>
              {/* White Box */}
              <div className="bg-white flex items-center p-6 pl-12 flex-grow shadow-md z-0 ">
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="fill-[#C00027] text-white flex-shrink-0 mt-1" size={24} />
                   <p className="!text-[#5e676] text-sm md:text-[18px] leading-[1.6] text-justify font-normal amaranth">
                     <strong className=" text-[#353a3d]">Outstanding Thermal & Oxidation Stability </strong> - Resists heat, prevents sludge, and keeps engines cleaner for longer.
                   </p>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
