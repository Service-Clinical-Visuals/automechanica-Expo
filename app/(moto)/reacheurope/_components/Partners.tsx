"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Snowflake, Shield, Settings } from "lucide-react";

export default function Partners() {
  const features = [
    {
      title: "Superior Cooling Efficiency",
      icon: "/moto/reacheurope/b1.png"
    },
    {
      title: "Corrosion-Resistant Design",
      icon: "/moto/reacheurope/b2.png"
    },
    {
      title: "OE-Quality Performance",
      icon: "/moto/reacheurope/b3.png"
    }
  ];

  return (
    <section className="py-20 xl:py-20 relative bg-[#1b365d] overflow-hidden text-white">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-4 xl:col-span-6" data-aos="fade-right">
            {/* Heading */}
            <div>
              <h2 className="section-title text-white rajdhani-font ">Built for Performance. Designed for Reliability</h2>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 section-text text-white lato-font tracking-normal leading-8 tracking-normal">
              <p>
                Every REACH cooling component is engineered to deliver exceptional efficiency, dependable performance, and long-term durability. Developed using advanced manufacturing technologies and rigorous quality testing, our HVAC solutions provide optimal thermal management for a wide range of vehicle applications. From manufacturing to real-world performance, every product is designed to meet OE-quality standards and ensure reliable operation in demanding driving conditions.
              </p>
            </div>

            {/* Button */}
            <div className="mt-1">
              <Button href="#" variant="primary" className="btn-text">
                Explore Product
              </Button>
            </div>

            {/* Features (Horizontal) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-white px-4 py-6">
                  <div className="flex-shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-auto h-auto object-contain" />
                  </div>
                  <h3 className="card-title text-[#000000] rajdhani-font font-semibold text-sm leading-tight">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Video Player */}
          <div className="w-full aspect-video relative overflow-hidden xl:col-span-6 flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
