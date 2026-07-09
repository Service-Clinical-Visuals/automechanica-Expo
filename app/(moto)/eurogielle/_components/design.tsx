"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Design() {
  const cards = [
    {
      icon: "/moto/eurogielle/icon1.png",
      title: "Design and Development",
      desc: "Our engineers and technicians bring their expertise and creativity to the forefront in developing cutting-edge filtration solutions. Utilizing advanced technologies and software, we design projects that meet the specific needs of our customers."
    },
    {
      icon: "/moto/eurogielle/icon2.png",
      title: "Production and Quality Control",
      desc: "In our state-of-the-art facility in Adria, we bring our cabin and engine filters to life. Every stage of production is carefully monitored and subjected to rigorous quality controls to ensure safety and performance."
    },
    {
      icon: "/moto/eurogielle/icon3.png",
      title: "Distribution and Support",
      desc: "Eurogielle filters are distributed globally through a network of partners and distributors. We provide ongoing technical support and training, ensuring timely and consistent service for our customers."
    }
  ];

  return (
    <section id="design" className="relative w-full py-16  bg-white overflow-hidden">
      <div className="custom-container">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-gray-400 pb-8 mb-10 " data-aos="fade-up">
          <div className="flex flex-col gap-4 max-w-full">
            <Typography variant="h2" color="primary" className="font-bold">
              From Design to Global Delivery
            </Typography>
            <Typography variant="p" className="text-gray-600 leading-relaxed text-sm lg:text-base lg:max-w-[65%]">
              Our complete process—from research and development to manufacturing, quality assurance, and global distribution—ensures every Eurogielle filter delivers exceptional performance, reliability, and lasting value.
            </Typography>
          </div>
          <div className="shrink-0 mt-2 lg:mt-0">
            <Button text="Discover Our Expertise" href="#" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-stretch ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative  flex flex-col h-full group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="relative pt-16 flex-1 flex flex-col">
                {/* Floating Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
                  <div className="bg-[#F8F8F8] rounded-full p-[10px] shadow-[8px_8px_36px_rgba(0,0,0.8,0.25),-8px_-8px_36px_rgba(255,255,255,0.15)]">
                    <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
                      <img src={card.icon} className="w-16 h-16 object-contain filter brightness-0 invert" alt={card.title} />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="relative bg-white rounded-md px-8 xl:px-12 pt-28 pb-12 text-center overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,0.10),0_6px_15px_rgba(0,0,0,0.08)] flex-1 flex flex-col">
                  {/* Notch */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-28 h-24 bg-[#F8F8F8] rounded-b-full" />

                  <Typography variant="h4" color="primary" className="font-bold mb-5">
                    {card.title}
                  </Typography>

                  <Typography variant="p" className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    {card.desc}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
