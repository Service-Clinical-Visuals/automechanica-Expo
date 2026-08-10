"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TechnicalSupport() {
  const galleryImages = [
    "/moto/vitobello/g1.jpg",
    "/moto/vitobello/g2.jpg",
    "/moto/vitobello/g3.jpg",
    "/moto/vitobello/g4.jpg",
    "/moto/vitobello/g5.jpg",
    "/moto/vitobello/g6.jpg",
    "/moto/vitobello/g7.jpg",
    "/moto/vitobello/g8.jpg",
    "/moto/vitobello/g9.jpg",
    "/moto/vitobello/g10.jpg",
    "/moto/vitobello/g11.jpg",
  ];

  const chunkedImages = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    chunkedImages.push(galleryImages.slice(i, i + 3));
  }

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="support">
      <style>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: white !important;
          opacity: 0.5;
          border-radius: 9999px;
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background-color: #F97316 !important;
          opacity: 1 !important;
        }
      `}</style>
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-white/20" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-4xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Gallery Of Innovation
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base mt-2">
              Explore the world of Vitobello Ricambi S.r.l. through our gallery, showcasing premium automotive spare parts, advanced facilities, warehouse operations, and our commitment to quality, innovation, and excellence in the automotive aftermarket.
            </Typography>
          </div>

          <div className="flex-shrink-0 pb-10" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Moments" href="#gallery" showIcon={true} />
          </div>
        </div>

        {/* Swiper Image Gallery */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={700}
            grabCursor={true}
            observer={true}
            observeParents={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pt-10 pb-16"
          >
            {galleryImages.map((src, idx) => (
              <SwiperSlide key={`ts-slide-${idx}`} className="group">
                <div className="flex items-center justify-center w-full h-full  pb-25">
                  <div
                    className="w-[90%] aspect-square overflow-hidden border border-white/20 shadow-2xl relative bg-[#111] transition-transform duration-700 ease-in-out
                               scale-95 md:scale-90 group-[.swiper-slide-active]:scale-100 md:group-[.swiper-slide-active]:scale-[1.15]"
                  >
                    <img
                      src={src}
                      alt={`Gallery Image ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-[.swiper-slide-active]:hover:scale-110"
                    />
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
