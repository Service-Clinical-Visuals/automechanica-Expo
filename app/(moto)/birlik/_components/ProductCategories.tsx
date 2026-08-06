"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    id: 1,
    image: "/moto/birlik/c1.png",
    alt: "Heavy Duty Truck Category",
    label: "Heavy Commercial Vehicle",
  },
  {
    id: 2,
    image: "/moto/birlik/c2.png",
    alt: "Commercial Vehicles Category",
    label: "Light Commercial Vehicle",
  },
  {
    id: 3,
    image: "/moto/birlik/c3.png",
    alt: "Industrial Equipment Category",
    label: "Construction Machinery",
  },
  {
    id: 4,
    image: "/moto/birlik/c4.png",
    alt: "Agriculture Vehicle Category",
    label: "Agriculture Vehicle",
  },
  {
    id: 5,
    image: "/moto/birlik/c5.png",
    alt: "Passenger Cars Category",
    label: "Passenger Cars",
  },
  {
    id: 6,
    image: "/moto/birlik/c6.png",
    alt: "Marine Vessels Category",
    label: "Passenger Cars",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <style>{`
        .product-categories-swiper .swiper-pagination {
          position: relative;
          margin-top: 2.5rem;
          bottom: 0 !important;
        }
        .product-categories-swiper .swiper-pagination-bullet {
          width: 2.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background-color: #e5e7eb;
          opacity: 1;
          transition: background-color 0.3s ease;
        }
        .product-categories-swiper .swiper-pagination-bullet-active {
          background-color: #1f5dd2;
        }
      `}</style>
      <div className="custom-container flex flex-col gap-12 md:gap-16">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="sora-font section-title font-semibold text-[#212121]">
            Explore Our Product Categories
          </h2>
          <p className="manrope-font section-text text-[#444444] leading-relaxed">
            Discover our comprehensive range of premium gaskets and sealing solutions, engineered to meet the demands of modern automotive and industrial engines. From cylinder head gaskets to valve cover gaskets, oil seals, and manifold gaskets, every product is manufactured with premium materials, and strict quality standards
          </p>
        </div>

        {/* Categories Swiper */}
        <div data-aos="fade-up" data-aos-delay="100" className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2},
              1024: { slidesPerView: 3},
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="product-categories-swiper w-full !pb-4"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="w-full aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-tr-xl rounded-bl-xl rounded-tl-[3rem] xl:rounded-tl-[4rem] rounded-br-[3rem] xl:rounded-br-[4rem] shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer relative">
                  <img 
                    src={category.image} 
                    alt={category.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-white font-semibold card-title manrope-font transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                      {category.label}
                    </span>
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
