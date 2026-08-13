"use client";
import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ExploreRange() {
  const cards = [
    {
      title: "Premium Lubricants",
      desc: "Premium lubricants for superior engine protection and performance.",
      icon: (
      <img src="/moto/saria-international/R1.png" />
      )
    },
    {
      title: "Automotive Fluids",
      desc: "Premium fluids for reliable vehicle performance.",
      icon: (
        <img src="/moto/saria-international/R2.png" />
      )
    },
    {
      title: "Car Care Products",
      desc: "Professional products for vehicle care and protection.",
      icon: (
        <img src="/moto/saria-international/R3.png" />
      )
    }
  ];

  return (
    <section className="w-full bg-[#202020] py-16 md:py-24">
      <div className="custom-container">
        {/* Top Content & Video */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-16">
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <h2 className="oswald-font font-semibold text-[#ffffff] section-title mb-3">
              Explore Our Complete Auto Care Range
            </h2>
            <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
              LION offers a complete range of premium automotive products, developed with advanced technology to deliver dependable performance, lasting protection, and consistent reliability across a wide variety of vehicle applications. From high-performance lubricants and automotive fluids to professional maintenance solutions, every product is engineered to meet the highest standards of quality and efficiency.
            </p>
            <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
              Designed to meet the demands of modern vehicles and global markets, our comprehensive product portfolio combines innovation, precision, and proven manufacturing expertise. Whether for passenger cars, commercial vehicles, or industrial applications, LION provides trusted solutions that help improve performance, extend equipment life, and ensure long-term reliability.
            </p>
            <div className="mt-2">
              <Button href="#">
                Explore More
              </Button>
            </div>
          </div>
          
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg relative bg-[#EAEAEA] flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6" data-aos="fade-up">
          {cards.map((card, idx) => (
            <div key={idx} className="flex bg-white rounded-xl overflow-hidden shadow-sm min-h-[140px] md:min-h-[160px]">
              <div className="w-24 md:w-40 bg-[#F4B824] flex items-center justify-center flex-shrink-0 relative rounded-r-xl">
                {/* Automatically tries R1.png, R2.png, R3.png, falls back to SVG */}
                <img 
                  src={`/moto/saria-international/R${idx+1}.png`} 
                  alt={card.title} 
                  className="w-14 h-14 object-contain z-10"
                 
                />
               
              </div>
              <div className="p-5 md:p-6 flex flex-col justify-center">
                <h3 className="oswald-font font-semibold text-[#272727] card-text mb-2">{card.title}</h3>
                <p className="lato-font text-[#4B5563] card-text1 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
