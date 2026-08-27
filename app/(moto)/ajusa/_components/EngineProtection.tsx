"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-20 xl:py-20 bg-[#F2F2F280] relative overflow-hidden">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Video Player */}
          <div className="lg:col-span-7 w-full aspect-video relative overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6 lg:col-span-5" data-aos="fade-left">
            <div className="flex flex-col mb-1 w-fit">
              <div className="w-12 h-[2px] bg-[#054279] mb-1"></div>
              <span className="text-[#054279] font-medium section-text poppins-font">Our Product</span>
              <div className="w-12 h-[2px] bg-[#054279] mt-1 ml-auto"></div>
            </div>

            <h2 className="section-title text-[#000000] poppins-font font-semibold leading-tight">
              Comprehensive Engine System Components
            </h2>

            <div className="flex flex-col gap-5 text-[#414141] inter-font text-sm leading-relaxed">
              <p>
                Our product range covers a wide spectrum of high-quality components designed to support modern engine systems. From advanced gasket solutions to associated engine parts, each product is developed with precision engineering to ensure durability, efficiency, and optimal performance under demanding conditions.
              </p>
              <p>
                With a strong focus on innovation and OEM standards, our solutions provide reliable sealing, enhanced engine protection, and long service life across passenger, commercial, and industrial vehicles worldwide.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-[#414141] inter-font text-sm">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#054279] mt-1.5 flex-shrink-0"></div>
                <span>Comprehensive range of gaskets and engine component solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#054279] mt-1.5 flex-shrink-0"></div>
                <span>Designed to meet strict OEM quality and technical standards</span>
              </li>
            </ul>

            <div className="mt-4">
              <Button href="#" variant="primary-outline" className="btn-text font-semibold">
                Explore Products
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
