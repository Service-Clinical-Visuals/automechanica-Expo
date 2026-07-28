"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle } from "lucide-react";

export default function Quality() {
  return (
    <section className="py-16  bg-white text-dark">
      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8" data-aos="fade-right">
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <Typography variant="h1" className="text-black font-bold">
              Quality
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed text-sm md:text-base">
              At Eurocams, we pride ourselves on the on the high quality of not just our products, but also our processes. As well as our ISO9001:2015 accreditation, we also have a state of the art testing studio where our dedicated quality team ensure that all products meet our exacting specifications.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button text="Explore Our Quality" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>
        {/* Main Content Area */}
        <div className="flex flex-col xl:flex-row gap-12 items-stretch justify-between">
          
          {/* Left: Image (Order 2 on mobile, 1 on desktop) */}
          <div className="w-full xl:w-7/12 order-2 xl:order-1" data-aos="fade-right">
            <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden bg-gray-100 relative shadow-lg">
              <img src="/moto/eurocams/quality.png" alt="Quality Testing Equipment" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Content (Order 1 on mobile, 2 on desktop) */}
          <div className="w-full xl:w-5/12 flex flex-col gap-5 order-1 xl:order-2" data-aos="fade-left">
            <Typography variant="h1" className="text-black  font-bold">
              Precision Testing & Quality Control
            </Typography>

            <Typography variant="p" color="muted" className=" leading-relaxed ">
              Every Eurocams component undergoes advanced inspection to ensure exceptional accuracy, durability, and reliability. Combined with ISO 9001:2015 certified manufacturing, we guarantee consistent performance for every engine component.
            </Typography>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 my-1"></div>

            {/* Bulleted List */}
            <ul className="flex flex-col gap-5 mt-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p"  color="muted">
                  <strong className="text-black font-semibold">Camshaft Measurement</strong> – The Hommel Contour provides precise, non-contact camshaft measurement with accuracy below 2µm.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted">
                  <strong className="text-black">Hardness Testing</strong> – The Zwick Roell Rockwell Hardness Tester ensures precise hardness testing for durable, reliable valvetrain components.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted">
                  <strong className="text-black">CMM Measurement</strong> – The Smartscope Flash 200 provides precise, automated measurement for accurate component inspection and quality assurance.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted">
                  <strong className="text-black">Hydraulic Lifter Testing</strong> – The Hydraulic Lifter Test Machine ensures accurate leakdown testing for reliable valvetrain performance and durability.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted">
                  <strong className="text-black">Exceptional Quality Assurance</strong> – Eurocams delivers ISO 9001:2015 certified engine parts for reliable quality and performance.
                </Typography>
              </li>
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  );
}
