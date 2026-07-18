import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from './Button';

export default function InteriorAirFilters() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#1657C4] via-[#0B2A5B] to-[#060B1D]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* Left: Video Section */}
          <div data-aos="fade-right" className="xl:col-span-6 w-full relative aspect-video flex items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden order-2 xl:order-1 mt-8 xl:mt-0">

             {/* Dynamic Video */}
             <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover z-10"
             />

          </div>

          {/* Right: Content Section */}
          <div data-aos="fade-left" className="xl:col-span-6 flex flex-col gap-5 order-1 xl:order-2">
            <div className="flex flex-col gap-1">
              <h2 className="section-title text-white font-bold">
                Powering Every Journey
              </h2>
              <span className="block w-16 h-[3px] bg-white" />
            </div>

            <div className="flex flex-col gap-3 text-white/80 section-text lato-font text-justify">
              <p>
                Leprinxol Engine Oils are engineered to deliver dependable lubrication and outstanding engine protection for modern vehicles. Manufactured with premium-quality base oils and advanced additive technology, they reduce friction, control wear, and maintain peak engine efficiency under both daily driving and demanding operating conditions.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4">
              {/* Card 1 */}
              <div className="rounded-xl px-5 py-6 text-center bg-[#004F9F] flex flex-col items-center">
                <h3 className="card-title text-white oswald-font font-semibold mb-2">
                  Reliable Engine Protection
                </h3>
                <p className="text-white/75 header-sublink lato-font leading-snug">
                  Protects vital engine components from wear, heat, and corrosion while ensuring smooth, efficient operation throughout every journey.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl px-5 py-6 text-center bg-[#004F9F] flex flex-col items-center">
                <h3 className="card-title text-white oswald-font font-semibold mb-2">
                  Long-Lasting Performance
                </h3>
                <p className="text-white/75 header-sublink lato-font leading-snug">
                 Maintains optimal viscosity, resists thermal breakdown, and supports cleaner engines for extended oil life and dependable performance.
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="xl:col-span-12 order-3 w-full h-px bg-white/20 mt-4" />

          {/* Bottom: Summary + CTA */}
          <div data-aos="fade-up" className="xl:col-span-12 order-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-white section-text lato-font text-justify max-w-[60%]">
              Designed for long-lasting performance, these air filters help protect the cabin environment, capture
              airborne particles, and keep the interior fresh across every journey. Whether for passenger cars or
              commercial fleets, our filters deliver the reliability drivers trust.
            </p>
            <Button href="#" variant="solid-white" className="shrink-0">
              Explore Products
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
