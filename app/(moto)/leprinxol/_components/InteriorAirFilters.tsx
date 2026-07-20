import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from './Button';

export default function InteriorAirFilters() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#1657C4] via-[#0B2A5B] to-[#060B1D]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* Left: Video Section */}
          <div data-aos="fade-right" className="xl:col-span-6 w-full relative aspect-video flex items-center justify-center  rounded-3xl shadow-lg overflow-hidden order-2 xl:order-1 mt-8 xl:mt-0">

             {/* Dynamic Video */}
             <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover "
             />

          </div>

          {/* Right: Content Section */}
          <div data-aos="fade-left" className="xl:col-span-6 flex flex-col gap-5 order-1 xl:order-2">
          
            <div className="flex flex-col ">
              <h3 className="section-title text-white font-bold">
                Powering Every Journey
              </h3>
              <span className="block w-45 h-[2px] bg-[#ffffff]/80" />
            </div>

            {/* <div className="flex flex-col gap-3 text-white/80 section-text lato-font text-justify"> */}
              <p className=" !section-text sora-font font-normal text-[#ffffff] leading-[1.8]">
                Leprinxol Engine Oils are engineered to deliver dependable lubrication and outstanding engine protection for modern vehicles. Manufactured with premium-quality base oils and advanced additive technology, they reduce friction, control wear, and maintain peak engine efficiency under both daily driving and demanding operating conditions.
              </p>
            {/* </div> */}

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4">
              {/* Card 1 */}
              <div className="rounded-2xl px-8 py-6 text-center bg-[#004F9F] flex flex-col items-center justify-center">
                 <h4 className="section-text-3 text-white font-semibold sora-font mb-2">
                   Reliable Engine Protection
                </h4>
                
                <p className="text-[#ffffff] header-sublink sora-font font-normal leading-[1.8] text-center">
                  Protects vital engine components from wear, heat, and corrosion while ensuring smooth, efficient operation throughout every journey.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl px-8 py-6 text-center bg-[#004F9F] flex flex-col items-center">
                <h4 className="section-text-3 text-white font-semibold sora-font mb-2">
                  Long-Lasting Performance
                </h4>
                <p className="text-[#ffffff] header-sublink sora-font font-normal leading-[1.8] text-center">
                 Maintains optimal viscosity, resists thermal breakdown, and supports cleaner engines for extended oil life and dependable performance.
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="xl:col-span-12 order-3 w-full h-px bg-white/50 mt-4" />

          {/* Bottom: Summary + CTA */}
          <div data-aos="fade-up" className="xl:col-span-12 order-4 flex flex-col items-center text-center md:text-justify md:flex-row md:justify-between gap-6">
            <p className="text-white header-sublink sora-font w-full md:max-w-[50%]">
              Designed for long-lasting performance, these air filters help protect the cabin environment, capture
              airborne particles, and keep the interior fresh across every journey. Whether for passenger cars or
              commercial fleets, our filters deliver the reliability drivers trust.
            </p>
            <div className="w-full md:max-w-[50%] flex justify-center md:justify-end">
              <Button href="#" variant="solid-white" className=" py-3 px-8 shrink-0 rounded-lg sora-font header-link font-semibold text-[#1e1e1e]">
                Explore Products
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
