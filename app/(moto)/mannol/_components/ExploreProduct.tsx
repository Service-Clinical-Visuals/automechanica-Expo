"use client";
import React from "react";
import Link from "next/link";
import { Shield, Thermometer, Fuel, FileCheck } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ExploreProduct() {
  const features = [
    {
      icon: <img src="/moto/mannol/img1.png" alt="" />,
      title: "Advanced Engine Protection",
      description: "Protects critical engine components by reducing friction and wear, helping extend engine life and maintain consistent performance under everyday and demanding driving conditions.",
    },
    {
      icon: <img src="/moto/mannol/img2.png" alt="" />,
      title: "Excellent Thermal Stability",
      description: "Maintains optimal viscosity and lubrication in both high and low temperatures, ensuring reliable engine performance throughout every journey.",
    },
    {
      icon: <img src="/moto/mannol/img3.png" alt="" />,
      title: "Enhanced Fuel Efficiency",
      description: "The advanced formulation reduces internal engine friction, supporting smoother operation while helping improve fuel economy and overall efficiency.",
    },
    {
      icon: <img src="/moto/mannol/img4.png" alt="" />,
      title: "OEM Approved Quality",
      description: "Developed to meet or exceed the performance requirements of leading automotive manufacturers, providing dependable protection and long-lasting reliability.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1F2A44] w-full">
      <div className="custom-container flex flex-col gap-16 ">
        
        {/* Top Half: Video & Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          {/* Left: 360 Video */}
          <div className="order-2 xl:order-1 w-full aspect-video relative overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
           
          </div>

          {/* Right: Content */}
          <div className="order-1 xl:order-2 flex flex-col text-left" data-aos="fade-left">
            <h2 className="sora-font text-[#ffffff] section-title font-semibold whitespace-nowrap mb-2">
              Explore Every Detail
            </h2>
            <div className="w-16 md:w-30 h-[2px] bg-[#FCC917] mb-6"></div>
            
            <div className="poppins-font text-[#ffffff] section-text leading-relaxed flex flex-col gap-5 mb-8">
              <p>
                Experience MANNOL engine oil from every angle with an interactive 360° product view. Explore the packaging, label details, and overall product design in close detail to appreciate the quality, precision, and craftsmanship behind every bottle. This immersive experience allows you to inspect the product thoroughly before making your choice, giving you a clearer understanding of its features, presentation, and professional finish.
              </p>
              <p className="xl:hidden 2xl:block">
                Developed with advanced lubricant technology, MANNOL engine oils are formulated to deliver exceptional engine protection, dependable performance, and long-lasting efficiency. Designed for modern engines operating in a wide range of driving conditions, they help reduce wear, support smoother operation, and maintain consistent lubrication for reliable performance over time. Their advanced formulation is intended to promote engine cleanliness, improve durability, and ensure stable results whether the vehicle is used for daily commuting, long-distance travel, or more demanding driving situations.
              </p>
            </div>

            <div>
              <Button href="#">
                Explore Our Product
              </Button>
            </div>
          </div>
        </div>

        {/* 2nd Paragraph below grid specifically for xl screen size */}
        <div className="hidden xl:block 2xl:hidden poppins-font text-[#ffffff] section-text leading-relaxed mt-[-2rem]">
          <p>
            Developed with advanced lubricant technology, MANNOL engine oils are formulated to deliver exceptional engine protection, dependable performance, and long-lasting efficiency. Designed for modern engines operating in a wide range of driving conditions, they help reduce wear, support smoother operation, and maintain consistent lubrication for reliable performance over time. Their advanced formulation is intended to promote engine cleanliness, improve durability, and ensure stable results whether the vehicle is used for daily commuting, long-distance travel, or more demanding driving situations.
          </p>
        </div>
        {/* Bottom Half: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border-[4px] border-[#FFC107] p-6 md:p-8 flex flex-col items-center text-center hover:bg-[#FFC107] hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6 flex justify-center items-center h-16">
                {feature.icon}
              </div>
              <h3 className="sora-font text-[#1F2A44] font-semibold card-text mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="poppins-font text-[#1F2A44] section-text leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
