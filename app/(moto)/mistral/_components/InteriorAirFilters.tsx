import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Wrench } from 'lucide-react';

export default function InteriorAirFilters() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left: Video Section */}
          <div data-aos="fade-right" className="xl:col-span-7 w-full relative aspect-video flex items-center justify-center bg-white shadow-lg overflow-hidden order-2 xl:order-1 mt-8 xl:mt-0">
            
             
             {/* Dynamic Video */}
             <DynamicVideoPlayer 
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover z-10"
             />
            
          </div>
          
          {/* Right: Content Section */}
          <div data-aos="fade-left" className="xl:col-span-5 flex flex-col gap-5 order-1 xl:order-2">
            <h2 className="section-title text-[#212121] font-medium tracking-wide">
              CAR INTERIOR AIR FILTERS
            </h2>
            
            <div className="flex flex-col gap-3 text-[#333333] section-text lato-font">
              <p>
                All the filters are tested for mechanical efficiency as provided for from the Standard in order to assure
                efficiency levels with the passing of time.
              </p>
              <p>
                The particulate material is made of interwoven polyester fibres. It is a synthetic medium that does naturally
                not offer fertile soil to bacterial strains and molds.
              </p>
            </div>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 mt-10 pl-6 md:pl-8 xl:hidden 2xl:grid">
              {/* Card 1 */}
              <div className="relative border border-[#0D3374] rounded-xl px-3 pb-4 pt-6 text-center bg-white flex flex-col items-center">
                {/* Overlapping Icon */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
                  <img src="/moto/mistral/setting1.png" alt="" className="w-[70px] h-[70px]  object-contain" />
                </div>
                
                <h3 className="text-[#0D3374] oswald-font font-normal number-text mb-2 tracking-wide">
                  Particular Filters
                </h3>
                <div className="w-[85%] h-[2px] bg-[#E40C19] mb-3"></div>
                <p className="text-[#333333] header-sublink  lato-font tracking-wide leading-snug">
                  All the filtering materials used from Campi are tested according to the Standard EN779
                  and belong to the High-Efficiency class (see Standards).
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="relative border border-[#0D3374] rounded-xl px-3 pb-4 pt-6 text-center bg-white flex flex-col items-center mt-8 md:mt-0">
                {/* Overlapping Icon */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
                  <img src="/moto/mistral/setting1.png" alt="" className="w-[70px] h-[70px]  object-contain" />
                </div>
                
                <h3 className="text-[#0D3374] oswald-font font-normal number-text mb-2 tracking-wide">
                  Active Carbon Filters
                </h3>
                <div className="w-[85%] h-[2px] bg-[#E40C19] mb-3"></div>
                <p className="text-[#333333] header-sublink lato-font tracking-wide leading-snug">
                  Active carbon is an adsorbing material. To exercise this function, it exploits its huge
                  surface. Just think that one gram carbon has a surface of 500 to 3000 sq.m.
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Full Width Cards specifically for XL screens (1440px) */}
          <div className="hidden xl:grid 2xl:hidden grid-cols-2 gap-16 lg:col-span-12 mt-4 pl-10 pr-4 order-3" data-aos="fade-up">
            {/* Card 1 */}
            <div className="relative border border-[#0D3374] rounded-xl px-4 pb-6 pt-8 text-center bg-white flex flex-col items-center">
              {/* Overlapping Icon */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
                <img src="/moto/mistral/setting1.png" alt="" className="w-[70px] h-[70px] object-contain" />
              </div>
              
              <h3 className="text-[#0D3374] oswald-font font-normal number-text mb-2 tracking-wide">
                Particular Filters
              </h3>
              <div className="w-[85%] h-[2px] bg-[#E40C19] mb-4"></div>
              <p className="text-[#333333] header-sublink lato-font tracking-wide leading-snug">
                All the filtering materials used from Campi are tested according to the Standard EN779
                and belong to the High-Efficiency class (see Standards).
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="relative border border-[#0D3374] rounded-xl px-4 pb-6 pt-8 text-center bg-white flex flex-col items-center">
              {/* Overlapping Icon */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
                <img src="/moto/mistral/setting1.png" alt="" className="w-[70px] h-[70px] object-contain" />
              </div>
              
              <h3 className="text-[#0D3374] oswald-font font-normal number-text mb-2 tracking-wide">
                Active Carbon Filters
              </h3>
              <div className="w-[85%] h-[2px] bg-[#E40C19] mb-4"></div>
              <p className="text-[#333333] header-sublink lato-font tracking-wide leading-snug">
                Active carbon is an adsorbing material. To exercise this function, it exploits its huge
                surface. Just think that one gram carbon has a surface of 500 to 3000 sq.m.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
