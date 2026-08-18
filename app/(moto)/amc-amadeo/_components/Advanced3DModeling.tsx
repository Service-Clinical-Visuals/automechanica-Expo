"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Advanced3DModeling() {
  return (
    <section className="py-20 md:py-28 bg-[#f3f5f7] w-full overflow-hidden">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center mb-16">
          
          {/* Left Side: Video Player */}
          <div className="order-2 xl:order-1 xl:col-span-7" data-aos="fade-right" data-aos-duration="1000" >
            <div className="w-full aspect-video  bg-white rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center">
               <DynamicVideoPlayer 
                type="short-2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="xl:col-span-5 order-1 xl:order-2" data-aos="fade-left" data-aos-duration="1000">
            <h2 className="section-title text-[#272727] font-semibold mb-6 oswald leading-tight">
              <span className="relative inline-block pb-2">
                Advanced 3D Modeling
                <span className="absolute left-0 bottom-0 w-[90%] h-1 bg-primary"></span>
              </span>{" "}
              & Prototyping
            </h2>
            
            <div className="space-y-6">
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
                AMC integrates advanced engineering, 3D printing, and casting expertise to provide innovative prototype development solutions for automotive, aerospace, and industrial applications. The combination of digital design and manufacturing technology enables faster development with high precision and reliability.
              </p>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
                Using advanced CAD systems, scanning, and reverse engineering, AMC transforms digital concepts into accurate sand moulds and cores. The layer-by-layer 3D printing process allows the production of complex geometries while reducing development time and tooling requirements.
              </p>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
                AMC's integrated approach covers the complete process from engineering and mould production to casting and precision machining. This allows customers to develop prototypes, short production runs, and customized components with improved efficiency and flexibility.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-10" data-aos="fade-up" />

        {/* Bottom Section */}
        <div 
          className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed  max-w-6xl"> 
            With advanced technology, engineering expertise, and strict quality-focused processes, AMC provides complete manufacturing solutions that enhance efficiency, reduce development time, and optimize production costs. By combining digital innovation, precision engineering, and advanced manufacturing capabilities, AMC supports the creation of high-performance automotive and industrial components that meet global quality standards and customer requirements.
          </p>
          
          <div className="flex-shrink-0">
            <Button href="#" variant="primary" showArrow={true}>
              Explore
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
