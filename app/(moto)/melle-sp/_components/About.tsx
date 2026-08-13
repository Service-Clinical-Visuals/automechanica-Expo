"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import SectionNumber from "./SectionNumber";

const features = [
  "K2 Logistics",
  "Modern technology",
  "Quality certificates",
  "Distribution",
];


export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden" id="about-us">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Images Layout */}
          <div className="lg:col-span-6 relative flex items-center justify-start w-full" data-aos="fade-right">
            
            <img src="/moto/melle-sp/about.png" alt="" className="w-full" />
          </div>

          {/* Right Column: Info Content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8" data-aos="fade-left">
            {/* Heading */}
            <div className="space-y-2">
              <Typography variant="h2" color="dark" weight="semibold" className="font-montserrat leading-tight text-3xl md:text-4xl text-[#1a1a1a]">
                About Us
              </Typography>
            </div>

            {/* Slogan Description */}
            <Typography variant="body" color="body" className="text-[15px] leading-relaxed text-gray-600 font-normal">
              Over 25 years ago it seemed unbelievable. This is when our adventure with the automotive industry began. Today, K2 is a brand of nearly 1000 products addressed to automotive enthusiasts and professional users. The offer includes, among others, car cosmetics and fragrances, brake and cooling liquids, fuel and oil additives, engine and gear oils, as well as products for professional use in the workshop, autodetailing salon, car wash or car paint shop.
            </Typography>

            {/* Bullet Features (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <img 
                    src="/moto/melle-sp/icon.png" 
                    alt="Bullet Icon" 
                    className="w-6 h-6 md:w-7 md:h-7 object-contain shrink-0" 
                  />
                  <Typography variant="body" className="text-[14px] text-gray-800">
                    {feat}
                  </Typography>
                </div>
              ))}
            </div>

            {/* K2 Custom Slanted Button */}
            <div className="pt-2">
              <Button text="Learn More" variant="k2" href="#products" />
            </div>
          </div>

        </div>
      </Container>

      <SectionNumber number="01" position="right" />
    </section>
  );
}
