"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">

          {/* Left Image */}
          <div className="w-full lg:col-span-6 xl:col-span-6 h-full min-h-[400px] flex order-1" data-aos="fade-right">
            <img
              src="/moto/efitaller/abt.png"
              alt="Efitaller Facility"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-5 lg:col-span-6 xl:col-span-6 order-2" data-aos="fade-left">
            {/* Top title */}
            <div className="flex flex-col">
              <span className="text-[#C2D500] font-semibold section-text inter-font">About Efitaller</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="section-title text-[#404040] sora-font font-semibold leading-tight">Advanced Workshop Equipment Solutions</h2>
            </div>

            {/* Paragraph */}
            <div className="text-[#404040] inter-font section-text tracking-normal leading-relaxed space-y-4">
              <p>
                EFITaller Automoción S.L. is a leading supplier of advanced workshop equipment, operating as an importer and distributor of globally recognized brands across Spain, Portugal, and international markets. The company delivers innovative solutions designed to support modern vehicle diagnostics, maintenance, and repair processes.
              </p>
              <p>
                With a strong focus on technology, quality, and customer support, EFITaller provides a comprehensive portfolio including diagnostic tools, ADAS calibration systems, and professional workshop equipment—helping automotive businesses improve efficiency, accuracy, and service performance.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Wide portfolio of advanced workshop equipment and innovative diagnostic solutions",
                "Specialized in advanced diagnostics, Digital ADAS technologies, and calibration systems",
                "Focused on improving efficiency, precision, and overall workshop performance",
                "Strong technical support backed by customer-focused service"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="text-[#C2D500] flex-shrink-0 mt-1" size={18} strokeWidth={3} />
                  <span className="text-[#404040] inter-font section-text leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-4 flex">
              <Button href="#" variant="outline" className="btn-text font-semibold !w-auto">
                Explore Our Catalogue
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

