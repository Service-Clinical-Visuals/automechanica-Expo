import React from 'react';
import Button from './Button';
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section className="relative w-full flex flex-col  ">
      {/* Top Green Section */}
      <div className="w-full bg-[var(--primary)] pt-16 md:pt-24 pb-32 md:pb-48 px-4 lg:px-16">
        <div className="custom-container flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-7xl" data-aos="fade-right">
            <h2 className="anton-font section-title text-white mb-5 tracking-wide">
              Explore Every Detail In 360°
            </h2>
            <p className="overpass-font section-text text-white leading-relaxed max-w-7xl">
              Discover the precision and craftsmanship behind Spesso Gaskets S.r.l. products with our interactive 360° product experience. Explore every angle of our Cylinder Head Gaskets, Exhaust Gaskets, and Transmission Gaskets, engineered to deliver reliable sealing, accurate fitment, and long-lasting performance.
            </p>
          </div>
          <div className="flex-shrink-0" data-aos="fade-left">
            <Button href="#" variant="white">
              Explore In 360°
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom White Section with Overlapping Video */}
      <div className="w-full bg-white pb-16 md:pb-24">
        <div className="custom-container">
          <div 
            className="relative w-full max-w-7xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] -mt-24 md:-mt-36"
            data-aos="zoom-in"
          >
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
