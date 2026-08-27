import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from './Button';

const CheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-[#F8AC1A] flex items-center justify-center shrink-0 mt-1.5">
    <svg width="10" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L5 9L13 1" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default function EngineeredBraking() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-[#2f2f2f]">
      <div className="custom-container relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Watermark */}
        <div className="relative pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Background Watermark Text */}
          <div 
            className="absolute top-0 md:top-[-20px] left-0 kalebalatatext font-normal whitespace-nowrap anton-font pointer-events-none select-none leading-none"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)',
              color: 'transparent',
              zIndex: -1,
              marginLeft: '-1%'
            }}
          >
            Kale Balata
          </div>

          <div className="flex flex-col gap-4 max-w-4xl relative z-10 mt-8 sm:mt-10 md:mt-12 lg:mt-18" data-aos="fade-up">
             <h2 className="anton-font text-white section-title fonr-normal leading-tight tracking-wide">
              Engineered For Reliable Braking
            </h2>
            <p className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2">
              Every brake pad from Kale Balata Otomotiv San. ve Tic. A.Ş. is designed to provide dependable braking, maximum safety, and consistent performance. Through advanced production processes and strict quality control, we deliver products trusted by automotive professionals worldwide.
            </p>
          </div>
          
          <button 
            className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-white/39 hover:bg-[#FA9603] flex items-center justify-center transition-colors shrink-0 group relative z-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ArrowUpRight className="text-[#050404] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={28} />
          </button>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 mt-12 items-center">
          
          {/* Left Side: Video/Image */}
          <div className="xl:col-span-8 w-full aspect-video shadow-lg" data-aos="fade-right">
             <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
          </div>

          {/* Right Side: Key Features List */}
          <div className="xl:col-span-4 flex flex-col justify-center gap-8 py-4" data-aos="fade-left">
            <h2 className="anton-font text-white section-title fonr-normal leading-tight tracking-wide">
              Key Features
            </h2>
            
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="oswald-font text-white header-link leading-relaxed tracking-wide">
                  <strong className="text-white font-medium ">Consistent Braking Performance</strong> – Delivers stable, dependable stopping power across diverse driving conditions for maximum confidence.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="oswald-font text-white header-link leading-relaxed tracking-wide">
                  <strong className="text-white font-medium ">Enhanced Safety & Control</strong> – Provides precise braking response, improved handling, and greater driver confidence.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="oswald-font text-white header-link leading-relaxed tracking-wide">
                  <strong className="text-white font-medium ">High Thermal Stability</strong> – Maintains reliable braking efficiency under high temperatures and demanding conditions.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="oswald-font text-white header-link leading-relaxed tracking-wide">
                  <strong className="text-white font-medium">Long Service Life</strong> – Manufactured with premium materials to reduce wear and ensure extended durability.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="oswald-font text-white header-link leading-relaxed tracking-wide">
                  <strong className="text-white font-medium">Trusted by Global Markets</strong> – Preferred by distributors, workshops, and automotive professionals for reliable performance worldwide.
                </p>
              </div>

            </div>
            
            <div className="mt-4 flex">
              <Button text="Explore Brake Pads" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
