"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Settings } from "lucide-react";

export default function EngineProtection() {
  const features = [
    "Built to OEM-quality standards for reliable performance.",
    "Designed with precision for a perfect fit and long life.",
    "Quality tested to ensure consistent performance.",
    "Trusted engine components for vehicles around the world.",
    "Made from high-quality materials for lasting durability."
  ];

  return (
    <section
      className="py-20 xl:py-20 relative bg-[#1A1A1A] overflow-hidden text-white"
    >
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 xl:col-span-5" data-aos="fade-right">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <img src="/moto/sm-motorenteile-gmbh/setting.png" alt="Setting" className="w-auto h-auto object-contain" />
              <h2 className="section-title text-white orbitron-font font-semibold">Precision in Motion</h2>
            </div>

            {/* Paragraph */}
            <p className="section-text text-gray-300 dmsans-font leading-relaxed tracking-wide">
              Discover how SM Motorenteile combines advanced manufacturing, strict quality control, and precision engineering to produce engine components that deliver outstanding durability and consistent performance. The video showcases the craftsmanship and technology behind products trusted by automotive professionals worldwide.
            </p>

            {/* List */}
            <ul className="flex flex-col gap-4 mt-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img src="/moto/sm-motorenteile-gmbh/setting2.png" alt="Setting" className="w-5 h-5 flex-shrink-0 mt-0.5 object-contain" />
                  <p className="section-text dmsans-font text-gray-300 leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-4">
              <Button href="#" variant="primary">
                Explore Product
              </Button>
            </div>
          </div>

          {/* Right: Video clip */}
          <div className="xl:col-span-7 w-full aspect-video relative overflow-hidden flex items-center justify-center border border-gray-800 shadow-2xl" data-aos="fade-left">
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
