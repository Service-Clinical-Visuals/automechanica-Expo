"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function ExhibitionCalendar() {
  const exhibitions = [
    {
      image: "/moto/celikis/blog1.png",
      title: "Automechanika Frankfurt 2026",
      date: "September 08-12, 2026",
      address: "FRANKFURT / MAIN",
      hall: "6.2",
      stand: "B72"
    },
    {
      image: "/moto/celikis/blog2.png",
      title: "IAA Hannover 2026",
      date: "September 15-20, 2026",
      address: "HANNOVER",
      hall: "26",
      stand: "E26"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div data-aos="fade-right" className="flex items-center gap-3">
             <div className="w-1 h-12 bg-primary"></div>
              <h2 className="section-title text-[#005CA9] font-semibold">Our Exhibition Calendar 2026</h2>
          </div>
          <div data-aos="fade-left">
            <Button href="#" variant="primary" hasArrow>
              View all Updates
            </Button>
          </div>
        </div>

        {/* Exhibitions Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
          {exhibitions.map((exhibition, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              className="bg-white rounded-2xl shadow-lg border border-gray-50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] group"
            >
              <div className="p-5">
                
              {/* Image Section */}
              <div className="w-full  relative overflow-hidden bg-gray-100">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Content Section */}
              <div className=" pt-5 flex flex-col flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <h3 className="card-title font-semibold text-[#121C22]">
                    {exhibition.title}
                  </h3>
                  <span className="section-text text-[#4B5563] font-semibold whitespace-nowrap">
                    Exhibition Date: {exhibition.date}
                  </span>
                </div>
                
                <div className="w-full h-px bg-gray-100 mb-6"></div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="section-text text-[#4B5563] font-semibold whitespace-nowrap">
                      Address: {exhibition.address}
                    </span>
                    <span className="section-text text-[#005CA9] font-semibold whitespace-nowrap">
                      HALL: {exhibition.hall} STAND: {exhibition.stand}
                    </span>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button href="#" variant="primary" hasArrow>
                      Click for Locations
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
