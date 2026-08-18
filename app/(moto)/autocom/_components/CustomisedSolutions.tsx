"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CustomisedSolutions() {
  const cards = [
    {
      title: "Online Diagnostics",
      desc: "Our vision is to provide the right vehicle information when and where it is needed. We create customised online solutions based on your needs.",
      img: "/moto/autocam/custom1.png"
    },
    {
      title: "Predictive Maintenance",
      desc: "Preventative maintenance is a lucrative area in which many parties in the automotive industry can save a lot of time, energy and resources.",
      img: "/moto/autocam/custom2.png"
    },
    {
      title: "Real Time Data",
      desc: "Vehicle technical solutions are getting ever more advanced, and with them the needs to communicate with vehicles in real time.",
      img: "/moto/autocam/custom3.png"
    },
    {
      title: "Vehicle data",
      desc: "For over 30 years, Autocom has built up a massive database of raw, vehicle specific data that can provide access to every system in a vehicle.",
      img: "/moto/autocam/custom4.png"
    }
  ];

  return (
    <section className="relative w-full py-10 bg-[var(--background)] overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-6" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold leading-tight">
            Customised Solutions
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed w-[90%] xl:w-[75%]">
            Our vehicle diagnostics products are the result of a genuine passion for problem-solving and a service mindset solutions. Our product range consists of high-tech, user-friendly and reliable solutions developed for vehicle workshops, vehicle inspection companies, vehicle fleet owners, salvage organisations, Police, armed forces and schools.
          </Typography>
        </div>

        {/* Cards Grid / Swiper */}
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="!h-full pb-2">
                <div className="flex flex-col h-full   overflow-hidden border border-white/20 bg-secondary/60 group shadow-xl">
                  {/* Image */}
                  <div className="w-full p-5 aspect-[16/10] overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform  border border-white/20 duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-4 flex-grow justify-between ">
                    <div className="flex flex-col gap-3">
                      <Typography variant="h3" color="white" className="font-semibold">
                        {card.title}
                      </Typography>
                      <Typography variant="p" color="white" className="leading-relaxed text-sm md:text-base opacity-90">
                        {card.desc}
                      </Typography>
                    </div>
                    <div className="mt-6">
                      <Button text="Read More" href="#" showIcon={true} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
