"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    { img: "/moto/meyle/product1.png", title: "Steering And Suspension Parts" },
    { img: "/moto/meyle/product2.png", title: "Brakes" },
    { img: "/moto/meyle/product3.png", title: "Drive Components" },
    { img: "/moto/meyle/product4.png", title: "Suspension & Damping Parts" },
    { img: "/moto/meyle/product5.png", title: "Thermal Management & Engine Cooling" },
    { img: "/moto/meyle/product6.png", title: "Electronics" },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24" id="products">
      <div className="custom-container">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16" data-aos="fade-up">
          <Typography variant="h2" color="dark" weight="bold" className="font-oswald tracking-tight mb-6">
            Our Product Categories
          </Typography>
          <Typography variant="p" color="dark" className="font-lato max-w-full lg:max-w-[75%] mx-auto leading-relaxed">
            Explore our comprehensive range of premium automotive components, engineered for exceptional performance, reliability, and durability. From braking systems to steering, suspension, electronics, and electromobility solutions, every product is designed to meet the highest quality standards and deliver confidence on every journey.
          </Typography>
        </div>

        {/* Carousel */}
        <div className="relative w-full" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-4"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="bg-white border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.06)] p-3 md:p-4 flex flex-col w-full h-full hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div className="w-full aspect-square overflow-hidden mb-6 relative">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>

                  <div className="flex flex-col items-center justify-between flex-grow text-center px-2 pb-2">
                    <Typography variant="h3" color="dark" weight="bold" className="font-oswald mb-4 leading-tight w-full">
                      {product.title}
                    </Typography>

                    <Link href="#" className="mt-auto group">
                      <Typography variant="h3" color="primary" weight="bold" className="font-oswald underline group-hover:underline underline-offset-4">
                        Read More &gt;&gt;
                      </Typography>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom 3-Pill Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12 w-full">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                onClick={() => swiperInstance?.slideToLoop(i)}
                className={`w-[32px] h-[8px] rounded-full cursor-pointer transition-all ${(activeIndex % 3) === i ? "bg-[var(--color-primary)]" : "bg-[#d1d5db]"
                  }`}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
