import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative px-4 lg:px-16">
      <div className="custom-container flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="anton-font section-title text-[#2a2a2a] mb-6 tracking-wide uppercase">
            WELCOME TO SPESSO GASKETS
          </h2>
          <p className="overpass-font section-text text-[#5e5e5e] leading-relaxed max-w-6xl">
            Founded in 1926, Spesso Gaskets is a trusted Italian manufacturer of high-performance engine gaskets for all major European OEMs. Our components are installed on a wide range of vehicles - from motorcycles and passenger cars to heavy-duty trucks and agricultural machinery, - supported by Certified Quality processes and a strong commitment to Innovation, Reliability, and Customer Success.
          </p>
        </div>

        {/* Images Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full aspect-video rounded-[20px] overflow-hidden shadow-lg border border-gray-100 group">
            <img 
              src="/moto/spesso/abt1.jpg" 
              alt="Spesso Gaskets Exhibition 1" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="w-full aspect-video rounded-[20px] overflow-hidden shadow-lg border border-gray-100 group">
            <img 
              src="/moto/spesso/abt2.jpg" 
              alt="Spesso Gaskets Exhibition 2" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="200">
          <p className="overpass-font section-text text-[#5e5e5e] leading-relaxed max-w-6xl text-center md:text-left m-0">
            Backed by a century of expertise and driven by innovation, Spesso Gaskets proudly empowers customers worldwide with unmatched technical know-how and future-ready solutions.
          </p>
          <div className="flex-shrink-0">
            <Button href="#">
              Learn More About Us
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
