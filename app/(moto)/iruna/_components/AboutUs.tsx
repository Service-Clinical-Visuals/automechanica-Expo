"use client";

import React from 'react';
import Button from './Button';

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="relative" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-3 md:gap-4 relative">
              <div className="w-full aspect-square md:aspect-[4/3] overflow-hidden ">
                <img src="/moto/iruna/abt1.png" alt="About Image 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square md:aspect-[4/3] overflow-hidden ">
                <img src="/moto/iruna/abt2.png" alt="About Image 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square md:aspect-[4/3] overflow-hidden ">
                <img src="/moto/iruna/abt3.png" alt="About Image 3" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square md:aspect-[4/3] overflow-hidden  ">
                <img src="/moto/iruna/abt4.png" alt="About Image 4" className="w-full h-full object-cover" />
              </div>
              
              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-[120px] xl:h-[120px] z-10 flex items-center justify-center bg-transparent">
                <img 
                  src="/moto/iruna/wheel.png" 
                  alt="Wheel Icon" 
                  className="w-full h-full object-contain animate-slow-spin drop-shadow-md" 
                />
              </div>
              </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col items-start justify-center" data-aos="fade-left">
            <div className="relative inline-block mb-8">
              <h2 className="section-title font-bold oxanium-font text-black relative z-10 leading-tight">
                About Us <span className="text-[#CF0A2C] oxanium-font section-title ml-1">01</span>
              </h2>
           
            </div>
            
            <div className="space-y-6 leading-[1.8]">
              <p className="sora text-[#484848] section-text  leading-[1.8]">
                A group specialized in design and manufacturing of brake systems for OEM and aftermarket.
                Automotive, Off-highway and Windpower. In-house design and engineering. Testing facilities and
                control of the main suppliers involved in production of parts. IATF and ISO certifications.
                Established in 1958. Headquarters in Spain formed by engineering, production plant and quality
                testing facilities. Presence in Asia with an extension of the production plant and representation in
                the US.
              </p>
              <p className="sora text-[#484848] section-text  leading-[1.8]">
                We have the design experience & knowledge to provide tailored made Master Cylinders, Hydraulic
                Boosters, Vacuum Servos, Hydraulic Vacuum Servos, Disc Brakes and other components for
                the Automotive, Off-Highway and Wind Power industries worldwide. New design specialization is
                key, with the necessary product test and validation facilities. Competitive and innovative results
                come from a cell production layout system, allowing the group to maintain competitiveness
                without risking the quality of its products.
              </p>
              <p className="sora text-[#484848] section-text  leading-[1.8]">
                BRAKES IRUÑA has a complete in-house team to design, develop and manufacture brake
                components & systems for the Automotive, Off-Highway vehicles (tractors, excavators, dumpers,
                forest machinery...) and Wind Power Turbine markets.
              </p>
            </div>

            <Button className="mt-8">
              Learn More
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
