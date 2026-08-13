"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white w-full">
      <div className="custom-container">
        {/* Top Content */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title text-primary sora font-semibold mb-6">
            Who are we
          </h2>
          <p className="section-text text-primary-2  font-normal lato leading-relaxed max-w-7xl">
            Since 1967, Tecneco Filtri has been designing and manufacturing high-quality automotive filtration solutions that deliver reliable performance and long-lasting protection. With decades of engineering expertise, the company offers a comprehensive range of air, cabin, oil, fuel, and transmission filters for passenger cars, commercial vehicles, motorcycles, agricultural machinery, and industrial applications.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 mb-12" >
            <img 
              src="/moto/tecneco/abt1.png" 
              alt="Tecneco Filtri Facility" 
              className="w-full h-full object-cover "
              data-aos="fade-left" data-aos-delay="100"
            />
            <img 
              src="/moto/tecneco/abt2.png" 
              alt="Tecneco Filtri Manufacturing" 
              className="w-full h-full object-cover "
              data-aos="fade-right" data-aos-delay="100"
            />
        </div>

        {/* Bottom Content */}
        <div 
          className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <p className="section-text text-primary-2 lato font-normal leading-relaxed max-w-7xl">
            Combining advanced manufacturing technologies with strict quality standards, Tecneco Filtri develops products that meet the demands of the global independent aftermarket. Every filter is engineered to provide optimal filtration efficiency, enhance vehicle performance, and ensure dependable protection in every driving condition.
          </p>
          <div className="flex-shrink-0">
            <Button href="#" variant="primary" className="whitespace-nowrap">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
