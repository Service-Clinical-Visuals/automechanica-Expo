"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';
import Container from './Container';

export default function Premium() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-24">
      <div
        className="hidden md:block absolute top-0 right-0 w-full h-full bg-[#FCDBDC45] pointer-events-none select-none"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-[60fr_40fr] gap-4 xl:gap-8 items-center">

            {/* Left Side: Video */}
            <div className="order-2 xl:order-1 w-full aspect-video xl:aspect-video" data-aos="fade-right">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="order-1 xl:order-2 flex flex-col gap-6 lg:gap-8" data-aos="fade-up">
              <h2 className="heading flex items-center gap-3">
                <span className="text-primary text-[20px]">▶</span>
                Cabin Filters
              </h2>

              <div className="space-y-6 content">
                <p>
                  The ISOFILTER Cabin Filter is designed to provide superior air purification
                  inside the vehicle by preventing harmful contaminants from entering the
                  passenger compartment. It effectively captures airborne particles such as dust,
                  pollen, soot, bacteria, mold spores, and exhaust pollutants, ensuring that every
                  journey is cleaner, healthier, and more comfortable.
                </p>
                <p>
                  Manufactured using advanced multi-layer filtration technology, our cabin filters
                  not only remove microscopic particles smaller than 1 micron but also help
                  eliminate unpleasant odors caused by road traffic, industrial emissions, and
                  environmental pollutants. The result is improved cabin air quality and enhanced
                  comfort for both drivers and passengers.
                </p>
                <p>
                  It is essential to follow the manufacturer&rsquo;s recommendations. In general,
                  IFA filters recommend replacing the cabin filter at least once a year.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="inline-flex" data-aos="fade-up" data-aos-delay="150">
                <button
                  style={{ clipPath: "polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%)" }}
                  className="heading text-white! text-[18px]! inline-flex items-center gap-3 pl-8 pr-10 py-1.5 bg-primary font-semibold transition-opacity hover:opacity-90"
                >
                  Learn More
                  <ArrowRight size={26}/>
                </button>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
