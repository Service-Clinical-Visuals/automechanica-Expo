"use client";

import React, { useRef } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NewProducts() {
  const swiperRef = useRef<SwiperType | null>(null);

  const products = [
    {
      title: "Oil Pump Gasket – TEMEL NR. 01-133005-04 /",
      oeNumber: "OE NR. 21531890",
      img: "/moto/temel/product-1.png",
    },
    {
      title: "VALVE COVER GASKET – TEMEL NR. 01-061894-04 /",
      oeNumber: "OE NR. 20725316_0428-4008",
      img: "/moto/temel/product-2.png",
    },
    {
      title: "CYLINDER HEAD GASKET – TEMEL NR. 17-160501-18 /",
      oeNumber: "OE NR. 23538406_23532298",
      img: "/moto/temel/product-3.png",
    },
    {
      title: "CYLINDER HEAD GASKET – TEMEL NR. 10-130001-13 /",
      oeNumber: "OE NR. 3583786",
      img: "/moto/temel/product-4.png",
    },
    {
      title: "VALVE COVER GASKET – TEMEL NR. 05-087402-SL /",
      oeNumber: "OE N R. 0249.71",
      img: "/moto/temel/product-5.png",
    },
    {
      title: "HALF SET GASKET – TEMEL NR. SO-062400-12 /",
      oeNumber: "OE NR. - 56459.05",
      img: "/moto/temel/product-6.png",
    },
    {
      title: "OIL PUMP COVER CASKET – TEMEL NR 01-063617-04 /",
      oeNumber: "OE NR XS4Q- 6A628-AE",
      img: "/moto/temel/product-7.png",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="products">
      <div className="custom-container flex flex-col gap-10 lg:gap-12">
        
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center mx-auto gap-3.5 w-full max-w-5xl" data-aos="fade-up">
          <div className="flex flex-col items-center">
            <span className="sub-heading">
              Latest Addition
            </span>
            <div className="w-10 h-[2px] bg-[var(--color-primary)] mt-1.5" />
          </div>

          <Typography variant="h2" className="font-bold leading-tight mt-1 max-w-xl lg:max-w-2xl mx-auto">
            New Products
          </Typography>

          <Typography variant="p" className="text-center max-w-2xl lg:max-w-3xl mx-auto">
            Explore our latest high-quality gaskets, expertly engineered for durability, precision, and peak engine performance.
          </Typography>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".new-products-pagination",
            }}
            breakpoints={{
              540: { slidesPerView: 2, spaceBetween: 18 },
              900: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full h-full border border-gray-200 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-gray-300 p-2">
                  
                  {/* Top Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-[#F7F7F8] p-6 flex items-center justify-center overflow-hidden">
                    {/* Orange 'New' Badge */}
                    <span className="absolute top-0 left-0 bg-[var(--color-primary)] text-white text-xs font-semibold px-3.5 py-1 rounded-r-full shadow-sm font-primary">
                      New
                    </span>

                    {/* Product Image */}
                    <img
                      src={product.img}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Content Area */}
                  <div className="p-5 sm:p-2 sm:pt-4 flex flex-col justify-between flex-grow gap-4">
                    <div className="flex flex-col items-start">
                      {/* Orange Accent Bar */}
                      <div className="w-30 h-[2px] bg-[var(--color-primary)] mb-3" />

                      {/* Product Title */}
                      <h3 className="font-bold text-[#202020] font-primary line-clamp-2 leading-snug">
                        {product.title}
                      </h3>

                      {/* OE Number */}
                      <p className="text-gray-500 text-xs sm:text-sm mt-2 font-secondary font-medium">
                        {product.oeNumber}
                      </p>
                    </div>

                    {/* Circle Arrow Action Button */}
                    <div className="self-end mt-2">
                      <div className="w-9 h-9 rounded-full border border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white cursor-pointer shadow-sm">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Bullets */}
        <div className="new-products-pagination custom-swiper-pagination flex justify-center items-center" />

        {/* Bottom Actions: Prev Arrow, View All Button, Next Arrow */}
        <div className="flex items-center justify-center gap-6 pt-1" data-aos="fade-up" data-aos-delay="200">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-[var(--color-primary)] hover:opacity-75 transition-opacity p-2 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.2} />
          </button>

          <Button
            text="View All Products"
            href="#products"
            variant="outline"
            showIcon={false}
            className="px-6 py-2.5"
          />

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="text-[var(--color-primary)] hover:opacity-75 transition-opacity p-2 cursor-pointer"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-6 h-6" strokeWidth={2.2} />
          </button>
        </div>

      </div>
    </section>
  );
}
