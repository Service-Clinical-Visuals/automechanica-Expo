"use client";

import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Button from './Button';

export default function OurProducts() {
  const products = [
    {
      title: "Master Cylinder",
      description: "Our Master Cylinder solutions are developed to deliver precision, reliability, and flexibility across a wide range of automotive applications. With extensive production capabilities, we offer a broad portfolio of Master Cylinders designed to meet both standard and specialized requirements. Our engineering team provides tailored designs and customization options, allowing existing products to be adapted based on customer specifications and vehicle demands.",
      image: "/moto/iruna/pro1.png",
      featuresTitle: "Why Choose Our Master Cylinder Solutions",
      features: [
        "Tailored made designs and option to adapt current products.",
        "Aluminum, Steel and Grey / Nodular Iron foundry cast items.",
        "Optimised batch manufacture to suit customer needs.",
        "100% in-house production control and product validation.",
        "ISO, IATF Quality certified."
      ]
    },
    {
      title: "Hydraulic Booster",
      description: "Our advanced hydraulic solutions are developed to support demanding applications with reliable operation, consistent performance, and long-term durability. Designed with a focus on engineering precision and manufacturing excellence, our products deliver efficient functionality across various operating environments while maintaining high standards of quality, safety, and customer satisfaction.",
      image: "/moto/iruna/pro2.png",
      featuresTitle: "Why Choose Our Hydraulic Booster Solutions",
      features: [
        "Wide range of Hydraulically Boosted actuators for construction and agriculture equipment.",
        "Tailored made designs and option to adapt current products.",
        "Optimised batch manufacture to suit customer needs.",
        "100% in-house production control and product validation.",
        "ISO, IATF Quality certified."
      ]
    },
    {
      title: "Power Brake Valve",
      description: "Developed through advanced engineering practices and supported by comprehensive manufacturing capabilities, each product focuses on delivering reliable operation, enhanced driving experience, and long-term durability. With a strong commitment to quality, innovation, and validated production processes, we provide solutions that meet evolving industry expectations across diverse automotive applications.",
      image: "/moto/iruna/pro3.png",
      featuresTitle: "Why Choose Our Power Brake Valve Solutions",
      features: [
        "Range of performance curves (Input Force / Output Pressure).",
        "Controlled & progressive brake application.",
        "Tailored made designs and option to adapt current products.",
        "Optimised batch manufacture to suit customer needs.",
        "100% in-house production control and product validation."
      ]
    },
    {
      title: "Vacuum Booster",
      description: "Combining advanced engineering expertise with precision manufacturing, each solution is designed to deliver reliability, durability, and seamless integration with evolving vehicle requirements. Backed by strict quality standards and validated production processes, our products are built to provide dependable operation and long-term performance for modern mobility needs.",
      image: "/moto/iruna/pro4.png",
      featuresTitle: "Why Choose Our Vacuum Booster Solutions",
      features: [
        "Integrated Parking Brake, with automatic Pad Wear adjuster system, if required.",
        "Testing facilities.",
        "SAHR brake design and production.",
        "Adaptability in vehicle performance.",
        "100% in-house production control and product validation."
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Column 1: Intro */}
          <div className="flex flex-col h-full justify-between" data-aos="fade-right">
            <div>
              <div className="relative inline-block mb-6 self-start">
                <h2 className="section-title font-bold oxanium text-black relative z-10 leading-tight">
                  Our Products <span className="text-[#CF0A2C] oxanium section-title ml-1">03</span>
                </h2>
               
              </div>
              
              <div key={currentProduct.title} className="animate-[slideUpFade_0.5s_ease-out]">
                <h3 className="text-[#CF0A2C] card-title font-semibold oxanium mb-4">
                  {currentProduct.title}
                </h3>
                
                <p className="sora text-[#484848] section-text leading-[1.8]  text-justify">
                  {currentProduct.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-6 mt-4 md:mt-0">
              <button 
                onClick={handleNext} 
                className="w-10 h-10 bg-[#CF0A2C] text-white flex items-center justify-center hover:bg-[#b30824] transition-colors shadow-md"
                aria-label="Next Product"
              >
                <ArrowDown size={20} strokeWidth={2.5} className="animate-bounce-down" />
              </button>
              <button 
                onClick={handlePrev} 
                className="w-10 h-10 bg-[#CF0A2C] text-white flex items-center justify-center hover:bg-[#b30824] transition-colors shadow-md"
                aria-label="Previous Product"
              >
                <ArrowUp size={20} strokeWidth={2.5} className="animate-bounce-up" />
              </button>
            </div>
          </div>
          
          {/* Column 2: Image Frame */}
          <div className="w-full h-full py-4 lg:py-0" data-aos="zoom-in" data-aos-delay="100">
            {/* The layered frame effect */}
            <div className="bg-white p-1 shadow-[0_0_20px_rgba(0,0,0,0.12)] border border-gray-200 rounded-sm w-full h-full mx-auto flex flex-col">
              <div className="border-[2px] border-gray-200 w-full h-full p-1">
                <div className="border-[2px] border-gray-200 w-full h-full p-1">
                <div className="border-[2px] border-gray-200 w-full h-full flex items-center justify-center  shadow-inner bg-white ">
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.title}
                    key={currentProduct.image} // Force re-render for animation on image change
                    className="w-full h-full object-contain  animate-[fadeIn_0.8s_ease-in-out]" 
                  />
                </div>
                </div>

              </div>
            </div>
          </div>
          
          {/* Column 3: Features */}
          <div className="flex flex-col h-full justify-between md:col-span-2 xl:col-span-1 mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
            <div key={currentProduct.featuresTitle} className="animate-[slideUpFade_0.5s_ease-out]">
              <h3 className="text-[#CF0A2C] card-title font-semibold oxanium mb-6 mt-10">
                {currentProduct.featuresTitle}
              </h3>
              
              <ul className="space-y-6 ">
                {currentProduct.features.map((feature, idx) => (
                  <li key={`${currentProduct.title}-${idx}`} className="flex items-start gap-4 mb-6">
                    <img src="/moto/iruna/brlwheel.png" alt="Icon" className="w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5" />
                    <span className="sora text-[#484848] section-text leading-[1.6]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className='bg-[#CF0A2C] hover:bg-[#b30824] text-white px-4 py-2 transition-colors shadow-md bttn-text font-semibold oxanium mb-8 mt-4 ' >
              Download Catalog
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
