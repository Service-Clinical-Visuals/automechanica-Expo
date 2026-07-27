"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function SolutionsForVehicles() {
  const [activeTab, setActiveTab] = useState<"passenger" | "commercial">("passenger");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "passenger" ? "commercial" : "passenger"));
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="w-full bg-[#F2F3F7] py-16 md:py-24 lg:py-28 overflow-hidden relative px-4 lg:px-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-center">
          {/* Left Column - Content & Vehicle Selector */}
          <div
            className="xl:col-span-6 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="anton-font font-normal text-[#2a2a2a] section-title leading-tight mb-6 md:mb-8 tracking-wide">
              Solutions For All Vehicles
            </h2>
            <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed mb-8">
              Engineered to meet the demands of modern transportation, AYD Oto Endüstri ve Sanayi Tic. A.Ş. provides premium steering, suspension, and braking components for both passenger and light commercial vehicles. Designed for safety, durability, and reliable performance, our solutions deliver confidence on every journey.
            </p>

            {/* Your Vehicle Type Subheading */}
            <h3 className="anton-font font-normal text-[#2a2a2a] section-subtitle1 mb-5 tracking-wide">
              Your Vehicle Type
            </h3>

            {/* Vehicle Selection Boxes */}
            <div className="flex flex-col gap-3.5 mb-8 max-w-sm">
              {/* Passenger Pill */}
              <div
                onClick={() => setActiveTab("passenger")}
                className={`bg-[#f2f3f7] border p-2 pl-6 rounded-xl flex items-center justify-between transition-all duration-300 cursor-pointer group drop-shadow-sm ${
                  activeTab === "passenger"
                    ? "border-[#01195d] shadow-md ring-1 ring-[#01195d] bg-white/60"
                    : "border-gray-300/80 shadow-sm hover:shadow opacity-90 hover:opacity-100"
                }`}
              >
                <span className="oswald-font font-semibold text-[#212121] card-title1 leading-snug tracking-wide">
                  Passenger
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#01195d] text-white flex items-center justify-center group-hover:bg-[#022486] transition-colors shadow-sm flex-shrink-0">
                  <img src="/moto/aydoto/btnarw.png" alt="arrow-right" className="w-4 h-4 object-contain" />
                </div>
              </div>

              {/* Light Commercial Pill */}
              <div
                onClick={() => setActiveTab("commercial")}
                className={`bg-[#f2f3f7] border p-2 pl-6 rounded-xl flex items-center justify-between transition-all duration-300 cursor-pointer group drop-shadow-sm ${
                  activeTab === "commercial"
                    ? "border-[#01195d] shadow-md ring-1 ring-[#01195d] bg-white/60"
                    : "border-gray-300/80 shadow-sm hover:shadow opacity-90 hover:opacity-100"
                }`}
              >
                <span className="oswald-font font-semibold text-[#212121] card-title1 leading-snug tracking-wide">
                  Light Comercial
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#01195d] text-white flex items-center justify-center group-hover:bg-[#022486] transition-colors shadow-sm flex-shrink-0">
                  <img src="/moto/aydoto/btnarw.png" alt="arrow-right" className="w-4 h-4 object-contain" />
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div>
              <Button href="#">Discover More</Button>
            </div>
          </div>

          {/* Right Column - Vehicle Image & Indicator */}
          <div
            className="xl:col-span-6 flex flex-col items-center justify-center relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full aspect-[4/3]  flex items-center justify-center relative">
              {/* Passenger Car Image */}
              <img
                src="/moto/aydoto/car1.png"
                alt="Passenger Vehicle"
                className={` object-contain transition-all duration-700 absolute ${
                  activeTab === "passenger"
                    ? "opacity-100  z-10"
                    : "opacity-0  pointer-events-none z-0"
                }`}
              />

              {/* Commercial Car Image */}
              <img
                src="/moto/aydoto/van.png"
                alt="Light Commercial Vehicle"
                className={`w-full object-contain transition-all duration-700 absolute ${
                  activeTab === "commercial"
                    ? "opacity-100 z-10"
                    : "opacity-0  pointer-events-none z-0"
                }`}
              />
            </div>

            {/* Progress Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-6 md:mt-10">
              <button
                onClick={() => setActiveTab("passenger")}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === "passenger" ? "w-10 md:w-12 bg-[#01195d]" : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label="Select Passenger Vehicles"
              />
              <button
                onClick={() => setActiveTab("commercial")}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === "commercial" ? "w-10 md:w-12 bg-[#01195d]" : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label="Select Light Commercial Vehicles"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
