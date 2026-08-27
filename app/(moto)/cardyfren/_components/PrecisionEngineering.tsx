"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PrecisionEngineering() {
  return (
    <section className="w-full bg-[#111111] py-16 md:py-24">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10">
          
          {/* Left Column - 360 Video */}
          <div className="order-2 xl:order-1 w-full xl:w-1/2" data-aos="fade-right">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#111111] flex items-center justify-center">
              <DynamicVideoPlayer type="360" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 xl:order-2 w-full xl:w-1/2" data-aos="fade-left">
            <h2 className="section-title font-normal text-white mb-6 font-heading">
              Precision Engineering in Motion
            </h2>
            
            <p className="text-white mb-8 font-body section-text leading-relaxed">
              See how Cardyfren's CV joints are engineered to deliver smooth torque transfer, exceptional durability, and reliable performance. From precision manufacturing and rigorous quality inspections to real-world vehicle applications, every component is designed to meet the highest standards of efficiency and dependability.
            </p>
            
            <div className="space-y-6 mb-10">
              {/* Bullet 1 */}
              <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 ">
                 <img src="/moto/cardyfren/setting.png" alt="Icon" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-body section-text leading-relaxed">
                    <strong className="text-white">Precision Manufacturing</strong> - Advanced machining processes ensure accurate dimensions, superior fitment, and consistent performance.
                  </p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 ">
                 <img src="/moto/cardyfren/setting.png" alt="Icon" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-body section-text leading-relaxed">
                    <strong className="text-white">Built for Durability</strong> - Manufactured from high-strength materials to withstand heavy loads, wear, and demanding operating conditions.
                  </p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 ">
                 <img src="/moto/cardyfren/setting.png" alt="Icon" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-body section-text leading-relaxed">
                    <strong className="text-white">Smooth Power Transmission</strong> - Engineered to maintain constant velocity during steering and suspension movement, reducing vibration and improving driving comfort.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-text bg-[#28b7ff] hover:bg-[#1fa1e6] text-white px-8 py-3 rounded-md transition-colors font-bold font-heading shadow-md">
              View Product
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
