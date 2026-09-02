"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-20 xl:py-24 relative overflow-hidden bg-[#F8F8F8]">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          {/* Left Video Player */}
          <div className="lg:col-span-7 w-auto h-auto aspect-video relative overflow-hidden order-1" data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-auto h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-5 order-2" data-aos="fade-left">
            {/* Top title */}
            <div className="flex flex-col mb-1 w-fit">
              <span className="text-[#C2D500] font-semibold section-text inter-font">Our Diagnostic Solutions</span>
            </div>

            <h2 className="section-title text-[#404040] sora-font font-semibold mb-4 mt-1 leading-tight">
              Advanced Workshop Equipment &<br /> Diagnostic Solutions
            </h2>

            <div className="inter-font text-[#404040] section-text leading-relaxed space-y-4 mb-6">
              <p>
                We provide a complete range of advanced equipment and diagnostic technologies designed to support modern automotive workshops. From specialized diagnostic tools to ADAS calibration systems and workshop equipment, our solutions are built to enhance precision, efficiency, and productivity in every service operation.
              </p>
              <p>
                With a strong focus on innovation and technical excellence, our product portfolio enables workshops to handle complex vehicle systems with confidence, ensuring accurate diagnostics, reliable repairs, and improved workflow performance.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Comprehensive range of diagnostic tools and workshop equipment",
                "Advanced ADAS calibration and electronic diagnostic solutions"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="text-[#C2D500] flex-shrink-0 mt-1" size={18} strokeWidth={3} />
                  <span className="text-[#404040] inter-font section-text leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <Button href="#" variant="outline" className="btn-text font-semibold w-fit">
              Explore Solutions
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

