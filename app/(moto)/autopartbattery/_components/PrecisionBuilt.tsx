"use client";
import React from "react";
import { Zap } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PrecisionBuilt() {
  const highlights = [
    {
      title: "Advanced Engineering",
      description: "Developed using modern technologies and decades of manufacturing expertise, ensuring continuous innovation and product improvement."
    },
    {
      title: "Precision Manufacturing",
      description: "Every battery is produced with strict quality standards, advanced automation, and multi-stage testing for maximum reliability and safety."
    },
    {
      title: "Built for Every Journey",
      description: "Reliable energy solutions for passenger cars, commercial vehicles, agricultural machinery, and leisure applications—engineered for all conditions."
    },
    {
      title: "Tested for Reliability",
      description: "Each unit undergoes rigorous durability and performance testing to ensure dependable operation in extreme conditions."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#15468e] w-full overflow-hidden text-white relative border-t border-white/10">
      {/* Ambient Lighting Effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Section Title */}
        <h2 
          className="oswald-font text-white section-title font-semibold  tracking-wide mb-6 text-center drop-shadow-sm"
          data-aos="fade-up"
        >
          Precision Built. Performance Proven.
        </h2>

        {/* Section Description */}
        <p 
          className="lato-font text-white section-text font-normal max-w-7xl mx-auto mb-12 md:mb-16 leading-relaxed text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Innovation is at the heart of every AUTOPART battery. Through continuous research, cutting-edge manufacturing technologies, and uncompromising quality control, we develop battery solutions that deliver exceptional durability, efficiency, and dependable power for modern vehicles across the globe.Designed to provide dependable starting power, long service life, and reliable performance across a wide range of vehicles and operating conditions.
        </p>

        {/* 2-Column Main Layout: Video Clip 02 (Left) & Highlights Text (Right) */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          
          {/* Left Column: Video Clip 02 Container */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col w-full" data-aos="fade-right" data-aos-delay="200">
            <div className="w-full h-full aspect-video rounded-3xl overflow-hidden shadow-2xl  relative group">
              <DynamicVideoPlayer 
                type="short-2" 
                className="w-full h-full object-cover " 
              />
              
           
            </div>
          </div>

          {/* Right Column: Performance Highlights Text & White CTA Button */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col w-full text-left" data-aos="fade-left" data-aos-delay="200">
            <div className="flex flex-col justify-between h-full">
              
              <div>
                <h3 className="oswald-font card-title font-medium text-white mb-8 tracking-wide drop-shadow-sm">
                  Performance Highlights
                </h3>

                <div className="flex flex-col gap-5">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 group">
                     <img src="/moto/autopartbattery/gravity1.png" alt="Spark" className="w-7 h-7" />
                      <p className="lato-font text-white section-text font-normal leading-relaxed">
                        <span className="font-bold text-white mr-1">{item.title} -</span>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Button href="#" variant="white" className="w-full md:w-auto px-8 justify-center shadow-lg">
                  View Product
                </Button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
