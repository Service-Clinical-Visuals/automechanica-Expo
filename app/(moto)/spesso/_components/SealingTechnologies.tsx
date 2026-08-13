import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SealingTechnologies() {
  const technologies = [
    {
      title: "Linear Sealing",
      description: "The \"Linear Sealing Technology\" (metallic line) relies on the spring effect of beaded metal plates and is particularly...",
      image: "/moto/spesso/b1.png"
    },
    {
      title: "Surface Sealing",
      description: "The \"Surface Sealing Technology\" relies on recovery and compressibility effect on all surface.",
      image: "/moto/spesso/b2.jpg"
    },
    {
      title: "Custom Coated Composite",
      description: "This technology combines a beaded steel core with a custom engineered partial coating.",
      image: "/moto/spesso/b3.png"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-sealing relative overflow-hidden px-4 lg:px-16">
     
      
      <div className="custom-container relative z-10 flex flex-col items-center ">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="anton-font section-title text-white mb-5 tracking-wide">
            Sealing Technologies
          </h2>
          <p className="overpass-font section-text text-white leading-relaxed max-w-6xl">
            Founded in 1926, Spesso Gaskets is a trusted Italian manufacturer of high-performance engine gaskets for all major European OEMs. Our components are installed on a wide range of vehicles - from motorcycles and passenger cars to heavy-duty trucks and agricultural machinery, - supported by Certified Quality processes and a strong commitment to Innovation, Reliability, and Customer Success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 ">
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-4 md:p-5 rounded-[32px] border border-white/20 bg-[#0ca752] shadow-lg group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                idx === 2 ? "md:col-span-2 xl:col-span-1 md:w-[calc(50%-12px)] xl:w-full md:mx-auto xl:mx-0" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 shadow-sm">
                <img 
                  src={tech.image} 
                  alt={tech.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#c21217] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                  <ArrowUpRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col px-2 pb-2">
                <h3 className="anton-font text-white card-txt tracking-wide mb-3">
                  {tech.title}
                </h3>
                <p className="overpass-font text-white leading-relaxed section-text">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
