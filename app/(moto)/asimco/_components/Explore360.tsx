"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Explore360() {
  const features = [
    {
      icon: "/moto/asimco/i1.png",
      title: "Interactive Product Showcase",
      description: "Explore ASIMCO brake components through an immersive 360° experience that highlights every angle with exceptional clarity. Discover the precision engineering and premium craftsmanship behind each product.",
    },
    {
      icon: "/moto/asimco/i2.png",
      title: "Brake Pad & Brake Caliper",
      description: "Examine the detailed construction of ASIMCO brake pads and brake calipers, designed to deliver reliable braking performance, accurate fitment, and long-lasting durability for a wide range of vehicle applications.",
    },
    {
      icon: "/moto/asimco/i3.png",
      title: "Precision Engineering Advantage",
      description: "ASIMCO products are built with advanced engineering standards to ensure consistent performance under all driving conditions. Every component undergoes strict quality testing to meet global safety and durability benchmarks.",
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#1e1e1e] text-white">
      <div className="custom-container">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-subtitle teko-font text-white font-medium ">
            Explore Every Detail
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 360 Video Player */}
          <div 
            className="order-2 xl:order-1 w-full relative aspect-video rounded-xs overflow-hidden shadow-2xl "
            data-aos="fade-right"
          >
            <DynamicVideoPlayer 
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Features List */}
          <div className="order-1 xl:order-2 flex flex-col gap-10" data-aos="fade-left">
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                      <img src={feature.icon} alt={feature.title} className="w-full h-auto object-contain" />
                    </div>
                    <h4 className="card-title teko-font text-white font-medium tracking-wide">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="section-text text-white inter-font leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button href="#" variant="primary">
                Explore Products
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
