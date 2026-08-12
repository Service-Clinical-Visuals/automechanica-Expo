"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";


export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Top Text Card */}
        <div 
          className="relative w-full mb-12 md:mb-16 p-6 sm:p-8 md:p-14 lg:p-16 border-[1.5px] border-[#28b7ff] shadow-lg shadow-[#28b7ff]/10 rounded-2xl bg-white xl:border-0 xl:shadow-none xl:rounded-none xl:bg-transparent xl:bg-[url('/moto/cardyfren/bg.png')] xl:bg-[length:100%_100%] xl:bg-center xl:bg-no-repeat" 
          data-aos="fade-up"
        >
          <div className="relative z-10 w-full xl:w-[80%] 2xl:max-w-6xl">
            <h2 className="section-title font-normal text-black mb-6 font-heading">
              About Us
            </h2>
            
            <div className="space-y-6 text-black section-text leading-relaxed font-body">
              <p>
                Cardyfren is a trusted specialist in the design, manufacture, repair, and distribution of high-quality cardan shafts and driveline components. Serving industries including automotive, construction, marine, railway, agriculture, wind energy, and industrial machinery, we deliver reliable power transmission solutions engineered for performance and durability.
              </p>
              <p>
                With extensive industry expertise, we manufacture new cardan shafts, provide professional repair and maintenance services, and supply original driveline components for commercial vehicles, passenger cars, vans, and 4x4s. Our comprehensive product portfolio includes industrial transmissions, universal joints, precision joints, flexible couplings, torque limiters, and genuine replacement parts, ensuring dependable solutions for a wide range of applications.Committed to quality, innovation, and customer satisfaction, we provide precision-engineered solutions that meet the highest industry standards.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-[#28b7ff] hover:bg-[#1fa1e6] text-white px-8 py-3 rounded-md transition-colors font-bold font-heading shadow-md text-[14px]">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <img
              src="/moto/cardyfren/abt.png"
              alt="Talleres Cardyfren Building"             
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
