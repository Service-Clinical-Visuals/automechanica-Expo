"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function TestingCentre() {
  const facilities = [
    {
      title: "V-max 4000 (10)",
      description: "The LINK V-MAX 4000 (LC3070) delivers precise DTV, RO, and RT measurements, ensuring accurate brake performance testing and quality validation.",
      image: "/moto/asimco/t1.png"
    },
    {
      title: "V Box (1)",
      description: "Powered by the Racelogic VBOX 4, this system provides precise braking performance analysis to support accurate vehicle testing and performance validation.",
      image: "/moto/asimco/t2.png"
    },
    {
      title: "Sound Meter Level",
      description: "Powered by LINK/STAC systems, this advanced setup provides reliable NVH and performance data acquisition for comprehensive vehicle testing and validation.",
      image: "/moto/asimco/t3.png"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white text-black">
      <div className="custom-container">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title teko-font text-black font-medium  mb-6">
            Testing & Validation Centre
          </h2>
          <p className="section-text text-[#111111] inter-font leading-relaxed">
            Every ASIMCO brake component undergoes rigorous testing in advanced vehicle testing facilities to ensure outstanding safety, durability, and consistent braking performance. From real-world road simulations to laboratory validation, our testing process guarantees that every product meets stringent OEM-quality standards before reaching the market.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className={`flex flex-col xl:flex-row h-full group ${
                index === 2 ? 'md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto xl:col-span-1 xl:w-full xl:mx-0' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container (Left on XL) */}
              <div className="w-full xl:w-[50%] relative min-h-[300px] xl:min-h-0 bg-white border border-[#cb1020]">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
              
              {/* Content Container (Right on XL) */}
              <div 
                className="w-full xl:w-[50%] relative flex flex-col items-center justify-center text-center rounded-r-sm p-6 lg:p-10 shadow-[2px_2px_15px_rgba(0,0,0,0.05)]"
                style={{
                  backgroundImage: `url('/moto/asimco/bg.png')`
                }}
              >
                <h4 className="text-center product-title teko-font font-medium text-black mb-3 tracking-wide">
                  {facility.title}
                </h4>
                <p className="text-center section-text inter-font text-[#111111] mb-6 leading-relaxed">
                  {facility.description}
                </p>
                <Button href="#" variant="primary" className="!px-8 !py-2.5 !text-base">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
