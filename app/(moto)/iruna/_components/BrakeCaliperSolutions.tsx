"use client";

import React from 'react';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';
import Button from './Button';

export default function BrakeCaliperSolutions() {
  const benefits = [
    "Provides flexible application across original equipment manufacturing and replacement markets, ensuring wider vehicle compatibility and long-term service support.",
    "Guarantees high manufacturing standards, reduced defects, and consistent product quality from production to final validation.",
    "Enables complete control over engineering, manufacturing quality, faster development cycles, and consistent product performance.",
    "Demonstrates compliance with internationally recognized automotive quality standards, ensuring reliability and customer confidence.",
    "Delivers dependable braking performance with improved safety, durability, and efficient operation under demanding conditions."
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f7f7f7]">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Side: Video Clip */}
          <div className="xl:col-span-7 relative w-full aspect-video overflow-hidden shadow-xl" data-aos="fade-right">
            <DynamicVideoPlayer 
              type="short-1" 
              className="absolute inset-0 w-full h-full object-cover "
            />
          </div>
          
          {/* Right Side: Content */}
          <div className="xl:col-span-5 flex flex-col h-full justify-center" data-aos="fade-left">
            <div className="relative inline-block mb-8 self-start">
              <h2 className="section-title font-bold oxanium-font text-black relative z-10 leading-tight">
                Our Brake Caliper Solutions <span className="text-[#CF0A2C]">05</span>
              </h2>
              {/* The pinkish stripe behind the text */}
              <div className="absolute left-0 top-[55%] -translate-y-1/2 h-[4px] w-[91%] bg-[#e78596] z-0"></div>
            </div>
            
            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <img src="/moto/iruna/brlwheel.png" alt="Icon" className="w-[18px] h-[18px] object-contain flex-shrink-0 mt-1" />
                  <span className="sora text-[#484848] section-text leading-[1.8] text-justify">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            
            <Button className="self-start">
              Explore Product
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
