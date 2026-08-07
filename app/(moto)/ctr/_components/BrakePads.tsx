"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function BrakePads() {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#F2F2F280] overflow-hidden" id="brake-pads">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6" data-aos="fade-right">
            
            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                Brake Pads
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h2" className="font-bold leading-tight">
              High-Performance Brake Pads
            </Typography>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <Typography variant="p">
                Our brake pads are designed to deliver reliable stopping power, enhanced durability, and consistent braking performance across various driving conditions. Manufactured with advanced friction materials and precision engineering, they ensure optimal safety, reduced wear, and smooth braking response for modern vehicles.
              </Typography>

              <Typography variant="p">
                Built to meet strict quality standards, our brake pads provide dependable performance for both passenger and commercial vehicles, supporting long service life and driving confidence on every journey.
              </Typography>
            </div>

            {/* Bullet Points with Red Arrows */}
            <div className="flex flex-col gap-3 font-secondary pt-1">
              <div className="flex items-start gap-2.5">
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Advanced friction materials ensure consistent braking performance and long-lasting durability
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Designed to minimize noise, vibration &amp; uneven wear during braking operations
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Brake Pads"
                href="#brake-pads"
                variant="outline"
                showIcon={true}
                className="px-6 py-2.5"
              />
            </div>

          </div>

          {/* Right Column: 360 Video Player */}
          <div className="lg:col-span-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-50">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
