"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Solutions() {
  const qualityCards = [
    { title: "Scientific Expertise", img: "/moto/rolf/quality1.png" },
    { title: "New Lubricant Formulations", img: "/moto/rolf/quality2.png" },
    { title: "Laboratory and Field Testing", img: "/moto/rolf/quality3.png" },
    { title: "Proven Quality in Practice", img: "/moto/rolf/quality4.png" },
  ];

  return (
    <section className="w-full py-16 bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto border-b border-white/20 pb-10" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold leading-tight mb-6">
            Our Quality Promise
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[80%] mx-auto">
            At ROLF Lubricants GmbH, quality is built into every stage of product development and manufacturing. From scientific research and advanced lubricant formulations to comprehensive laboratory and real-world testing, every product is carefully evaluated to ensure exceptional performance, reliability, and compliance with the highest international standards.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div 
          className="w-full mt-2" 
          data-aos="fade-up" 
          data-aos-delay="100"
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
            {qualityCards.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full aspect-[533/501] hover:border hover:border-primary overflow-hidden bg-[#171717] cursor-pointer">
                  {/* Image */}
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay (Hover state) */}
                  <div className="absolute inset-0 bg-[#171717]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center text-center pb-4">
                      <Typography variant="h2" color="white" className="font-semibold">
                        {card.title}
                      </Typography>
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
