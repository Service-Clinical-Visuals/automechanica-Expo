"use client";
import React from "react";
import { Zap } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PowerBuilt() {
  const features = [
    {
      title: "European Manufacturing Excellence",
      description: "Produced in a modern facility using advanced technologies and rigorous quality standards."
    },
    {
      title: "Long Service Life",
      description: "Engineered with advanced materials and plate technology to ensure extended durability and consistent performance over time."
    },
    {
      title: "Extreme Condition Resistance",
      description: "Built to perform reliably in harsh environments, including high heat, freezing temperatures, and demanding workloads."
    },
    {
      title: "Reliable Starting Power Engine Performance You Can Trust",
      description: "Designed to provide dependable engine starts in a wide range of driving conditions."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#15468e] w-full overflow-hidden text-white relative">
      {/* Subtle Background Glow/Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Top Two-Column Section: 360 Video & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center w-full">
          
          {/* Left Column: 360 Degree Video */}
          <div 
            className="order-2  lg:order-1 w-full aspect-video relative overflow-hidden rounded-2xl md:rounded-3xl  shadow-2xl   group"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer 
              type="360" 
              className="w-full h-full object-cover" 
            />
          
          </div>

          {/* Right Column: Title, Paragraphs, and CTA */}
          <div 
            className="order-1  lg:order-2 flex flex-col items-start text-left"
            data-aos="fade-left"
          >
            <h2 className="oswald-font text-white section-title font-bold leading-tight mb-6 tracking-wide drop-shadow-sm">
              Power Built for Every Journey
            </h2>
            
            <p className="lato-font text-white section-text font-normal mb-4 leading-relaxed">
              AUTOPART has been a trusted name in premium starter battery manufacturing since 1982, delivering consistent and dependable energy solutions for a wide range of applications including passenger cars, commercial vehicles, agricultural machinery, boats, and camper vans. With decades of engineering expertise and a commitment to continuous innovation, every battery is designed to ensure strong starting performance, long operational life, and unwavering reliability in everyday use as well as demanding environments.
            </p>
            
            <p className="lato-font text-white section-text font-normal mb-8 leading-relaxed">
              Engineered to perform under real-world conditions, AUTOPART batteries are built with precision and tested rigorously to meet high standards of durability, safety, and efficiency. Whether facing extreme temperatures, frequent start-stop cycles, or heavy electrical loads, they maintain stable power output and dependable performance, giving drivers confidence on every journey.
            </p>

            <Button href="#" variant="red">
              Explore More
            </Button>
          </div>

        </div>

        {/* Bottom Section: 4 Benefit Cards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12 md:mt-16 w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl md:rounded-[22px] p-3 md:p-5 lg:p-6 flex items-center gap-4 md:gap-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left border border-white/20 group"
            >
             
                <img src="/moto/autopartbattery/gravity.png" alt="gravity-icon" className="w-7 h-7"/>
              <p className="lato-font text-[#000000] font-normal section-text leading-relaxed">
                <span className="font-bold text-[#000000] mr-1.5 inline-block">{feature.title} -</span>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
