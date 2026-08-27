"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';
import Features from './Features';

export default function AboutUs() {
  const bulletPoints = [
    {
      title: "Built on Trust",
      description: "Strong partnerships founded on reliability and accountability."
    },
    {
      title: "Integrity in Business",
      description: "Guided by the values of honesty, respect, and ethical conduct."
    },
    {
      title: "Customer Commitment",
      description: "Long-term relationships through dependable service and support."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left Side: Image */}
          <div className="relative w-full h-full order-2 xl:order-1" data-aos="fade-right">
            <div className="w-full aspect-[4/3] xl:aspect-auto xl:h-[600px] overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="/moto/bbt/abt.jpg" 
                alt="About BBT Automotive" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col items-start justify-center order-1 xl:order-2" data-aos="fade-left">
            <h2 className="section-title font-medium oswald-font text-[#0c3274] leading-tight mb-6">
              About BBT Automotive
            </h2>
            
            <div className="space-y-6 mb-8 text-[#333333] lato-font section-text leading-[1.6]">
              <p>
                A strong partnership thrives on accountability and trust based on reliability. In our family 
                business, we proceed according to the principle of upholding the decency and manners of 
                the honourable merchant. Since the Middle Ages, our region has been closely intertwined with 
                international markets through the great trading city of Nuremberg.
              </p>
              <p>
                The new guiding principles have been in place since 1517. Since those days, they have offered 
                guidance for honourable conduct, which we continue to honour in times of globalisation and 
                digitalisation. We are committed to being a role model for future generations.
              </p>
            </div>


            {/* Bullet Points */}
            <div className="space-y-4 mb-10 w-full">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
               
                  <img src='/moto/bbt/tick.png' className='size-5 mt-1'></img>
                  <p className="lato-font text-[#333333] section-text font-medium">
                    <span className="font-medium">{point.title}</span> – {point.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#" variant="outline-blue">
              Know More About Us
            </Button>
          </div>

        </div>
        <div className='h-[2px] bg-gray-200 my-12'></div>
          <Features />
      </div>
    </section>
  );
}
