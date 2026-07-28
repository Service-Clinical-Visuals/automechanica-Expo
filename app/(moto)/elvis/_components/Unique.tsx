"use client";

import React from "react";
import Typography from "./Typography";

export default function Unique() {
  const cards = [
    {
      title: "Timing chain kit",
      img: "/moto/et-engine/unique1.png"
    },
    {
      title: "Camshaft kit",
      img: "/moto/et-engine/unique2.png"
    }
  ];

  return (
    <section className="relative w-full py-10  bg-[#232323] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/moto/et-engine/bg.png" alt="Background pattern" className="w-full h-full object-cover" />
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center  mx-auto mb-12 lg:mb-20" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight mb-4 lg:mb-6">
            Unique Sets
          </Typography>
          <Typography variant="p" color="white" className=" leading-relaxed max-w-[70%]">
            ET ENGINETEAM offers comprehensive repair kits containing carefully selected engine components for professional repairs. Developed with feedback from workshops and mechanics, our solutions ensure the right parts, reliable quality, and efficient installation for every application.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full" data-aos="fade-up" data-aos-delay="100">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center overflow-hidden transition-transform hover:-translate-y-2 duration-500"
            >
              <div className="w-full  aspect-video relative overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full  rounded-[2rem]  h-full object-cover"
                />
              </div>
              <div className="w-full py-6 md:py-8 flex justify-center items-center">
                <Typography variant="h4" color="white" className="font-semibold tracking-wide">
                  {card.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
