"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "/moto/amadini/i1.png",
      title: "Personalized Attention",
      desc: "Our team of experienced professionals is dedicated to providing tailored solutions that meet the unique needs of your workshop or dealership. With expert guidance, dependable support, and a customer-focused approach, we help you achieve reliable, efficient, and long-lasting automotive solutions.",
      link: "/amadini/contact",
    },
    {
      id: 2,
      icon: "/moto/amadini/i2.png",
      title: "Exclusive Products",
      desc: "Access an extensive range of exclusive spare parts that are not commonly available through other distributors, carefully selected to deliver exceptional quality, reliable performance, precise fitment, and greater value for your customers across a wide range of automotive applications.",
      link: "/amadini/products",
    },
    {
      id: 3,
      icon: "/moto/amadini/i3.png",
      title: "In-House Manufacturing",
      desc: "We guarantee the highest quality in every replacement part through carefully controlled production processes, rigorous quality inspections, and strict compliance with the highest industry standards, ensuring exceptional reliability, durability, precise fitment, and long-lasting performance for every application.",
      link: "/amadini/about",
    }
  ];

  return (
    <section className="w-full bg-[#005484] py-16 md:py-24">
      <div className="custom-container flex flex-col items-center px-4 xl:px-16">
        
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h2 className="section-title font-semibold text-[#ffffff] leading-tight mb-6">
            What Makes Us Different?
          </h2>
          <p className="text-[#ffffff] section-text leading-relaxed max-w-6xl mx-auto">
            At Amadini, we combine industry expertise, premium-quality products, and customer-focused service to deliver dependable automotive solutions. From exclusive product offerings and in-house manufacturing to personalized technical support, we are committed to helping workshops and distributors achieve lasting success with reliable, high-performance components, exceptional value, and trusted long-term partnerships.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-40 xl:gap-y-12 w-full mt-32 xl:mt-16">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="relative bg-[#00639c] border border-white/40 px-6 pb-10 pt-[120px] flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300 shadow-lg"
            >
              {/* Cutout Mask (blends with section bg to create V-shape) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-[#005484] rotate-45 border-b border-r border-white/50 z-0 pointer-events-none"></div>

              {/* Diamond Icon Overlapping Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-[#2ea3f2] rotate-45 shadow-lg flex items-center justify-center z-10 pointer-events-none">
                <div className="relative w-[80px] h-[80px] -rotate-45 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="object-contain w-full h-full filter" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-2 flex flex-col flex-grow items-center w-full p-6">
                <h3 className="card-text font-semibold text-[#ffffff] leading-tight mb-6">
                  {feature.title}
                </h3>
                <p className="text-white  font-normal section-text leading-relaxed mb-6 flex-grow  p-2">
                  {feature.desc}
                </p>
                <Link 
                  href={feature.link}
                  className="text-white font-semibold btn-text hover:text-[#00A3E0] transition-colors underline-offset-4 underline mt-auto"
                >
                  Visit The Website &gt;&gt;
                </Link>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
