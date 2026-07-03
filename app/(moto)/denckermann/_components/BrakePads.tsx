"use client";
import React from "react";
import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function BrakePads() {
  const topFeatures = [
    "High-performance friction material for consistent and reliable stopping power.",
    "Low-noise technology for a quieter and more comfortable driving experience.",
    "Reduced brake dust to help keep wheels cleaner for longer."
  ];

  const bottomFeatures = [
    "Excellent heat resistance to minimize brake fade during heavy braking.",
    "Precision-engineered for OE fit and easy installation.",
    "Designed to protect brake discs and improve overall braking efficiency."
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container flex flex-col gap-12 xl:gap-16">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-start">
          {/* Left: 360 Video */}
          <div 
            className="relative w-full aspect-video  rounded-2xl overflow-hidden bg-gray-100  flex items-center justify-center"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full object-cover"
            />
            
          </div>

          {/* Right: Content */}
          <div data-aos="fade-left">
            <h2 className="section-title text-[var(--color-primary)] font-medium oswald  mb-6">
              Confident Braking For Every Journey
            </h2>
            <p className="section-text text-[#484848] sora font-normal mb-8 leading-[1.8]">
              DENCKERMANN Brake Pads are engineered to provide dependable stopping performance, exceptional durability, and a smooth, quiet driving experience. Manufactured with high-quality friction materials, they deliver consistent braking power across a wide range of driving conditions while minimizing noise, vibration, and brake dust.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {topFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                 
                    <img src="/moto/denckermann/settings.png" alt="Parts Finder Icon" className="object-cover" />
                  </div>
                  <p className="section-text text-[#484848] sora font-normal">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <Button text="Learn More" className="border-[var(--color-primary)]" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-start">
          {/* Left: Content */}
          <div data-aos="fade-right" className="order-2 xl:order-1">
            <h2 className="section-title text-[var(--color-primary)] font-medium oswald  mb-6">
              Why Choose DENCKERMANN Brake Pads?
            </h2>
            <p className="section-text text-[#484848] sora font-normal mb-8 leading-[1.8]">
              Whether you're navigating city traffic or driving on highways, DENCKERMANN Brake Pads deliver dependable braking performance you can trust. Their advanced friction compounds ensure stable pedal feel, excellent stopping capability, and reliable operation even under demanding conditions, making them an ideal choice for both everyday drivers and professional workshops.
            </p>

            <div className="flex flex-col gap-4">
              {bottomFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                   
                    <img src="/moto/denckermann/settings.png" alt="Parts Finder Icon" className="object-cover" />
                  </div>
                  <p className="section-text text-[#484848] sora font-normal">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div 
            className="order-1 xl:order-2 relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden "
            data-aos="fade-left"
          >          
            <img src="/moto/denckermann/brake.png" alt="Denckermann Brake Pads" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
