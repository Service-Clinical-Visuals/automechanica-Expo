"use client";

import React from "react";
import Typography from "../../_components/Typography";

const Cleaner = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-16 items-center">
        
        {/* Left: Image */}
        <div className="w-full xl:col-span-6 order-2 xl:order-1 relative rounded-xl overflow-hidden shadow-xl" style={{ aspectRatio: '820/500' }} data-aos="fade-right">
          <img 
            src="/moto/ampro/section33.png" 
            alt="Cleaner Emissions" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>

        {/* Right: Content */}
        <div className="w-full xl:col-span-6 flex flex-col gap-6 order-1 xl:order-2">
          
          {/* Heading Group */}
          <div className="flex flex-col gap-3" data-aos="fade-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <Typography variant="h6" color="secondary" className="font-bold uppercase tracking-wider text-sm">
                CLEANER MOBILITY
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Cleaner Emissions, Smarter Technology
            </Typography>
          </div>

          {/* Text Paragraphs */}
          <div className="flex flex-col gap-5 mt-2">
            <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-left" data-aos-delay="100">
              By using exhaust aftertreatment systems equipped with NOx sensors, vehicles can help reduce nitrogen oxide emissions and contribute to cleaner air and environmental protection. These sensors provide accurate information to the engine control unit, enabling the exhaust aftertreatment system to operate efficiently and reduce harmful vehicle emissions. This technology supports cleaner transportation while helping vehicles meet environmental and emission standards.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-left" data-aos-delay="200">
              Overall, NOx sensors thus contribute significantly to the sustainable development of vehicles and other combustion systems. They make it possible to measure and reduce the nitrogen oxide content in exhaust gases in order to decrease environmental pollution and ensure compliance with emissions standards and environmental regulations.
            </Typography>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Cleaner;
