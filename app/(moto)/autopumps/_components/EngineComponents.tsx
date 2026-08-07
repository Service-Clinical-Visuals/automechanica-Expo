"use client";

import React from "react";
import AutopumpsButton from "./AutopumpsButton";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function EngineComponents() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container px-6 xl:px-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="max-w-4xl">
            <h2 className="section-title text-[#2a2a2a] mb-4">
              Precision Engine Components By Autopumps UK
            </h2>
            <p className="section-text text-[#585858] leading-relaxed">
              Autopumps UK offers a comprehensive range of premium engine components engineered to deliver OE-quality performance, exceptional durability, and precise fitment. Manufactured using advanced production processes and rigorously tested for quality, our components are designed to meet the demands of modern engines while ensuring long-lasting reliability and efficient operation.
            </p>
          </div>
          <div className="flex-shrink-0">
            <AutopumpsButton href="/autopumps/products/details" variant="primary">
              Product Details
            </AutopumpsButton>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Bottom Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Video */}
          <div className="w-full xl:col-span-8" data-aos="fade-right">
             <div className="aspect-video w-full rounded-md overflow-hidden shadow-lg border border-gray-100 bg-gray-100 flex items-center justify-center">
               <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8 xl:col-span-4" data-aos="fade-left">
            <div>
              <h3 className="product-title font-semibold text-[#121212] mb-4">Engine Components</h3>
              <p className="section-text text-gray-600 leading-relaxed">
                Autopumps UK delivers a comprehensive range of premium engine components designed to meet the highest standards of quality, precision, and reliability. Every product is manufactured using advanced engineering processes and thoroughly tested to ensure exceptional durability, OE-quality fitment, and consistent performance. From routine maintenance to demanding engine applications, our components provide the confidence and reliability professionals trust.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center">
                   <CheckCircle2 size={26} className="text-white" fill="#064da1" />
                </div>
                <p className="section-text text-gray-600">
                  <strong className="text-gray-800 font-semibold">Precision Engineering</strong> – Manufactured with advanced technology to ensure accurate fitment, smooth installation, and consistent OE-level performance.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center">
                   <CheckCircle2 size={26} className="text-white" fill="#064da1" />
                </div>
                <p className="section-text text-gray-600">
                  <strong className="text-gray-800 font-semibold">Premium Material Construction</strong> – Built from high-grade materials to withstand demanding operating conditions and extended service life.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center">
                   <CheckCircle2 size={26} className="text-white" fill="#064da1" />
                </div>
                <p className="section-text text-gray-600">
                  <strong className="text-gray-800 font-semibold">Wide Product Portfolio</strong> – Offering a comprehensive range of engine components, including pumps, timing systems, cylinder heads, cooling, lubrication, gaskets, seals, and valve train solutions.
                </p>
              </li>
            </ul>

            <div className="mt-2">
              <AutopumpsButton href="/autopumps/products" variant="primary">
                Explore All Products
              </AutopumpsButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
