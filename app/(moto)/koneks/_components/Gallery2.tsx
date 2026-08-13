"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Gallery2() {
  const slides = [
    {
      img: "/moto/koneks/g1.png",
      title: "The technology, That Strengthens Your Power.",
      desc: "With its 25 years long experience and high skilled team of 221 people , Koneks adds power to your power.."
    },
    {
      img: "/moto/koneks/g2.png",
      title: "In The World Market, In The Center Of Power...",
      desc: "Koneks is a trusted brand in 68 countries, recognized for delivering high quality automotive components with reliable performance and consistent durability."
    },
    {
      img: "/moto/koneks/g3.png",
      title: "Original Koneks, For Original Power...",
      desc: "For the best performance, choose Original Koneks products, engineered for quality, reliability, and long-lasting durability."
    }
  ];

  return (
    <section className="relative w-full py-16 bg-[#0F0F0F] overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-10 min-[3800px]:gap-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center lg:max-w-[65%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold mb-6">
            Our Gallery
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed ">
            Discover the world of KONEKS through our gallery, showcasing advanced manufacturing facilities, precision engineering, state-of-the-art production processes, and premium engine components. Explore the innovation, craftsmanship, and quality standards behind every product, while gaining insight into our advanced manufacturing capabilities, technical expertise, and commitment to delivering reliable, high-performance automotive solutions.
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
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
            loop={true}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full aspect-video md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[#27292A] cursor-pointer shadow-lg border border-white/20">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-3">
                      <Typography variant="h4" color="white" className="font-semibold leading-tight">
                        {slide.title}
                      </Typography>
                      <Typography variant="p" color="white" className=" leading-relaxed text-sm">
                        {slide.desc}
                      </Typography>
                      <Typography variant="p" color="primary" className="font-semibold mt-2 inline-block">
                        Read More &gt;&gt;
                      </Typography>
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
