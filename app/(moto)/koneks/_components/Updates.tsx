"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Updates() {
  const certificates = [
    { img: "/moto/koneks/q1.jpg" },
    { img: "/moto/koneks/q2.jpg" },
    { img: "/moto/koneks/q3.jpg" },
    { img: "/moto/koneks/q4.jpg" },
    { img: "/moto/koneks/q5.jpg" },
    { img: "/moto/koneks/q6.jpg" },
    { img: "/moto/koneks/q7.jpg" }
  ];

  return (
    <section className="w-full py-16 bg-[#0F0F0F] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-14">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/40 pb-8 lg:pb-12" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[65%]">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Certified Quality. Trusted Excellence.
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed opacity-90 lg:pr-10">
              Explore our official documents and certifications that reflect KONEKS' commitment to quality, precision, and industry compliance. From internationally recognized certifications to technical documentation, every document demonstrates our dedication to delivering reliable products that meet the highest manufacturing standards.
            </Typography>
          </div>
          <div className="flex-shrink-0 mt-2 lg:mt-0">
            <Button text="View Documents" href="#" showIcon={true} />
          </div>
        </div>

        {/* Swiper Block */}
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
            spaceBetween={32}
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
            loop={true}
          >
            {certificates.map((cert, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full aspect-[533/613] rounded-3xl overflow-hidden bg-white shadow-xl cursor-pointer">
                  {/* Image */}
                  <img
                    src={cert.img}
                    alt={`Certificate ${idx + 1}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Overlay with Vector Icon */}
                  <div className="absolute inset-0 bg-[#171717]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <img
                      src="/moto/koneks/Vector.png"
                      alt="View Document"
                      className="w-16 h-16 sm:w-20 sm:h-20 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-100"
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
