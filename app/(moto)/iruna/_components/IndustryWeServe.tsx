"use client";

import React from 'react';

export default function IndustryWeServe() {
  const industries = [
    {
      title: "Off-Highway",
      desc: "Design, testing and manufacturing of OEM brake systems for construction, industrial and agricultural vehicles.",
      icon: "/moto/iruna/indus1.png"
    },
    {
      title: "Automotive",
      desc: "Design and manufacture of OEM brake systems for the automotive market.",
      icon: "/moto/iruna/indus2.png"
    },
    {
      title: "Wind power",
      desc: "Specialists in the wind power sector with own manufacture of fast axle brake calipers, rotor and yaw brake.",
      icon: "/moto/iruna/indus3.png"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#2a2a2a]">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Intro */}
          <div className="flex flex-col h-full" data-aos="fade-right">
            <div className="relative inline-block mb-6 self-start">
              <h2 className="section-title font-bold oxanium text-white relative z-10 leading-tight">
                Industry We Serve <span className="text-[#CF0A2C] oxanium section-title ml-1">04</span>
              </h2>
              
            </div>
            
            <p className="sora text-[#ffffff] section-text leading-[1.8] text-left">
              We have the design experience & knowledge to provide tailored made Master Cylinders,
              Hydraulic Boosters, Vacuum Servos, Hydraulic Vacuum Servos, Disc Brakes and other
              components for the Automotive, Off-Highway and Wind Power industries worldwide.
            </p>
          </div>
          
          {/* Columns 2-4: Industries */}
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center text-center mt-8 md:mt-0" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center p-5 shadow-[0_0_20px_rgba(0,0,0,0.2)] mb-6 mx-auto">
                <img 
                  src={industry.icon} 
                  alt={industry.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-white card-title font-semibold oxanium-font mb-4">
                {industry.title}
              </h3>
              
              <p className="sora text-[#ffffff] section-text leading-[1.8] text-center">
                {industry.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
