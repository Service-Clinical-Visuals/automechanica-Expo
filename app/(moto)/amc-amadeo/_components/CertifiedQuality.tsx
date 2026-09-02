"use client";

import React from "react";

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    desc: "Quality management standard for consistent processes.",
    img: "/moto/amc-amadeo/c1.png"
  },
  {
    id: 2,
    title: "IAT 16949",
    desc: "Automotive quality certification for OEM standards.",
    img: "/moto/amc-amadeo/c2.png"
  },
  {
    id: 3,
    title: "ISO 27001",
    desc: "Information security management standard.",
    img: "/moto/amc-amadeo/c3.png"
  },
  {
    id: 4,
    title: "ISO 14001:2015",
    desc: "Environmental management standard for sustainable manufacturing.",
    img: "/moto/amc-amadeo/c4.png"
  }
];

export default function CertifiedQuality() {
  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="section-title text-[#272727] font-semibold mb-6 oswald leading-tight">
            <span className="relative inline-block pb-2">
              Certified Quality & Excellence
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-2">
            AMC follows internationally recognized quality standards to ensure reliable, high-performance automotive components. Through advanced testing processes and certified management systems, AMC maintains excellence in manufacturing, sustainability, and customer satisfaction across global
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 ">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-md border border-gray-100 p-1 flex flex-col shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Certificate Image */}
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="max-w-full max-h-full object-contain hover:scale-[1.02] transition-transform duration-500 p-4"
                />

              {/* Content */}
              <div className="flex flex-col flex-grow text-left px-7">
                <h3 className="card-title1 text-[#272727] font-semibold oswald mb-3">
                  {cert.title}
                </h3>
                <p className="card-text text-primary-3 rubik font-normal mb-3 leading-relaxed flex-grow">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}
