"use client";

import React from "react";
import Link from "next/link";

export default function Partners() {
  const highlights = [
    {
      title: "Ajusa Technical Training",
      image: "/moto/ajusa/partner1.png",
      tag: "Breaking News",
      link: "#"
    },
    {
      title: "Ajusa Turbocharger Coolant Pipes",
      image: "/moto/ajusa/partner2.png",
      tag: "Breaking News",
      link: "#"
    }
  ];

  return (
    <section className="py-20 xl:py-20 bg-white relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex flex-col mb-4">
            <div className="w-12 h-[2px] bg-[#054279] mb-1"></div>
            <span className="text-[#054279] font-medium section-text poppins-font px-2">Highlights</span>
            <div className="w-12 h-[2px] bg-[#054279] mt-1 ml-auto"></div>
          </div>

          <h2 className="section-title text-[#000000] poppins-font mb-4 font-semibold">
            Performance You Can Trust
          </h2>

          <p className="inter-font text-[#414141] section-text max-w-4xl mx-auto leading-relaxed">
            As a trusted B2B supplier, we provide reliable automotive solutions that support your operations with consistent quality, competitive value, and dependable supply.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col group transition-all hover:shadow-md">
              {/* Image Container */}
              <div className="w-full overflow-hidden p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="card-title text-[#054279] poppins-font font-semibold">
                  {item.title}
                </h3>

                <div className="pl-2 flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-500">
                    <img src="/moto/ajusa/speaker.png" alt="news" className="w-auto h-auto object-contain" />
                    <span className="text-[#414141] card-text font-medium inter-font">{item.tag}</span>
                  </div>

                  <Link href={item.link} className="flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <img src="/moto/ajusa/arrow.png" alt="arrow" className="w-auto h-auto object-contain" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
