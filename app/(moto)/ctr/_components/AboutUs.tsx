"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="about">
      <div className="custom-container">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Content */}

          <div className="lg:col-span-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <div className="relative w-full aspect-[4/2.5] rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
              <img
                src="/moto/ctr/about.png"
                alt="CTR Manufacturing Facility"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Factory & Team Image */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6" data-aos="fade-right">

            {/* Sub-badge / Category with underline */}
            <div className="flex flex-col items-start">
              <span className="sub-heading">
                About CTR
              </span>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
            </div>

            {/* Main Section Heading */}
            <Typography variant="h2" className="font-bold leading-tight">
              Global Automotive parts Company
            </Typography>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <Typography variant="p">
                CTR Aftermarket is the global aftermarket division of CTR, a leading automotive parts manufacturer established in 1952. With strong OEM expertise, the company delivers high-quality steering, suspension, and braking components trusted by vehicle manufacturers and customers worldwide.
              </Typography>

              <Typography variant="p">
                Built on advanced engineering capabilities and strict quality standards, CTR Aftermarket provides reliable, OE-equivalent solutions designed for durability, safety, and consistent performance across global automotive markets.
              </Typography>
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
