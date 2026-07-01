"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function WhyMagma() {
  const features = [
    "Stop-and-Go City Traffic",
    "Emergency & Sudden Braking",
    "Mountain & Hill Driving",
    "High-Performance Driving",
    "Hauling & Towing Heavy Loads",
    "Long, Sustained Braking"
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#111111] overflow-hidden">
      {/* Angled Background Polygon - Thick Diagonal Band */}
      <div className="absolute top-[27%] left-0 w-full h-[55%] bg-[#1A1A1A] -skew-y-[15deg] z-0" />


      <div className="custom-container relative z-10 flex flex-col items-center">

        {/* Top Header Section */}
        <div className="w-full flex flex-col text-left mb-8" data-aos="fade-up">
          <Typography variant="h1" color="white" weight="bold" className="font-oswald uppercase mb-4">
            WHY MAGMA?
          </Typography>
          <Typography variant="p" color="white" className="font-oswald max-w-full lg:max-w-[60%] text-[14px] md:text-[16px] leading-relaxed">
            Today's harsh stop and go environment can create very high heat levels in your braking system which can reduce the vehicle's ability to stop...Extreme high temperatures can be reached in many braking situations such as:
          </Typography>
        </div>

        {/* Separator Line */}
        <hr className="w-full border-t border-white/30 mb-8" />

        {/* Main Layout Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-5">

          {/* Left Side: Text and Feature Grid */}
          <div className="w-full lg:col-span-7 flex flex-col gap-8" data-aos="fade-right">
            <Typography variant="p" color="white" className="font-oswald text-[14px] md:text-[16px] leading-relaxed">
              At MAGMA Brakes, we believe that exceptional braking performance begins with exceptional heat management. That's why we use "Fire to Fight Fire." Our brake pads, rotors, shoes, drums, and braking components are manufactured using advanced friction materials, precision engineering, and state-of-the-art production processes designed to withstand extreme temperatures.
            </Typography>

            {/* Feature Grid */}
            <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-4 p-4 md:p-5 border border-[#333333] bg-[#111111]/50 backdrop-blur-sm"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Check size={14} className="text-black" strokeWidth={3} />
                  </div>
                  <span className="font-oswald text-white  tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Typography variant="p" color="white" className="font-oswald  leading-relaxed mt-4">
              Using advanced friction materials and precision manufacturing, MAGMA Brakes are built to withstand extreme heat, resist brake fade, and deliver consistent stopping power. Engineered for durability and reliability, our brake components provide safe, confident performance in every driving condition.
            </Typography>
          </div>

          {/* Right Side: Car Image */}
          <div className="w-full lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="200">
            <img
              src="/moto/magma-brakes/section3.png"
              alt="Magma Orange Sports Car"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up">
          <Button
            text="KNOW MORE ABOUT MAGMA"
            href="#about"
            showIcon={false}
          />
        </div>

      </div>
    </section>
  );
}
