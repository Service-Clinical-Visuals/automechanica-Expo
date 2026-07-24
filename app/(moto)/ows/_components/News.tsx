"use client";

import React from "react";
import Typography from "./Typography";

const News = () => {
  const qualityItems = [
    {
      img: "/moto/ows/icon1.png",
      title: "Independently Tested",
      desc: "Each product is subjected to comprehensive independent laboratory testing to ensure it meets strict quality standards, delivers consistent performance, and provides long-lasting protection under demanding operating conditions."
    },
    {
      img: "/moto/ows/icon2.png",
      title: "CFC-Free Formula",
      desc: "OWS products are formulated without CFCs, helping protect the ozone layer while complying with environmental standards. This commitment ensures high-performance solutions that are both effective and environmentally responsible."
    },
    {
      img: "/moto/ows/icon3.png",
      title: "Premium Performance",
      desc: "Developed with German engineering expertise, OWS products are built to perform under extreme temperatures, high engine loads, and demanding driving conditions while ensuring maximum protection and efficiency."
    }
  ];

  return (
    <section id="quality" className="w-full py-24 bg-[#FAFAFA]">
      <div className="custom-container flex flex-col gap-14 items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 " data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold uppercase tracking-wide text-[28px] sm:text-[32px]">
            CERTIFIED QUALITY & TRUSTED PERFORMANCE
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed xl:max-w-[85%] ">
            Every OWS product is developed to meet high-quality standards, combining independent testing, environmentally responsible formulations, and German engineering for reliable performance.
          </Typography>
        </div>

        {/* 3-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16">
          {qualityItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white border border-gray-100 p-8 xl:p-12 2xl:p-16 shadow-sm rounded-sm" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="h-28 xl:h-36 2xl:h-40 flex items-center justify-center mb-6">
                 <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <Typography variant="h4" color="dark" className="font-bold mb-4">
                {item.title}
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed ">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
