"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredBraking() {
  const features = [
    {
      title: "OEM-Quality Engineering",
      description: "Manufactured to meet stringent quality standards for dependable performance."
    },
    {
      title: "Superior Stopping Power",
      description: "Provides confident braking with consistent friction under various driving conditions"
    },
    {
      title: "Low Noise & Long Service Life",
      description: "Engineered to reduce brake noise, minimize wear, and extend component lifespan."
    },
    {
      title: "Precision Fitment",
      description: "Designed for accurate installation and compatibility with a wide range of vehicle models."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Video Player */}
          <div 
            className="order-2 xl:order-1 w-full relative aspect-video rounded-xs  overflow-hidden shadow-2xl "
            data-aos="fade-right"
          >
            <DynamicVideoPlayer 
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 xl:order-2 flex flex-col gap-8" data-aos="fade-left">
            <div>
              <h2 className="section-title teko-font text-white font-medium  mb-6">
                Engineered for Reliable Braking Performance
              </h2>
              <p className="section-text text-white inter-font leading-relaxed">
                Watch how ASIMCO brake pads and brake calipers are engineered to deliver exceptional stopping power, consistent performance, and long-lasting durability. From advanced manufacturing to rigorous quality testing, every component is deseigned to meet demanding safety and performance standards.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-[#cb1020] inter-inter font-bold mb-1 section-text">
                    {feature.title}
                  </h4>
                  <p className="text-white inter-font section-textleading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button href="#" variant="primary" className="!px-8">
                View Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
