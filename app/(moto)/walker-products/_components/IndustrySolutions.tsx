"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";

export default function IndustrySolutions() {
  const industrySolutions = [
    {
      title: "Automotive Solutions",
      description: "Walker Products is a trusted leader in engine management solutions, offering premium components like fuel delivery systems, sensors, and ignition wire sets.",
      img: "/moto/walker-products/industry-1.jpg",
      link: "#"
    },
    {
      title: "Commercial Vehicles",
      description: "Walker Products provides Genuine OE sensors designed for reliability and performance in commercial vehicles. Built for OE fit and durability, our solutions.",
      img: "/moto/walker-products/industry-2.jpg",
      link: "#"
    },
    {
      title: "Othermotive® Applications",
      description: "Walker Products supports non-automotive applications like snowmobiles, boats, motorcycles, UTVs, and farm machinery with precision-engineered components.",
      img: "/moto/walker-products/industry-3.jpg",
      link: "#"
    },
    {
      title: "Custom Manufacturing",
      description: "Walker Products specializes in custom manufacturing, including gasket stamping, PCB design, and engine sensor production. Using premium materials and quality",
      img: "/moto/walker-products/industry-4.jpg",
      link: "#"
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="industry-solutions">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block: Centered Title & Description */}
        <div className="flex flex-col items-center text-center mx-auto max-w-6xl gap-3 md:gap-4" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight">
            Complete Solutions For Every Industry
          </Typography>
          <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-xs sm:text-sm md:text-base">
            Explore Walker Products, Inc.&apos;s comprehensive range of automotive, commercial vehicle, Othermotive®, and custom manufacturing solutions. Engineered to meet OEM standards, our products deliver exceptional reliability, precision, and performance across a wide range of applications.
          </Typography>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 3 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {industrySolutions.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-2">
                <div className="group relative w-full h-full border border-white/20 bg-[#2C2C2C] p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/40 shadow-xl rounded-sm cursor-pointer">
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/2.5] rounded-sm overflow-hidden bg-black flex items-center justify-center">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Circular Yellow Arrow Button */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#F9EA4F] flex items-center justify-center shadow-lg text-black group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4 text-black" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col items-center text-center gap-2.5 mt-5">
                    <Typography variant="h3" color="white" className="font-semibold text-lg md:text-xl lg:text-2xl leading-snug">
                      {card.title}
                    </Typography>
                    <Typography variant="p" color="white" className="text-white/75 text-xs sm:text-sm leading-relaxed text-center line-clamp-2">
                      {card.description}
                    </Typography>
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
