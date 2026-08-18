"use client";
import React from "react";
import Button from "./Button";

export default function AboutCompany() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container flex flex-col gap-12 md:gap-16">
        
        {/* Top Part: Image and Text */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 items-center gap-8 xl:gap-10">
          {/* Left: Image */}
          <div className="order-2 xl:order-1 w-full xl:col-span-7" data-aos="fade-right">
            <img 
              src="/moto/birlik/abt1.png" 
              alt="Birlik Conta Van" 
              className="w-full h-auto object-cover shadow-sm"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 xl:order-2 w-full xl:col-span-5 flex flex-col items-start gap-6" data-aos="fade-left">
            <h2 className="sora-font section-title font-semibold text-[#212121]">
              About Our Company
            </h2>
            <div className="flex flex-col gap-4 text-[#444444] manrope-font section-text leading-relaxed">
              <p>
                Our company has been providing services in the field of "Engine Gaskets," "Rubber and Seal Manufacturing" since 1989. Birlik Gasket Products are manufactured in accordance with the needs and understanding of "Quality Products" required in the global and domestic markets. Our manufacturing principle is absolutely based on the understanding of "Quality Products." We continue our work with the assurance of EN ISO 9001:2008 and the principle of customer satisfaction.
              </p>
              <p>
                We produce many types of gaskets for the automotive sector, including cylinder heads, crankcases, upper covers, intake manifolds, exhaust manifolds, and gasket sets for a wide variety of engines. For these, we use materials such as metal, klingrit, special gasket papers, and rubber. We also produce other types of gaskets outside of the automotive sector.
              </p>
            </div>
            <Button href="#" className="mt-2">
              Know About Us
            </Button>
          </div>
        </div>

        {/* Bottom Part: 3 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 w-full" data-aos="fade-up">
          <div className="w-full">
            <img 
              src="/moto/birlik/abt2.png" 
              alt="Download PDF Catalogue" 
              className="w-full h-auto object-cover shadow-sm hover:shadow-md transition-shadow duration-300"
              onError={(e) => {
                e.currentTarget.src = "/moto/birlik/c1.png";
              }}
            />
          </div>
          <div className="w-full">
            <img 
              src="/moto/birlik/abt3.png" 
              alt="Photo Gallery" 
              className="w-full h-auto object-cover shadow-sm hover:shadow-md transition-shadow duration-300"
              onError={(e) => {
                e.currentTarget.src = "/moto/birlik/c2.png";
              }}
            />
          </div>
          <div className="w-full">
            <img 
              src="/moto/birlik/abt4.png" 
              alt="About Us" 
              className="w-full h-auto object-cover shadow-sm hover:shadow-md transition-shadow duration-300"
              onError={(e) => {
                e.currentTarget.src = "/moto/birlik/c3.png";
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
