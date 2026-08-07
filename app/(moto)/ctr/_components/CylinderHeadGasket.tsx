"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function CylinderHeadGasket() {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#F2F2F280] overflow-hidden" id="steering-suspension">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Video 01 Player */}
          <div className="lg:col-span-6 w-full" data-aos="fade-right">
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-50">
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content & Features */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6" data-aos="fade-left">
            
            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                Drive with Confidence
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h2" className="font-bold leading-tight">
              Comprehensive Steering and Suspension Solutions
            </Typography>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <Typography variant="p">
                We offer a complete range of high-quality steering and suspension components engineered to deliver stability, control, and durability for modern vehicles. From ball joints and tie rod ends to stabilizer links and control arms, our products are developed using advanced technology and precision manufacturing to ensure optimal vehicle performance and safety.
              </Typography>

              <Typography variant="p">
                Designed to meet global OEM standards, our solutions provide reliable handling, reduced wear, and long service life across passenger and commercial vehicles worldwide.
              </Typography>
            </div>

            {/* Bullet Points with Red Arrows */}
            <div className="flex flex-col gap-3 font-secondary pt-1">
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-primary)] font-bold text-base leading-snug select-none">
                  →
                </span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Provides reliable handling and reduced wear across various driving conditions
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-primary)] font-bold text-base leading-snug select-none">
                  →
                </span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Engineered with advanced technology for durability and consistent performance
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Products"
                href="#products"
                variant="outline"
                showIcon={true}
                className="px-6 py-2.5"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
