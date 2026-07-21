"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Development() {
  return (
    <section className="w-full py-16  bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block: Title/Desc on Left, Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/40 pb-8 lg:pb-12" data-aos="fade-up">
          
          <div className="flex flex-col gap-4 lg:w-2/3">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              We Focus On Product Development
            </Typography>
            <Typography variant="p" color="white" className=" leading-relaxed max-w-[90%]">
              Established in 2007, it has undergone rapid development during its existence. Currently, the product range covers 4,000 products. The goods are delivered through many dealers and partners to all continents. The strongest position has long been maintained in the EU, but it also has regular customers in Canada, Japan, Peru and Algeria.
            </Typography>
          </div>

          <div className="flex-shrink-0">
            <Button text="Learn More About Us" href="#about" showIcon={true} />
          </div>

        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 w-full">
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="100">
            <img 
              src="/moto/et-engine/section21.png" 
              alt="ET Engine Parts Collage" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <img 
              src="/moto/et-engine/section22.png" 
              alt="ET Engine Team Crest" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
