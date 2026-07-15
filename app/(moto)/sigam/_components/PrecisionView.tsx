"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  const features = [
    {
      title: "Precision Fit",
      desc: "Engineered to exact specifications for seamless installation and dependable operation."
    },
    {
      title: "Superior Durability",
      desc: "Crafted from premium materials to resist corrosion and withstand demanding conditions."
    },
    {
      title: "Efficient Emissions Control",
      desc: "Designed to support cleaner exhaust flow and compliance with modern standards."
    },
    {
      title: "Assured Quality",
      desc: "Manufactured under rigorous quality processes to deliver consistent, long-lasting performance."
    }
  ];

  return (
    <section 
      className="py-20 xl:py-28 relative bg overflow-hidden text-white bg"
    >
      
      <div className="custom-container relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center mb-16">
          
          {/* Left: 360 Video Player */}
          <div className=" order-3 xl:order-1 w-full aspect-video relative overflow-hidden" data-aos="fade-right">
             
             <DynamicVideoPlayer 
                type="360"
                className="absolute inset-0 w-full h-full object-cover "
             />
          </div>

          {/* Right: Text Content */}
          <div className=" order-1 xl:order-2 flex flex-col gap-6" data-aos="fade-left">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#E30613] flex-shrink-0"></div>
              <h2 className="section-title text-white orbitron-font font-semibold">Experience Precision from Every Angle</h2>
            </div>
            
            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-white dmsans-font section-text tracking-wider">
              <p>
                Discover the craftsmanship behind SIGAM's exhaust solutions with an interactive 360° product view. Engineered with advanced materials and rigorous quality standards, each component is designed to deliver superior durability, efficient emissions control, and reliable performance across demanding automotive and industrial applications. From weld quality and surface finishing to structural design and fitment accuracy, every element reflects SIGAM's commitment to engineering excellence.
              </p>
              {/* This stays in the right column ONLY on 2xl screens and larger */}
              <p className="hidden 2xl:block">
                For decades, SIGAM has combined innovation with manufacturing excellence to provide customers with products that meet the highest expectations for fit, function, and longevity. From concept to production, every solution reflects a commitment to technical expertise, consistent quality, and dependable performance in real-world conditions. Backed by advanced equipment, skilled craftsmanship, and a customer-focused approach, SIGAM develops solutions that are built to perform reliably, support demanding applications, and deliver lasting value over time.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2 dmsans-font hidden 2xl:block">
              <Button href="#" variant="primary">
                Explore Product
              </Button>
            </div>
          </div>
          
          {/* Full-width 2nd Paragraph + Button for laptops and smaller desktop screens */}
          <div className="order-2 xl:order-3 xl:col-span-2 flex flex-col gap-6 2xl:hidden" data-aos="fade-up">
             <p className="text-white dmsans-font section-text tracking-wider">
                For decades, SIGAM has combined innovation with manufacturing excellence to provide customers with products that meet the highest expectations for fit, function, and longevity. From concept to production, every solution reflects a commitment to technical expertise, consistent quality, and dependable performance in real-world conditions. Backed by advanced equipment, skilled craftsmanship, and a customer-focused approach, SIGAM develops solutions that are built to perform reliably, support demanding applications, and deliver lasting value over time.
              </p>
              <div className="mt-2 dmsans-font">
                <Button href="#" variant="primary">
                  Explore Product
                </Button>
              </div>
          </div>
        </div>

        {/* Bottom Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 md:p-8 flex items-start gap-4">
              <div className="w-4 h-4 bg-[#E30613] mt-1.5 flex-shrink-0"></div>
              <p className="section-text dmsans-font text-[#1d1d1b]">
               {feature.title} — {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
