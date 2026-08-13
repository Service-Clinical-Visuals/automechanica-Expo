"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { BarChart2, Shield, Globe } from "lucide-react";

export default function PrecisionView() {
  const features = [
    {
      title: "OE-Quality Performance",
      desc: "Engineered to meet or exceed original equipment standards, delivering reliable cooling efficiency, precise fitment, and long-lasting durability.",
      icon: "/moto/reacheurope/i1.png"
    },
    {
      title: "Advanced Manufacturing",
      desc: "Produced in state-of-the-art facilities under strict quality standards using premium materials and precision engineering.",
      icon: "/moto/reacheurope/i2.png"
    },
    {
      title: "Global Coverage",
      desc: "Trusted by customers in over 176 countries, backed by an extensive distribution network, fast delivery, and expert technical support.",
      icon: "/moto/reacheurope/i3.png"
    }
  ];

  return (
    <section
      className="py-20 xl:py-20 relative bg-[#1b365d] overflow-hidden text-white"
    >

      <div className="custom-container relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center mb-16">

          {/* Left: 360 Video Player */}
          <div className="w-full h-full aspect-video xl:col-span-7 relative overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6 xl:col-span-5" data-aos="fade-left">
            {/* Heading */}
            <div>
              <h2 className="section-title text-white rajdhani-font font-bold">Precision Cooling, Engineered for Every Journey</h2>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-white section-text lato-font tracking-normal leading-relaxed">
              <p>
                REACH condensers are engineered to deliver superior heat dissipation, reliable air conditioning performance, and long-lasting durability across a wide range of vehicle applications. Manufactured with premium materials and advanced production processes, each condenser is designed to meet OE-quality standards, ensuring an accurate fit, efficient cooling, and dependable performance in demanding driving conditions. From passenger cars to commercial vehicles and electric mobility, REACH provides thermal management solutions trusted by professionals worldwide.
              </p>
              <p>
                From advanced manufacturing to rigorous quality testing, every REACH product is built to deliver consistent performance in demanding conditions. Backed by decades of engineering expertise and a global distribution network, our thermal management solutions help maximize cooling efficiency, improve vehicle comfort, and ensure long-lasting reliability for automotive professionals and aftermarket distributors around the world.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2">
              <Button href="#" variant="primary" className="btn-text">
                Explore More
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 flex flex-col items-center text-center shadow-sm">
              <div className="mb-6 flex justify-center">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="card-title text-[#000000] rajdhani-font  mb-3">
                {feature.title}
              </h3>
              <p className="card-text text-[#1E1E1E] lato-font leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
