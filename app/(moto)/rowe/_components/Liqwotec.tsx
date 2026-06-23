"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Liqwotec() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#4a4a4a] overflow-hidden">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col items-start" data-aos="fade-right">
          
            <h2 className="text-[#ffffff] text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide orbitron  mb-6">
              liqwotec GmbH
            </h2>
            
            <div className=" mb-10 space-y-6 font-sans">
              <p className="text-[#ffffff] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8]">
                Founded in Worms in 2020, liqwotec GmbH is a joint venture of the energy service provider EWR AG and ROWE Holding GmbH. The company offers highly specialized products to protect against corrosion and sludge in water-based heating and cooling systems. In the process, liqwotec GmbH combines the expertise of EWR AG and the innovative ROWE Group. In doing so, it draws on EWR AG's more than 100 years of experience in the areas of energy supply and water management, as well as ROWE's portfolio of highly specialized products.
              </p>
              <p className="text-[#ffffff] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8]">
                The core competence of liqwotec GmbH is professional consulting and implementation in the area of system protection. The developed and applied products developed help customers save costs due to corrosion, calcification and silting and the resulting damage to the systems and their components, as well as the consequentially increased energy requirements, in the medium and long term. The products used are produced exclusively in Germany according to the latest standards and are subject to constant controls in order to meet the highest quality standards at all times.
              </p>
            </div>

            <Button href="#">
              Find Out More
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full relative aspect-[4/3] md:aspect-[16/10] xl:aspect-auto xl:h-[550px] shadow-2xl" data-aos="fade-left">
            <img 
              src="/moto/rowe/liqwotec.png" 
              alt="liqwotec GmbH Industrial Pipes" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>

      </div>
    </section>
  );
}
