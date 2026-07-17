"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="bg-white pt-16 md:pt-24">
      {/* Top Section */}
      <div className="custom-container mb-6 md:mb-14">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Image */}
          <div data-aos="fade-right" className=" order-2 xl:order-1 w-full relative aspect-video overflow-hidden xl:col-span-7">
            <img 
              src="/moto/pakelo/abt.png" 
              alt="Pakelo Production" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className=" order-1 xl:order-2 flex flex-col xl:col-span-5">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-primary transform rotate-45"></div>
              <span className="text-primary dm-sans font-semibold header-btn  uppercase">
                About Us
              </span>
            </div>

            <h2 className="section-title text-[#242424] mb-6 leading-tight oswald font-semibold">
              WE&apos;VE BEEN EQUIPPING PASSION WITH OUR LUBRICANTS FOR MORE THAN 90 YEARS
            </h2>

            <p className="section-text text-[#484848] dm-sans font-normal mb-10 leading-[1.8]">
              Our lubricant production is entirely made in Italy according with certified quality standards and it&apos;s exported in more than 50 countries worldwide.
            </p>

            {/* Certifications - Mobile, Tablet, & 2XL+ Only */}
            <div className="flex xl:hidden 2xl:flex flex-wrap items-center gap-6 md:gap-10">
              <img src="/moto/pakelo/cer1.png" alt="Certification 1" className="h-20 md:h-30 object-cover" />
              <img src="/moto/pakelo/cer2.png" alt="Certification 2" className="h-20 md:h-30 object-cover" />
              <img src="/moto/pakelo/cer3.png" alt="Certification 3" className="h-20 md:h-30 object-cover" />
            </div>
          </div>

          {/* Certifications - Laptop Only (1280px - 1535px) Centered Below */}
          <div data-aos="fade-up" className="hidden xl:flex 2xl:hidden xl:order-3 xl:col-span-12 flex-wrap items-center justify-center gap-10 mt-8">
            <img src="/moto/pakelo/cer1.png" alt="Certification 1" className="h-30 object-cover" />
            <img src="/moto/pakelo/cer2.png" alt="Certification 2" className="h-30 object-cover" />
            <img src="/moto/pakelo/cer3.png" alt="Certification 3" className="h-30 object-cover" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#242424] py-8 md:py-16">
        <div className="custom-container">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center" data-aos="fade-up">
            <h2 className="section-text-2 text-white mb-10 leading-[1.5] oswald font-medium">
              NOWADAYS MAKING LUBRICANTS MEANS ANTICIPATING THE MARKET DEMANDS 
              WITH PRODUCTS EXCELLING IN SPITE OF THE COMPLEX AND EVER-CHANGING 
              SCENARIO OF INTERNATIONAL AND OEM SPECIFICATIONS.
            </h2>
            <Button href="#" variant="red">
              Know About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
