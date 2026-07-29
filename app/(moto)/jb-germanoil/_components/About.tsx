"use client";
import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container flex flex-col px-8 md:px-12 lg:px-28">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Content */}
          <div className="flex flex-col items-start" data-aos="fade-right">
            <h2 className="aldrich-font section-title text-[#2a2a2a] mb-6 tracking-wide">
              Welcome To JB GERMANOIL
            </h2>
            <div className="akshar-font section-text text-[#4a4a4a] space-y-5 mb-8 leading-relaxed">
              <p>
                Since its founding in 1997, JB GERMAN OIL GmbH has earned the trust of countless customers in over 51 countries worldwide. With expertise, reliable service, fair pricing, and strong customer orientation, the company has established itself as a key player in the lubricant market. Over 6,500 tons of high-tech lubricants are produced and distributed annually - a testament to performance and quality. Private-label products with customized company logos further enhance brand identity and recognition for our partners.
              </p>
              <p>
                At the Wittenburg site, located directly on the A24, JB GERMAN OIL operates an 80,000 m² company facility with office and warehouse complexes. More than 800,000 liters of lubricants in all common packaging units are available there - ready for any application.
              </p>
              <p>
                The product range extends from engine and transmission oils to hydraulic fluids, greases, 2-wheel products, service items, and winter chemicals. Thanks to optimal logistics connections, nationwide shipping is carried out daily via DPD and Schenker, as well as container loading through the Port of Hamburg.
              </p>
            </div>
            <Button href="#" iconType="arrowUpRight">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative w-full " data-aos="fade-left">
            <img 
              src="/moto/jb-germanoil/welcome.png" 
              alt="JB Germanoil Facility" 
              className="w-full h-full object-contain "
            />
          
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-gray-200 my-12 lg:my-18" />

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
          {/* Vision */}
          <div className="bg-white p-8 md:p-12 drop-shadow-md shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full relative group hover:shadow-[0_8px_40px_rgba(231,38,41,0.15)] transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute top-8 right-8 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[var(--primary)] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
              <ArrowUpRight size={22} strokeWidth={2.5} />
            </div>
            <h3 className="aldrich-font section-title1 text-[var(--primary)] mb-5 pr-14">
              Our Vision
            </h3>
            <p className="akshar-font section-text text-[#4a4a4a] leading-relaxed">
              To deliver high-quality German-made lubricants that enhance performance, reliability, and protection while providing customers worldwide with innovative solutions, exceptional service, and lasting value.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 md:p-12 drop-shadow-md shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full relative group hover:shadow-[0_8px_40px_rgba(231,38,41,0.15)] transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute top-8 right-8 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[var(--primary)] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-md">
              <ArrowUpRight size={22} strokeWidth={2.5} />
            </div>
            <h3 className="aldrich-font section-title1 text-[var(--primary)] mb-5 pr-14">
              Our Mission
            </h3>
            <p className="akshar-font section-text text-[#4a4a4a] leading-relaxed">
              To be a globally trusted lubricant brand, recognized for German engineering, continuous innovation, and uncompromising quality, setting new standards in the automotive and industrial lubrication industry.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
