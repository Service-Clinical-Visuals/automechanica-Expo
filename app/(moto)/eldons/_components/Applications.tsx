"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const applications = [
  { title: "Automotive Lubricants", image: "/moto/eldons/c1.jpg" },
  { title: "Construction Equipment Lubricants", image: "/moto/eldons/c2.jpg" },
  { title: "Agricultural Equipment Lubricants", image: "/moto/eldons/c3.jpg" },
  { title: "Industrial Lubricants", image: "/moto/eldons/c4.jpg" },
  { title: "Greases & Specialty Pastes", image: "/moto/eldons/c5.jpg" },
  { title: "Marine Lubricants", image: "/moto/eldons/c6.jpg" },
  { title: "Leisure Boat Lubricants", image: "/moto/eldons/c7.jpg" },
  { title: "Food Grade Lubricants", image: "/moto/eldons/c8.jpg" },
  { title: "Biodegradable Lubricants", image: "/moto/eldons/c9.jpg" },
];

export default function Applications() {
  return (
    <section className="w-full py-16 min-[3800px]:py-24 bg-white">
      <div className="custom-container">
        {/* Header */}
        <div className="text-center flex items-center flex-col justify-center  mx-auto mb-12" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="mb-6">
            Lubricants For Every Application
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            ELDON'S offers one of the most comprehensive portfolios of lubricants and greases, covering needs ranging from passenger vehicles and heavy-duty fleets to the most demanding industrial and marine applications. We provide specialized food-grade lubricants for safety-critical applications, engineered to OEM specifications and operating conditions to ensure maximum equipment protection, reliable performance, and enhanced hygiene standards.
          </Typography>
        </div>

        {/* Slider */}
        <div className="relative mt-8" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 2, slidesPerGroup: 1 },
              1280: { slidesPerView: 2, slidesPerGroup: 1 },
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-apps' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {applications.map((app, index) => (
              <SwiperSlide key={index}>
                <div className="group relative w-full aspect-[820/497] overflow-hidden rounded-sm cursor-pointer border border-gray-100 shadow-sm">
                  {/* Image */}
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-secondary)]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 lg:p-8">
                    <Typography variant="h3" color="white" className="text-white font-bold drop-shadow-md">
                      {app.title}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-apps custom-swiper-pagination w-full mt-10 flex justify-center" />
        </div>
      </div>
    </section>
  );
}
