import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
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
              Explore Brake Pads In 360°
            </h2>
            <p className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2">
              Experience Kale Balata Otomotiv San. ve Tic. A.Ş. Brake Pads from every angle through our interactive 360° view. Discover the precision engineering, premium materials, and exceptional quality behind every product.
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

        {/* Bottom Content / 360 Viewer */}
        <div className="w-full max-w-7xl mx-auto mt-12 md:mt-16 aspect-video  shadow-lg" data-aos="fade-up">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover rounded-xl " />
        </div>

      </div>
    </section>
  );
}
