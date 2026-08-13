"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';
import Container from './Container';

const ACCENT = "#1B4B91";
const YELLOW = "#F6C90E";

export default function Premium() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-24">
      <Container>
        <img
          src="/moto/hengst/02.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute top-16 left-1 w-30 pointer-events-none select-none"
        />
      </Container>
      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* Left Side: Content */}
            <div className="flex flex-col gap-6 lg:gap-8" data-aos="fade-right">
              <div className="flex flex-col self-start">
                <h2 className="heading -mt-2" style={{ color: ACCENT }}>
                  Cabin Air filter
                </h2>
              </div>

              <div className="space-y-6 content">
                <p>
                  The modern quality filters from Hengst Filtration permanently remove the particles from the intake air and thus ensure an optimally dosed fuel-air mixture. This ensures the best possible combustion, which helps to comply with increasingly stringent emission standards. Our filters achieve filtration efficiencies of almost 100 percent, ensuring that they remain effective over the entire maintenance interval. With reliable air filtration, we make a lasting contribution to the clean running of the engine, which extends its service life - and conserves valuable resources.
                </p>
                <p>
                  Pollutant-free air quality is also important in vehicle interiors. This is because exhaust fumes, dust and pollen can severely impair the driver's health and ability to concentrate. The cabin air filters from Hengst Filtration filter pollutants, allergens and unpleasant odors almost completely out of the outside air drawn in, thus ensuring a healthy and hygienic climate in the vehicle.
                </p>
              </div>

              {/* Explore Product Button */}
              <div className="inline-flex items-center self-start" data-aos="fade-up" data-aos-delay="150">
                <a
                  href="#"
                  className="font-semibold px-12 py-3 bg-btncolor btntext transition-opacity hover:opacity-90"
                >
                  Explore Product
                </a>
                <span
                  className="w-14 h-14 -ml-5 bg-white border-1 border-btncolor rotate-45 flex items-center justify-center shrink-0"
                >
                  <ArrowRight size={40} className="-rotate-45 text-primary" />
                </span>
              </div>
            </div>

            {/* Right Side: Video */}
            <div className="w-full aspect-video xl:aspect-auto xl:h-105" data-aos="fade-up">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
