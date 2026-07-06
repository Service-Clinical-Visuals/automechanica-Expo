"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from './Button';

export default function ReliableIgnition() {
  return (
    <section className="relative w-full text-white py-16 md:py-24 overflow-hidden bg">
      
      
      <div className="custom-container relative z-10 ">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-10 items-center mb-6 md:mb-10">
          
          {/* Left Column: Video / Image Placeholder */}
          <div className="xl:col-span-7 relative w-full aspect-video rounded-2xl overflow-hidden order-2 xl:order-1" data-aos="fade-right">
         
            
            {/* Video Player */}
            <DynamicVideoPlayer
              type="short-1" 
              className="absolute inset-0 w-full h-full object-cover z-10 mix-blend-normal"
            />
          </div>

          {/* Right Column: Text & Button */}
          <div className="xl:col-span-5 order-1 xl:order-2" data-aos="fade-left">
            <h2 className="section-title font-medium oswald-font mb-6 leading-tight">
              Reliable Ignition Performance for Every Journey
            </h2>
            <div className="space-y-6 mb-8 text-white lato-font section-text leading-[1.8] font-medium">
              <p>
                The ignition coil is a critical component of the vehicle's ignition system, responsible for converting the battery's low voltage into the high voltage required to create a spark at the spark plugs. This precise spark ensures efficient combustion, smooth engine operation, improved fuel economy, and reduced emissions. A high-quality ignition coil also contributes to quicker engine starts, consistent power delivery, and long-term engine reliability.
              </p>
              <p>
                BBT Ignition Coils are engineered to meet the demanding requirements of modern petrol engines. Manufactured using premium-grade materials and advanced production processes, every coil is designed to deliver stable voltage output, exceptional durability, and reliable performance under extreme operating conditions.
              </p>
            </div>
            
            <Button href="#" variant="outline-white">
              Explore Product
            </Button>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-white mb-6 md:mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8" data-aos="fade-up">
          <div className="max-w-5xl">
            <h2 className="section-title font-medium oswald-font mb-6 leading-tight">
              Powering Every Spark with Precision
            </h2>
            <p className="lato-font section-text leading-[1.8] font-medium text-white">
              BBT Ignition Coils deliver reliable high-voltage performance for smooth engine operation, improved fuel efficiency, and long-lasting durability. Engineered to OEM-quality standards, they ensure dependable performance and a precise fit across a wide range of vehicles.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <button className="w-23 h-23 bg-[#A6D8FF] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0c3274] transition-colors shadow-lg group">
              <ArrowUpRight strokeWidth={2.5} size={45} className="transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
