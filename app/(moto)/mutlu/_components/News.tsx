"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "./Button";
import "swiper/css";
import "swiper/css/pagination";

export default function News() {
  const newsItems = [
    {
      title: "Mutlu Battery 80th Anniversary Special: “Mutlu Battery Number 1” with Erol Evgin's Unique Interpretation",
      img: "/moto/mutlu/news1.png"
    },
    {
      title: "Happy 100th Anniversary of our Republic!",
      img: "/moto/mutlu/news2.png"
    },
    {
      title: "Mutlu Akü is the largest industrial company in its sector according to ISO 500 data.",
      img: "/moto/mutlu/news3.png"
    },
    {
      title: "Mutlu Akü showcased its technologies at the Automechanika Istanbul Fair.",
      img: "/moto/mutlu/news4.png"
    },
    {
      title: "Mutlu: Türkiye's Most Reputable Battery Brand",
      img: "/moto/mutlu/news5.png"
    }
  ];

  return (
    <section className="w-full py-16 min-[2100px]:py-24 min-[2500px]:py-32 min-[3800px]:py-40 bg-[var(--color-background)] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[2500px]:gap-24 min-[3800px]:gap-32">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6  border-b border-gray-300" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:max-w-[75%]">
            <Typography variant="h2" className="font-bold leading-tight">
              Latest News & Events
            </Typography>
            <Typography variant="p" className="leading-relaxed opacity-80">
              Stay connected with the latest updates from Mutlu Akü ve Malzemeleri San. A.Ş. Explore company news, global exhibitions, industry events, product innovations, and technological advancements that showcase our ongoing commitment to quality, innovation, and leadership in battery solutions.
            </Typography>
          </div>

          <Button text="View All News" variant="primary" className="shrink-0" />
        </div>

        {/* Swiper Slider */}
        <div
          className="w-full mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 2, spaceBetween: 24 },
              1536: { slidesPerView: 2, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
              3800: { slidesPerView: 3, spaceBetween: 64 },
            }}
            className="w-full pb-16 happy-swiper-pagination"
          >
            {newsItems.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full h-[400px] md:h-[450px] xl:h-[500px] 2xl:h-[600px] min-[2500px]:h-[800px] min-[3800px]:h-[1100px] rounded-none overflow-hidden cursor-pointer flex items-center justify-center bg-black/5">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Overlay (Hover state) */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 md:p-10 flex flex-col justify-end z-10 gap-6">

                    <Typography variant="h4" color="white" className="font-semibold text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </Typography>

                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <Button text="View All News" variant="secondary" className="w-fit" />
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
