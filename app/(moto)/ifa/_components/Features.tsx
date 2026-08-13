"use client";

import React from 'react';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';
import Container from './Container';

const features = [
  "Low Maintenance & Easy Replacement",
  "Manufactured under stringent quality standards and thoroughly tested for durability, our filters deliver reliable protection in every season.",
  "Designed to protect both passengers and vehicle ventilation systems, ISOFILTER Cabin Filters offer the perfect balance of efficiency, durability, and comfort, making them the trusted choice for cleaner air and a healthier driving environment.",
];

export default function Features() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-24">
       <div
        className="hidden md:block absolute top-0 right-0 w-full h-full bg-[#FCDBDC45] pointer-events-none select-none"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-4 xl:gap-8 items-center">

            {/* Left Side: Video */}
            <div className="order-2 xl:order-1 w-full aspect-video xl:aspect-video" data-aos="fade-right">
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="order-1 xl:order-2 flex flex-col gap-6 lg:gap-6" data-aos="fade-up">
              <h2 className="heading flex items-center gap-3">
                <span className="text-primary text-[20px]">▶</span>
                Features That Deliver Cleaner Air
              </h2>

              <p className="content">
                The ISOFILTER Cabin Filter is engineered to provide exceptional air purification,
                ensuring that every journey is cleaner, healthier, and more comfortable. By
                effectively filtering dust, pollen, bacteria, mold spores, soot, and other airborne
                contaminants, it helps maintain superior air quality inside the passenger
                compartment. Designed with advanced filtration technology, our cabin filters create
                a safer environment for drivers and passengers while enhancing overall driving
                comfort.
              </p>

              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <span className="text-primary! heading font-bold! text-[22px]! leading-tight shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="content">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
