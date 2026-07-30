"use client";

import React from "react";
import Button from "./Button";
import { Zap } from "lucide-react";

export default function NextGenMobility() {
  return (
    <section className="w-full bg-white overflow-hidden" id="ev-mobility">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch w-full">
        
        {/* Left Column: Content */}
        <div 
          className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 max-w-2xl mx-auto xl:max-w-none xl:mx-0 text-left"
          data-aos="fade-right"
        >
          <h2 className="section-title text-[#000000] font-heading mb-5 leading-tight">
            Built for the Next Generation of Mobility
          </h2>
          
          <div className="flex items-center gap-1 mb-6">
            <img src="/moto/launch-europe/shk.png" alt="bolt" />
            <span className="italic  text-[#111111] section-title1 font-lato">
              EV Battery Analysis
            </span>
          </div>
          
          <p className="mb-10 text-[#111111] section-text leading-relaxed font-lato">
            Power the future of electric vehicle servicing with intelligent battery diagnostic solutions engineered for modern automotive workshops. Designed for precision, speed, and reliability, our advanced systems help technicians accurately analyze battery health, identify faults, and perform efficient maintenance with confidence. Combining innovative technology, intuitive operation, and dependable performance, LAUNCH Europe enables workshops to stay ahead of evolving EV technologies while improving productivity and delivering exceptional service.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#" variant="primary-green">
              Explore More
            </Button>
            <Button href="#" variant="outline-green">
              Download Catalogue
            </Button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div 
          className="w-full aspect-[4/3] xl:aspect-auto xl:min-h-full relative overflow-hidden "
          data-aos="fade-left"
        >
          <img
            src="/moto/launch-europe/bg.png"
            alt="EV Diagnostic Equipment"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
