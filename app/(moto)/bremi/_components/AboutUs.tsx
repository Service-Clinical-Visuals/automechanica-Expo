"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white relative">
      <div className="custom-container">
        <div className="bremi-grid items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full" data-aos="fade-right">
            <div>
              <h2 className="section-title text-[#E72E39] font-bold mb-6 lg:mb-6 underline">About Us</h2>
              <div className="flex flex-col gap-5 text-[#4c4c4c]">
                <p className="section-text leading-[1.6] font-normal mb-2">
                  Since Our Foundation In 1927, BREMI Has Stood For Outstanding Quality And Innovation In Ignition Technology. As A Long-Standing And Reliable Original Equipment Manufacturer, We Offer The Largest Market Coverage, Which Also Includes The Field Of Sensor Technology. Our History And Expertise Make Us A Leading Specialist In These Areas.
                </p>
                <p className="section-text leading-[1.6] font-normal">
                  Over The Last Two Years, Our Company Has Undergone Dynamic Development Under New Management. With Motivated And Competent Employees, We Are Realising Our Vision Of Operating Worldwide As A Reliable Supplier And Partner For High-Quality Products In OE Quality.
                </p>
              </div>
            </div>
            
            {/* Small Image */}
            <div className="relative w-full h-[250px] md:h-[300px] lg:h-[300px] overflow-hidden mt-6 lg:mt-8">
              <img 
                src="/moto/bremi/abt1.png" 
                alt="Bremi Warehouse" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column (Large Image) */}
          <div className="lg:col-span-6 mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="100">
             <div className="relative w-full h-full min-h-[300px] overflow-hidden">
              <img 
                src="/moto/bremi/abt.jpg" 
                alt="Bremi Exhibition Stand" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Separator / Divider (Optional, using margin top instead) */}
        <div className="w-full h-[2px] bg-gray-200 my-8 lg:my-10"></div>

        {/* Features Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Box 1 */}
          <div className="bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] p-4 lg:p-6 flex items-start gap-2" data-aos="fade-up">
            <div className="flex-shrink-0 mt-1">
              <img src="/moto/bremi/check.png" alt="Check" className="w-5 h-5 lg:w-7 lg:h-7 object-contain" />
            </div>
            <p className="section-text text-[#4c4c4c]  font-normal leading-[1.6]">
              Established in 1927, BREMI has built nearly a century of expertise in delivering innovative and high-quality automotive solutions.
            </p>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] p-4 lg:p-6 flex items-start gap-2" data-aos="fade-up" data-aos-delay="100">
            <div className="flex-shrink-0 mt-1">
              <img src="/moto/bremi/check.png" alt="Check" className="w-5 h-5 lg:w-7 lg:h-7 object-contain" />
            </div>
            <p className="section-text text-[#4c4c4c] font-normal leading-[1.6]">
              Focused on quality, innovation, and reliability, ensuring every product delivers outstanding performance and durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
