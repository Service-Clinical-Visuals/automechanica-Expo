"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function News() {
  const newsData = [
    {
      image: "/moto/autochemi/news1.png",
      title: "AUTOCHEMIE BITTERFELD GMBH invites you...",
      date: "02.09.2025",
      excerpt: "AUTOCHEMIE BITTERFELD GMBH will participate in the international Lubricant..."
    },
    {
      image: "/moto/autochemi/news2.png",
      title: "GERMAN BRAND \"PREMIER\" ENTERS THE IRAQI...",
      date: "24.07.2024",
      excerpt: "We are pleased to announce the grand launch of the German brand \"PREMIER\" in the..."
    },
    {
      image: "/moto/autochemi/news3.png",
      title: "FROSBIO Antifreezes – Effective Engine...",
      date: "04.01.2024",
      excerpt: "AutoChemie Bitterfeld GmbH is an expert in the production of coolants for the entire world..."
    },
    {
      image: "/moto/autochemi/news4.png",
      title: "Merry Christmas and Happy New Year, dear...",
      date: "22.12.2023",
      excerpt: "We always believe in miracles, over the years we grow up, but we want to see..."
    },
    {
      image: "/moto/autochemi/news5.png",
      title: "​Motor oils - your business with AutoChemie...",
      date: "17.04.2023",
      excerpt: "For several years now, the company AutoChemie Bitterfield GmbH has been continuing its..."
    },{
      image: "/moto/autochemi/news6.png",
      title: "Brake fluid from AutoChemie Bitterfield GmbH...",
      date: "14.04.2023",
      excerpt: "Autochemie Bitterfeld GmbH offers wholesale brake fluid sales directly from the manufacturer..."
    }

  ];

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-5 items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4  mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-semibold leading-tight">
            Latest News & Events
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%] ">
            Stay updated with the latest news from AutoChemie Bitterfeld GmbH. Explore our newest product launches, international exhibitions, industry developments, partnerships, and company achievements as we continue to deliver innovative lubricant and automotive fluid solutions to customers worldwide.
          </Typography>
          <div className="w-full h-px mt-1 bg-gray-300"></div>
        </div>

        {/* Swiper Slider */}
        <div 
          className="w-full mt-4" 
          data-aos="fade-up" 
          data-aos-delay="200"
          style={{
            "--swiper-pagination-color": "#AD0F0F",
            "--swiper-pagination-bullet-inactive-color": "#c4c4c4",
            "--swiper-pagination-bullet-inactive-opacity": "1",
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
              1280: { slidesPerView: 4 },
            }}
            className="w-full pb-16 custom-swiper-pagination [&>.swiper-wrapper]:items-stretch"
          >
            {newsData.map((news, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="group relative w-full h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  
                  {/* Image Container */}
                  <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6 gap-3">
                    <Typography variant="h5" color="dark" className="font-bold line-clamp-2 uppercase">
                      {news.title}
                    </Typography>
                    <Typography variant="p" color="dark" className="opacity-60 text-sm font-medium">
                      {news.date}
                    </Typography>
                    <Typography variant="p" color="dark" className="opacity-80 line-clamp-3">
                      {news.excerpt}
                    </Typography>
                    <div className="mt-auto pt-2 ">
                      <Typography variant="p" color="primary" className="inline-flex  font-bold underline transition-colors text-[16px]">
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
