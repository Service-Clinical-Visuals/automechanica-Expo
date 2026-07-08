"use client";

import React from 'react';
import Link from 'next/link';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';
import Container from './Container';

const galleryImages = [
  "/moto/dasis/premium/1.png",
  "/moto/dasis/premium/2.png",
  "/moto/dasis/premium/3.png",
  "/moto/dasis/premium/4.png",
];

export default function Premium() {
  return (
    <section className="relative w-full bg-[#F5F5F5] overflow-hidden py-12 md:py-24">
      <Container>
        <div className="relative z-10 flex flex-col gap-10 md:gap-14">
          <div className="grid grid-cols-1 xl:grid-cols-[56fr_44fr] gap-8 xl:gap-12 items-center">

            {/* Left Side: Video */}
            <div className="order-2 xl:order-1 w-full aspect-video" data-aos="fade-right">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="order-1 xl:order-2 flex flex-col gap-6" data-aos="fade-up">
              <h2 className="heading text-[22px] md:text-[28px] leading-snug">
                Our Specialist for <span className="text-secondary">Cooling and Air Conditioning</span>
              </h2>

              <div className="space-y-5 content">
                <p>
                  Keep your vehicle&rsquo;s air conditioning system performing at its best with
                  premium-quality DASIS air conditioning compressors. Designed for reliable
                  cooling performance, smooth operation, and long-lasting durability, our
                  compressors are manufactured to meet or exceed OEM standards. Whether for
                  passenger cars, commercial vehicles, or specialized applications, DASIS offers
                  dependable solutions that ensure consistent comfort in every journey.
                </p>
                <p>
                  Backed by decades of expertise in automotive thermal management, DASIS
                  compressors are engineered for precise fitment, high efficiency, and optimal
                  refrigerant circulation. Every unit undergoes rigorous quality testing to
                  deliver reliable performance, reduced noise, and enhanced system longevity,
                  making it the trusted choice for workshops, distributors, and automotive
                  professionals worldwide.
                </p>
              </div>

              <Link
                href="#"
                className="hidden max-w-54 rounded-tr-[16px] rounded-bl-[16px] heading-white font-normal! text-[24px]! leading-[150%]! py-2 px-6 lg:flex items-center justify-center bg-primary uppercase hover:bg-primary/90 transition-colors shadow-md"
              >
                Explore Product
              </Link>
            </div>

          </div>

          {/* Bottom showcase images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" data-aos="fade-up">
            {galleryImages.map((src, index) => (
              <div key={src} className="overflow-hidden aspect-[403/258]">
                <img
                  src={src}
                  alt={`DASIS product showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
