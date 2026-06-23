"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function About() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
            <b className="text-[#1a1a1a] orbitron font-bold">About </b>
            <b className="text-[#e4170f] orbitron font-bold">Rowe</b>
          </h2>
          <p className="text-[#666666] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8] text-center justify-center">
            ROWE has stood for high-quality lubricants since 1995 and now provides a full range of products which is available in more than 80 countries. The company itself is just as versatile as our product portfolio. Here you will find information about the ROWE Group, our state-of-the-art factory which is located in Worms, the ROWE brand and the Management Board.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-10 ">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center xl:col-span-5" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
              One of the most modern <b className="text-[#e61919] orbitron font-bold">lubricant factories</b>
            </h2>
            
            <div className="text-[#666666] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8] mb-8 space-y-5 font-sans">
              <p className="text-sm md:text-[18px] leading-[1.8] text-[#666666]">
                ROWE has stood for high-quality lubricants since 1995 and now provides a full range of products which is available in more than 80 countries. The company itself is just as versatile as our product portfolio. Here you will find information about the ROWE Group, our state-of-the-art factory which is located in Worms, the ROWE brand and the Management Board.
              </p>
              <p className="text-sm md:text-[18px] leading-[1.8] text-[#666666]">
                We generate a significant amount of own electricity via a photovoltaic system. We even make good use of the waste heat from the indoor boilers and this is utilised for production processes and to heat the factory halls. This process is so efficient that we can actually dispense with an additional heating system in production.
              </p>
            </div>

            {/* Stats Block */}
            <div className="bg-[#0f0f0f] text-white p-6 md:p-8 grid grid-cols-3 gap-2 md:gap-4 mb-8 relative overflow-hidden" data-aos="fade-up">
              {/* Subtle background pattern */}
              <div className="abtbg absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundSize: '16px 16px' }}></div>
              
              <div className="flex flex-col items-center text-center relative z-10" data-aos="zoom-in" data-aos-delay="100">
                <div className="mb-2 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center">
                  <img src="/moto/rowe/about2.png" alt="Staff" className="max-h-full max-w-full object-cover " />
                </div>
                <div className="text-2xl md:text-3xl font-bold font-sans mb-1">350</div>
                <div className="text-md md:text-[20px] font-medium text-gray-200 orbitron">Members of<br/>staff</div>
              </div>
              <div className="flex flex-col items-center text-center relative z-10" data-aos="zoom-in" data-aos-delay="200">
                <div className="mb-2 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center">
                  <img src="/moto/rowe/about1.png" alt="Containers" className="max-h-full max-w-full object-cover" />
                </div>
                <div className="text-2xl md:text-3xl font-bold font-sans mb-1">8,000</div>
                <div className="text-md md:text-[20px] font-medium text-gray-200 orbitron">Containers<br/>per hour</div>
              </div>
              <div className="flex flex-col items-center text-center relative z-10" data-aos="zoom-in" data-aos-delay="300">
                <div className="mb-2 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center">
                  <img src="/moto/rowe/about1.png" alt="Products" className="max-h-full max-w-full object-cover " />
                </div>
                <div className="text-2xl md:text-3xl font-bold font-sans mb-1">1,400</div>
                <div className="text-md md:text-[20px] font-medium text-gray-200 orbitron">Products</div>
              </div>
            </div>

            {/* Button */}
            <div>
              <Button href="#">
                Learn About Us
              </Button>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full min-h-[350px] md:min-h-[450px] xl:min-h-full relative xl:col-span-7" data-aos="fade-left">
            <img 
              src="/moto/rowe/aboutimg.png" 
              alt="ROWE Factory" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
