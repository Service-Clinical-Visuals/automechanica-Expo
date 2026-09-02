"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Solutions() {
  const cards = [
    {
      title: "Diagnostic Tool",
      desc: "ICON is the only diagnostic tool you need. Vehicle diagnostic solutions for passenger cars, trucks, trailers and buses.",
      img: "/moto/autocam/solution1.png"
    },
    {
      title: "Diagnostic Tablet",
      desc: "A tablet with high performance and great durability. Specifically selected for use in automotive workshops for service and repair work.",
      img: "/moto/autocam/solution2.png"
    },
    {
      title: "Secure Gateway",
      desc: "Access to vehicle manufacturers security locked car models and systems. Easy, legal, fast and seamless.",
      img: "/moto/autocam/solution3.png"
    },
    {
      title: "ADAS cars calibration",
      desc: "Mobile solution for calibration of the assistance systems on most brands and models in the market.",
      img: "/moto/autocam/solution4.png"
    },

  ];

  return (
    <section className="w-full py-16   overflow-hidden">
      <div className="custom-container flex flex-col gap-10 ">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 border-b border-white/20 pb-8" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold leading-tight">
            Comprehensive Diagnostic Solutions
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed w-[90%] xl:w-[70%]">
            Explore Autocom's complete range of advanced diagnostic and calibration solutions, designed to support modern workshops with accurate vehicle diagnostics, secure gateway access, ADAS calibration, and high-performance diagnostic tools for passenger cars, trucks, buses, and trailers.
          </Typography>
        </div>

        {/* Swiper Slider */}
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
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1536: { slidesPerView: 3 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="!h-full pb-2">
                <div className="flex flex-col h-full rounded-lg transition-transform duration-700 group-hover:scale-105 overflow-hidden border border-white/20   bg-transparent group shadow-xl">
                  {/* Image */}
                  <div className="w-full p-5 aspect-[16/10] overflow-hidden ">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover border border-white/20  "
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                    <div className="flex flex-col gap-3">
                      <Typography variant="h3" color="white" className="font-semibold">
                        {card.title}
                      </Typography>
                      <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                        {card.desc}
                      </Typography>
                    </div>
                    <div className="mt-4">
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
