"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function Products() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const products = [
    {
      id: 1,
      name: "SYNTH RACING PREMIUM SAE 5W30",
      description: "Synthetic multigrade motor oil that meets the strictest requirements for gasoline and diesel engines of...",
      image: "/moto/exol/product4.png"
    },
    {
      id: 2,
      name: "ANTIFREEZE G12",
      description: "It functions as both an antifreeze and an engine coolant, providing excellent corrosion protection for all...",
      image: "/moto/exol/product5.png"
    },
    {
      id: 3,
      name: "LONG LIFE SAE 20W60",
      description: "High-quality mineral oil for gasoline and diesel engines in passenger cars and light commercial...",
      image: "/moto/exol/product1.png"
    },
    {
      id: 4,
      name: "STARTER PLUS 45AH D+",
      description: "The battery is made with Ca-Ca technology and does not require maintenance.",
      image: "/moto/exol/product2.png"
    },
    {
      id: 5,
      name: "SAE 85W90",
      description: "High-quality multi-grade oil for lubricating hypoid gear transmissions in motor vehicles operating under...",
      image: "/moto/exol/product3.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container relative">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <Typography variant="h2" color="primary" weight="bold" className="mb-2">
            Most Popular Products
          </Typography>

          <div className="relative w-[24%] mb-3 ">
            <div className="h-[2px]  bg-gray-300"></div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 border-2 border-gray-500 bg-white"></div>
          </div>

          <Typography variant="p" className="text-[#666666] xl:max-w-[70%] w-full mx-auto text-sm md:text-base leading-relaxed">
            Our range of automotive products is designed to deliver dependable performance, enhanced protection, and long-lasting reliability across a variety of vehicle applications. From engine oils and gear lubricants to batteries and cooling fluids, each product is developed to help improve efficiency, protect critical components, and ensure smooth operation in demanding conditions.
          </Typography>
        </div>

        {/* Carousel Arrows */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="hidden lg:flex absolute left-0 xl:-left-6 top-[60%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full items-center justify-center hover:bg-primary-hover transition-colors shadow-md z-10"
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="hidden lg:flex absolute right-0 xl:-right-6 top-[60%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full items-center justify-center hover:bg-primary-hover transition-colors shadow-md z-10"
        >
          <ArrowRight size={20} strokeWidth={2.5} />
        </button>

        {/* Swiper Carousel */}
        <div className="px-2 lg:px-6">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full h-auto !pb-4"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id} className="!h-auto flex">
                <div
                  className="bg-white border-2 border-gray-100 p-2 md:p-5 w-full shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="w-full aspect-[4/3] bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[100%] w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow pt-4 pb-4  bg-white">
                    <Typography variant="h5" weight="bold" className="text-secondary mb-2 uppercase tracking-wide">
                      {product.name}
                    </Typography>
                    <Typography variant="p" className="text-[#666666] flex-grow line-clamp-2 mb-4">
                      {product.description}
                    </Typography>

                    <Link
                      href="#"
                      className="inline-block font-bold text-primary hover:text-primary-hover transition-colors text-[18px] md:text-[20px] underline underline-offset-4 decoration-2"
                    >
                      View More
                    </Link>
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
