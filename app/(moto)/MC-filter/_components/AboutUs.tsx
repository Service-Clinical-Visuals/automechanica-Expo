"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full  relative bg-white overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col xl:grid xl:grid-cols-2 gap-2 items-center">

        {/* Content Wrapper - Mobile & Tablet: Order 1, Desktop: Order 2 */}
        <div className="w-full p-1 flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left">

          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <div className="inline-block self-start">
              <Typography variant="h5" color="primary" className="font-bold uppercase tracking-wider">
                FROM DESIGN TO PRODUCTION
              </Typography>
              <div className="w-1/2 h-[3px] bg-secondary mt-1"></div>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight uppercase">
              MC FILTER INDUSTRY AND TRADE INC.
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              MC Filtre prioritizes customer satisfaction, quality products, continuous improvement, and after-sales support, manufacturing air, oil, fuel, cabin, air dryer, and chassis filters for the automotive sector, as well as silo ventilation filters, industrial dust cartridges, hydraulic filters, compressor and generator filters for the industrial sector.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Our company operates on a design-to-production philosophy; we manufacture molds and plastic and sheet metal components for the products we design in-house. These capabilities enable us to respond quickly and create products rapidly. These qualities make us a leader in our sector.
            </Typography>
          </div>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-b border-gray-200">
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
                <img src="/moto/mc-filter/icon1.png" alt="Product Type" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h2" color="primary" className="font-bold leading-none mb-1">
                  2000
                </Typography>
                <Typography variant="p" color="muted" className="text-sm whitespace-nowrap">
                  Product Type
                </Typography>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
                <img src="/moto/mc-filter/icon2.png" alt="Successful Projects" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h2" color="primary" className="font-bold leading-none mb-1">
                  928
                </Typography>
                <Typography variant="p" color="muted" className="text-sm whitespace-nowrap">
                  Successful Projects
                </Typography>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
                <img src="/moto/mc-filter/icon3.png" alt="Product Type" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h2" color="primary" className="font-bold leading-none mb-1">
                  2000
                </Typography>
                <Typography variant="p" color="muted" className="text-sm whitespace-nowrap">
                  Product Type
                </Typography>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Typography variant="p" color="muted" className="leading-relaxed">
              By combining its expert team with a wide range of products, machinery, and production capabilities, the company offers fast and economical solutions.
            </Typography>
          </div>

          {/* Bottom Action Row */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <Button text="About Us" href="#about" variant="primary" />

            <div className="flex items-center gap-4">
              <div className="w-15 h-15 rounded-full bg-gray-200 flex items-center justify-center text-primary shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="flex flex-col">
                <Typography variant="h4" color="primary" className="font-bold leading-none mb-1">
                  Support Line
                </Typography>
                <Typography variant="p" color="muted" className="text-sm">
                  +90 362 266 79 86
                </Typography>
              </div>
            </div>
          </div>

        </div>

        {/* Image Wrapper - Mobile & Tablet: Order 2, Desktop: Order 1 */}
        <div className="w-full order-2 xl:order-1 flex justify-center items-center relative" data-aos="fade-right">
          <div className="relative w-full max-w-[500px] xl:max-w-none flex justify-center z-10">
            <img
              src="/moto/mc-filter/Group3.png"
              alt="MC Filter About Us"
              className="w-[90%] xl:w-[85%] h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
