"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function InternationalMarketing() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Title and Top Description */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="oswald-font font-semibold text-[#272727] section-title mb-3">
            International Marketing
          </h2>
          <p className="lato-font text-[#4B5563] section-text font-normal leading-relaxed">
            Saria International takes great pride in marketing its LION Brand globally. LION International Sales team members travel frequently to all parts of the globe to visit clients to not only offer a personal touch of service, but to work with local partners to develop the brand.
          </p>
        </div>

        {/* Two Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 mb-12" data-aos="fade-up" data-aos-delay="100">
          
            <img 
              src="/moto/saria-international/i1.png" 
              alt="LION Sponsored Car - Romania" 
              className="w-full h-auto object-cover rounded-sm"
             
            />
         
            <img 
              src="/moto/saria-international/i2.png" 
              alt="LION Brand Display" 
              className="w-full h-auto object-cover rounded-sm"
              
            />
        </div>

        {/* Bottom Section */}
        <hr className="border-gray-300 mb-10" data-aos="fade-up" data-aos-delay="200" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-up" data-aos-delay="300">
          <p className="lato-font text-[#4B5563] section-text font-normal leading-relaxed max-w-4xl">
            By going into local markets and together researching competition, finding niche areas or developing new products and exchanging strategies are key to the success.
          </p>
          <Button href="#" className="flex-shrink-0">
            View More
          </Button>
        </div>
        
      </div>
    </section>
  );
}
