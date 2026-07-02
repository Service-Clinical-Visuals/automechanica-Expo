"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const [activeTab, setActiveTab] = useState("brake_parts");
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const productData = {
    brake_parts: [
      { img: "/moto/abs-allbrakes/products/frame11.png", title: "BRAKE DISCS" },
      { img: "/moto/abs-allbrakes/products/frame12.png", title: "BRAKE PADS" },
      { img: "/moto/abs-allbrakes/products/frame13.png", title: "BRAKE CALIPERS" },
      { img: "/moto/abs-allbrakes/products/frame14.png", title: "CAR CABLES" },
      { img: "/moto/abs-allbrakes/products/frame15.png", title: "BRAKE HOSES" },
    ],
    steering_parts: [
      { img: "/moto/abs-allbrakes/products/frame21.png", title: "SUSPENSION ARMS" },
      { img: "/moto/abs-allbrakes/products/frame22.png", title: "AXIAL & TIE RODS" },
      { img: "/moto/abs-allbrakes/products/frame23.png", title: "STABILIZERS" },
      { img: "/moto/abs-allbrakes/products/frame24.png", title: "BALL JOINTS" },
      { img: "/moto/abs-allbrakes/products/frame25.png", title: "MOUNTINGS" },
    ],
    wheel_bearings: [
      { img: "/moto/abs-allbrakes/products/frame31.png", title: "WHEEL HUBS" },
      { img: "/moto/abs-allbrakes/products/frame32.png", title: "ABS SENSORS" },
    ],
  };

  const currentProducts = productData[activeTab as keyof typeof productData];
  const shouldLoop = currentProducts.length > 4;

  return (
    <section className="w-full bg-[#1c1c1c] py-16 md:py-24 relative" id="products">
      <div className="custom-container">

        {/* Header and Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-8">
          {/* Left Content */}
          <div className="max-w-[50%]" data-aos="fade-right">
            <Typography variant="h2" className="text-white mb-4 font-bold">
              Comprehensive Product Range
            </Typography>
            <Typography variant="p" className="text-white">
              Explore our range of automotive parts, engineered for superior quality, reliable performance, and vehicle coverage. Every product meets the highest standards of safety, durability, and precision.
            </Typography>
          </div>

          {/* Right Tabs */}
          <div className="flex flex-wrap gap-4" data-aos="fade-left">
            <button
              onClick={() => setActiveTab("brake_parts")}
              className={`px-6 py-2.5 font-oswald tracking-widest text-lg uppercase transition-colors border ${activeTab === "brake_parts"
                ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                : "bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white"
                }`}
            >
              BRAKE PARTS
            </button>
            <button
              onClick={() => setActiveTab("steering_parts")}
              className={`px-6 py-2.5 font-oswald tracking-widest text-lg uppercase transition-colors border ${activeTab === "steering_parts"
                ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                : "bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white"
                }`}
            >
              STEERING PARTS
            </button>
            <button
              onClick={() => setActiveTab("wheel_bearings")}
              className={`px-6 py-2.5 font-oswald tracking-widest text-lg uppercase transition-colors border ${activeTab === "wheel_bearings"
                ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                : "bg-transparent border-gray-600 text-gray-300 hover:border-white hover:text-white"
                }`}
            >
              WHEEL BEARING KITS
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative" data-aos="fade-up">
          <Swiper
            key={activeTab} // Force remount on tab change to reset pagination properly
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={shouldLoop}
            autoplay={shouldLoop ? {
              delay: 3500,
              disableOnInteraction: false,
            } : undefined}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className={shouldLoop ? "!pb-4" : ""}
          >
            {currentProducts.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="bg-[#1f1f1f] border border-white/30 flex flex-col overflow-hidden w-full border border-transparent hover:border-gray-700 transition-colors duration-300">
                  {/* Product Image */}
                  <div className="w-full  aspect-square p-4 pb-0 overflow-hidden relative">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 text-center flex flex-col flex-grow justify-start">
                    <Typography variant="h4" className="text-white font-bold uppercase mb-2 tracking-wider text-[15px]">
                      {product.title}
                    </Typography>
                    <Link href="#" className="font-oswald text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase hover:underline underline-offset-4">
                      Read More &gt;&gt;&gt;
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom 3-Pill Pagination */}
          {shouldLoop && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  onClick={() => swiperInstance?.slideToLoop(i)}
                  className={`w-8 h-2 rounded-full cursor-pointer transition-all ${(activeIndex % 3) === i ? "bg-[var(--color-primary)]" : "bg-gray-600"
                    }`}
                ></div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
