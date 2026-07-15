"use client";

import React from "react";
import Button from "./Button";

export default function Quality() {
  const certificates = [
    { image: "/moto/sigam/1.jpg" },
    { image: "/moto/sigam/2.jpg" },
    { image: "/moto/sigam/3.jpg" },
    { image: "/moto/sigam/4.jpg" }
  ];

  return (
    <section className="pt-20 pb-18 xl:pt-28 xl:pb-14  bg-white text-center">
      <div className="custom-container ">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-6" data-aos="fade-up">
          <div className="w-4 h-4 bg-[#ED1C24]"></div>
          <h2 className="section-title text-[#1d1d1b] orbitron-font font-semibold">Committed to Quality at Every Stage</h2>
        </div>
        
        {/* Subtitle */}
        <p className="max-w-7xl mx-auto text-[#333333] dmsans-font section-text mb-16 leading-relaxed tracking-wider" data-aos="fade-up" data-aos-delay="100">
          Quality is at the heart of everything SIGAM does. Every product undergoes rigorous technical testing, including conditioning, ageing, and phonometric evaluations, to ensure compliance with the latest European standards. From sourcing premium raw materials to final delivery, SIGAM follows modern manufacturing practices and maintains strict quality control, backed by internationally recognized ISO 9001:2015 and ISO 14001:2015 certifications.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10" data-aos="fade-up" data-aos-delay="200">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className={`border rounded-sm border-gray-200  p-6 flex flex-col items-center  transition-all duration-300 bg-[#f9f9f9] hover:bg-[#ffeeef]`}
            >
              {/* Image container */}
              <div className="w-full flex-grow flex rounded-sm items-center justify-center mb-4 overflow-hidden  border-gray-400 drop-shadow-md ">
                <img 
                  src={cert.image} 
                  alt={`Certificate ${index + 1}`} 
                  className="w-full h-auto object-contain bg-white shadow-sm" 
                />
              </div>
              
              <div className="w-full mt-auto  flex justify-center">
                <Button href="#" variant="primary" >
                  View PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
