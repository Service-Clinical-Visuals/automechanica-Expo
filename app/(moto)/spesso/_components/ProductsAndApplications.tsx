"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function ProductsAndApplications() {
  const products = [
    { title: "COMMERCIAL", image: "/moto/spesso/1.jpg" },
    { title: "TRUCK", image: "/moto/spesso/2.jpg" },
    { title: "AGRICULTURAL", image: "/moto/spesso/3.jpg" },
    { title: "TWO-WHEELERS", image: "/moto/spesso/4.jpg" },
    { title: "PASSENGER CAR", image: "/moto/spesso/5.png" },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white px-4 lg:px-16">
      <div className="custom-container flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="anton-font section-title text-[#2a2a2a] mb-5 tracking-wide">
            Our Products And Applications
          </h2>
          <p className="overpass-font section-text text-[#5e5e5e] leading-relaxed">
            Spesso Gaskets S.r.l. delivers OEM-quality gasket solutions for a wide range of automotive applications. From passenger cars and commercial vehicles to trucks, two-wheelers, and agricultural machinery, our products are engineered to provide reliable sealing performance, precision fitment, and long-lasting durability across every vehicle segment.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              }
            }}
            className="spesso-products-swiper "
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group cursor-pointer shadow-md border border-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[var(--primary)]/50  transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="anton-font text-white section-title1 tracking-wide m-0">
                        {product.title}
                      </h3>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-sm transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="text-white w-5 h-5" />
                      </div>
                    </div>
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
