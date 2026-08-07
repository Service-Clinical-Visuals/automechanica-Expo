"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ValveCoverGasket() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="product-lineup">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6" data-aos="fade-right">
            
            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                Product Lineup
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h2" className="font-bold leading-tight">
              Engineered Components for Superior Vehicle Control
            </Typography>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <Typography variant="p">
                Our product portfolio delivers a wide selection of critical automotive components designed to enhance vehicle control, safety, and driving comfort. Covering steering, suspension, and chassis systems, each component is crafted with precision engineering to ensure consistent performance and durability in all driving conditions.
              </Typography>

              <Typography variant="p">
                Built to meet international quality standards, our products support both modern and traditional vehicle platforms, offering dependable solutions for global aftermarket needs.
              </Typography>
            </div>

            {/* Bullet Points with Red Arrows */}
            <div className="flex flex-col gap-3 font-secondary pt-1">
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-primary)] font-bold text-base leading-snug select-none">
                  →
                </span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Broad coverage of steering, suspension, and chassis components worldwide
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-primary)] font-bold text-base leading-snug select-none">
                  →
                </span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Manufactured with precision for accurate fitment and long-term reliability
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-primary)] font-bold text-base leading-snug select-none">
                  →
                </span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Suitable for diverse vehicle segments across global aftermarket markets
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

          {/* Right Column: Video 02 Player */}
          <div className="lg:col-span-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-50">
              <DynamicVideoPlayer
                type="short-2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
