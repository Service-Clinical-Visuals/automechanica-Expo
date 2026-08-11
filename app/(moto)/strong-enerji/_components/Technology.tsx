"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Technology() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#020516]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Video */}
          <div className="order-2 xl:order-1 relative w-full aspect-video rounded-none xl:rounded-md overflow-hidden bg-black/20 xl:col-span-7" data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 xl:order-2 flex flex-col items-start xl:col-span-5" data-aos="fade-left">
            <h2 className="section-title oswald font-semibold text-white mb-6">
              Innovative Lubrication Technology That Performs
            </h2>
            
            <div className="flex flex-col gap-4 mb-8">
              <p className="section-text text-gray-300 leading-relaxed">
                STRONG ENERJİ develops high-performance engine oils designed to deliver
                outstanding protection, efficiency, and reliability for modern gasoline and
                diesel engines. Formulated with premium base oils and advanced additive
                technology, our lubricants help reduce engine wear, maintain cleanliness.
              </p>
              <p className="section-text text-gray-300 leading-relaxed">
                Committed to quality and innovation, STRONG ENERJİ offers lubrication
                solutions that help reduce engine wear, improve thermal stability, and
                maintain cleaner engine operation. Every product is manufactured to high
                industry standards, providing dependable performance, longer service life,
                and reliable protection for passenger vehicles, commercial fleets, and
                industrial machinery.
              </p>
            </div>
            
            <Button href="#" variant="solid-gold" >
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
