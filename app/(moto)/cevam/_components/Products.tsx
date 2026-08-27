"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      image: "/moto/cevam/p1.png",
      title: "Alternators",
      desc: "2,800+ references with certified remanufacturing quality.",
    },
    {
      image: "/moto/cevam/p2.png",
      title: "Starters",
      desc: "2,000+ references with ISO 9001:2015 certified quality.",
    },
    {
      image: "/moto/cevam/p3.png",
      title: "Transmissions",
      desc: "3,800+ references with certified remanufacturing quality.",
    },
    {
      image: "/moto/cevam/p4.png",
      title: "Air conditioning compressors",
      desc: "1,300+ parts with trusted remanufacturing quality.",
    },
    {
      image: "/moto/cevam/p5.png",
      title: "Steering racks",
      desc: "1,100+ parts with OE-quality remanufacturing standards.",
    },
    {
      image: "/moto/cevam/p6.png",
      title: "Steering pumps",
      desc: "1,700+ parts with certified remanufacturing standards.",
    },
    {
      image: "/moto/cevam/p7.png",
      title: "Bellows Kits",
      desc: "440+ references with wide European vehicle coverage.",
    },
    {
      image: "/moto/cevam/p8.png",
      title: "Spheres",
      desc: "100+ references covering 1,300+ applications.",
    }
  ];

  const productChunks = [products.slice(0, 4), products.slice(4, 8)];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-[#272727] oswald-font font-semibold mb-4">
            Our Products
          </h2>
          <p className="rubik-font text-[#4B5563] section-text max-w-2xl mx-auto leading-relaxed">
            CEVAM delivers high-quality remanufactured automotive components with OE-level performance, reliability, and durability.
          </p>
        </div>

        {/* Products Swiper */}
        <div data-aos="fade-up" data-aos-delay="200" className="mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-4"
          >
            {productChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={chunkIndex} className="h-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mx-auto h-full">
                  {chunk.map((product, index) => (
                    <div key={index} className="flex flex-col w-full h-full bg-white border border-[#CCCCCC] rounded-[5px] p-4 text-center group transition-shadow hover:shadow-md">
                      {/* Image Container */}
                      <div className="w-auto h-auto mb-3 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400 rounded-md">Image</div>' }}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="card-title text-[#272727] oswald-font font-semibold mb-3">
                        {product.title}
                      </h3>
                      <p className="rubik-font text-[#4B5563] card-text leading-relaxed mb-4 flex-grow">
                        {product.desc}
                      </p>

                      {/* Link */}
                      <Link href="#" className="text-[#0195DA] rubik-font card-text font-regular hover:underline mt-auto">
                        View Products
                      </Link>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination indicator */}
        <div className="flex justify-center items-center mt-10 gap-1">
          {[0, 1].map((idx) => (
            <div
              key={idx}
              className={`h-2 rounded-[3px] transition-all duration-300 ${activeIndex === idx
                ? 'w-[44px] bg-[#0195DA]'
                : 'w-2 rounded-full border border-[#0195DA] bg-transparent'
                }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}
