"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function HightecProducts() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#ffffff]">
      <div className="custom-container">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center mb-16 md:mb-24">
          
          {/* Left Text */}
          <div className="flex flex-col items-start" data-aos="fade-right">
          
            <h2 className="text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide orbitron uppercase mb-6" data-aos="fade-up">
              HIGHTEC PRODUCTS – <b className="text-[#e61919] orbitron tracking-wide font-bold">100% MADE IN GERMANY</b>
            </h2>
            
            <div className=" mb-8 font-sans">
              <p className="text-[#666666] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8]">
                ROWE offers a full range of products with a high vertical production range, always manufactured in audited sustainable processes. In addition to many motor oils and winter chemicals for many various types of vehicles, we also offer lubricants for a wide variety of other utilisations and applications, for example in the industrial sector. ROWE products are available in more than 80 countries worldwide today and impress more people every day with their outstanding properties.
              </p>
            </div>

            <Button href="#">
              Explore Product
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full flex items-center justify-center relative aspect-[4/3] md:aspect-[16/9] xl:aspect-auto xl:h-[400px]" data-aos="fade-left">
            <img 
              src="/moto/rowe/hightecproduct.png" 
              alt="HIGHTEC Products" 
              className="w-full h-full object-contain drop-shadow-md mix-blend-multiply"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          
          {/* Left Video/360 Placeholder */}
          <div className="w-full aspect-video  relative flex items-center justify-center border border-gray-100 shadow-inner overflow-hidden" data-aos="fade-right">
             <DynamicVideoPlayer
               type="short-1"
               className="absolute inset-0 w-full h-full object-cover"
             />
             {/* Fallback pattern underneath the video in case it fails to load or hasn't loaded yet */}
             <div 
               className="absolute inset-0 z-[-1] pointer-events-none"
               style={{ 
                 backgroundColor: '#ffffff',
                 backgroundImage: `linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3), 
                                   linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3)`,
                 backgroundPosition: '0 0, 20px 20px',
                 backgroundSize: '40px 40px'
               }}
             ></div>
          </div>

          {/* Right Text */}
          <div className="flex flex-col items-start" data-aos="fade-left">
          
            <h2 className="text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide orbitron mb-6" data-aos="fade-up">
              Innovation Driven <b className="text-[#e61919] orbitron tracking-wide font-bold">by Performance</b>
            </h2>
            
            <div className="mb-6 font-sans">
              <p className="text-[#666666] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8]">
                Built on years of engineering expertise and continuous research, our lubricant solutions are designed to deliver superior protection, operational reliability, and sustainable performance. Every product is developed to meet stringent industry standards while supporting the evolving needs of modern technology.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-2">
              <div className="font-sans">
                <span className="font-bold text-[#000B29] orbitron text-sm md:text-[18px] font-semibold">Premium Quality Formulations: </span> 
                <span className="text-[#666666] text-sm md:text-[18px] leading-[1.8]">Developed using high-quality base oils and advanced additive technologies.</span>
              </div>
              <div className="font-sans">
                <span className="font-bold text-[#000B29] orbitron text-sm md:text-[18px] font-semibold">OEM & Industry Compliance: </span> 
                <span className="text-[#666666] text-sm md:text-[18px] leading-[1.8]">Designed to meet leading manufacturer specifications and international standards.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
