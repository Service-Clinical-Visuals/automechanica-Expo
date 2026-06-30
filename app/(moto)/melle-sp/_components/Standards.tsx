"use client";

import React from "react";
import { Image as ImageIcon } from "lucide-react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import SectionNumber from "./SectionNumber";

export default function Standards() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-light/60 relative overflow-hidden" id="standards-distribution">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Info Text & CTA */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8" data-aos="fade-right">
            <div className="space-y-2">
              <Typography variant="h2" color="dark" weight="semibold" className="font-montserrat leading-tight text-3xl md:text-4.5xl text-[#1a1a1a]">
                Standards & Distribution
              </Typography>
            </div>

            {/* Exact screenshot description copy */}
            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-gray-600 font-normal">
              <Typography variant="body" color="body" className="leading-relaxed">
                K2, a manufacturer of automotive chemicals, has ISO 9001:2015 and 14001:2015 certificates, which confirm the high technical and quality standard of the products supplied. Meeting the requirements of restrictive quality standards translates into high and repeatable quality of the manufactured assortment.
              </Typography>
              <Typography variant="body" color="body" className="leading-relaxed">
                From the very beginning, the K2 brand was designed as a global brand. Perseverance and many years of striving for the goal has led to the fact that today the brand is present in more than 90 countries worldwide. We have already delivered over 200 million products to domestic and international markets.
              </Typography>
            </div>

            {/* K2 Custom Slanted Button */}
            <div className="pt-2">
              <Button text="Read More About Us" variant="k2" href="#standards-about" />
            </div>
          </div>

          {/* Right Column: Image space placeholder */}
          <div className="lg:col-span-6 w-full" data-aos="fade-left">
            <div className="w-full aspect-[16/11]">
              <img src="/moto/melle-sp/distribution.png" alt="" className="rounded-3xl" />
            </div>
          </div>

        </div>
      </Container>


      <SectionNumber number="05" position="right" />
    </section>
  );
}
