"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  // Slide 1
  [
    {
      image: "/moto/swd/cat1.png",
      title: "Additives",
      desc: "High-quality additives from our own production ensure improved engine performance while simultaneously reducing fuel consumption."
    },
    {
      image: "/moto/swd/cat2.png",
      title: "Vehicle Care",
      desc: "We develop high-quality car care products for interior and exterior vehicle cleaning. The range includes effective cleaners for rims, brakes, engines, and other vehicle areas."
    },
    {
      image: "/moto/swd/cat3.png",
      title: "Industry",
      desc: "For industrial applications, we offer a wide range of high-performance lubricants. Our customers include oil companies, steel mills, transport companies."
    }
  ],
  // Slide 2
  [
    {
      image: "/moto/swd/cat2.png",
      title: "Vehicle Care",
      desc: "We develop high-quality car care products for interior and exterior vehicle cleaning. The range includes effective cleaners for rims, brakes, engines, and other vehicle areas."
    },
    {
      image: "/moto/swd/cat1.png",
      title: "Additives",
      desc: "High-quality additives from our own production ensure improved engine performance while simultaneously reducing fuel consumption."
    },
    {
      image: "/moto/swd/cat3.png",
      title: "Industry",
      desc: "For industrial applications, we offer a wide range of high-performance lubricants. Our customers include oil companies, steel mills, transport companies."
    }
  ]
];

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-5xl mx-auto" data-aos="fade-up">
          <h2 className="font-primary font-bold text-3xl md:text-4xl lg:text-[42px] text-[#2D3B6F] leading-tight">
            Product Categories
          </h2>
          <p className="font-secondary font-normal text-[#222222] text-sm md:text-base lg:text-lg leading-relaxed">
            Our product categories include high-quality lubricants, industrial oils, specialty products, and additives – from automotive solutions to products for a wide range of applications. We offer the right solution for every application.
          </p>
        </div>

        {/* 2-Slide Swiper Carousel (Each slide contains 3 cards) */}
        <div className="w-full mt-5 md:mt-8 relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {slidesData.map((slideItems, slideIdx) => (
              <SwiperSlide key={slideIdx} className="w-full pb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                  {slideItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative w-full h-[360px] rounded-2xl md:rounded-[28px] overflow-hidden shadow-lg group bg-gray-900"
                    >
                      {/* Background Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "/moto/swd/abt.png";
                        }}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                      {/* Bottom Text Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col gap-2 z-10">
                        <h3 className="font-primary font-bold text-xl sm:text-2xl text-white tracking-wide">
                          {item.title}
                        </h3>
                        <p className="font-secondary text-sm sm:text-base text-white/90 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dynamic Pagination Dots / Bars for exactly 2 slides */}
        <div className="flex items-center justify-center gap-2 mt-6 md:mt-10" data-aos="fade-up">
          {slidesData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? "w-12 bg-[#2D3B6F]" : "w-8 bg-gray-300"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
