"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowBigDown, ArrowLeft, ArrowRight } from "lucide-react";

const advantagesData = [
  {
    title: "Exhaust & Emission Systems",
    desc: "We deliver all the exhaust system components to you with our worldwide production capacity.",
    image: "/moto/soylu/Euro1.png"
  },
  {
    title: "Air Reservoirs",
    desc: "In every field where air passes, we transfer our experience of metal processing to air cylinders.",
    image: "/moto/soylu/Euro2.png"
  },
  {
    title: "Fuel & Oil Tanks",
    desc: "In every field where air passes, we transfer our experience of metal processing to air cylinders.",
    image: "/moto/soylu/Euro3.png"
  }
];

export default function Advantages() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-white">
      {/* Dark Green Banner Header */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[#0F3D26] z-0"></div>

      <div className="custom-container relative z-10 ">
        {/* Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6 mb-12 lg:mb-16" data-aos="fade-up">
          <div className="lg:col-span-7">
            <h2 className="text-white font-Oswald text-4xl sm:text-4xl lg:text-4xl leading-tight tracking-wide">
              Exhaust Emission Systems &amp; Automotive
              <span className="block">Parts Manufacturer</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex items-start">
            <p className="text-white font-Oswald text-xs sm:text-sm lg:text-sm leading-6 lg:text-right max-w-[420px] ml-auto">
              On this path we embarked to do better, we produce parts that add value to our customers' businesses. With our local production, extensive service network, and easy supply services, we are rising with the aim of being a value that produces in our country.
            </p>
          </div>
        </div>

        {/* Slider Area */}
        <div className="relative mt-14" data-aos="fade-up" data-aos-delay="100">
          <button className="advantages-prev hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <span className="text-xl"><ArrowLeft></ArrowLeft></span>
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: '.advantages-prev',
              nextEl: '.advantages-next',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full [&_.swiper-wrapper]:items-stretch"
          >
            {advantagesData.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto pb-4">
                <div className="bg-white p-6  shadow-[0_24px_80px_rgba(0,0,0,0.08)] flex flex-col items-start text-left transition-transform duration-300 hover:-translate-y-2 h-full ">
                  <div className="w-full rounded-sm   flex items-center justify-center">
                    <img src={item.image} alt={item.title} className=" object-contain" />
                  </div>

                <h3 className="font-semibold font-Oswald text-[#004339] text-lg lg:text-xl mt-6 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 font-Oswald text-[#585858] mb-6">
                  {item.desc}
                </p>

                  <Link href="#" className="text-secondary hover:text-[var(--color-primary)] mt-auto">
                    <Typography variant="p" weight="bold" color="dark" className="underline underline-offset-2 font-bold">View More &gt;&gt;</Typography>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="advantages-next hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <span className="text-xl"><ArrowRight></ArrowRight></span>
          </button>
        </div>

      </div>
    </section>
  );
}


