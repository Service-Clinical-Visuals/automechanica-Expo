"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Side: Image */}
          <div className="order-2 xl:order-1 h-full" data-aos="fade-right" data-aos-duration="1000">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/moto/amc-amadeo/abt.png" 
                alt="AMC Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 xl:order-2 flex flex-col " data-aos="fade-left" data-aos-duration="1000">
            <div className="flex flex-col justify-start">
              <h2 className="section-title text-[#272727] font-semibold mb-6 !oswald leading-tight">
                <span className="relative inline-block pb-2">
                  Engineering Excellence
                  {/* Red Underline */}
                  <span className="absolute left-0 bottom-0 w-[90%] h-1 bg-primary"></span>
                </span>{" "}
                Since 1958
              </h2>
              
              <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
                <strong className="text-primary-3 font-semibold">AMC (Amadeo Martí Carbonell S.A.)</strong> is a family-owned automotive manufacturer with over 65 years of experience in the design, casting, and machining of high-precision aluminum and iron components. The company provides complete manufacturing solutions, from initial product design and advanced 3D prototyping to large-scale production, serving OEM, OES, and Aftermarket markets worldwide. With a strong focus on innovation, advanced technology, and quality excellence, AMC delivers reliable automotive components that meet the highest industry standards.
              </p>

              <div className="mb-8 xl:mb-0">
                <Button href="#" variant="primary" showArrow={true}>
                  Know About Us
                </Button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* Card 1 */}
              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-6 shadow-md py-8">
                <img src="/moto/amc-amadeo/icon1.png" alt="Expertise" className="w-16 h-16 object-contain" />
                <div className="border-l-2 border-gray-100 pl-4 py-4">
                  <h4 className="card-title text-[#272727] font-semibold oswald leading-tight mb-3">
                    65+ Years of Expertise
                  </h4>
                  <p className="section-text text-primary-3rubik font-normal">
                    Automotive Excellence
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-6 shadow-lg">
                <img src="/moto/amc-amadeo/icon2.png" alt="Facilities" className="w-16 h-16 object-contain" />
                <div className="border-l-2 border-gray-100 pl-4 py-4">
                  <h4 className="card-title text-[#272727] font-semibold oswald leading-tight mb-1">
                    44,500 m² Facilities
                  </h4>
                  <p className="section-text text-primary-3rubik font-normal">
                    Integrated Production
                  </p>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
