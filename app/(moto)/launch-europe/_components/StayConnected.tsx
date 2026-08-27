"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Plug } from "lucide-react";

export default function StayConnected() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#111111]" id="stay-connected">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Video */}
          <div className="order-2 xl:order-1 xl:col-span-9 w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl " data-aos="fade-right">
             <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 xl:order-2 xl:col-span-3 flex flex-col justify-center text-white" data-aos="fade-left">
            <h2 className="section-title font-heading text-[#ffffff] mb-6">Stay Connected. Stay Ahead</h2>
            
            <p className="mb-8 text-white section-text font-normal leading-relaxed font-lato">
              Discover how LAUNCH Europe's intelligent software ecosystem keeps your workshop ready for the future. From cloud-based updates and remote diagnostics to online coding and technical support, our connected solutions ensure your equipment remains current while improving workflow efficiency and reducing vehicle downtime.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <img src="/moto/launch-europe/pin.png" alt="pin" className="pt-2" />
                <p className="section-text text-white font-normal leading-relaxed font-lato">
                  <strong className="text-white font-bold">Cloud-Based Updates</strong> - Access the latest software, vehicle coverage, and diagnostic functions with seamless online updates.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
               <img src="/moto/launch-europe/pin.png" alt="pin" className="pt-2" />
                <p className="section-text text-white font-normal leading-relaxed font-lato">
                  <strong className="text-white font-bold">Future-Ready Technology</strong> - Stay ahead with continuously evolving software designed to support the latest automotive innovations.
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
