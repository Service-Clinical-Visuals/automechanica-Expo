"use client";
import React from "react";
import { Zap } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function DrivenInnovation() {
  const highlights = [
    {
      title: "Advanced Quality Testing",
      description: "Each battery is carefully tested through strict quality control processes to guarantee stable performance, maximum safety, and long-term reliability in all conditions."
    },
    {
      title: "Trusted Worldwide",
      description: "With an annual production capacity of 2.5 million batteries, AUTOPART delivers dependable power solutions to customers in over 50 countries, earning global trust and recognition."
    },
    {
      title: "Modern Production Facility",
      description: "Our 21,000 m² advanced manufacturing plant is equipped with cutting-edge production technology, ensuring high precision, efficient output, and consistently superior product quality."
    },
    {
      title: "Continuous Innovation",
      description: "We continuously invest in research, technology, and manufacturing improvements to enhance performance, increase durability, and meet the evolving needs of the global automotive market."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#15468e] w-full overflow-hidden text-white relative">
      {/* Subtle Ambient Lighting Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Section Title */}
        <h2 
          className="oswald-font text-white section-title font-semibold  tracking-wide mb-6 text-center drop-shadow-sm"
          data-aos="fade-up"
        >
          Driven by Innovation & Quality
        </h2>

        {/* Section Description */}
        <p 
          className="lato-font text-white section-text font-normal max-w-5xl mx-auto mb-12 md:mb-16 leading-relaxed text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          AUTOPART combines advanced manufacturing technologies with decades of engineering expertise to produce reliable, high-performance starter batteries. Every battery is manufactured in a state-of-the-art facility and undergoes rigorous quality inspections to ensure exceptional durability, efficiency, and dependable performance.Through continuous innovation and strict production standards, AUTOPART delivers trusted energy solutions to customers in more than 50 countries worldwide
        </p>

        {/* 2-Column Main Layout: Highlights Card & Video Clip 01 */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          
          {/* Left Column: Performance Highlights White Card */}
          <div className="lg:col-span-4 xl:col-span-5 2xl:col-span-4 flex flex-col w-full" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between h-full text-left border border-white/20">
              
              <div>
                <h3 className="oswald-font card-title font-medium text-[#E11938] mb-6 tracking-wide">
                  Performance Highlights
                </h3>

                <div className="flex flex-col gap-5">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 group">
                      <img src="/moto/autopartbattery/gravity.png" alt="Spark" className="w-7 h-7 mt-1" />
                      <p className="lato-font text-[#000000] section-text leading-relaxed">
                        <span className="font-bold text-[#000000] mr-1">{item.title} -</span>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" mt-8 pt-4  flex justify-center">
                <Button href="#" variant="red" className="w-full md:w-auto px-10 justify-center">
                  View Product
                </Button>
              </div>

            </div>
          </div>

          {/* Right Column: Video Clip 01 Container */}
          <div className="lg:col-span-8 xl:col-span-7 2xl:col-span-8 flex flex-col w-full" data-aos="fade-left" data-aos-delay="200">
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <DynamicVideoPlayer 
                type="short-1" 
                className="w-full h-full object-cover aspect-video" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
