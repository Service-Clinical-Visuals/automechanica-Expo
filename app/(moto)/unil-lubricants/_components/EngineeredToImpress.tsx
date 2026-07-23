"use client";
import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredToImpress() {
  return (
    <section className="w-full bg-[#151515] py-16 md:py-24">
      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-6" data-aos="fade-up">
          <div className="max-w-4xl">
            <h2 className="oswald-font font-semibold text-[#ffffff] section-title mb-6">
              Engineered to Impress
            </h2>
            <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
              Experience UNIL's premium engine oil like never before with an interactive 360° product view. Rotate the product from every angle to examine its design.
            </p>
          </div>
          
          <div className="flex-shrink-0 pt-2 xl:pt-0">
            <Button href="#">
              View Product
            </Button>
          </div>
        </div>

        <hr className="border-gray-400 mb-12" data-aos="fade-up" data-aos-delay="100" />

        {/* 360 Degree Video Container */}
        <div className="max-w-7xl mx-auto aspect-video  rounded-xl overflow-hidden relative shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
        </div>
        
      </div>
    </section>
  );
}
