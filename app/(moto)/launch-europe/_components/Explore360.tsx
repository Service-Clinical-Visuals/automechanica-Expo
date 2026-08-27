"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Car, CarFront, Wifi, CloudUpload } from "lucide-react";

export default function Explore360() {
  const features = [
    {
      icon: <img src="/moto/launch-europe/4.png" alt="car" />,
      title: "Multi Brand Diagnostics",
      text: "Advanced diagnostics supporting 120+ vehicle makes and models",
    },
    {
      icon: <img src="/moto/launch-europe/5.png" alt="carwifi" />,
      title: "ADAS Calibration",
      text: "High-precision ADAS calibration for modern vehicle system",
    },
    {
      icon: <img src="/moto/launch-europe/6.png" alt="wifi" />,
      title: "Wireless Connectivity",
      text: "Seamless Bluetooth & Wi-fi connection for flexibility",
    },
    {
      icon: <img src="/moto/launch-europe/7.png" alt="cloud" />,
      title: "Intelligent Software",
      text: "Stay Up-to date with the latest coverage and features",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#111111]" id="explore-360">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center mb-16">
          
          {/* Left Column: Video */}
          <div className="order-2 xl:order-1 xl:col-span-8 w-full aspect-video relative rounded-2xl overflow-hidden" data-aos="fade-right">
             <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 xl:order-2 xl:col-span-4 flex flex-col justify-center text-white" data-aos="fade-left">
            <h2 className="section-title font-heading mb-6">Explore Every Detail</h2>
            
            <div className="space-y-4 mb-8 text-white section-text leading-relaxed font-lato">
              <p>
                Experience LAUNCH Europe's advanced diagnostic and ADAS calibration equipment from every angle, as if you had the device right in your hands. Rotate, inspect, and zoom into every component to fully understand the build quality and thoughtful engineering behind each product.
              </p>
              <p>
                Discover innovative engineering, intelligent software integration, and precision-driven technology designed to support modern workshops in delivering faster, more reliable, and highly accurate vehicle diagnostics. Every detail is purpose-built to improve workflow efficiency, reduce downtime, and enhance technician confidence in even the most complex repair scenarios.
              </p>
              <p>
                From intuitive user interfaces to robust hardware construction, LAUNCH solutions are engineered to meet the demands of today's automotive professionals—helping workshops stay ahead in a rapidly evolving industry.
              </p>
            </div>

            <div>
              <Button href="#" variant="primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Features Card */}
        <div 
          className="w-full bg-white rounded-2xl border border-[#e30613] shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative flex flex-row items-center gap-5 p-6 xl:p-8 hover:bg-gray-50 transition-colors"
              >
                {/* Bottom Divider for responsive stacking */}
                {index !== 3 && (
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-[#e30613]/40 ${
                    index === 2 ? 'md:hidden' : 'xl:hidden'
                  }`} />
                )}

                {/* Right Divider with less height (matches screenshot) */}
                {index !== 3 && (
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-[72px] bg-[#e30613]/40 ${
                    index === 1 ? 'hidden xl:block' : 'hidden md:block'
                  }`} />
                )}
                <div className="w-[72px] h-[72px] rounded-full border border-[#e30613] flex items-center justify-center text-[#e30613] flex-shrink-0 overflow-hidden p-3">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-heading section-title1 font-normal text-[#111111] mb-2 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="section-text text-[#111111] font-lato leading-[1.7]">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
