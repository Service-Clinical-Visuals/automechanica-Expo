"use client";

import React from "react";
import Container from "./Container";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Automotive Chemicals",
    image: "/moto/speedcar/fp1.png",
  },
  {
    title: "Chemical Raw Materials",
    image: "/moto/speedcar/fp2.png",
  },
  {
    title: "Plyny-Eksploatacyjne",
    image: "/moto/speedcar/fp3.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-20 bg-[#1a1a1a]" id="products">
      <Container>
        {/* Header Row */}
        <div className="flex items-start justify-between mb-12">
          <div data-aos="fade-right">
            <h2 className="heading-white">
              Our Featured Products
            </h2>
            <div className="h-[3px] w-50 bg-white mt-2" />
          </div>
          <a
            href="#products"
            data-aos="fade-left"
            data-aos-delay="150"
            className="bg-primary font-bold px-5 py-3 content-white hover:bg-primary/90 transition-colors shrink-0 flex items-center"
          >
            View All Products
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="featured-swiper w-full"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx} className="pb-12">
              <div className="flex flex-col gap-4 cursor-pointer group">
                {/* Image Box */}
                <div className="bg-[#2e2e2e] aspect-square w-full flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title + Arrow */}
                <div className="flex items-center justify-between">
                  <span className="content-white">
                    {product.title}
                  </span>
                  <div className="bg-white text-black w-10 h-10 flex items-center justify-center shrink-0 hover:bg-gray-200 transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style>{`
        .featured-swiper .swiper-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 0;
        }
        .featured-swiper .swiper-bullet {
          display: inline-block;
          width: 28px;
          height: 6px;
          background: #555;
          cursor: pointer;
          transition: background 0.3s;
        }
        .featured-swiper .swiper-bullet-active {
          background: #B1110E;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
