"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function KaizenPassion() {
  const images = [
    "/moto/bbt/passion1.png",
    "/moto/bbt/passion2.png",
    "/moto/bbt/passion3.png"
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="section-title font-medium oswald-font text-[#0c3274] mb-4 leading-tight">
            Kaizen (Good Change) is Our Passion
          </h2>
          <p className="lato-font section-text text-[#333333] leading-[1.8] font-medium">
            Together with our customers, we always strive for expansion and growth towards success. The foundation: for years we have based our operations on the Kaizen philosophy. Improvements from anyone, anytime, and anywhere.
            <br />
            Our objectives are:
          </p>
        </div>

        {/* Middle Section: Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 md:mb-10">
          {images.map((img, index) => (
       
              <img 
                src={img} 
                alt={`Passion ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-16 md:mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8" data-aos="fade-up">
          <div className="max-w-6xl">
            <h2 className="section-title font-medium oswald-font text-[#0c3274] mb-4 leading-tight">
              We are innovative, active, proactive and digital.
            </h2>
            <p className="lato-font section-text text-[#333333] leading-[1.8] font-medium">
              A pillar of our success is our motivated, professional and creative team. Long-term partnerships are the base of our continuous development and stability. For our clients, we go above and beyond to achieve measurable success. We define success as the fusion of effectiveness and efficiency.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <button className="w-23 h-23 bg-[#0c3274] rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors shadow-lg group">
              <ArrowUpRight strokeWidth={2.5} size={45} className="transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
