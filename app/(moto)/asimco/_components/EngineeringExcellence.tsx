"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeringExcellence() {
  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="section-title teko-font font-medium mb-6 tracking-wide text-white">
              Engineering Excellence in Every Component
            </h2>
            
            <div className="space-y-6 section-text text-[#ffffff] inter-font mb-10 leading-relaxed">
              <p>
                Discover how ASIMCO combines advanced manufacturing, precision engineering, and rigorous quality testing to produce high-performance automotive braking solutions. Every component is developed with a commitment to safety, reliability, and consistent performance that meets global industry standards.
              </p>
              <p>
                Backed by cutting-edge technology and industry expertise, ASIMCO continuously enhances its manufacturing processes to deliver products with exceptional precision and durability. Every braking solution is carefully engineered to provide reliable stopping power, optimal performance, and long-term value across a wide range of vehicle applications.
              </p>
              <p>
                From material selection to final validation, every stage of production is guided by strict quality standards and continuous innovation. By combining advanced testing with precision craftsmanship, ASIMCO ensures every brake component delivers consistent performance, enhanced safety, and dependable reliability for drivers around the world.
              </p>
            </div>
            
            <div>
              <Button href="#" variant="primary" className="!px-8">
                View Product
              </Button>
            </div>
          </div>

          {/* Right Column: Video Player */}
          <div 
            className="w-full relative aspect-video rounded-xs overflow-hidden shadow-2xl "
            data-aos="fade-left"
          >
            <DynamicVideoPlayer 
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
