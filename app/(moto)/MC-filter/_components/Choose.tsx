"use client";

import React from "react";
import Typography from "./Typography";

const Choose = () => {
  const cards = [
    {
      title: "DOMESTIC PRODUCTION",
      desc: "Every MC Filtre product is manufactured in our advanced production facility, ensuring consistent quality, faster delivery, and strict quality control at every stage.",
    },
    {
      title: "OEM Quality",
      desc: "Designed to meet OEM standards, our filters deliver reliable performance, precise fitment, and long-lasting protection for a wide range of vehicles.",
    },
    {
      title: "Eco-Friendly",
      desc: "We follow sustainable manufacturing practices and use environmentally responsible materials to create filters that help reduce emissions and support a cleaner future.",
    },
    {
      title: "Difference in Quality",
      desc: "From premium raw materials to rigorous testing, every MC Filtre product is engineered to provide superior filtration, durability, and dependable performance.",
    },
  ];

  return (
    <section id="choose" className="w-full relative z-10">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
        <div className="flex-1 bg-[#04000B]"></div>
        <div className="flex-1 bg-[#F1F1F1]"></div>
      </div>

      <div className="custom-container relative z-10 py-12 md:py-16 2xl:py-24 flex flex-col gap-12 lg:gap-20">

        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full">
          {/* Titles */}
          <div className="flex flex-col gap-4 max-w-xl" data-aos="fade-right">
            <div className="inline-block">
              <Typography variant="h5" color="white" className="font-bold uppercase tracking-wider">
                MC FILTER INDUSTRY AND TRADE INC.
              </Typography>
              <div className="w-full h-1 bg-white mt-1"></div>
            </div>
            <Typography variant="h2" color="white" className="font-bold uppercase mt-2">
              WHY CHOOSE MCFILTRE?
            </Typography>
          </div>

          {/* Right Text */}
          <div className="lg:max-w-md text-left lg:text-right" data-aos="fade-left">
            <Typography variant="p" color="white" className="leading-relaxed text-gray-300">
              By combining its expert team with a wide range of products, machinery, and production capabilities, the company offers fast and economical solutions.
            </Typography>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-secondary shadow-xl flex flex-col items-center text-center gap-6 group hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/moto/mc-filter/settings3.png"
                  alt={card.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4">
                <Typography variant="h4" color="primary" className="font-bold leading-tight">
                  {card.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm leading-relaxed">
                  {card.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Choose;
