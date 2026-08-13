"use client";

import React from "react";
import Button from "./Button";
import { Settings, Factory } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="pt-20 xl:pt-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Left Image */}
          <div className="w-full h-full min-h-[400px] flex" data-aos="fade-right">
            <img
              src="/moto/sm-motorenteile-gmbh/about.png"
              alt="SM Motorenteile GmbH Facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <img src="/moto/sm-motorenteile-gmbh/setting.png" alt="settings" className="w-auto h-auto object-contain" />
              <h2 className="section-title text-[#1D1D1B] orbitron-font font-semibold">About Us</h2>
            </div>

            <h3 className="card-title font-bold italic text-[#1D1D1B] dmsans-font">
              "Engineering Excellence Since 1984"
            </h3>

            {/* Paragraph */}
            <div className="text-[#333333] dmsans-font section-text tracking-wider">
              <p>
                For more than four decades, SM Motorenteile GmbH has been delivering high-quality engine components that meet the demanding standards of the global automotive industry. Founded in Germany, the company has built a strong reputation for precision engineering, consistent product quality, and reliable service. Its extensive portfolio includes camshafts, cylinder heads, valves, hydraulic tappets, and a wide range of additional engine components designed for passenger cars, commercial vehicles, and industrial applications.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 text-[#333333] dmsans-font section-text">
              <li className="flex items-start gap-3">
                <img src="/moto/sm-motorenteile-gmbh/pipe.png" alt="pipe" className="w-auto h-auto flex-shrink-0 mt-1 object-contain" />
                <span>Utilizes advanced manufacturing technologies to produce precision-engineered engine components.</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/sm-motorenteile-gmbh/pipe.png" alt="pipe" className="w-auto h-auto flex-shrink-0 mt-1 object-contain" />
                <span>Maintains rigorous quality control to ensure reliable performance and long service life.</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/sm-motorenteile-gmbh/pipe.png" alt="pipe" className="w-auto h-auto flex-shrink-0 mt-1 object-contain" />
                <span>Manufactures products that meet OEM-quality standards for repair, replacement, and aftermarket applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/sm-motorenteile-gmbh/pipe.png" alt="pipe" className="w-auto h-auto flex-shrink-0 mt-1 object-contain" />
                <span>Combines decades of engineering expertise with continuous innovation to meet modern automotive demands.</span>
              </li>
            </ul>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4" data-aos="fade-up" data-aos-delay="300">
              {/* Card 1 */}
              <div className="bg-white border-2 border-[#ED1C24] p-6 md:p-8 flex flex-col items-center text-center gap-4 transition-shadow duration-300">
                <img src="/moto/sm-motorenteile-gmbh/advance.png" alt="Advanced Manufacturing" className="w-auto h-auto object-contain" />
                <h3 className="card-title text-[#1D1D1B] font-bold dmsans-font">Advanced Manufacturing</h3>
                <p className="card-text dmsans-font text-[#333333] leading-[1.4]">
                  Produced using modern technology and premium materials to ensure consistent quality.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-2 border-[#ED1C24] p-6 md:p-8 flex flex-col items-center text-center gap-4 transition-shadow duration-300">
                <img src="/moto/sm-motorenteile-gmbh/setting.png" alt="Setting" className="w-auto h-auto object-contain" />
                <h3 className="card-title text-[#1D1D1B] font-bold dmsans-font">OEM-Quality Standards</h3>
                <p className="card-text dmsans-font text-[#333333] leading-[1.4]">
                  Manufactured to meet strict industry standards for reliable performance and precise fitment.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-4">
              <Button href="#" variant="primary">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
