"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Plug } from "lucide-react";

export default function InnovationAction() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#111111]" id="innovation">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Video */}
          <div className="order-2 xl:order-1 xl:col-span-9 w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl " data-aos="fade-right">
             <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 xl:order-2 xl:col-span-3 flex flex-col justify-center text-white" data-aos="fade-left">
            <h2 className="section-title font-heading  mb-6">See Innovation in Action</h2>
            
            <p className="mb-8 text-white section-text leading-relaxed font-lato font-normal">
              Watch how LAUNCH Europe's advanced diagnostic systems and ADAS calibration solutions streamline fault detection, vehicle servicing, and workshop operations. Designed for precision, speed, and reliability, our intelligent technologies help technicians improve productivity while delivering accurate results across a wide range of vehicle brands.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                  <img src="/moto/launch-europe/pin.png" alt="pin"  className="pt-2"/>
                <p className="section-text text-white font-lato leading-relaxed">
                  <strong className="text-white font-bold">Intelligent Diagnostics</strong> - Perform fast, accurate multi-brand diagnostics with real-time system analysis and advanced troubleshooting capabilities
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <img src="/moto/launch-europe/pin.png" alt="pin" className="pt-2" />
                <p className="section-text text-white font-lato leading-relaxed">
                  <strong className="text-white font-bold">Precision ADAS Calibration</strong> - Calibrate modern driver assistance systems with confidence using high-accuracy equipment engineered for today's vehicles.
                </p>
              </div>
            </div>

            <div>
              <Button href="#" variant="primary">
                View Product
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
