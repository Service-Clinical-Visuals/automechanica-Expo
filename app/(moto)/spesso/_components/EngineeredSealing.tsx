import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from './Button';

export default function EngineeredSealing() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-spesso-custom px-4 lg:px-16">
      
      
      <div className="custom-container relative z-10 flex flex-col">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 md:mb-14">
          <div className="max-w-6xl" data-aos="fade-right">
            <h2 className="anton-font section-title text-white mb-5 tracking-wide">
              Engineered For Every Critical Sealing Application
            </h2>
            <p className="overpass-font section-text text-white leading-relaxed max-w-6xl">
              Spesso Gaskets S.r.l. delivers OEM-quality engine and transmission gaskets engineered for reliable sealing, precise fitment, and long-lasting performance across a wide range of automotive applications, meeting the highest industry quality standards.
            </p>
          </div>
          <div className="flex-shrink-0 self-start md:self-auto" data-aos="fade-left">
            <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-300">
              <ArrowUpRight className="text-white w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        <hr className="w-full border-white/20 mb-10 md:mb-14" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Video */}
          <div className="xl:col-span-8 w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative bg-white/5" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

          {/* Right: Content */}
          <div className="xl:col-span-4 flex flex-col items-start" data-aos="fade-left">
            <h3 className="anton-font section-title1 text-white mb-6 tracking-wide">
              Complete Gasket Solutions
            </h3>
            <div className="h-[2px] w-full bg-white/20 mb-8"></div>
            <p className="overpass-font section-text text-white leading-relaxed mb-8">
              Spesso Gaskets S.r.l. delivers a comprehensive range of OEM-quality engine and transmission gaskets, engineered for precision, durability, and dependable sealing performance across diverse automotive applications.
            </p>

            <ul className="flex flex-col gap-6 mb-8">
              {[
                "Comprehensive Portfolio of Engine and Transmission Gasket Solutions for Diverse Applications",
                "OEM-Quality Products Engineered for Precision, Reliability, and Long-Term Performance",
                "Manufactured Using Premium Materials for Enhanced Durability and Extended Service Life"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                    <Check size={14} strokeWidth={3} className="text-[var(--primary)]" />
                  </div>
                  <span className="overpass-font section-text text-white leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="overpass-font section-text text-white leading-relaxed mb-8">
              our gasket solutions provide reliable sealing, accurate fitment, and long-lasting performance for modern engine and transmission systems.
            </p>

            <Button href="#" variant="white">
              View Products Details
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
