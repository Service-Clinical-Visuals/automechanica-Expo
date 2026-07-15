"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-20 xl:py-28 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#E30613]"></div>
              <h2 className="section-title text-[#1d1D1B] orbitron-font font-semibold">About Us</h2>
            </div>
            
            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-[#333333] dmsans-font section-text tracking-wider ">
              <p>
                Founded in 1968, SIGAM has grown from a family-run workshop into a leading manufacturer of exhaust systems and tube-processing solutions. With decades of expertise, advanced manufacturing, and a commitment to innovation, SIGAM delivers high-performance solutions for the automotive and industrial sectors, including generators, construction equipment, forklifts, compressors, and custom-engineered applications.
              </p>
              <p>
                Operating from its advanced facility in Marcianise, Italy, SIGAM combines modern manufacturing, efficient logistics, and responsive service to deliver reliable, sustainable exhaust solutions across Europe and the Mediterranean. Driven by uncompromising quality and continuous innovation, the company is committed to lasting partnerships and the future of emission-control technology.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2 mb-4 ">
              <Button href="#" variant="primary">
                Learn More
              </Button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  h-full" data-aos="fade-up" data-aos-delay="300">
              {/* Card 1 */}
              <div className="bg-white border border-gray-100 drop-shadow-lg p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <img src="/moto/sigam/abt1.png" alt="Engineering Excellence" className="h-14 w-auto object-contain" />
                <h3 className="card-title orbitron-font text-[#1D1D1B] font-semibold">Engineering Excellence</h3>
                <p className="section-text dmsans-font text-[#333333] leading-[1.4]">
                  SIGAM employs state-of-the-art production processes and rigorous testing to ensure every exhaust system meets the highest standards of performance, durability, and compliance.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-gray-100 drop-shadow-lg p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <img src="/moto/sigam/abt2.png" alt="Global Reach & Service" className="h-14 w-auto object-contain" />
                <h3 className="card-title orbitron-font text-[#1D1D1B] font-semibold">Global Reach & Service</h3>
                <p className="section-text dmsans-font text-[#333333] leading-[1.4]">
                  SIGAM employs state-of-the-art production processes and rigorous testing to ensure every exhaust system meets the highest standards of performance, durability, and compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-full flex" data-aos="fade-left">
            <img 
              src="/moto/sigam/about.png" 
              alt="Sigam Facility" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
