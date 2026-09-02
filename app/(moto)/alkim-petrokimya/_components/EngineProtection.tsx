"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  const features = [
    {
      title: "Advanced Protection",
      desc: "Formulated to reduce wear and extend engine life.",
    },
    {
      title: "Reliable Performance",
      desc: "Provides excellent lubrication in hot and cold conditions.",
    },
    {
      title: "International Quality",
      desc: "Manufactured to global quality standards.",
    },
    {
      title: "Enhanced Efficiency",
      desc: "Improves engine performance for smoother operation.",
    },
  ];

  return (
    <section className="py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Left: Text Content */}
          <div
            className="flex flex-col gap-6 xl:col-span-6"
            data-aos="fade-right">
            {/* Heading */}
            <div className="flex flex-col w-full">
              <h2 className="text-[#212121] orbitron font-semibold section-title leading-snug">
                Advanced Lubrication Technology
              </h2>
              <div className="w-full max-w-[535px] h-[2px] bg-[#EA203B] mt-2"></div>
            </div>

            {/* Paragraph */}
            <p className="text-[#333333] dmsans section-text leading-relaxed ">
              Discover how Alkim Petrokimya develops high-performance lubricants
              that enhance engine efficiency, reduce wear, and provide
              dependable protection in demanding operating conditions. Our
              advanced manufacturing processes and strict quality control ensure
              every product delivers consistent performance and long-lasting
              reliability.
            </p>

            {/* List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border border-gray-200 bg-white">
                  <div className="bg-[#EA203B] text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="dmsans text-sm text-[#212121] leading-snug">
                    <strong className="font-bold">{feature.title}</strong> –{" "}
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-4">
              <Button
                href="#"
                variant="primary"
                className="rounded-none bg-[#EA203B] hover:bg-red-700 text-white px-8 py-3 orbitron font-semibold btn-text transition-colors">
                Explore Product
              </Button>
            </div>
          </div>

          {/* Right: Video clip */}
          <div
            className="xl:col-span-6 w-full aspect-video relative overflow-hidden flex items-center justify-center bg-gray-100 border border-gray-200"
            data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
