"use client";

import React from "react";
import Button from "./Button";
import { Globe, Settings, Factory, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-8 items-center">

          {/* Left Image */}
          <div className="w-full lg:col-span-5 xl:col-span-6 h-full flex order-1" data-aos="fade-right">
            <img
              src="/moto/fcs/abt.png"
              alt="CEVAM Facility"
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-3 lg:col-span-6 xl:col-span-6 order-2" data-aos="fade-left">
            {/* Heading */}
            <div>
              <h2 className="section-title text-[#272727] oswald-font font-semibold leading-tight">Engineering Ride Control with OE Excellence</h2>
            </div>

            {/* Paragraph */}
            <div className="text-[#4B5563] font-regular rubik-font section-text tracking-normal leading-relaxed space-y-2">
              <p>
                FCS Auto Parts is a leading manufacturer of ride control products, specializing in premium shocks, struts, lift supports, and air springs. As a trusted OE supplier, the company serves customers in over 40 countries with reliable solutions for passenger and commercial vehicles.
              </p>
              <p>
                With vertically integrated manufacturing, advanced quality control systems, and a dedicated team of 60+ engineers, FCS delivers premium ride control products engineered to meet or exceed strict OE standards. From design and development to final production, our integrated approach ensures consistent quality, durability, and performance. Through continuous innovation, engineering expertise, and global market coverage, FCS provides reliable solutions that deliver exceptional value to customers worldwide.
              </p>
            </div>

            {/* Button */}
            <div className="flex">
              <Button href="#" variant="primary" className="!bg-[#163683] !border-[#163683] gap-2">
                Know About Us <ArrowRight size={18} />
              </Button>
            </div>

            {/* Stats Block */}
            <div className="mt-2 border border-[#E4E4E4] rounded-[10px] p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-sm">
              <div className="flex flex-col items-center justify-center gap-3">
                <img src="/moto/fcs/abt1.png" alt="Global Coverage" className="w-auto h-auto object-contain" />
                <span className="section-text font-semibold text-[#272727] oswald-font">Global Coverage</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img src="/moto/fcs/abt2.png" alt="OE Manufacturing" className="w-auto h-auto object-contain" />
                <span className="section-text font-semibold text-[#272727] oswald-font">OE Manufacturing</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img src="/moto/fcs/abt3.png" alt="Engineering Expertise" className="w-auto h-auto object-contain" />
                <span className="section-text font-semibold text-[#272727] oswald-font">Engineering Expertise</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
