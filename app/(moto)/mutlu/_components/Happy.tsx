"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Happy() {
  const cards = [
    { title: "Battery", img: "/moto/mutlu/frame1.png" },
    { title: "Passenger Vehicles", img: "/moto/mutlu/frame2.png" },
    { title: "Light Commercial Vehicles", img: "/moto/mutlu/frame3.png" },
    { title: "Heavy Commercial Vehicles", img: "/moto/mutlu/frame4.png" },
    { title: "Alternative Energy Needs", img: "/moto/mutlu/frame5.png" },
    { title: "Hobby Tools", img: "/moto/mutlu/frame6.png" },
    { title: "Industrial", img: "/moto/mutlu/frame7.png" }
  ];

  return (
    <section className="w-full py-16  min-[2500px]:py-32  bg-[var(--color-background)] overflow-hidden">
      <div className="custom-container flex flex-col gap-12  min-[2500px]:gap-24 min-[3800px]:gap-32">

        {/* Header Block */}
        <div className="flex flex-col items-center justify-center gap-6 min-[2500px]:gap-10 min-[3800px]:gap-12 text-center mx-auto" data-aos="fade-up">
          <Typography variant="h2" className="font-bold leading-tight">
            Happy Battery For Every Need
          </Typography>
          <Typography variant="p" className="leading-relaxed xl:max-w-[80%] text-center opacity-80">
            Mutlu Akü ve Malzemeleri San. A.Ş. offers a comprehensive range of advanced battery solutions for passenger cars, light and heavy commercial vehicles, industrial equipment, marine applications, alternative energy systems, and leisure vehicles. Engineered with innovative technology and OEM-quality standards, our batteries deliver reliable power, exceptional durability, and long-lasting performance across every application.
          </Typography>
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
              1536: { slidesPerView: 3, spaceBetween: 24 },
              2500: { slidesPerView: 3, spaceBetween: 40 },
              3800: { slidesPerView: 3, spaceBetween: 60 },
            }}
            className="w-full pb-16 happy-swiper-pagination"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full h-[350px] md:h-[400px] xl:h-[450px] 2xl:h-[497px] min-[2500px]:h-[900px] min-[3800px]:h-full rounded-none overflow-hidden cursor-pointer flex items-center justify-center bg-black/5">
                  {/* Image */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Overlay (Hover state) */}
                  <div className="absolute inset-0 bg-[#DE1C24]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 md:p-8 flex flex-col justify-end z-10">

                    <Typography variant="h4" color="white" className="font-semibold text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {card.title}
                    </Typography>

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
