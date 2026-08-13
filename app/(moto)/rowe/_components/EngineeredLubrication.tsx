"use client";

import React from "react";
import Link from "next/link";
import { FaCog } from "react-icons/fa";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function EngineeredLubrication() {
  const features = [
    {
      title: "Advanced Wear Protection",
      description: "Formulated to reduce friction and minimize component wear, helping extend equipment and engine life.",
      icon: "/moto/rowe/setting.png"
    },
    {
      title: "Outstanding Thermal Stability",
      description: "Maintains performance under extreme temperatures and demanding operating environments.",
      icon: "/moto/rowe/setting.png"
    },
    {
      title: "Enhanced Fuel Efficiency",
      description: "Optimized formulations support smoother operation and improved energy efficiency.",
      icon: "/moto/rowe/setting.png"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* Top Section: 360 Viewer Placeholder & Text */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 items-center mb-16 md:mb-24">
          
          {/* Left: 360 Viewer Placeholder */}
          <div className="w-full aspect-video  relative flex items-center justify-center border border-gray-100 shadow-inner overflow-hidden" data-aos="fade-right">
             <DynamicVideoPlayer
               type="360"
               className="absolute inset-0 w-full h-full object-cover"
             />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-start" data-aos="fade-left">
            <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide mb-4">
              Engineered Lubrication for {" "}
              <span className="text-[#e61919] orbitron">Every Application</span>
            </h2>
            
            <div className="text-gray-500 text-sm md:text-[15px] leading-relaxed space-y-6 mb-8 font-sans">
              <p className="text-[#666666] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8] ">
                Our advanced lubricant technologies are developed to meet the demands of modern engines, industrial systems, and specialized equipment. From passenger vehicles to heavy-duty machinery, our products deliver reliable protection, improved efficiency, and long-lasting performance in even the most challenging operating conditions.
              </p>
              <p className="text-[#666666] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.8] ">
                Designed to support today's evolving automotive and industrial technologies, our lubricant solutions help maximize equipment reliability, reduce maintenance requirements, and enhance overall system efficiency. Through continuous innovation and rigorous quality standards, we provide products that deliver consistent performance, protect critical components, and ensure dependable operation throughout their service life.
              </p>
            </div>

            <Button href="#">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Bottom Section: Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 rounded-sm"
            >
              <div className="w-14 h-14 bg-[#e61919] flex items-center justify-center mb-6">
                <img src={feature.icon} alt="" />
              </div>
              <h4 className="text-lg md:text-[20px] font-bold orbitron text-[#000B29] mb-4">
                {feature.title}
              </h4>
              <p className="text-[#666666] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.5]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
