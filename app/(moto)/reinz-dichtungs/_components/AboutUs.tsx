"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="about">
      <div className="custom-container">
        <div className="flex flex-col xl:grid xl:grid-cols-12 items-center w-full gap-8 xl:gap-0">
          
          {/* Image Container */}
          <div 
            className="order-2 xl:order-1 xl:col-span-7 relative z-10 w-full"
            data-aos="fade-right"
          >
            <img
              src="/moto/reinz-dichtungs/who.png"
              alt="Who We Are - Reinz-Dichtungs Facility"
              className="w-full h-auto object-cover rounded-sm shadow-md"
            />
          </div>

          {/* Text Content Container */}
          <div 
            className="order-1 xl:order-2 xl:col-span-5 relative z-0 w-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="bg-white border border-[var(--primary)] rounded-md p-8 md:p-10 xl:pl-14 2xl:pl-18 shadow-md">
              
              {/* Heading with lines */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
                <h2 className="section-title font-bold text-black font-oswald text-center ">
                  Who We Are
                </h2>
                <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-6 mb-8 text-[#111111] section-text leading-relaxed font-poppins">
                <p>
                  Victor Reinz, a brand of Dana, delivers premium gasket and sealing solutions
                  trusted by leading automotive manufacturers worldwide. With decades of
                  engineering expertise, we provide OE-quality products designed for
                  exceptional durability, precision, and reliable engine performance.
                </p>
                <p>
                  From engine gaskets and sealing systems to industrial and advanced mobility
                  solutions, every product is manufactured to the highest quality standards.
                  Backed by innovation and global expertise, REINZ-Dichtungs-GmbH continues
                  to power the future of mobility with sealing technologies you can trust.
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-start">
                <Button href="#learn-more" variant="primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
