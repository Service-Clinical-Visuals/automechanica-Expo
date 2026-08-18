"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

const Professional = () => {
  const cards = [
    {
      title: "OUR MISSION",
      heading: "Our Mission Is to Manufacture Premium Automotive Filters",
      desc: "To develop filter solutions that provide maximum efficiency in every field, from industry to automotive, through smart manufacturing and sustainable technologies.",
      img: "/moto/mc-filter/s1.jpg",
    },
    {
      title: "OUR VISION",
      heading: "To be a Globally Trusted Leader in Advanced Automotive Filtration",
      desc: "Manufactured to meet stringent quality standards, MC AIR FILTER cabin filters deliver reliable performance, extended service life, and an ideal fit for a wide range of passenger and commercial vehicles.",
      img: "/moto/mc-filter/s2.jpg",
    }
  ];

  return (
    <section id="professional" className="w-full py-12 md:py-16 2xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-16">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl" data-aos="fade-up">
          <div className="inline-block flex flex-col items-center">
            <Typography variant="h5" color="primary" className="font-bold uppercase tracking-wider">
              CLEAN AIR
            </Typography>
            <div className="w-full h-[2px] bg-secondary mt-1"></div>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Professional Automotive Treatments Improving Comfort and Confidence
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row w-full max-w-[100%] rounded-2xl overflow-hidden shadow-xl group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image Half */}
              <div className="w-full sm:w-1/2 relative aspect-square sm:aspect-auto">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Half */}
              <div className="w-full sm:w-1/2 bg-primary p-8 md:p-10 lg:p-12 flex flex-col gap-6 justify-center text-white relative z-10">
                <Typography variant="h5" color="white" className="font-bold underline decoration-secondary decoration-2 tracking-wider text-sm">
                  {card.title}
                </Typography>

                <Typography variant="h4" color="white" className="font-bold leading-snug">
                  {card.heading}
                </Typography>

                <Typography variant="p" color="white" className="text-gray-300 leading-relaxed text-sm">
                  {card.desc}
                </Typography>

                <a href="#discover" className="mt-4 flex underline items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-semibold tracking-wide w-fit">
                  View More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Professional;
