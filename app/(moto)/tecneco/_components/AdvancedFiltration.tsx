"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AdvancedFiltration() {
  return (
    <section 
      className="py-20 md:py-28 bg-[#111111] relative w-full"
      style={{
         backgroundImage: `url('/moto/tecneco/bg1.png')`,
      }}
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Side - Video Player */}
          <div 
            className="order-2 xl:order-1 w-full aspect-video bg-white/5 relative overflow-hidden rounded-sm"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer 
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 xl:order-2 text-white" data-aos="fade-left">
            <h2 className="section-title font-semibold mb-6 sora">
              Advanced Filtration
            </h2>
            
            <p className="section-text text-white leading-relaxed mb-6 lato font-normal">
              Designed to meet the demands of modern vehicles, Tecneco filters deliver cleaner airflow, improved engine efficiency, and dependable protection in every driving condition. Every filter undergoes rigorous quality testing to ensure OE-equivalent performance, long-lasting durability, and reliable operation trusted by automotive professionals worldwide.
            </p>

            <p className="section-text text-white leading-relaxed mb-10 lato font-normal">
              Engineered to deliver exceptional filtration performance, our filters effectively capture dust, dirt, debris, and harmful contaminants before they reach critical engine components, helping to maintain a clean and efficient system. Designed to meet strict OE-quality standards, each filter is manufactured using premium materials and advanced production processes to ensure precise fitment, long-lasting durability, and consistent performance under demanding operating conditions. By optimizing airflow and protecting vital engine parts from premature wear, our filtration solutions enhance overall engine efficiency, extend service life, reduce maintenance requirements, and provide dependable performance for a wide range of automotive applications.
            </p>

            <Button href="#" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              View Product
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
