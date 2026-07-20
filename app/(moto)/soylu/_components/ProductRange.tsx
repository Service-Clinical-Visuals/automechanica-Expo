"use client";

import React, { useState } from "react";
import Link from "next/link";

const products = [
  {
    title: "Fast - Moving Products",
    description: "Our new generation exhaust systems, which we have developed with our superior engineering and workmanship from our... ",
    image: "/moto/soylu/Euro1.png"
  },
  {
    title: "Euro I, II, III Exhaust Systems",
    description: "Engineered for Euro I, II, and III vehicles, our exhaust systems provide reliable performance and efficient exhaust flow.",
    image: "/moto/soylu/Euro2.png"
  },
  {
    title: "Euro IV, V Exhaust Systems",
    description: "High-quality exhaust systems engineered to meet Euro IV and Euro V emission standards with dependable performance.",
    image: "/moto/soylu/Euro3.png"
  },
  {
    title: "Fast - Moving Products",
    description: "Our new generation exhaust systems, which we have developed with our superior engineering and workmanship from our... ",
    image: "/moto/soylu/Euro1.png"
  },
  {
    title: "Euro I, II, III Exhaust Systems",
    description: "Engineered for Euro I, II, and III vehicles, our exhaust systems provide reliable performance and efficient exhaust flow.",
    image: "/moto/soylu/Euro2.png"
  },
  {
    title: "Euro IV, V Exhaust Systems",
    description: "High-quality exhaust systems engineered to meet Euro IV and Euro V emission standards with dependable performance.",
    image: "/moto/soylu/Euro3.png"
  },
  {
    title: "Fast - Moving Products",
    description: "Our new generation exhaust systems, which we have developed with our superior engineering and workmanship from our... ",
    image: "/moto/soylu/Euro1.png"
  },
  {
    title: "Euro I, II, III Exhaust Systems",
    description: "Engineered for Euro I, II, and III vehicles, our exhaust systems provide reliable performance and efficient exhaust flow.",
    image: "/moto/soylu/Euro2.png"
  },
  {
    title: "Euro IV, V Exhaust Systems",
    description: "High-quality exhaust systems engineered to meet Euro IV and Euro V emission standards with dependable performance.",
    image: "/moto/soylu/Euro3.png"
  },
];

export default function ProductRange() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    products.slice(0, 3),
    products.slice(3, 6),
    products.slice(6, 9),
  ];

  const setSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => setCurrentSlide(s => Math.max(0, s - 1));
  const nextSlide = () => setCurrentSlide(s => Math.min(slides.length - 1, s + 1));

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
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-none rounded-tr-[20px] bg-[#0F3D26] text-xs px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0b2c18]"
          >
            View All Products
            <img src="/moto/soylu/arrow (1).png" alt="Arrow" className="ml-2 h-3 w-auto" />
          </Link>
        </div>
        <div className="mt-6 mb-10">
          <div className="h-0 w-[1680px] max-w-full border-t border-[#00000042]" />
        </div>

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

                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div className="max-w-[70%]">
                          <h3 className="text-xl font-semibold text-[#163A2F] mb-3">
                            {product.title}
                          </h3>
                          <p className="text-sm leading-6 text-[#5F6B65]">
                            {product.description}
                          </p>
                        </div>
                       
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:translate-x-1">
                            <img
                              src="/moto/soylu/Vector.png"
                              alt="Arrow"
                              className="h-4 w-4 object-contain p-1"
                            />
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Swiper>
          <div className="swiper-pagination-products" />
        </div>
      </div>
    </section>
  );
}
// triggering rebuild
