"use client";

import React from "react";
import Typography from "./Typography";

const Storied = () => {
  const cards = [
    {
      img: "/moto/hasting/c1.png",
      title: "Hastings Performance",
      subtitle: "Hastings Racing Rings"
    },
    {
      img: "/moto/hasting/c2.png",
      title: "Piston Rings Komarov",
      subtitle: "European Headquarters"
    },
    {
      img: "/moto/hasting/c3.png",
      title: "Careers at Hastings",
      subtitle: "Join the Team"
    }
  ];

  return (
    <section id="storied" className="w-full relative overflow-hidden">
      {/* Responsive Background Split */}
      <div className="absolute inset-0 z-0">
        {/* White background covers left 38% on desktop, top 350px on mobile */}
        <div className="absolute left-0 top-0 w-full lg:w-[38%] h-[350px] lg:h-full bg-white"></div>
        {/* Blue background covers right 62% on desktop, bottom remainder on mobile */}
        <div className="absolute right-0 bottom-0 w-full lg:w-[62%] h-[calc(100%-350px)] lg:h-full bg-primary"></div>
      </div>

      <div className="custom-container max-w-[1920px] relative z-10 py-16 lg:py-24 flex flex-col gap-12 lg:gap-20">

        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side (on white bg) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
              <Typography variant="h4" color="primary" className="font-bold">
                Engine Components
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight uppercase lg:pr-8">
              A STORIED PAST. A SINGLE FOCUS
            </Typography>
          </div>

          {/* Right Side (on blue bg) */}
          <div className="lg:col-span-8 lg:pl-16 flex items-end justify-end ">
            <Typography variant="p" color="white" className="leading-relaxed lg:max-w-[60%] pt-10 lg:pt-0 font-medium">
              Hastings offers piston rings for nearly any application worldwide—from automotive and truck, to agriculture, industrial, small engine, as well as marine and high performance engine applications.
            </Typography>
          </div>
        </div>

        {/* Cards Flex Grid (centers odd number of cards on tablet) */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)] aspect-[510/556] overflow-hidden group shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Card Text */}
              <div className="absolute bottom-0 left-0 w-full p-8 xl:p-10 flex flex-col gap-2 z-10">
                <Typography variant="h3" color="white" className="font-bold leading-tight">
                  {card.title}
                </Typography>
                <Typography variant="p" color="white" className="text-[15px] opacity-90">
                  {card.subtitle}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Storied;
