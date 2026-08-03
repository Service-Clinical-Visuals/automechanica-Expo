"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ValveCoverGasket() {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#F8F9FA] overflow-hidden" id="valve-cover-gasket">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6" data-aos="fade-right">
            
            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                Cylinder Head Gasket
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h1" className="font-bold leading-tight">
              High-Performance Valve Cover Gaskets for Reliable Sealing
            </Typography>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <Typography variant="p">
                Our valve cover gaskets are engineered to provide secure sealing and prevent oil leakage in modern engine systems. Manufactured using high-quality materials and advanced production technologies, these gaskets ensure long-lasting durability, resistance to heat, and consistent performance under demanding operating conditions.
              </Typography>

              <Typography variant="p">
                Designed for a wide range of passenger, commercial, and heavy-duty vehicles, our products meet OEM and OES requirements, delivering precise fitment and reliable engine protection across diverse applications.
              </Typography>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Product"
                href="#valve-cover-gasket"
                variant="outline"
                showIcon={false}
                className="px-6 py-2.5"
              />
            </div>

          </div>

          {/* Right Column: Video 01 Player */}
          <div className="lg:col-span-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200/80 bg-white">
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
