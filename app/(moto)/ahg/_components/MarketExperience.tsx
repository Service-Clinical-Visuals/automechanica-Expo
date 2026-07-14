"use client";

import React from "react";
import Button from "./Button";
import { Warehouse, PackageSearch, Users } from "lucide-react";

export default function MarketExperience() {
  const cards = [
    {
      title: "Over 15,000 M2 Of Storage Space",
      description: "We have over 15,000 m² of storage space for efficient and extensive storage of all products, ensuring fast availability, streamlined inventory management, and reliable order fulfillment.",
      icon: <img src="/moto/ahg/blog1.png" alt="storage" />
    },
    {
      title: "Extensive Product Range",
      description: "Our product portfolio is designed for passenger cars and commercial vehicles, offering reliable automotive solutions. With a strong focus on quality and performance, we provide products that ensure durability, efficiency, and customer satisfaction.",
      icon: <img src="/moto/ahg/blog2.png" alt="storage" />
    },
    {
      title: "A Team Of Over 40 Employees",
      description: "A team of over 40 dedicated employees works together to develop innovative solutions, maintain exceptional quality standards, and deliver reliable products and outstanding customer service.",
      icon: <img src="/moto/ahg/blog3.png" alt="storage" />
    }
  ];

  return (
    <section className="relative w-full py-4 bg-white">
      <div className="custom-container ">
        
        {/* Main Dark Card Container */}
        <div 
          className="bg-[#212121] rounded-tl-4xl rounded-br-4xl   p-8 md:p-12 xl:p-16 flex flex-col"
          data-aos="fade-up"
        >
          
          {/* Top Section */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            <div className="xl:col-span-8 flex flex-col gap-4">
              <h2 className="section-title font-bold tracking-wide oswald-font text-white">
                Over 15 Years On The Market!
              </h2>
              <p className="section-text font-normal oswald-font text-[#ffffff] leading-[1.6] max-w-4xl tracking-wider">
                For many years, we have been the trusted specialists for diesel particulate filters and catalytic converters. Our experienced team offers comprehensive advice and first-class service to ensure the efficiency and environmental friendliness of your vehicles. Rely on our expertise and experience for clean and high-performance solutions.
              </p>
            </div>
            
            <div className="xl:col-span-4 flex xl:justify-end xl:items-start pt-2">
              <Button text="View Our Capabilities" variant="white" />
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#ffffff]/60 my-10 xl:my-14" />

          {/* Middle Section: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-12 xl:gap-y-16 xl:gap-x-20 mt-10 md:mt-0">
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className={`relative bg-white rounded-tl-4xl rounded-br-4xl pt-16 pb-8 px-6 md:px-0 md:pt-8 md:pb-10 xl:pt-10 xl:pb-12 shadow-lg h-full flex flex-col ${
                  idx === 2 ? "md:col-span-2 xl:col-span-1 md:w-[calc(50%-1.5rem)] xl:w-auto md:mx-auto xl:mx-0" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* Overlapping Icon Circle */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-10 md:top-8 xl:top-10 md:-translate-y-0 w-[90px] h-[90px] md:w-[100px] md:h-[100px] xl:w-[130px] xl:h-[130px] bg-white rounded-full border-[8px] xl:border-[10px] border-[#212121] flex items-center justify-center p-3 xl:p-4">
                  {card.icon}
                </div>
                
                <div className="flex flex-col gap-4 text-center md:text-left md:pl-[110px] xl:pl-35 md:pr-6 xl:pr-10">
                  <h3 className="card-title font-semibold tracking-wide oswald-font text-[#212121] leading-[1.3]">
                    {card.title}
                  </h3>
                  <p className="header-link font-normal oswald-font text-[#585858] leading-[1.6] tr">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Divider */}
          <hr className="border-t border-[#ffffff]/60 my-10 xl:my-14" />

          {/* Bottom Text */}
          <div className="text-center max-w-7xl mx-auto" data-aos="fade-up">
            <p className="section-text font-normal oswald-font text-[#ffffff] leading-[1.6] tracking-wider">
              With over 15,000 square meters of warehouse space, 800,000 parts sold annually, and over 40 employees, we are your reliable partner and are ready to support you with our expertise. Trust in our many years of experience and our extensive range of high-quality diesel particulate filters and catalytic converters. Through our close collaboration with leading automotive manufacturers and workshops, we are always at the cutting edge of technology. Our innovative solutions and customized products help you meet environmental regulations and optimize the performance of your vehicles. Benefit from our extensive expertise and our commitment to sustainability and quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
