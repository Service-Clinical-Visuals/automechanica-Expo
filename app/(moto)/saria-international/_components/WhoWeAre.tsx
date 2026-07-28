"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function WhoWeAre() {
  const points = [
    {
      title: "Established Since 1976",
      desc: "Nearly five decades of experience in manufacturing premium American auto care products.",
    },
    {
      title: "Advanced Manufacturing",
      desc: "Modern production, packaging, and R&D facilities ensuring consistent quality and innovation.",
    },
    {
      title: "Global Distribution",
      desc: "Efficient worldwide shipping supported by trusted logistics partners and competitive delivery solutions.",
    },
    {
      title: "Innovation & Quality",
      desc: "Continuously improving products through advanced technology, research, and rigorous quality standards.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#333333]">
      <div className="custom-container">
        {/* Title and Top Description */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="oswald-font font-semibold text-[#272727] section-title mb-3">
            Who We Are.
          </h2>
          <div className="w-60 h-[2px] bg-[#EB594D] mb-6"></div>
          <p className="lato-font text-[#4B5563] section-text font-normal leading-relaxed">
            LION, a division of SARIA International, Inc., has been delivering premium American-made auto care products worldwide since 1976. Backed by decades of expertise, we combine advanced manufacturing, innovative product development, and strict quality standards to deliver reliable solutions for the global automotive industry.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-12" >
          {/* Left Column - Image */}
          <div className="w-full rounded-xl overflow-hidden" data-aos="fade-right" data-aos-delay="100">
            <img 
              src="/moto/saria-international/who.png" 
              alt="LION Facility" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Text and List */}
          <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-delay="100">
            <p className="lato-font text-[#4B5563] section-text font-normal leading-relaxed">
              Our modern manufacturing, packaging, and R&D facilities produce high-quality automotive care products with consistent performance and reliability. Built to strict quality standards, our products are delivered worldwide through a trusted global logistics network, ensuring dependable service and competitive value.
            </p>

            <ul className="flex flex-col gap-5 mt-2">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" fill="#FDBB2D"/>
                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="lato-font text-[#4B5563] section-text font-normal leading-relaxed">
                    <strong className="text-[#4B5563] font-semibold">{point.title}</strong> - {point.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-gray-200 mb-10" data-aos="fade-up" data-aos-delay="200" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-up" data-aos-delay="300">
          <p className="lato-font text-[#4B5563] section-text font-normal leading-relaxed max-w-5xl">
            Behind every LION product is a commitment to innovation, quality, and performance. Our advanced facilities and skilled expertise enable us to deliver reliable lubrication solutions designed to meet the demands of vehicles and customers across the globe.
          </p>
          <Button href="#" className="flex-shrink-0">
            More about our company
          </Button>
        </div>
      </div>
    </section>
  );
}
