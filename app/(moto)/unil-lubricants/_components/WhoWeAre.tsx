"use client";
import React from "react";
import Button from "./Button";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Title and Top Description */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="oswald-font font-semibold text-[#000000] section-title mb-6">
            The Unil Lubricants
          </h2>
          <p className="lato-font text-[#333333] section-text font-normal leading-relaxed">
            With more than a century of expertise, UNIL Lubricants develops high-performance lubrication solutions for automotive, industrial, agricultural, and commercial applications. Combining advanced technology with rigorous quality standards, every product is engineered to deliver superior protection, efficiency, and long-lasting performance in demanding operating conditions.
          </p>
        </div>

        {/* Two Images Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full rounded-xl overflow-hidden shadow-sm">
            <img 
              src="/moto/unil-lubricants/abt1.png" 
              alt="UNIL Lubricants Booth" 
              className="w-full h-full object-cover aspect-[4/3] md:aspect-[16/10]"
             
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-sm">
            <img 
              src="/moto/unil-lubricants/abt2.png" 
              alt="UNIL Lubricants Team" 
              className="w-full h-full object-cover aspect-[4/3] md:aspect-[16/10]"
              
            />
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-gray-200 mb-10" data-aos="fade-up" data-aos-delay="200" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-up" data-aos-delay="300">
          <p className="lato-font text-[#333333] section-text font-normal leading-relaxed max-w-3xl ">
            Driven by innovation and a commitment to customer satisfaction, UNIL continues to expand its comprehensive product portfolio while providing reliable solutions trusted by professionals and businesses worldwide.
          </p>
          <Button 
            href="#" 
            className="flex-shrink-0 bg-[#0A2B52] hover:bg-[#071D3A] text-white"
          >
            Discover More
          </Button>
        </div>
        
      </div>
    </section>
  );
}
