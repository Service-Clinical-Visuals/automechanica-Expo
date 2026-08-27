"use client";

import React from "react";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

export default function ReliableSolutions() {
  const features = [
    {
      title: "OEM & Aftermarket Manufacturing",
      desc: "ITW manufactures precision-engineered automotive components that meet or exceed OE quality and performance standards.",
    },
    {
      title: "Comprehensive Automotive Product Range",
      desc: "ITW offers a broad portfolio of engine, cooling, steering, suspension, and ignition components for Asian, European, and domestic vehicles.",
    },
    {
      title: "Global Manufacturing & Supply",
      desc: "With manufacturing facilities across multiple countries, ITW ensures consistent quality, efficient production, and reliable worldwide product distribution.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="reliable-solutions">
      <div className="custom-container">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="section-title font-semibold text-[#1a1a1a] mb-6 ">
            Reliable Automotive Solutions By ITW
          </h2>
          <p className="section-text text-[#585858] font-medium">
            ITW delivers high-quality automotive components and dependable manufacturing solutions for OEM and aftermarket customers worldwide. With advanced production facilities and a strong commitment to quality, we provide reliable products that meet or exceed OE standards across global markets.
          </p>
        </div>

        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column - Image */}
          <div className="w-full relative rounded-lg overflow-hidden xl:col-span-8" data-aos="fade-right" data-aos-delay="100">
            <img
              src="/moto/itw-international/reliable1.png"
              alt="White Sports Car - Reliable Solutions"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Text & Features */}
          <div className="flex flex-col xl:col-span-4" data-aos="fade-left" data-aos-delay="200">
            <h3 className="section-title1 font-semibold text-[#1a1a1a] mb-8 ">
              Precision Engineering You Can Trust
            </h3>
            <p className="section-text text-[#4a4a4a] font-normal mb-8 tracking-wider">
              ITW manufactures high-quality automotive components using advanced production technologies and strict quality control. Every product is designed to meet or exceed OE standards, ensuring dependable performance, durability, and precise fitment.
            </p>
            
            <ul className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                <img src="/itw-international/tck1.png" alt="check" className="w-5 h-5 mt-1" />
                  <p className="text-[#4a4a4a] font-normal section-text  leading-snug tracking-wider">
                  {feature.title} – {feature.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button href="#" variant="primary" hasArrow>
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
