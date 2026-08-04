"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="about">
      <div className="custom-container flex flex-col gap-14 lg:gap-20 xl:gap-24">
        
        {/* Row 1: Content Left (6 cols on lg, 5 cols on xl+), Large Landscape Image Right (6 cols on lg, 7 cols on xl+) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Heading & Paragraphs */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-4 lg:gap-5" data-aos="fade-right">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Driving Engine Performance Since 2007
            </Typography>
            
            <div className="flex flex-col gap-4 text-white/80 text-sm md:text-base leading-relaxed">
              <Typography variant="p" color="white" className="text-white/80 leading-relaxed">
                Walker Products began supplying the fuel system needs of the automotive industry in 1946. Today, Walker is one of the largest privately owned manufacturers of fuel system components and engine sensors.
              </Typography>
              <Typography variant="p" color="white" className="text-white/80 leading-relaxed">
                We serve major Original Equipment Manufacturers, co-manufacturers, traditional aftermarket distributors, rebuilders, and retail customers in the automotive, Othermotive®, and heavy duty fuel, engine sensor, and exhaust markets worldwide.
              </Typography>
              <Typography variant="p" color="white" className="text-white/80 leading-relaxed">
                We are committed to supplying products manufactured to meet or exceed OEM standards and specifications. This effort is backed by our in-house manufacturing, product management, and engineering staff to ensure precise accuracy in the production of the highest quality parts, vehicle applications, and technical support. Our manufacturing facilities maintain and uphold ISO 9001/ IATF16949 standards. We operate sales and distribution centres across the U.S., Mexico, the UK, and China, supported by manufacturing facilities in the U.S. and China.
              </Typography>
            </div>
          </div>

          {/* Right Column: Big Landscape Facility Image */}
          <div className="lg:col-span-6 xl:col-span-7 w-full h-full flex items-center" data-aos="fade-left">
            <div className="w-full aspect-[16/8] rounded-sm overflow-hidden shadow-2xl bg-[#111] border border-white/10">
              <img 
                src="/moto/walker-products/about-1.jpg" 
                alt="Walker Products Facility" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

        {/* Row 2: Large Landscape Image Left (6 cols on lg, 7 cols on xl+), Content & Features Right (6 cols on lg, 5 cols on xl+) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Big Landscape Support Image */}
          <div className="lg:col-span-6 xl:col-span-7 w-full h-full flex items-center order-2 lg:order-1" data-aos="fade-right">
            <div className="w-full aspect-[16/8] rounded-sm overflow-hidden shadow-2xl bg-[#111] border border-white/10">
              <img 
                src="/moto/walker-products/about-2.jpg" 
                alt="Walker Products Support" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Description, Features & CTA Button */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6 order-1 lg:order-2" data-aos="fade-left">
            <Typography variant="p" color="white" className="text-white/80 text-sm md:text-base leading-relaxed">
              Since 1946, Walker Products has delivered premium fuel system components, engine sensors, ignition products, and emission control solutions. Trusted by OEM and aftermarket customers worldwide, we combine advanced manufacturing, rigorous quality standards, and global support to ensure reliable performance across all vehicle applications.
            </Typography>

            {/* Checklist */}
            <div className="flex flex-col gap-4">
              
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-[#171717]" strokeWidth={3.5} />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base leading-snug font-medium">
                  Over 20,000 Precision-Engineered Automotive Components Designed to Support OEM and Global Aftermarket Vehicle Applications Across Multiple Industries
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-[#171717]" strokeWidth={3.5} />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base leading-snug font-medium">
                  Manufactured to Meet or Exceed Original Equipment Specifications Through Advanced Engineering, In-House Manufacturing, and Comprehensive Quality Assurance Processes
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-[#171717]" strokeWidth={3.5} />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base leading-snug font-medium">
                  ISO 9001 and IATF 16949 Certified Manufacturing Facilities Committed to Delivering Consistent Product Quality, Reliability, and Operational Excellence
                </span>
              </div>

            </div>

            {/* Button */}
            <div className="pt-2">
              <Button text="Learn More About us" href="#about" showIcon={true} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
