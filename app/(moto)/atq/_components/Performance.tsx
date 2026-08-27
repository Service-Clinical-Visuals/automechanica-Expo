"use client";

import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Button from "./Button";

export default function Performance() {
  return (
    <section className="bg-black relative w-full overflow-hidden flex flex-col xl:flex-row">
      
      {/* Text Container */}
      <div className="custom-container relative z-10 py-16  flex-grow flex">
        <div className="w-full xl:w-1/2 pr-0 xl:pr-12 2xl:pr-16 flex flex-col justify-center space-y-8 order-1">
          <div className="space-y-6">
            <Typography variant="h2" color="white" className="font-bold">
              Engineered for Maximum Performance
            </Typography>
            
            <div className="space-y-4">
              <Typography variant="p" color="white" className="leading-relaxed ">
                High-performance engine oils engineered to deliver superior engine protection, smoother operation, and exceptional durability. Formulated with advanced technology, they help maximize efficiency, reduce wear, and ensure reliable performance for modern passenger and commercial vehicles in every driving condition.
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed ">
                Designed to meet demanding OEM-quality standards, ATQ Germany lubricants are manufactured using premium base oils and advanced additive technology. Every formulation is developed to enhance engine efficiency, extend component life, and provide dependable protection under both everyday driving and demanding operating conditions.
              </Typography>
            </div>
          </div>

          <div className="pt-2">
            <Button text="Download Catalogue" href="#" showIcon={true} />
          </div>
        </div>
      </div>

      {/* Unconstrained Background Image */}
      <div className="w-full xl:absolute xl:top-0 xl:right-0 xl:w-1/2 xl:h-full h-[350px] sm:h-[450px] relative order-2 z-0" data-aos="fade-left">
        {/* We use an img tag inside a relative block because Image with fill can be tricky without relative parent */}
        <div className="absolute inset-0 w-full h-full">
           <img 
            src="/moto/atq/bg.png"
            alt="ATQ Lubricants"
            className="w-full h-full object-cover object-center xl:object-left"
          />
        </div>
        {/* Subtle gradient overlay to blend the left edge into the black background on large screens */}
        <div className="hidden xl:block absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      </div>
      
    </section>
  );
}
