"use client";

import React from "react";
import Button from "./Button";
import { Check, ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden bg-[#0F172A]">
      <div className="custom-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title text-white oswald-font font-semibold mb-4">
            Engineering Ride Control with OE Excellence
          </h2>
          <p className="rubik-font text-white font-regular section-text max-w-4xl mx-auto leading-relaxed">
            FCS provides Light Duty and Heavy Duty suspension solutions designed to deliver OE-quality performance, durability, and reliability for a wide range of vehicles.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-600 mb-12" data-aos="fade-up"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Content */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-right">
            <p className="rubik-font text-white font-regular section-text leading-relaxed mb-5">
              With advanced engineering, rigorous testing, and precision manufacturing, FCS develops high-performance suspension products built to meet the highest quality and reliability standards. Designed for passenger vehicles, SUVs, and commercial fleets, our solutions deliver superior ride comfort, enhanced stability, and consistent performance. Through innovative design, application-specific engineering, and strict quality controls, FCS ensures long-lasting durability and dependable performance even in the most demanding driving conditions.
            </p>

            <div className="flex flex-col gap-3 mb-5">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <img src="/moto/fcs/tick.png" alt="Check" className="w-auto h-auto flex-shrink-0 mt-1 object-contain" />
                <p className="text-gray-300 rubik-font font-regular text-[16px] leading-relaxed">
                  <strong className="text-white font-semibold">OE-quality design and performance</strong> engineered to deliver reliable results that meet or exceed OE standards.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <img src="/moto/fcs/tick.png" alt="Check" className="w-auto h-auto flex-shrink-0 mt-1 object-contain" />
                <p className="text-gray-300 font-regular rubik-font text-[16px] leading-relaxed">
                  <strong className="text-white font-semibold">Advanced engineering and testing</strong> developed with precision processes and rigorous validation for enhanced durability and safety.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <img src="/moto/fcs/tick.png" alt="Check" className="w-auto h-auto flex-shrink-0 mt-1 object-contain" />
                <p className="text-gray-300 font-regular rubik-font text-[16px] leading-relaxed">
                  <strong className="text-white font-semibold">Reliable durability and stability</strong> built to provide consistent performance, strength, and long-term reliability.
                </p>
              </div>
            </div>

            <Button href="#" variant="primary" className="!bg-[#163683] !border-[#163683] gap-2 w-fit">
              Explore <ArrowRight size={18} />
            </Button>
          </div>

          {/* Right Video Player */}
          <div className="w-full h-full relative overflow-hidden rounded-xl lg:col-span-7 bg-gray-100/10 border border-gray-700/50 flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}

