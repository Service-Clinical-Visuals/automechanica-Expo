"use client";
import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PremiumBrake() {
  const features = [
    "Premium-grade friction materials for consistent performance",
    "Precision-engineered for accurate fitment and easy installation",
    "Low noise and reduced brake dust during daily driving",
    "Excellent heat resistance and fade control under extreme conditions",
  ];

  return (
    <section className="w-full bg-[#01195d] py-16 md:py-24 text-white overflow-hidden px-4 lg:px-16">
      <div className="custom-container">
        {/* Top Two-Column Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center ">
          {/* Left Column - Content & Feature Pills */}
          <div
            className="xl:col-span-4 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="anton-font font-normal text-white section-title leading-tight mb-8 tracking-wide">
              Premium Brake Pad Solutions
            </h2>
            <p className="oswald-font font-normal text-white section-text leading-relaxed mb-8">
              At AYD Oto Endüstri ve Sanayi Tic. A.Ş., quality is embedded into every stage of the manufacturing process. From the careful selection of premium raw materials to advanced production technologies and rigorous testing, every brake pad is engineered to deliver exceptional durability, precision, and performance.
            </p>

            {/* White Feature Pills */}
            <div className="flex flex-col gap-3.5 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white text-[#1a1a1a] py-5 px-5  shadow-md flex items-center gap-4 hover:translate-x-1.5 transition-transform duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-[#01195d] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg
                      className="w-3.5 h-3.5 stroke-[3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="oswald-font font-normal text-[#4a4a4a] section-text leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <p className="oswald-font font-normal text-white section-text1 leading-relaxed">
              Our integrated manufacturing approach ensures every brake pad meets international quality standards, delivering reliable braking performance in all driving conditions.
            </p>
          </div>

          {/* Right Column - Video Player */}
          <div
            className="xl:col-span-8 w-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full aspect-video rounded-4xl  overflow-hidden shadow-2xl ">
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider */}
        <div className="w-full  border-t border-white/20 my-10 md:my-14" />

        {/* Bottom Centered Button */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <Button href="#" variant="white">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
