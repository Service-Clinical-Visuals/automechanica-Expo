"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const InnovationSection = () => {
  const cards = [
    {
      image: "/moto/eurol/section7.png",
      title: "Toyota Gazoo Racing",
      desc: "Eurol provides technical support to the Toyota GAZOO Racing factory team."
    },
    {
      image: "/moto/eurol/section71.png",
      title: "Chip Ganassi Racing",
      desc: "Powerful Collaboration: Eurol & Chip Ganassi Racing in INDYCAR"
    },
    {
      image: "/moto/eurol/section72.png",
      title: "Invicta Racing",
      desc: "Eurol & Invicta Racing: Powering Performance in Formula 2"
    },
    {
      image: "/moto/eurol/section73.png",
      title: "Eurol Rally Sport",
      desc: "Eurol Rally Sport driver and navigator test our products in the most harsh conditions"
    },
    {
      image: "/moto/eurol/section74.png",
      title: "Tom Coronel",
      desc: "Tom Coronel has driven the Dakar Rally and tested our top products"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#112C63] relative overflow-hidden" id="innovation">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-5xl">
            <Typography variant="h2" color="white" className="font-goldman mb-4 text-3xl md:text-4xl">
              Driving Victory Through Innovation
            </Typography>
            <Typography variant="body" color="white" className="font-albert opacity-90 text-sm md:text-base leading-relaxed">
              Our motorsport collaborations serve as the ultimate testing ground for advanced lubricant technology. By supporting championship-winning teams,
            </Typography>
          </div>

          <div className="shrink-0 font-goldman">
            <Button text="See All" />
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="swiper-button-prev-innov  absolute left-0 top-[125px] lg:top-[202px] -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 z-10 bg-white text-[#112C63] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors hidden sm:flex cursor-pointer">
            <ChevronLeft size={24} />
          </button>

          <button className="swiper-button-next-innov absolute right-0 top-[125px] lg:top-[202px] -translate-y-1/2 translate-x-1/2 md:translate-x-4 z-10 bg-white text-[#112C63] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors hidden sm:flex cursor-pointer">
            <ChevronRight size={24} />
          </button>

          {/* Carousel Cards */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev-innov',
              nextEl: '.swiper-button-next-innov',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            className="w-full"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group cursor-pointer flex flex-col h-full w-full max-w-[517px] mx-auto">
                  <div className="h-[250px] lg:h-[405px] overflow-hidden rounded-[16px] mb-6 shrink-0 w-full">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="flex justify-between items-start grow gap-4">
                    <div>
                      <Typography variant="h5" color="white" weight="light" className="font-goldman  mb-2">
                        {card.title}
                      </Typography>
                      <Typography variant="body" color="white" weight="light" className="font-albert   leading-relaxed">
                        {card.desc}
                      </Typography>
                    </div>
                    <div className="bg-secondary text-white border border-white w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center shrink-0 mt-1 hover:bg-secondary-hover transition-colors">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default InnovationSection;
