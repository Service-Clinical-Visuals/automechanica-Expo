"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    {
      icon: "/moto/denckermann/onas1.png", // Assuming onas (About us in Polish) images are these icons
      title: "3 Factories",
    },
    {
      icon: "/moto/denckermann/onas2.png",
      title: "20,000 M2 Of\nWarehouse Space",
    },
    {
      icon: "/moto/denckermann/onas3.png",
      title: "4 Logistics Centers",
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="max-w-5xl max-w-[75%] mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-[var(--color-primary)] font-medium oswald mb-6">
            About Our Company
          </h2>
          <p className="section-text text-[#484848] sora font-medium leading-[1.8]">
            DENCKERMANN Is A Brand With A Strong Logistics And Manufacturing Base , Providing Proven Automotive Solutions To Numerous Markets. Our Products Are Manufactured In Modern Production Facilities, And Thanks To Our Extensive Network Of Logistics Centers, We Can Effectively Respond To The Needs Of Customers Around The World.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Text and Stats */}
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <p className="section-text text-[#484848] sora font-medium  mb-6 leading-[1.8]">
              We operate in Poland and internationally, collaborating with trusted partners in Europe, North America, and Asia. This makes our products available in many countries, meeting the requirements of both independent garages and automotive parts distributors.
            </p>
            <p className="section-text text-[#484848] sora font-medium  mb-10 leading-[1.8]">
              We offer over 20,000 references in 17 product lines covering parts for passenger cars and trucks, including:
            </p>

            {/* Stats Box */}
            <div className="w-full bg-[var(--color-primary)] rounded-3xl p-6 md:p-8 mt-auto relative overflow-hidden shadow-sm">
            
              <div className="relative z-10 flex flex-col md:grid md:grid-cols-3 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center text-center py-6 md:py-0 first:pt-0 last:pb-0 px-2">
                    <div className="h-12 w-12 flex items-center justify-center mb-4">
                    
                      <img src={stat.icon} alt={stat.title} className="object-contain w-full h-full hover:scale-110 transition-transform duration-300 " />
                      <svg className="hidden w-10 h-10 text-[var(--color-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </div>
                    <span className="section-text  sora font-medium text-white  whitespace-pre-line leading-[1.6]">
                      {stat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full  rounded-2xl overflow-hidden " data-aos="fade-left">
         
            <img src="/moto/denckermann/abt.png" alt="About Denckermann ISO" className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 " />
          </div>

        </div>
      </div>
    </section>
  );
}
