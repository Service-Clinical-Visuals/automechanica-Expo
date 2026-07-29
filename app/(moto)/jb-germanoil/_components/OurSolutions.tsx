"use client";
import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function OurSolutions() {
  const products = [
    {
      title: "Reliable Performance For Industry",
      image: "/moto/jb-germanoil/1.png",
    },
    {
      title: "Winter Chemicals For Windshield And Engine",
      image: "/moto/jb-germanoil/2.png",
    },
    {
      title: "Reliable Performance For Industry",
      image: "/moto/jb-germanoil/3.png",
    },
    {
      title: "Winter Chemicals For Windshield And Engine",
      image: "/moto/jb-germanoil/4.png",
    },
    {
      title: "Reliable Performance For Industry",
      image: "/moto/jb-germanoil/5.png",
    },
    {
      title: "Winter Chemicals For Windshield And Engine",
      image: "/moto/jb-germanoil/1.png",
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#fafafa]">
      <div className="custom-container flex flex-col px-8 md:px-12 lg:px-28">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 md:mb-12">
          <div className="max-w-4xl" data-aos="fade-right">
            <h2 className="aldrich-font section-title text-[#2a2a2a] mb-4 md:mb-5 tracking-wide">
              Efficiency Begins With Our Solutions
            </h2>
            <p className="akshar-font section-text text-[#5e5e5e] leading-relaxed max-w-3xl">
              Explore JB GERMANOIL's comprehensive range of premium lubricants, industrial fluids, winter chemicals, and vehicle care products. Engineered with advanced German technology, our solutions deliver reliable performance, protection, and efficiency for automotive and industrial applications.
            </p>
          </div>
          <div data-aos="fade-left" className="flex-shrink-0">
            <Button href="#" iconType="arrowUpRight">
              Explore Products
            </Button>
          </div>
        </div>
        
        <hr className="w-full border-gray-200 mb-10 md:mb-14" />

        {/* Slider */}
        <div className="w-full" data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + ' custom-bullet"></span>';
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            className="solutions-swiper pb-16"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition-shadow duration-300 rounded-sm cursor-pointer group">
                  <div className="w-full aspect-[4/3] mb-6 flex items-center justify-center  border border-gray-50 rounded-sm">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-end flex-grow gap-4">
                    <h3 className="aldrich-font card-title text-[#2a2a2a] leading-snug">
                      {product.title}
                    </h3>
                    <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-md">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
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
