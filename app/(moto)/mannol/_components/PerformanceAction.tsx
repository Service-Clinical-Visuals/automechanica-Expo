"use client";
import React from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PerformanceAction() {
  return (
    <section className="py-16 md:py-24 bg-[#1F2A44] w-full">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="order-2 xl:order-1 flex flex-col text-left xl:col-span-5" data-aos="fade-right">
            <h2 className="sora-font text-[#ffffff] section-title font-semibold  mb-2 ">
              See Performance in Action
            </h2>
            <div className="w-16 md:w-40 h-[2px] bg-[#FCC917] mb-6"></div>
            
            <div className="poppins-font text-[#ffffff] section-text leading-relaxed flex flex-col gap-6 mb-8">
              <p>
                Watch how MANNOL engine oils deliver outstanding performance through advanced lubrication technology designed for modern engines. The video demonstrates how the oil reduces friction, minimizes wear, and protects critical engine components under a wide range of operating conditions.
              </p>
              <p>
                With excellent thermal stability, it maintains consistent viscosity in both high and low temperatures, ensuring smooth engine operation throughout every journey.
              </p>
            </div>

            <ul className="flex flex-col gap-5 mb-10 xl:hidden 2xl:flex">
              <li className="flex items-center gap-4">
                <div className="text-[#FFC107] flex-shrink-0 mt-0.5">
                  <img src="/moto/mannol/can.png" alt="" />
                </div>
                <p className="poppins-font text-[#ffffff] section-text leading-relaxed">
                  Advanced lubricant technology helps reduce friction, improving fuel efficiency while ensuring smoother engine operation.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-[#FFC107] flex-shrink-0 mt-0.5">
                  <img src="/moto/mannol/can.png" alt="" />
                </div>
                <p className="poppins-font text-[#ffffff] section-text leading-relaxed">
                  Its high-performance formulation prevents sludge and deposit buildup, keeping the engine clean and running efficiently.
                </p>
              </li>
            </ul>

            <div>
              <Button href="#">
                Explore More
              </Button>
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="order-2 xl:order-1 w-full aspect-video relative overflow-hidden xl:col-span-7 rounded-sm" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          
          </div>

        </div>

        {/* Points below grid specifically for xl screen size - side by side */}
        <ul className="hidden xl:grid 2xl:hidden grid-cols-2 gap-8 mt-10" data-aos="fade-up">
          <li className="flex items-start sm:items-center gap-4">
            <div className="text-[#FFC107] flex-shrink-0 mt-0.5">
              <img src="/moto/mannol/can.png" alt="" />
            </div>
            <p className="poppins-font text-[#ffffff] section-text leading-relaxed">
              Advanced lubricant technology helps reduce friction, improving fuel efficiency while ensuring smoother engine operation.
            </p>
          </li>
          <li className="flex items-start sm:items-center gap-4">
            <div className="text-[#FFC107] flex-shrink-0 mt-0.5">
              <img src="/moto/mannol/can.png" alt="" />
            </div>
            <p className="poppins-font text-[#ffffff] section-text leading-relaxed">
              Its high-performance formulation prevents sludge and deposit buildup, keeping the engine clean and running efficiently.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
