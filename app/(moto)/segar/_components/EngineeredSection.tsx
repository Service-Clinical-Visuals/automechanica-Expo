"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight, Minus } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 xl:py-20 bg-[#F3F4F6]">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h3 className="text-[#DF1222] roboto-font font-semibold section-text mb-3">Acoustic Innovation</h3>
          <h2 className="section-title text-[#202020] roboto-font font-semibold mb-4">
            Innovative Sound and Signaling Solutions for Every Vehicle
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Video Player */}
          <div className="w-full aspect-video md:aspect-auto h-full relative overflow-hidden lg:col-span-6 flex items-center justify-center rounded-sm" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-6" data-aos="fade-left">
            <div className="text-[#404040] font-regular outfit-font section-text leading-relaxed mb-4 space-y-4">
              <p>
                We offer a comprehensive range of electric and air horn solutions designed to deliver powerful sound performance and long-lasting durability. Engineered with precision and high-quality materials, our products ensure optimal safety, reliability, and compliance across a wide range of vehicles.
              </p>
              <p>
                With decades of expertise and continuous innovation, our horn systems are developed to meet global standards while providing consistent performance in all driving conditions.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {[
                "Wide range of electric and air horns for various vehicle applications",
                "Engineered for powerful sound output ensuring maximum road safety awareness",
                "Manufactured using high-quality materials for durability and long service life",
                "Designed to meet international standards for reliability and consistent performance"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Minus className="text-[#DF1222] flex-shrink-0 mt-1" size={16} strokeWidth={3} />
                  <p className="text-[#404040] outfit-font font-regular card-text leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 flex">
              <Button href="#" variant="primary-outline" className="flex items-center gap-2 btn-text">
                Explore Product <ArrowRight size={18} />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

