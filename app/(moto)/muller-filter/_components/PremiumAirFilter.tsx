"use client";

import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from 'next/link';

export default function PremiumAirFilter() {
  const cards = [
    {
      title: "Online Catalog",
      desc: "Browse our complete range of automotive filters",
      icon: "/moto/muller-filter/pre1.png"
    },
    {
      title: "Service Bulletin",
      desc: "Access technical bulletins, installation instructions, and the service updates.",
      icon: "/moto/muller-filter/pre2.png"
    },
    {
      title: "News & Events",
      desc: "Stay up to date with our latest product launches, and Industry news",
      icon: "/moto/muller-filter/pre3.png"
    }
  ];

  return (
    <section className="w-full  bg-white py-12 lg:py-20">
     <div className="custom-container px-6 lg:px-20">
        
          {/* Top Section */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 2xl:mb-20">
            
            {/* Left Video */}
            <div className="xl:col-span-7 rounded-2xl overflow-hidden relative aspect-video bg-gray-100 shadow-inner order-2 xl:order-1" data-aos="fade-right">
              <DynamicVideoPlayer 
                type="short-1" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>

            {/* Right Content */}
            <div  className="xl:col-span-5 order-1 xl:order-2" data-aos="fade-left">
              <div className=" flex items-center gap-4 mb-6">
               <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
                <h2 className="section-title font-bold font-chakra text-[#1e1e1e] tracking-wide">Our Premium Air Filter</h2>
              </div>
              
              <div className="space-y-6 text-[#333333] section-text leading-[1.6] font-mulish">
                <p>
                  Our Air Filter is engineered to deliver clean, fresh air inside your vehicle by effectively capturing dust, pollen, soot, and other airborne contaminants. Designed to meet OEM quality standards, it ensures a precise fit and reliable performance across a wide range of passenger vehicles. Available in both standard and activated carbon variants, the filter enhances cabin comfort, protects the HVAC system, and helps create a healthier driving environment for every journey.
                </p>
                <p className="block xl:hidden 2xl:block">
                  It helps maintain consistent airflow while reducing dust, allergens, and unpleasant odors. Its durable construction and OEM-fit design ensure long-lasting performance, making it a dependable choice for comfortable, clean, and healthy driving in all conditions.
                </p>
              </div>
            </div>

          </div>

          {/* Paragraph 2 - Full width on screens < 1536px but hidden on mobile/tablet */}
          <div className="hidden xl:block 2xl:hidden w-full text-[#333333] section-text leading-[1.6] font-mulish mb-16" data-aos="fade-up">
            <p>
              It helps maintain consistent airflow while reducing dust, allergens, and unpleasant odors. Its durable construction and OEM-fit design ensure long-lasting performance, making it a dependable choice for comfortable, clean, and healthy driving in all conditions.
            </p>
          </div>

          {/* Bottom Cards Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {cards.map((card, index) => (
              <Link 
                href="#" 
                key={index}
                className="bg-[#1C1C1C] hover:bg-black text-white rounded-[20px] p-6 lg:p-8 xl:p-5 2xl:p-8 flex items-center gap-4 lg:gap-6 xl:gap-4 2xl:gap-6 transition-colors duration-300 shadow-md group h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0 w-14 h-14 lg:w-20 lg:h-20 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 mt-1">
                  <img src={card.icon} alt={card.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-bold font-chakra img-text  text-white">{card.title}</h3>
                  <p className="text-[#ffffff] section-text font-normal font-mulish">
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
       
      </div>
    </section>
  );
}
