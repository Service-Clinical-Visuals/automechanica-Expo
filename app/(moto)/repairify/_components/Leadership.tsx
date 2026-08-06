"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Leadership() {
  return (
    <section className="py-20 md:py-28 bg-white !overflow-visible relative z-10" id="leadership">
      <div className="custom-container relative">
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column - Content */}
          <div className="w-full flex flex-col items-start gap-8" data-aos="fade-right">
            <h2 className="adlam-font section-title text-black">Leadership In Repairify</h2>
            
            <p className="inter-font section-text text-[#1e1e1e] leading-relaxed">
              Repairify's leadership team brings together decades of experience in automotive technology, diagnostics, repair solutions, and industry innovation. Guided by a shared commitment to innovation, quality, and customer success, our leaders work collaboratively to shape the future of vehicle repair by combining deep technical expertise with a forward-thinking approach to emerging automotive challenges. They empower workshops and service providers with advanced tools, intelligent diagnostics, and expert support designed to streamline operations, reduce downtime, and improve repair accuracy. With a strong focus on continuous improvement, training, and knowledge sharing, the leadership team ensures that customers are equipped not only with cutting-edge technology but also with the confidence and capability to use it effectively. Through strategic partnerships, data-driven insights, and a dedication to safety and excellence, they are helping to transform the automotive repair landscape and deliver solutions that enhance efficiency, reliability, and customer satisfaction across the global industry.
            </p>

            <Button href="#meet-team" className="px-8 py-3 mt-2">
              Meet Our Leadership Team
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="w-full relative z-20 pointer-events-none mt-12 xl:mt-0" data-aos="fade-left">
        
               <div className="w-full relative flex items-center justify-center -mt-4 -mb-12 md:-mt-8 md:-mb-24 xl:-mt-12 xl:-mb-32 scale-110 xl:scale-125">
              <img 
                src="/moto/repairify/photo.png" 
                alt="Repairify Leadership Team" 
                className="max-w-full h-auto object-contain drop-shadow-2xl pointer-events-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
