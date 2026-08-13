"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight, Minus } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 bg-[#F5F5F5]">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h3 className="text-[#DF1222] roboto-font font-semibold section-text mb-3">Mobility Sound Systems</h3>
          <h2 className="section-title text-[#202020] roboto-font font-semibold mb-4">
            Advanced Horn Systems for Reliable Vehicle Safety
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Content */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-right">
            <div className="text-[#404040] font-regular outfit-font section-text leading-relaxed mb-3 space-y-3">
              <p>
                We develop a wide range of acoustic and signaling products designed to enhance vehicle safety, communication, and performance. From electric and air horns to advanced signaling components, our solutions are engineered to deliver powerful sound output, durability, and consistent reliability across diverse driving conditions.
              </p>
              <p>
                Built with modern manufacturing technologies and strict quality standards, our products are trusted across global automotive markets for their performance, precision, and long service life.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {[
                "Comprehensive range of electric and air horns for diverse vehicles",
                "Engineered for powerful sound output and long-lasting durability performance",
                "Designed to meet global standards for safety and product reliability",
                "Suitable for passenger cars, commercial vehicles, and heavy-duty applications"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Minus className="text-[#DF1222] flex-shrink-0 mt-1" size={16} strokeWidth={3} />
                  <p className="text-[#404040] outfit-font font-regular card-text leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex">
              <Button href="#" variant="primary-outline" className="flex items-center gap-2 btn-text">
                Explore Product <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          {/* Right Video Player */}
          <div className="w-full aspect-video md:aspect-auto h-full relative overflow-hidden bg-gray-200 lg:col-span-7 flex items-center justify-center rounded-sm" data-aos="fade-left">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
