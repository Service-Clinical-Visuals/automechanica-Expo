"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AmadiniButton from "./AmadiniButton";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden custom-container px-4 xl:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
        
        {/* Left Side: Image */}
        <div className="order-2 xl:order-1 relative w-full aspect-square md:aspect-[4/3] xl:aspect-auto xl:h-[700px] flex justify-center items-center">
          <img
            src="/moto/amadini/spares.png" // Placeholder, assuming spares.png is the blueprint
            alt="Amadini Engine Blueprint"
          />
        </div>

        {/* Right Side: Content */}
        <div className="order-1 xl:order-2 flex flex-col space-y-6">
          <h2 className="section-title font-semibold text-[#2a2a2a] leading-tight max-w-3xl">
            Since 1961 Working In The Distribution Of Car Spare Parts
          </h2>
          
          <div className="space-y-4 text-[#4a4a4a]">
            <p className="leading-relaxed section-text font-normal">
              When we talk about Amadini, we're talking about a family business with many years of experience in the manufacture and distribution of automotive parts. We have a clear objective: to remain leaders in the distribution of spare parts and in the manufacture of glow plugs for diesel engines. We are always guided by solid values: Service, Quality, Commitment, and Innovation.
            </p>
            <p className="leading-relaxed section-text font-normal">
              We are proud to provide high-end products, meeting Original Equipment Manufacturer (OEM) quality standards. Our commitment to quality drives us to continuously improve our products and customer service. This commitment to quality helps us achieve original equipment (OE) status with global recognition. As further evidence of our relentless pursuit of excellence, we renewed our ISO 9001:2015 certification in November 2023.
            </p>
          </div>

          <div className="space-y-6 mt-4">
            {/* Bullet Point 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#005484"/>
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#4a4a4a] leading-relaxed section-text">
                <span className="font-semibold text-[#005484]">Decades of Automotive Expertise</span> – Backed by years of experience as a family-owned company, Amadini specializes in manufacturing and distributing premium automotive components that meet the evolving needs of the global aftermarket.
              </p>
            </div>
            
            {/* Bullet Point 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#005484"/>
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#4a4a4a] leading-relaxed section-text">
                <span className="font-semibold text-[#005484]">OEM-Quality Manufacturing</span> – Every product is developed to meet Original Equipment Manufacturer (OEM) standards, ensuring exceptional quality, precision, durability, and reliable performance across a wide range of vehicle applications.
              </p>
            </div>
            
            {/* Bullet Point 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#005484"/>
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#4a4a4a] leading-relaxed section-text">
                <span className="font-semibold text-[#005484]">Commitment to Continuous Improvement</span> – We continuously invest in product development, manufacturing technologies, and customer service to deliver innovative solutions and maintain the highest levels of quality and reliability.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <AmadiniButton 
              href="/amadini/about" 
              variant="primary"
            >
              Learn More About Us
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1V13M13 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </AmadiniButton>
          </div>
        </div>
      </div>
    </section>
  );
}
