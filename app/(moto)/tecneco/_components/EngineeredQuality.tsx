"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function EngineeredQuality() {
  const features = [
    {
      title: "Advanced Manufacturing",
      desc: "State-of-the-art production facilities ensure precision, consistency, and superior product quality."
    },
    {
      title: "Rigorous Quality Control",
      desc: "Every filter undergoes comprehensive testing to deliver dependable performance, durability, and long-lasting protection."
    }
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-[#111111] relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/moto/tecneco/bg1.png')`
      }}
    >
      {/* Optional dark overlay if bg1.png is too bright or needs to blend better */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white xl:col-span-4" data-aos="fade-right">
            <h2 className="section-title text-white font-semibold mb-6 sora">
              Engineered for Quality
            </h2>
            
            <p className="section-text text-white leading-relaxed mb-8 lato font-normal">
              Every Tecneco filter is manufactured using premium raw materials, advanced production technologies, and rigorous quality control processes to ensure consistent OE-quality performance. From design and testing to final inspection, every stage is focused on delivering high-performance filtration solutions for automotive, heavy-duty, industrial, and recreational applications.
            </p>

            <ul className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <img 
                      src="/moto/tecneco/icon.png" 
                      alt="bullet" 
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-2 h-2 rounded-full bg-white mt-2"></div>
                  </div>
                  <span className="section-text text-white lato font-normal leading-relaxed">
                    <strong className="text-white font-bold">{feature.title}</strong> - {feature.desc}
                  </span>
                </li>
              ))}
            </ul>

            <Button href="#" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              View Product
            </Button>
          </div>

          {/* Right Side - Video Player */}
          <div 
            className="xl:col-span-8 w-full aspect-video bg-white/5 relative overflow-hidden rounded-sm"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer 
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
