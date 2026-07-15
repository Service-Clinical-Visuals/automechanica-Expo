"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  const features = [
    {
      title: "Superior Engine Protection",
      desc: "Reduces wear and extends engine life."
    },
    {
      title: "High Thermal Stability",
      desc: "Performs consistently even at high temperatures."
    },
    {
      title: "Enhanced Fuel Efficiency",
      desc: "Optimized formulation helps improve engine efficiency."
    },
    {
      title: "Smooth Performance",
      desc: "Ensures reliable lubrication for everyday and demanding driving conditions."
    }
  ];

  return (
    <section 
      className="py-20 xl:py-28 relative bg overflow-hidden text-white"
      style={{ backgroundImage: "url('/moto/sigam/bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 xl:col-span-5" data-aos="fade-right">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#ED1C24] flex-shrink-0"></div>
              <h2 className="section-title text-white orbitron-font font-semibold ">Engine Protection You Can Trust</h2>
            </div>
            
            {/* Paragraph */}
            <p className="text-[#ffffff] dmsans-font section-text leading-relaxed">
              Watch how SIGAM engine oils are engineered to deliver reliable lubrication, reduce engine wear, and maintain peak performance under a wide range of driving conditions.
            </p>

            {/* List */}
            <ul className="flex flex-col gap-6 mt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img src="/moto/sigam/setting.png" alt="setting icon" className="w-6 h-6 object-contain flex-shrink-0 mt-0.5" />
                  <p className="dmsans-font text-[#ffffff] section-text leading-relaxed font-medium">
                    <strong className="text-white font-semibold">{feature.title}</strong> - {feature.desc}
                  </p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-6 ">
              <Button href="#" variant="primary">
                Explore Product
              </Button>
            </div>
          </div>

          {/* Right: Video clip */}
          <div className="xl:col-span-7 w-full aspect-video relative overflow-hidden flex items-center justify-center border shadow-2xl" data-aos="fade-left">
            
             <DynamicVideoPlayer 
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover "
             />
          </div>
          
        </div>
      </div>
    </section>
  );
}
