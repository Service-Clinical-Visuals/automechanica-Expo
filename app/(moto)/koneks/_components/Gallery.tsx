"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Gallery() {
  const galleryImages = [
    "/moto/koneks/gallery1.png",
    "/moto/koneks/gallery2.png",
    "/moto/koneks/gallery3.png",
    "/moto/koneks/gallery4.png",
    "/moto/koneks/gallery5.png",
    "/moto/koneks/gallery6.png",
  ];

  return (
    <section className="w-full py-16 bg-[#0F0F0F] overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 min-[3800px]:gap-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-[70%] w-full" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold mb-6">
            Our Gallery
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed ">
            KONEKS, who launched its business in 1992, manufactures liners, pistons and piston pins for engines in a 10.000 m2 closed and 30.000 m2 open area facility. 9 engineers, 15 technician and 221 employees serve Koneks customers in a professional manner. Konek's manufacturing line adopted latest technology with its Japanese, German, Italian and Taiwanese origin machines. Quality control is done with the latest technology precision machines in order to achieve 100% customer satisfaction.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div
          className="w-full mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            "--swiper-pagination-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.3",
          } as React.CSSProperties}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1536: { slidesPerView: 3 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {galleryImages.map((imgSrc, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="w-full aspect-square md:aspect-[533/490] border border-white/40 overflow-hidden bg-[#27292A] cursor-pointer shadow-lg border border-white/5">
                  <img
                    src={imgSrc}
                    alt={`Gallery Image ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
