"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Gallery() {
  const galleryImages = [
    "/moto/ari-oil/gallery1.jpg",
    "/moto/ari-oil/gallery2.jpg",
    "/moto/ari-oil/gallery3.jpg",
    "/moto/ari-oil/gallery4.jpg",
    "/moto/ari-oil/gallery5.jpg",
    "/moto/ari-oil/gallery6.jpg",
    "/moto/ari-oil/gallery7.jpg",
    "/moto/ari-oil/gallery8.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16" data-aos="fade-up">
          <div className="max-w-5xl flex flex-col gap-4">
            <Typography variant="h2" color="primary" weight="extrabold">
              Our Gallery
            </Typography>
            <Typography variant="p" color="dark" >
              Explore our gallery showcasing premium lubricants, innovative product solutions, industry applications, and brand highlights. From automotive and industrial lubrication to agricultural performance, discover the quality, technology, and reliability that define our products.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button text="View All Products" variant="primary" />
          </div>
        </div>

        {/* Gallery Swiper */}
        <div className="mb-12" data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              }
            }}
            className="w-full"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full aspect-square overflow-hidden bg-primary">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Carousel indicators */}
        <div
          className="flex items-center justify-center gap-2 custom-swiper-pagination [&_.swiper-pagination-bullet]:!w-10 [&_.swiper-pagination-bullet]:!h-2 [&_.swiper-pagination-bullet]:!rounded-none [&_.swiper-pagination-bullet]:!bg-gray-300 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:skew-x-[-25deg] [&_.swiper-pagination-bullet]:transition-colors [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:!bg-secondary"
          data-aos="fade-up"
        >
        </div>

      </div>
    </section >
  );
}
