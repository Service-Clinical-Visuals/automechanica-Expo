"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="about">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6" data-aos="fade-right">
            
            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                About Temel Conta
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h1" className="font-bold leading-tight">
              Türkiye’s Pioneer in Gasket Manufacturing
            </Typography>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <Typography variant="p">
                Founded in 1950 and manufacturing under the Temel Conta brand since 1974, the company is Türkiye’s first and oldest gasket manufacturer and the only one in its sector to receive the Ford Q1 Certification. Over the years, it has expanded from basic gasket materials to a wide range of advanced sealing solutions, including cylinder head, manifold, rubber, metal, and Multi-Layer Steel (MLS) gaskets.
              </Typography>

              <Typography variant="p">
                Today, Temel Conta operates from its modern facility in Torbalı, İzmir, delivering high-quality gasket and sealing products to OEM, OES, and aftermarket customers worldwide. Backed by strong engineering expertise and advanced production technologies, the company focuses on innovation, durability, and reliable performance across diverse industries.
              </Typography>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Learn More"
                href="#about"
                variant="outline"
                showIcon={false}
                className="px-6 py-2.5"
              />
            </div>
          </div>

          {/* Right Column: Factory & Team Image */}
          <div className="lg:col-span-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
              <img
                src="/moto/temel/temel-ofc.png"
                alt="Temel Conta Manufacturing Facility & Team"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
