"use client";

import React from "react";
import Typography from "./Typography";

export default function Development() {
  const features = [
    "Continuous Research, Engineering, and Innovation to Develop Advanced Automotive Sealing Solutions",
    "Comprehensive Product Portfolio Featuring Thousands of OEM-Quality Gaskets and Sealing Components for Global Aftermarket Needs",
    "Advanced Manufacturing Technologies Combined with Strict Quality Control at Every Production Stage to Ensure Consistent Excellence",
    "Committed to Delivering High-Performance, OEM-Quality Sealing Solutions with Consistent Reliability, Exceptional Value, and Customer Satisfaction"
  ];

  return (
    <section className="w-full py-16  bg-[#171717] overflow-hidden border-t border-white/5">
      <div className="custom-container flex flex-col gap-8 min-h-[2100px]:gap-16">
        
        {/* Top Header */}
        <div className="flex flex-col items-center justify-center text-center  mx-auto gap-6" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold leading-tight">
            Product Development
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed max-w-[70%] ">
            At Elwis Royal, product development is at the heart of our commitment to innovation and excellence. We continuously invest in research, engineering, advanced manufacturing technologies, and rigorous testing to develop high-quality gasket and sealing solutions that meet the evolving demands of the global automotive aftermarket.
          </Typography>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/40 hidden lg:block"></div>

        {/* Bottom Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 min-h-[2100px]:gap-16 items-start" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left Side: Content */}
          <div className="flex flex-col gap-6 lg:pt-4">
            
            <Typography variant="p" color="white" className="leading-relaxed  ">
              Our extensive product portfolio includes thousands of gasket and sealing solutions, carefully designed to deliver OEM-quality performance, durability, and precision fitment. While maintaining a comprehensive range, we place a strong focus on the top 1,000 most essential gaskets and sealing products, ensuring distributors have access to the components most frequently required by the market.
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed  ">
              By combining decades of industry expertise with continuous innovation, rigorous quality control, and customer-driven development, Elwis Royal delivers reliable sealing solutions that support efficient repairs, long-lasting engine performance, and dependable availability for automotive professionals worldwide.
            </Typography>

            <ul className="flex flex-col gap-5 mt-4">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-[#C21217] rounded-full w-5 h-5 flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <Typography variant="p" color="white" className="  leading-relaxed">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>

          </div>

          {/* Right Side: Image */}
          <div className="w-full h-full min-h-[300px]">
            <img 
              src="/moto/elvis/section5.jpg" 
              alt="Product Development Camera Setup" 
              className="w-full h-full object-cover rounded-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
