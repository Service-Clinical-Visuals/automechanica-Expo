"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CheckCircle } from "lucide-react";

export default function Performance() {
  return (
    <section className="py-16  bg-white text-dark">
      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8" data-aos="fade-right">
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <Typography variant="h1" className="text-black font-bold">
              Built For Lasting Performance
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed text-sm md:text-base">
              Designed with advanced engineering and strict quality control, Eurocams Ltd. engine components provide outstanding reliability, efficient operation, and long service life. Every product is developed to support consistent engine performance in passenger and commercial vehicles.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button text="Explore Product" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Main Content Area */}
        <div className="flex flex-col xl:flex-row gap-8  items-start justify-between">
          
          {/* Left: Video Player (Order 2 on mobile, 1 on desktop) */}
          <div className="w-full xl:w-8/12 order-2 xl:order-1" data-aos="fade-right">
            <div className="w-full aspect-video rounded-md overflow-hidden bg-gray-100 relative shadow-md">
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Content (Order 1 on mobile, 2 on desktop) */}
          <div className="w-full xl:w-4/12 flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left">
            <Typography variant="h1" className="text-black mb-1 font-bold">
              Key Features
            </Typography>

            <Typography variant="p" color="muted" className=" leading-relaxed mb-2">
              Every Eurocams engine component is manufactured using advanced engineering and premium materials to deliver exceptional precision, durability, and dependable performance. Designed to meet OEM-quality standards, our components provide reliable operation and long-lasting efficiency across a wide range of automotive applications.
            </Typography>

            {/* Bulleted List */}
            <ul className="flex flex-col gap-5 mt-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="text-sm md:text-base ">
                  <strong className="text-black">Precision Engineering</strong> – Manufactured for accurate fitment and dependable performance.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="text-sm md:text-base ">
                  <strong className="text-black">High-Quality Materials</strong> – Built using premium materials for maximum durability.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="text-sm md:text-base ">
                  <strong className="text-black">Superior Wear Resistance</strong> – Designed to reduce friction and extend component life.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="text-sm md:text-base ">
                  <strong className="text-black">OEM-Quality Standards</strong> – Manufactured to meet demanding industry specifications.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="text-sm md:text-base ">
                  <strong className="text-black">Reliable Engine Performance</strong> – Ensures smooth operation across various engine applications.
                </Typography>
              </li>
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  );
}
