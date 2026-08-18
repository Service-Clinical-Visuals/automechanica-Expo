"use client";

import React from "react";

export default function OneStopPoint() {
  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="custom-container">
        {/* Top Content */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title text-primary font-semibold mb-8 sora">
            One Stop Point in Filtration
          </h2>
          <p className="section-text text-primary-2 leading-relaxed lato font-normal">
            TECNECOFILTRATION designs and manufactures high-performance filtration solutions for the automotive, recreational, heavy-duty, industrial, and environmental sectors. As a trusted One Stop Point in Filtration, we offer a comprehensive range of air, oil, fuel, cabin, automatic transmission, and hydraulic filters engineered to deliver reliable performance across diverse applications. Driven by innovation and precision engineering, every Tecneco filter is produced using carefully selected raw materials, advanced manufacturing technologies, and rigorous quality standards. Our commitment to excellence ensures dependable protection, long service life, and OE-quality performance trusted by customers worldwide.
          </p>
        </div>

        {/* Large Image */}
        <div 
          className="w-full flex justify-center " 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <img 
            src="/moto/tecneco/point.png" 
            alt="Tecneco Filtration Product Range" 
            className="w-full  h-auto object-contain "
          />
        </div>
      </div>
    </section>
  );
}
