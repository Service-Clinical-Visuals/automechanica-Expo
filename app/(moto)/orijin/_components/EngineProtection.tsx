"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 relative bg-[url('/moto/orijin/ebg.jpg')] bg-opacity-10 bg-cover bg-center bg-no-repeat text-white overflow-hidden">

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-[#111827]/90"></div>

      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-3" data-aos="fade-right">
            <h2 className="section-title oswald-font font-semibold text-white leading-tight mb-2 ">
              Our Commitment to Quality
            </h2>

            <div className="flex flex-col gap-4 font-regular text-white rubik-font section-text leading-relaxed">
              <p>
                At Orjin Automotive, we develop our management systems with a "right first time" approach and a commitment to continuous improvement. By focusing on efficient processes and performance monitoring, we aim to deliver reliable products while achieving the highest level of customer satisfaction.
              </p>
              <p>
                Our quality philosophy is built on data-driven decision-making, effective process management, and continuous evaluation. As the Orjin Automotive management team, we are committed to maintaining our quality standards, ensuring the effective implementation of our quality policy, and actively participating in improvement initiatives.
              </p>
            </div>

            <div className="mt-4">
              <Link href="#" className="inline-flex oswald-font font-medium items-center gap-2 px-6 py-3 border-[2px] border-[#F39200] text-black font-semibold btn-text rounded-[5px] hover:bg-[#F39200] transition-colors bg-white hover:text-white">
                Explore
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Video Container */}
          <div className="w-full h-full aspect-video relative rounded-[16px] overflow-hidden flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
