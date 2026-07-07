"use client";

import React from 'react';

export default function Features() {
  const features = [
    {
      icon: "/moto/bbt/abt1.png",
      title: "Strong partnerships",
      description: "Our alliances allow us to bring new products to the aftermarket as quickly as possible. Vehicle models are always top priority."
    },
    {
      icon: "/moto/bbt/abt2.png",
      title: "Family business",
      description: "Since our foundation, our success has been driven by commitment, stability, shared values, and lasting trust."
    },
    {
      icon: "/moto/bbt/abt3.png",
      title: "We keep our finger on the pulse",
      description: "We keep a close eye on current trends and developments so that you are always one step ahead!"
    }
  ];

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 lg:p-10 shadow-[1px_4px_10px_rgba(0,0,0,0.20)] flex flex-col xl:flex-row items-start xl:items-center gap-6"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="flex-shrink-0 w-16 h-16 xl:w-20 xl:h-20 flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              <div className="flex flex-col">
                <h3 className="section-text font-medium oswald-font text-[#0c3274] mb-4 ">
                  {feature.title}
                </h3>
                <p className="section-text lato-font text-[#333333] leading-[1.5]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
  );
}
