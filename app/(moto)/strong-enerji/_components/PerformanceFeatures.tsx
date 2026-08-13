"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function PerformanceFeatures() {
  const features = [
    {
      title: "Advanced Wear Protection",
      description: "Minimizes friction and protects critical engine components for extended service life."
    },
    {
      title: "Superior Thermal Stability",
      description: "Maintains consistent lubrication in high-temperature and heavy-load conditions."
    },
    {
      title: "Cleaner Engine Performance",
      description: "Helps prevent sludge and deposit buildup for smoother, more efficient operation."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#0d0f1c]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="xl:col-span-5 flex flex-col items-start" data-aos="fade-right">
            <h2 className="section-title oswald font-semibold text-white mb-6">
              Innovative Lubrication Technology That Performs
            </h2>
            
            <p className="section-text dm-sans text-white leading-relaxed mb-10">
              STRONG ENERJİ develops high-performance engine oils designed to deliver
              outstanding protection, efficiency, and reliability for modern gasoline and
              diesel engines. Formulated with premium base oils and advanced additive
              technology, our lubricants help reduce engine wear, maintain cleanliness.
            </p>

            <ul className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" /> */}
                  <img src="/moto/strong-enerji/chk.png" alt="Check Icon" className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="section-text dm-sans text-white leading-relaxed">
                    <strong className="text-white font-semibold font-[family-name:var(--font-dm-sans)]">{feature.title}</strong> – {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Video */}
          <div className="xl:col-span-7 relative w-full aspect-video overflow-hidden" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
