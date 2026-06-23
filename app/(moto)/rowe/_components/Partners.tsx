"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Partners() {
  const partners = [
    {
      title: "Distributors",
      image: "/moto/rowe/cust1.png",
    },
    {
      title: "Private Customers",
      image: "/moto/rowe/cust2.png",
    },
    {
      title: "Workshops",
      image: "/moto/rowe/cust3.png",
    }
  ];

  return (
    <section className="relative w-full py-5 md:py-10 mt-10 bg-white">
      <div className="custom-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
          <h2 className="text-[#1a1a1a] text-2xl md:text-3xl font-bold tracking-wide orbitron  mb-6">
            Partner for all <span className="text-[#e61919] orbitron">our customers</span>
          </h2>
          <div data-aos="fade-left">
            <Button href="#">
              View All
            </Button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-[-20px] md:mb-[-30px] z-0">
                <img 
                  src={partner.image} 
                  alt={partner.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div 
                className="bg-[#e61919] text-white ml-7  mr-7 py-4 md:py-5 px-6 md:px-8 w-[92%] z-10 relative flex items-center justify-center shadow-lg"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)' }}
              >
                <h3 className="text-white text-sm md:text-[18px] orbitron font-medium tracking-wide text-center">
                  {partner.title}
                </h3>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
