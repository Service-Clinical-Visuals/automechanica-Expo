"use client";

import React from "react";
import Typography from "./Typography";

export default function Sectors() {
  const sectors = [
    {
      title: "HIGH-QUALITY CONSTRUCTION",
      text: "Operational since 1999, BRAIN Srl is today the most complete flexible company in the world in the catalysis sector for cars, motorcycles and industry. Efficient service, rapid delivery times, and goods always ready for delivery have allowed us to remain competitive in a constantly evolving market."
    },
    {
      title: "MOTORCYCLING",
      text: "Brain produces brazed tubular metal substrates for motorcycle applications with different cell counts, with coating and impregnation according to specific customer requests."
    },
    {
      title: "INDUSTRIAL AND TRUCKS",
      text: "In all heavy duty applications it is more cost-effective to regenerate the catalytic converter and the FAP rather than replace them."
    },
    {
      title: "SPORTS AND RACING",
      text: "Production of universal catalytic converters for road, sports and racing applications Euro 2-3-4-5-6 with a variable number of cells from 100 to 600 per unit of surface area."
    }
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-16 ">
      <div className="custom-container px-4 max-w-[1920px] mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center   xl:max-w-[50%] mx-auto mb-10 gap-4" data-aos="fade-up">
          <Typography variant="h2" color="primary" font="bebas" className="uppercase tracking-wide">
            THE SECTORS IN WHICH WE OPERATE
          </Typography>
          <Typography variant="p" color="dark" font="lato" className="text-gray-600 leading-relaxed text-sm md:text-base">
            Operational since 1999, BRAIN Srl is today the most complete flexible company in the world in the catalysis sector for cars, motorcycles and industry. Efficient service, rapid delivery times, and goods always ready for delivery have allowed us to remain competitive in a constantly evolving market.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-8  w-full">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="bg-primary rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none p-4 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-2 duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center lg:mb-6 shadow-md flex-shrink-0">
                <img src="/moto/brain-srl/settings2.png" alt="Icon" className="w-6 h-6 object-contain" />
              </div>
              <Typography variant="h3" color="white" font="bebas" className="uppercase  tracking-wide lg:mb-4 min-h-[3rem] flex items-center justify-center">
                {sector.title}
              </Typography>
              <Typography variant="p" color="white" font="lato" className="text-gray-300 text-sm leading-relaxed lg:mb-8 flex-grow">
                {sector.text}
              </Typography>

              <div className="mt-auto cursor-pointer group">
                <Typography variant="h6" color="white" font="bebas" className="uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                  READ MORE &gt;&gt;
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
