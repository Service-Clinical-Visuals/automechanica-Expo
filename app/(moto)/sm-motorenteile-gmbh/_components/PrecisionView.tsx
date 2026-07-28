"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Settings } from "lucide-react";

export default function PrecisionView() {
  const features = [
    {
      title: "OEM-Quality Standards",
      desc: "Every engine component is manufactured to meet strict OEM-quality standards, ensuring precise fitment, dependable performance, and long-lasting durability."
    },
    {
      title: "Precision Engineering",
      desc: "Designed using advanced manufacturing technologies and high-quality materials to deliver accuracy, strength, and consistent engine performance."
    },
    {
      title: "Rigorous Quality Control",
      desc: "Each product undergoes comprehensive testing and inspection throughout the production process to ensure reliability, safety, and consistent quality."
    },
    {
      title: "Global Aftermarket Solutions",
      desc: "Trusted worldwide with a comprehensive range of engine components for aftermarket applications."
    }
  ];

  return (
    <section
      className="py-20 xl:py-20 relative bg-[#1A1A1A] overflow-hidden text-white"
    >

      <div className="custom-container relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center mb-16">

          {/* Left: 360 Video Player */}
          <div className="order-3 xl:order-1 w-full aspect-video relative overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 xl:order-2 flex flex-col gap-6" data-aos="fade-left">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <img src="/moto/sm-motorenteile-gmbh/setting.png" alt="Setting" className="w-auto h-auto object-contain" />
              <h2 className="section-title text-white orbitron-font font-semibold">Manufacturing Excellence</h2>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-white dmsans-font section-text tracking-wider">
              <p>
                Experience SM Motorenteile engine components like never before with an interactive 360° product view that lets you explore every detail from every angle. From precision-machined surfaces to carefully engineered designs, each component reflects the company's commitment to quality, accuracy, and innovation. This immersive experience allows customers to closely examine the craftsmanship, materials, and finish before making a purchase, providing greater confidence in every product.
              </p>
              <p>
                SM Motorenteile combines advanced manufacturing technologies with decades of engineering expertise to produce engine components that meet demanding OEM-quality standards. Every product is manufactured using premium materials and undergoes rigorous quality control processes to ensure precise fitment, exceptional durability, and consistent performance. Designed for passenger cars, commercial vehicles, and aftermarket applications, these components help improve engine reliability, extend service life, and deliver dependable performance under a wide range of operating conditions.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2 dmsans-font">
              <Button href="#" variant="primary">
                Explore
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 md:p-8 flex items-start gap-4 shadow-sm">
              <img src="/moto/sm-motorenteile-gmbh/pipe.png" alt="pipe" className="w-6 h-6 flex-shrink-0 mt-1 object-contain" />
              <p className="section-text dmsans-font text-[#1D1D1B]">
                <span className="font-bold">{feature.title}</span> - {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
