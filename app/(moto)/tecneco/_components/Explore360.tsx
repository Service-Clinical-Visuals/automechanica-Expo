"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  const features = [
    "High-efficiency contaminant capture for improved system protection",
    "Extended service intervals for reduced maintenance frequency",
    "Enhanced durability under extreme temperature and pressure conditions",
    "Consistent performance across diverse driving environments",
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-[#111111] relative w-full"
      style={{
        backgroundImage: `url('/moto/tecneco/bg1.png')`,
      }}
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Side - 360 Video Player */}
          <div 
            className="order-2 xl:order-1 xl:col-span-8 w-full aspect-video bg-white/5 relative overflow-hidden rounded-sm"
            data-aos="fade-right" data-aos-delay="100"
          >
            <DynamicVideoPlayer 
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 xl:order-2 xl:col-span-4 text-white" data-aos="fade-left" data-aos-delay="100">
            <h2 className="section-title text-white sora font-semibold mb-6">
              Engineered for Maximum Protection
            </h2>
            
            <p className="section-text text-white  font-normal lato leading-relaxed mb-8 font-lato">
              Every Tecneco filter is engineered to deliver exceptional filtration efficiency, 
              protecting critical vehicle systems from contaminants while maintaining optimal 
              performance. Manufactured using premium materials and advanced technology, our 
              filters provide reliable durability, longer service life, and consistent performance 
              across a wide range of automotive applications. Each product is designed to meet or 
              exceed OEM standards, ensuring a precise fit and dependable operation even under 
              demanding driving conditions.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <img 
                      src="/moto/tecneco/icon.png" 
                      alt="bullet" 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="section-text text-gray-300 font-lato text-sm lg:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button href="#" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              View Product
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
