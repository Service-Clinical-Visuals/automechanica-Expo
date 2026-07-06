"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from './Button';

export default function PrecisionIgnition() {
  return (
    <section className="w-full bg-[#0c3274] text-white py-16 md:py-24 overflow-hidden">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-10 items-center mb-6 md:mb-10">
          
          {/* Left Column: Text & Cards */}
          <div className="xl:col-span-6 2xl:col-span-4" data-aos="fade-right">
            <h2 className="section-title font-medium oswald-font mb-6 leading-tight">
              Precision Ignition Technology
            </h2>
            <p className="lato-font section-text mb-8 leading-[1.8] text-white font-medium">
              BBT Ignition Coils deliver a powerful, consistent spark for smooth engine performance and efficient combustion. Built to OEM-quality standards with premium materials, they ensure reliable operation, improved fuel efficiency, reduced emissions, and long-lasting durability across a wide range of vehicle applications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h3 className="section-text font-medium oswald-font text-[#0c3274] mb-2  ">
                  Reduced Emissions
                </h3>
                <p className="section-text lato-font text-[#333333] leading-[1.5] font-medium">
                  Supports cleaner combustion, contributing to lower emissions.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h3 className="section-text font-medium oswald-font text-[#0c3274] mb-2  ">
                  Precision Fitment
                </h3>
                <p className="section-text lato-font text-[#333333] leading-[1.5] font-medium">
                  Designed for a precise fit and easy, hassle-free installation.
                </p>
              </div>
            </div>

            <Button href="#" variant="outline-white">
              Explore Product
            </Button>
          </div>

          {/* Right Column: Video / Image Placeholder */}
          <div className="xl:col-span-6 2xl:col-span-8 relative w-full aspect-video rounded-2xl overflow-hidden" data-aos="fade-left">
         
            
            {/* Video Player */}
            <DynamicVideoPlayer
              type="360" 
              className="absolute inset-0 w-full h-full object-cover "
            />
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-white mb-6 md:mb-10" />

        {/* Bottom Section */}
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="section-title font-medium oswald-font mb-6 leading-tight">
            Reliable Spark, Every Drive
          </h2>
          <p className="section-text lato-font text-white leading-[1.5] font-medium">
            BBT Ignition Coils deliver a powerful, consistent spark for smooth engine performance, improved fuel efficiency, and reliable OEM-quality ignition in every journey.
          </p>
        </div>

      </div>
    </section>
  );
}
