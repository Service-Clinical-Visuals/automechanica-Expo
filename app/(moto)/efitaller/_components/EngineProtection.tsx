"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden bg-[#F2F2F280]">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col lg:col-span-5 order-2 lg:order-1" data-aos="fade-right">
            {/* Top title */}
            <div className="flex flex-col mb-1 w-fit">
              <span className="text-[#C2D500] font-semibold section-text inter-font">ADAS calibration</span>
            </div>

            <h2 className="section-title text-[#404040] sora-font font-semibold mb-6 mt-2 leading-tight">
              Elevate Your Workshop Experience
            </h2>

            <div className="inter-font text-[#404040] section-text leading-relaxed space-y-4 mb-6">
              <p>
                We offer a complete range of professional workshop equipment and advanced diagnostic solutions designed to meet the evolving needs of modern automotive service environments. From specialized diagnostic tools to ADAS calibration systems and workshop machinery, our products are developed to deliver accuracy, efficiency, and reliability.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Precise calibration solutions for cameras, radar, and advanced sensor systems",
                "Reliable solutions for diagnostics, repair, and calibration processes",
                "Designed for precision, efficiency, and workshop productivity",
                "Essential for accurate post-repair and wheel alignment calibration processes"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="text-[#C2D500] flex-shrink-0 mt-1" size={18} strokeWidth={3} />
                  <span className="text-[#404040] inter-font section-text leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <Button href="#" variant="outline" className="btn-text font-semibold w-fit">
              Explore ADAS Solutions
            </Button>
          </div>

          {/* Right Video Player */}
          <div className="lg:col-span-7 w-auto h-auto aspect-video relative overflow-hidden order-1 lg:order-2" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-auto h-auto object-cover rounded-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
