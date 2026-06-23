"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function StillLooking() {
  return (
    <section className="relative w-full py-20 md:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="custom-container relative z-10 flex flex-col items-center text-center">
        <h2 className="text-white text-2xl md:text-3xl font-medium tracking-wide mb-6" data-aos="fade-down">
          Are you still looking for something?
        </h2>
        
        {/* <p className="text-gray-300 text-sm md:text-[15px] max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-sans" data-aos="fade-up" data-aos-delay="100"> */}
        <p className="text-[#ffffff] max-w-8xl mx-auto text-sm md:text-[18px] leading-[1.5] max-w-3xl mx-auto mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="100">
          You will find additional important links here, for example to contact us directly. We will be very pleased to assist you when you still have questions.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 md:gap-8" data-aos="fade-up" data-aos-delay="200">
          <div data-aos="fade-up" data-aos-delay="100">
            <Button href="#" className="min-w-[140px]">
              News
            </Button>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Button href="#" className="min-w-[140px]">
              FAQ
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
