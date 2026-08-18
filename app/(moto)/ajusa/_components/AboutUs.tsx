"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 xl:col-span-6 order-2 xl:order-1" data-aos="fade-right">
            {/* Top title */}
            <div className="flex flex-col">
              <div className="w-12 h-[2px] bg-[#054279] mb-1"></div>
              <span className="text-[#054279] font-medium section-text poppins-font">About Ajusa</span>
              <div className="w-12 h-[2px] bg-[#054279] mt-1 ml-11"></div>
            </div>

            {/* Heading */}
            <div>
              <h2 className="section-title text-[#000000] poppins-font font-semibold">Engine Components & Global Expertise</h2>
            </div>

            {/* Paragraph */}
            <div className="text-[#414141] inter-font section-text tracking-normal leading-relaxed space-y-3">
              <p>
                Founded in 1972, Ajusa is a Spanish manufacturer specializing in internal combustion engine components for automotive and industrial vehicles. Its product range includes cylinder head gaskets, gasket sets, bolts, camshafts, hydraulic lifters, turbo components, and chemical solutions such as sealants, lubricants, and thread lockers.
              </p>
              <p>
                Based in Albacete, Spain, with a 43,000 m² modern production facility, Ajusa exports to over 80 countries worldwide and operates subsidiaries in the USA, UK, Mexico, Brazil, and France, ensuring strong international presence and delivering reliable, high-quality solutions to customers across the globe.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="list-disc pl-5 text-[#054279] inter-font section-text leading-relaxed space-y-1 marker:text-[#054279] marker:text-3xl">
              <li><span className="text-black">Wide product range including gaskets, bolts, camshafts, and turbo components.</span></li>
              <li><span className="text-black">Specialized in engine components for automotive and industrial vehicles.</span></li>
            </ul>

            {/* Button */}
            <div className="mt-2">
              <Button href="#" variant="primary-outline" className="btn-text">
                Learn More about Ajusa
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full xl:col-span-6 h-full min-h-[400px] flex order-1 xl:order-2" data-aos="fade-left">
            <img
              src="/moto/ajusa/abt.png"
              alt="Ajusa Facility"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

