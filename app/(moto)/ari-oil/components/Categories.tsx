"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Categories() {
  const baseCategories = [
    {
      title: "Motor Oils",
      description: "Motor oils that can provide high perfomance in every condition and climate.",
      image: "/moto/ari-oil/category2.jpg",
      href: "#",
    },
    {
      title: "Industrial Oils",
      description: "Products that improve productivity, profitability, efficiency, reliability, and long-term performance.",
      image: "/moto/ari-oil/category1.jpg",
      href: "#",
    },
    {
      title: "Greases & Special Products",
      description: "Special production depending customer requests and R&D projects are progressing every day All types...",
      image: "/moto/ari-oil/category3.jpg",
      href: "#",
    },
  ];

  // Duplicate the array so Swiper can seamlessly loop when slidesPerView is 3
  const categories = [...baseCategories, ...baseCategories];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <Typography variant="h2" color="primary" weight="extrabold" className="mb-4">
            Our Categories
          </Typography>
          <Typography variant="p" color="dark" >
            Discover a comprehensive range of high-performance lubricants engineered to meet the demands of automotive, industrial, agricultural, and heavy-duty applications. From advanced motor oils and gear lubricants to industrial fluids and specialty greases, our products are designed to deliver superior protection, enhanced efficiency, and long-lasting reliability under the most challenging operating conditions.
          </Typography>
        </div>

        {/* Categories Swiper */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              el: '.custom-categories-pagination',
              clickable: true,
            }}
            className="w-full !pb-4"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="bg-white border border-gray-100 p-3 shadow-sm w-full h-full flex flex-col group transition-all duration-300 hover:shadow-md">
                  {/* Image Container */}
                  <div className="p-4 pb-0">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-5 flex flex-col grow">
                    <Typography variant="h4" color="primary" weight="bold" className="mb-2 text-[1.25rem]">
                      {category.title}
                    </Typography>
                    <Typography variant="p" color="dark" className=" font-oswald mb-6 text-[0.85rem] !leading-relaxed">
                      {category.description}
                    </Typography>

                    <div className="mt-auto">
                      <Link
                        href={category.href}
                        className="inline-flex items-center underline underline-offset-4 decoration-2 text-secondary font-bold font-oswald text-lg hover:text-red-700 transition-colors"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Carousel indicators */}
        <div
          className="flex items-center justify-center gap-2 custom-categories-pagination [&_.swiper-pagination-bullet]:!w-8 [&_.swiper-pagination-bullet]:!h-1.5 [&_.swiper-pagination-bullet]:!rounded-none [&_.swiper-pagination-bullet]:!bg-gray-300 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:skew-x-[-25deg] [&_.swiper-pagination-bullet]:transition-colors [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:!bg-primary"
          data-aos="fade-up"
        >
        </div>

      </div>
    </section>
  );
}
