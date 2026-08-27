"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "EM1",
    name: "Engine Mount",
    image: "/moto/itw-international/p1.jpg",
  },
  {
    id: "F1",
    name: "Filter",
    image: "/moto/itw-international/p2.jpg",
  },
  {
    id: "HL9",
    name: "Head Light",
    image: "/moto/itw-international/p3.jpg",
  },
  {
    id: "PC9",
    name: "High Quality Plug Cable",
    image: "/moto/itw-international/p4.jpg",
  },
  {
    id: "IC5",
    name: "Ignition Coil",
    image: "/moto/itw-international/p5.jpg",
  },
  {
    id: "OS5",
    name: "Oxygen Sensor",
    image: "/moto/itw-international/p6.jpg",
  },
  {
    id: "WP1",
    name: "watet pump&engine mount",
    image: "/moto/itw-international/p7.jpg",
  },
  {
    id: "FC7",
    name: "Two Step Forging Clamps",
    image: "/moto/itw-international/p8.jpg",
  },
];

export default function OurProducts() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50" id="products">
      <div className="custom-container">
        {/* Header Content */}
        <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="section-title font-semibold text-[#1a1a1a] mb-6">
            Complete Automotive Component Solutions
          </h2>
          <p className="section-text text-[#585858] font-medium">
            Discover our comprehensive range of high-quality automotive components, engineered for reliable performance, precise fitment, and long-lasting durability. From engine and ignition parts to filtration, lighting, sensors, and mounting solutions, we deliver dependable products for a wide range of vehicle applications.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="w-full relative px-4" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="pb-16"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="bg-white border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                  <div className="w-full  p-4 relative mb-4  overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain border border-gray-200"
                    />
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-semibold text-[#333333] card-text uppercase tracking-wider">
                      {product.id}
                    </span>
                    <Link
                      href="#"
                      className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-md btn-text font-semibold flex items-center gap-1 hover:bg-black transition-colors"
                    >
                      {product.name} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="flex justify-center mt-14">
            <div className="custom-pagination flex gap-2 items-center justify-center"></div>
          </div>

          <style jsx global>{`
            .custom-pagination .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background-color: #d1d5db;
              opacity: 1;
              border-radius: 50%;
              transition: all 0.3s ease;
            }
            .custom-pagination .swiper-pagination-bullet-active {
              background-color: #f59e0b; /* Amber/Orange color */
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
