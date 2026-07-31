"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Quality = () => {
  return (
    <section className="w-screen min-h-screen relative left-1/2 -translate-x-1/2 flex flex-col -mt-6 !rounded-none">
      {/* Top Banner Section */}
      <div className="relative w-full h-[585px] py-24 flex flex-col items-center justify-center bg-cover bg-center !rounded-none" style={{ backgroundImage: "url('/moto/racingoil/q.png')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#262C50C7]/100 !rounded-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto gap-5" data-aos="fade-up">
          <h2 className="font-primary font-bold section-title text-white tracking-wide">
            Which Oil Does Your Car Need?
          </h2>
          <p className="font-secondary section-text text-white/90 leading-relaxed max-w-2xl font-medium">
            Download our comprehensive quick reference guide featuring detailed oil specifications by vehicle manufacturer, model, and recommended application.
          </p>
          <button className="mt-4 btn-text bg-[#011689] text-white px-8 py-3 font-bold flex items-center gap-2 hover:bg-[#021b9e] transition-colors shadow-lg">
            Download PDF guide <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="w-full bg-white pb-16 pt-10">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-14 px-4 lg:px-8 max-w-[1350px] mx-auto">

          {/* Card 1 */}
          <div className="relative bg-white pt-16 pb-10 px-6 xl:px-8 text-center flex flex-col items-center mt-10 shadow-[0px_3px_8px_0px_#0000003D]" data-aos="fade-up" data-aos-delay="100">
            {/* Cutout wrapper for gap effect */}
            <div className="absolute -top-[52px] bg-white w-[104px] h-[104px] flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-white shadow-[0px_3px_8px_0px_#0000003D] flex items-center justify-center border border-gray-100">
                <img src="/moto/racingoil/q1.png" alt="Sustainability" className="w-10 h-10 object-contain" />
              </div>
            </div>
            <h4 className="font-primary font-bold card-title text-[#111111] mb-3 mt-2">Sustainability With The Environment</h4>
            <p className="font-secondary card-text text-gray-500 leading-relaxed font-medium max-w-[240px]">
              Committed to protecting the planet through sustainable practices
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white pt-16 pb-10 px-6 xl:px-8 text-center flex flex-col items-center mt-10 shadow-[0px_3px_8px_0px_#0000003D]" data-aos="fade-up" data-aos-delay="200">
            {/* Cutout wrapper for gap effect */}
            <div className="absolute -top-[52px] bg-white w-[104px] h-[104px] flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-white shadow-[0px_3px_8px_0px_#0000003D] flex items-center justify-center border border-gray-100">
                <img src="/moto/racingoil/q2.png" alt="Quality" className="w-10 h-10 object-contain" />
              </div>
            </div>
            <h4 className="font-primary font-bold card-title text-[#111111] mb-3 mt-2">Committed To Quality</h4>
            <p className="font-secondary card-text text-gray-500 leading-relaxed font-medium max-w-[240px]">
              Certified products that meet the highest international standards
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white pt-16 pb-10 px-6 xl:px-8 text-center flex flex-col items-center mt-10 shadow-[0px_3px_8px_0px_#0000003D]" data-aos="fade-up" data-aos-delay="300">
            {/* Cutout wrapper for gap effect */}
            <div className="absolute -top-[52px] bg-white w-[104px] h-[104px] flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-white shadow-[0px_3px_8px_0px_#0000003D] flex items-center justify-center border border-gray-100">
                <img src="/moto/racingoil/q3.png" alt="Additives" className="w-10 h-10 object-contain" />
              </div>
            </div>
            <h4 className="font-primary font-bold card-title text-[#111111] mb-3 mt-2">Next-Generation Additives</h4>
            <p className="font-secondary card-text text-gray-500 leading-relaxed font-medium max-w-[240px]">
              Advanced formulas with innovative technology for maximum performance
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white pt-16 pb-10 px-6 xl:px-8 text-center flex flex-col items-center mt-10 shadow-[0px_3px_8px_0px_#0000003D]" data-aos="fade-up" data-aos-delay="400">
            {/* Cutout wrapper for gap effect */}
            <div className="absolute -top-[52px] bg-white w-[104px] h-[104px] flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-white shadow-[0px_3px_8px_0px_#0000003D] flex items-center justify-center border border-gray-100">
                <img src="/moto/racingoil/q4.png" alt="Safety" className="w-10 h-10 object-contain" />
              </div>
            </div>
            <h4 className="font-primary font-bold card-title text-[#111111] mb-3 mt-2">Maximum Safety</h4>
            <p className="font-secondary card-text text-gray-500 leading-relaxed font-medium max-w-[240px]">
              Certified products that are safe for your vehicle and machinery
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quality;
