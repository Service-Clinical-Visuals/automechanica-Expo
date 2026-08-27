"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Designing the Future",
    desc: "ELDON'S stands out via its professional approach and its creative concern. It is constantly at the forefront of developments, making the most of our human capital and its potential, its breakthrough specialization and new technologies. The company has co-authored series of articles, presentations and original publications on its sector.",
    image: "/moto/eldons/d1.jpg",
  },
  {
    title: "Always One Step Ahead",
    desc: "Since its foundation, the company has been constantly investing in Research and Development, participating in special programs, developing partnerships with internationally renowned organizations and research centers. ELDON'S makes the best out of its science and technology departments, focusing on the technological superiority of its products and services.",
    image: "/moto/eldons/d2.jpg",
  },
  {
    title: "A Lifetime Partner By Your Side",
    desc: "At ELDON'S, its partners are a main priority. The accumulated experience, know-how and high specialization of almost 5 decades, serve as its credentials in an effort to provide a full spectrum of solutions. The continuous and effective support of its clients, the top-quality lubrication products, the state-of-the-art technology and the high-level services, are the foundations on which these bonds are built.",
    image: "/moto/eldons/d3.jpg",
  },
];

export default function DrivingNews() {
  return (
    <section className="w-full py-16 min-[3800px]:py-24 bg-white">
      <div className="custom-container">
        {/* Header */}
        <div className="text-center flex items-center flex-col justify-center mx-auto mb-5" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="mb-2">
            Driving Excellence Through Innovation
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            Discover what makes ELDON'S a trusted name in lubricant solutions. With a strong commitment to quality, innovation, and customer satisfaction, we develop high-performance products that meet the evolving needs of modern industries. From advanced technology and continuous research to reliable service and long-term partnerships, we are dedicated to delivering solutions that ensure performance, protection, and lasting value.
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
              768: { slidesPerView: 1, slidesPerGroup: 1 },
              1024: { slidesPerView: 1, slidesPerGroup: 1 },
              1280: { slidesPerView: 1, slidesPerGroup: 1 },
            }}
            pagination={{ clickable: true, el: '.driving-swiper-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="group relative w-full aspect-[1680/588] overflow-hidden rounded-sm cursor-pointer border border-gray-100 shadow-sm">
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-secondary)]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-6 lg:p-12">
                    <div className="max-w-[90%] lg:max-w-[80%]">
                      <Typography variant="h3" color="white" className="text-white font-bold drop-shadow-md mb-4">
                        {slide.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-white/90 leading-relaxed text-sm md:text-base">
                        {slide.desc}
                      </Typography>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="driving-swiper-pagination custom-swiper-pagination mt-10 flex justify-center" />
        </div>
      </div>
    </section>
  );
}
