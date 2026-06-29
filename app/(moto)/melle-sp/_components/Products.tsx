"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import SectionNumber from "./SectionNumber";

export default function Products() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F1F1F1] relative overflow-hidden" id="products">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8" data-aos="fade-right">
            <div className="space-y-2">
              <Typography variant="h2" color="dark" weight="semibold" className="font-montserrat leading-tight text-3xl md:text-4xl text-[#1a1a1a]">
                Motor Oils
              </Typography>
            </div>

            {/* Exact screenshot description blocks */}
            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-gray-600 font-normal">
              <Typography variant="body" color="body" className="leading-relaxed">
                Fully synthetic oil for the optimum fuel economy and lubrication already from the first seconds after engine start. Particularly recommended for hybrid engines with frequent starts. Protects against the harmful phenomenon of LSPI.
              </Typography>
              <Typography variant="body" color="body" className="leading-relaxed">
                K2 5W-30 HYBRID 5L is an advanced engine oil specially developed to meet the performance requirements of hybrid vehicles and modern engines. Its high-quality formulation helps reduce friction, improve fuel efficiency, and provide reliable lubrication during frequent start-stop driving conditions.
              </Typography>
              <Typography variant="body" color="body" className="leading-relaxed">
                Engineered for consistent protection and smooth operation, this lubricant supports engine cleanliness, minimizes wear, and enhances durability across varying temperatures. K2 5W-30 HYBRID delivers dependable performance to help maintain engine efficiency and extend service life.
              </Typography>
            </div>

            {/* K2 Custom Slanted Button */}
            <div className="pt-2">
              <Button text="View All" variant="k2" href="#products-all" />
            </div>
          </div>

          {/* Right Column: 360 Degree Video Player */}
          <div className="lg:col-span-6 w-full" data-aos="fade-left">
            <div className="relative w-full aspect-[16/9.5] rounded-3xl overflow-hidden">
              {/* Dynamic Video Player loading 360 webm */}
              <DynamicVideoPlayer 
                type="360"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              />
            </div>
          </div>

        </div>
      </Container>

      <SectionNumber number="02" position="left" />
    </section>
  );
}
