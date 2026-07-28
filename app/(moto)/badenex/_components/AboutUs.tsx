"use client";

import React from "react";
import Button from "./Button";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        {/* Top Centered Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-5xl min-[2560px]:max-w-[70%] min-[3800px]:max-w-[80%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="section-title title-bordered oswald-font text-[#111111] font-semibold">
            Crafted with German Precision
          </h2>
          <p className="text-[#4D5563] lato-font section-text max-w-4xl min-[2560px]:max-w-[80%] min-[3800px]:max-w-[90%] leading-relaxed">
            EXPLORLUBE is a premium German lubricant brand delivering high-performance engine oils, additives, and service products for modern vehicles and machinery. Developed and manufactured in Germany, our advanced lubrication solutions combine technical precision, innovation, and consistent quality to meet the highest performance standards.
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-10 items-center">
          {/* Left Image */}
          <div className="w-auto h-auto flex" data-aos="fade-right">
            <img
              src="/moto/badenex/about.png"
              alt="Explorlube Products"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            {/* Paragraph */}
            <div className="text-[#4D5563] lato-font section-text leading-relaxed flex flex-col gap-6">
              <p>
                With a strong global presence, <strong>EXPLORLUBE</strong> provides reliable solutions for passenger cars, commercial vehicles, motorcycles, heavy-duty, and marine applications. Our products are engineered for superior engine protection, extended service life, and stable performance under demanding conditions.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-4 text-[#4D5563] lato-font section-text">
              {[
                "Developed using premium base oils and advanced additive technologies with strict quality-controlled processes following DIN and ISO standards.",
                "Engineered to provide superior wear protection, improved efficiency, and reliable performance for modern vehicles and machinery.",
                "Supported by efficient logistics and global supply capabilities to ensure reliable product availability worldwide."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src="/moto/badenex/tick.png" alt="tick" className="w-auto h-auto min-[2500px]:w-10 min-[2500px]:h-10 min-[3600px]:w-16 min-[3800px]:h-16 object-contain flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-1">
              <Button href="#" variant="primary" className="text-white flex items-center gap-2 oswald-font font-bold">
                Know more <img src="/moto/badenex/r-arrow.png" alt="arrow" className="w-2 h-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
