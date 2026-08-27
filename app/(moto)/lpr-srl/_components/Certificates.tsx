"use client";

import React, { useRef, useState } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certificates = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const certificates = [
    { id: 1, img: "/moto/lpr-srl/c1.jpg" },
    { id: 2, img: "/moto/lpr-srl/c2.jpg" },
    { id: 3, img: "/moto/lpr-srl/c3.jpg" },
    { id: 4, img: "/moto/lpr-srl/c1.jpg" },
    { id: 5, img: "/moto/lpr-srl/c2.jpg" },
    { id: 6, img: "/moto/lpr-srl/c3.jpg" },
  ];

  return (
    <section id="certificates" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8  min-[3800px]:gap-28 items-center">

        {/* Header Section */}
        <div className="flex flex-col gap-2 text-center items-center " data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Certified Quality You Can Trust
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed mt-2 xl:max-w-[75%]">
            LPR follows global quality standards to ensure safety, reliability, and performance. Through strict quality control
            and continuous improvement, LPR delivers trusted automotive solutions worldwide. </Typography>
        </div>

        {/* Slider Section */}
        <div className="w-full relative flex items-center justify-center mt-4">

          {/* Custom Prev Button */}
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="hidden md:flex absolute left-[10%] z-10 w-12 h-12 min-[2100px]:w-16 min-[2100px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-[#F6F6F6] items-center justify-center hover:bg-primary transition-colors shadow-sm focus:outline-none"
            aria-label="Previous Certificate"
          >
            <ArrowLeft className="w-5 h-5 min-[2100px]:w-8 min-[2100px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-primary hover:text-white" strokeWidth={3} />
          </button>

          {/* Swiper Container */}
          <div className="w-full md:w-[85%] lg:w-[75%] px-4">
            <Swiper
              onSwiper={setSwiperInstance}
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: '.cert-pagination',
                bulletClass: 'swiper-pagination-bullet bg-gray-300 opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
              }}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
              className="w-full py-8 cert-swiper"
            >
              {certificates.map((cert, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center transition-all duration-300 ease-in-out">
                  {({ isActive }) => (
                    <div className={`w-full flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-100 opacity-100 shadow-xl' : 'scale-75 opacity-90'}`}>
                      <img
                        src={cert.img}
                        alt={`Certificate ${cert.id}`}
                        className={`w-full h-auto object-contain border border-gray-100 ${isActive ? 'rounded-md' : 'rounded-sm'}`}
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Next Button */}
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="hidden md:flex absolute right-[10%] z-10 w-12 h-12 min-[2100px]:w-16 min-[2100px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-[#F6F6F6] items-center justify-center hover:bg-primary  transition-colors shadow-sm focus:outline-none"
            aria-label="Next Certificate"
          >
            <ArrowRight className="w-5 h-5 min-[2100px]:w-8 min-[2100px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-primary hover:text-white" strokeWidth={3} />
          </button>

        </div>

        {/* Pagination Container */}
        <div className="cert-pagination flex items-center justify-center gap-2 mt-2"></div>

      </div>
    </section>
  );
};

export default Certificates;
