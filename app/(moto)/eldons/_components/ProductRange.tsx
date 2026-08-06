"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const newsItems = [
  {
    title: "EcoVadis Sustainability Rating",
    date: "2025-11-01",
    image: "/moto/eldons/s1.jpg",
    link: "#"
  },
  {
    title: "HALKIAS RACING TEAM at the top of the ACROPOLIS RALLY 2025",
    date: "2025-07-03",
    image: "/moto/eldons/s2.jpg",
    link: "#"
  },
  {
    title: "Rally of the Gods - Acropolis Rally 2021",
    date: "2021-09-10",
    image: "/moto/eldons/s3.jpg",
    link: "#"
  },
  {
    title: "Yet again at the highest pedestal position! Time Attack 2021",
    date: "2021-06-04",
    image: "/moto/eldons/s4.jpg",
    link: "#"
  },
  {
    title: "1st place in ranking for Simon Hatzipantelis in the Italian...",
    date: "2021-05-28",
    image: "/moto/eldons/s5.jpg",
    link: "#"
  },
  {
    title: "Operational Programmes",
    date: "2020-02-02",
    image: "/moto/eldons/s6.jpg",
    link: "#"
  }
];

export default function ProductRange() {

  return (
    <section className="w-full py-16 bg-white">
      <div className="custom-container overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:mb-5" data-aos="fade-up">
          <div className="max-w-[70%]">
            <Typography variant="h2" color="dark" className="leading-tight mb-4">
              Stay Updated With ELDON'S
            </Typography>
            <Typography variant="p" color="muted" className="mt-4 max-w-[90%] lg:max-w-[80%] text-[15px] leading-relaxed">
              Discover the latest news, company announcements, industry updates, product launches, and event highlights from ELDON'S. Explore our journey, achievements, and innovations as we continue to deliver high-quality lubricant solutions and drive excellence in the automotive industry.
            </Typography>
          </div>
          <Button text="View All News" variant="primary" />
        </div>
        <hr className="border-t border-[#E5E7EB] mt-8 mb-10 w-full" />

        <div className="relative mt-8" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
              1280: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-news' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={false}
            className="w-full pb-16 [&_.swiper-wrapper]:items-stretch"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="group relative h-full flex flex-col overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative overflow-hidden bg-gray-100 w-full aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <Typography variant="h3" color="dark" className="mb-2 text-lg lg:text-[20px] font-bold leading-snug line-clamp-2">
                      {item.title}
                    </Typography>

                    <span className="text-gray-500 text-sm mt-1 mb-6 block font-medium">
                      {item.date}
                    </span>

                    <div className="mt-auto">
                      <Link href={item.link} className="inline-flex font-bold text-primary hover:text-secondary transition-colors items-center text-[15px]">
                        Read More &raquo;
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-news mx-auto flex justify-center items-center w-full mt-6 custom-swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
// triggering rebuild
