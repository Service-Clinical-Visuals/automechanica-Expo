"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function PartsFinder() {
  return (
    <div 
      className="mt-6 md:mt-10 relative w-full rounded-3xl overflow-hidden py-10 px-6 md:px-12 flex flex-col items-center text-center  bg-pattern"
      data-aos="fade-up"
    >
      <div className="relative z-10 flex flex-col items-center max-w-5xl max-w-[75%] mx-auto">
        {/* Title with Icon */}
        <div className="flex items-center gap-3 mb-6">
         
          <img src="/moto/denckermann/car.png" alt="Parts Finder Icon" className="object-cover" />
          <h2 className="section-title text-[var(--color-secondary)] font-medium oswald">
            Parts Finder
          </h2>
        </div>

        {/* Description */}
        <h2 className="section-title text-[#ffffff] font-normal oswald mb-6">
          Use our intuitive search engine to find the right parts for your vehicle in seconds. Select your car's make, model, and version, and we'll find the perfect components. Fast, convenient, and accurate!
        </h2>

        {/* Action Button */}
        <Button text="Find a Part"  />
      </div>
    </div>
  );
}
