"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const News = () => {
  return (
    <section className="w-screen min-h-screen relative left-1/2 -translate-x-1/2 bg-[#fdfdfd] py-16 flex flex-col items-center justify-center">
      <div className="custom-container flex flex-col items-center px-4 lg:px-8 max-w-[1300px]">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-5 max-w-5xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="font-primary font-bold section-title text-[#111111] leading-tight">
            Latest News & Events
          </h2>
          <p className="font-secondary text-[#585858] section-text leading-relaxed max-w-4xl px-4">
            Stay up to date with the latest news, motorsport achievements, product launches, and company updates from Racing Oil. Discover how our commitment to innovation, performance, and excellence continues to drive success on and off the track, strengthening customer trust through continuous innovation and global motorsport excellence, while inspiring confidence across every market we serve.
          </p>
        </div>

        {/* Two News Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-aos="fade-up" data-aos-delay="100">

          {/* Card 1 */}
          <div className="bg-white border border-gray-100 shadow-[0_5px_25px_rgba(0,0,0,0.04)] rounded-[32px] overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all">
            <div className="w-full relative p-3 md:p-4 pb-0">
              <div className="w-full aspect-[1.7] rounded-[24px] overflow-hidden relative">
                <img src="/moto/racingoil/n1.png" alt="Dakar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = "/moto/swd/abt.png"; }} />
                <div className="absolute bottom-3 left-3 bg-[#011689] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Sports
                </div>
              </div>
            </div>
            <div className="flex flex-col p-6 md:p-8 pt-5 md:pt-6 gap-2">
              <h3 className="font-primary font-bold card-title text-[#111111] uppercase tracking-wide">
                DAKAR 2026 CHAMPIONS
              </h3>
              <p className="font-secondary text-gray-500 card-text font-medium">
                18/01/2026
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 shadow-[0_5px_25px_rgba(0,0,0,0.04)] rounded-[32px] overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all">
            <div className="w-full relative p-3 md:p-4 pb-0">
              <div className="w-full aspect-[1.7] rounded-[24px] overflow-hidden relative">
                <img src="/moto/racingoil/n2.png" alt="Moto3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = "/moto/swd/abt.png"; }} />
                <div className="absolute bottom-3 left-3 bg-[#011689] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Sports
                </div>
              </div>
            </div>
            <div className="flex flex-col p-6 md:p-8 pt-5 md:pt-6 gap-2">
              <h3 className="font-primary font-bold card-title text-[#111111] uppercase tracking-wide">
                OUR MOTO3 RIDERS AT MONTMELÓ
              </h3>
              <p className="font-secondary text-gray-500 card-text font-medium">
                02/09/2025
              </p>
            </div>
          </div>

        </div>

        {/* View All Button */}
        <button className="btn-text bg-[#011689] text-white px-8 py-3 font-bold flex items-center gap-2 hover:bg-[#021b9e] transition-colors shadow-lg">
          View All Updates <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>

      </div>
    </section>
  );
};

export default News;
