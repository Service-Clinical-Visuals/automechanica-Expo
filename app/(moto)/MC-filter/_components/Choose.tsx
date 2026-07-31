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

      <div className="custom-container relative z-10 py-12 md:py-16 2xl:py-24 min-[2100px]:py-32 min-[3800px]:py-48 flex flex-col gap-12 lg:gap-20 min-[2100px]:gap-28 min-[3800px]:gap-40">

        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full">
          {/* Titles */}
          <div className="flex flex-col gap-4 min-[3800px]:gap-8 max-w-[70%]" data-aos="fade-right">
            <div className="inline-block">
              <Typography variant="h5" color="white" className="font-bold uppercase tracking-wider">
                MC FILTER INDUSTRY AND TRADE INC.
              </Typography>
              <div className="w-full h-1 min-[3800px]:h-2 bg-white mt-1 min-[3800px]:mt-3"></div>
            </div>
            <Typography variant="h2" color="white" className="font-bold uppercase mt-2">
              WHY CHOOSE MCFILTRE?
            </Typography>
          </div>

          {/* Right Text */}
          <div className="lg:max-w-m[50%] text-left lg:text-right" data-aos="fade-left">
            <Typography variant="p" color="white" className="leading-relaxed text-gray-300 min-[2100px]:text-xl min-[3800px]:text-3xl">
              By combining its expert team with a wide range of products, machinery, and production capabilities, the company offers fast and economical solutions.
            </Typography>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-[2100px]:gap-10 min-[3800px]:gap-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl min-[3800px]:rounded-3xl p-8 min-[2100px]:p-12 min-[3800px]:p-20 border-2 min-[3800px]:border-4 border-secondary shadow-xl flex flex-col items-center text-center gap-6 min-[3800px]:gap-12 group hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 min-[2100px]:w-28 min-[2100px]:h-28 min-[3800px]:w-40 min-[3800px]:h-40 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/moto/mc-filter/settings3.png"
                  alt={card.title}
                  className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-20 min-[3800px]:h-20 object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 min-[3800px]:gap-8">
                <Typography variant="h4" color="primary" className="font-bold leading-tight min-[2100px]:text-2xl min-[3800px]:text-4xl">
                  {card.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm min-[2100px]:text-lg min-[3800px]:text-2xl leading-relaxed">
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
