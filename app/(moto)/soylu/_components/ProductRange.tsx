"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    title: "Fast - Moving Products",
    description: "Our new generation exhaust systems, which we have developed with our superior engineering and workmanship from our... ",
    image: "/moto/soylu/products/product1.png"
  },
  {
    title: "Euro I, II, III Exhaust Systems",
    description: "Engineered for Euro I, II, and III vehicles, our exhaust systems provide reliable performance and efficient exhaust flow.",
    image: "/moto/soylu/products/product2.png"
  },
  {
    title: "Euro IV, V Exhaust Systems",
    description: "High-quality exhaust systems engineered to meet Euro IV and Euro V emission standards with dependable performance.",
    image: "/moto/soylu/products/product3.png"
  },
  {
    title: "Exhaust Systems for Buses",
    description: "Engineered for reliable performance, durability, and efficient emission control in modern bus applications.",
    image: "/moto/soylu/products/product4.png"
  },
  {
    title: "Universal Products",
    description: "Our universal products deliver reliable performance and versatile compatibility across commercial vehicle applications.",
    image: "/moto/soylu/products/product5.png"
  },
  {
    title: "NOx Sensors",
    description: "Our NOx Sensors deliver precise emission monitoring, reliable engine performance, and long-lasting durability.",
    image: "/moto/soylu/products/product6.png"
  },
  {
    title: "Temperature Sensors",
    description: "Our Temperature Sensors deliver accurate monitoring, reliable performance, and durability for commercial vehicles.",
    image: "/moto/soylu/products/product7.png"
  },
  {
    title: "Fuel Tanks",
    description: "Our next-generation fuel tanks deliver superior durability, reliability, and long-lasting performance.",
    image: "/moto/soylu/products/product8.png"
  }
];

export default function ProductRange() {

  return (
    <section className="w-full py-16  bg-white">
      <div className="custom-container overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:mb-5" data-aos="fade-up">
          <div className="max-w-[70%]">
            <Typography variant="h1" color="primary" className="leading-tight">
              Product Catalogs
            </Typography>
            <Typography variant="p" color="muted" className="mt-4 max-w-[80%]">
              Our product catalogs have been updated to help you easily find the part you're looking for. All you have to do is enter the SOYLU or OEM reference in the "product search" section to find the part you need!
            </Typography>
          </div>
          <Button text="View All Products" variant="primary" />
        </div>
        <hr className="border-t border-[#E5E7EB] mt-4 mb-10 w-full" />

        <div className="relative mt-8" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
              1280: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-products' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full pb-16 [&_.swiper-wrapper]:items-stretch"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div
                  className="group relative h-full flex flex-col overflow-hidden rounded-[16px] bg-white px-6 pb-6 pt-5 shadow-[0_3px_12px_rgba(0,0,0,0.06)] "
                >
                  <div className="relative overflow-hidden rounded-[12px] bg-white w-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className=" w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4 flex-grow">
                    <div className="max-w-[75%]">
                      <Typography variant="h3" color="primary" className="mb-2 text-lg font-semibold">
                        {product.title}
                      </Typography>
                      <Typography variant="p" color="muted" className="text-sm line-clamp-3 leading-relaxed">
                        {product.description}
                      </Typography>
                    </div>
                   
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-1">
                      <ArrowUpRight className="h-5 w-5 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-products" />
        </div>
      </div>
    </section>
  );
}
// triggering rebuild
