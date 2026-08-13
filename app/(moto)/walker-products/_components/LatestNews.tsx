"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function LatestNews() {
  const newsItems = [
    {
      title: "Walker Products Expands North American Engine...",
      description: "Walker Products has expanded their Engine Management program for North American markets, adding 388 new part numbers to increase...",
      img: "/moto/walker-products/news-1.png",
      link: "#"
    },
    {
      title: "Walker Products Offers Most Robust Lambda...",
      description: "Walker Products offers the most robust lambda sensor program on the market today. Utilizing 100% OEM base sensors, connectors, & wire lengths...",
      img: "/moto/walker-products/news-2.png",
      link: "#"
    },
    {
      title: "Walker Products Offers New EGTS Design Feature...",
      description: "Walker Products offers a full line of aftermarket Exhaust Gas Temperature Sensors (EGTS), with 295 SKUs, all being Euro 6 compliant...",
      img: "/moto/walker-products/news-3.png",
      link: "#"
    },
    {
      title: "Walker Products Launches Expanded...",
      description: "Walker Products has launched an expanded Camshaft Position & Crankshaft Position sensor program to the UK and European range...",
      img: "/moto/walker-products/news-4.png",
      link: "#"
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="news">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block: Centered Title & Description */}
        <div className="flex flex-col items-center text-center mx-auto max-w-6xl gap-3 md:gap-4" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight">
            Latest News & Industry Updates
          </Typography>
          <Typography variant="p" color="white" className="text-white/80 leading-relaxed ">
            Stay informed with the latest news, product launches, company announcements, and industry insights from Walker Products, Inc. Discover how our commitment to innovation, engineering excellence, and OEM-quality manufacturing continues to drive success across the global automotive aftermarket.
          </Typography>
        </div>

        {/* News Carousel */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 2 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {newsItems.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-2">
                <div className="group relative w-full aspect-[16/10] rounded-sm overflow-hidden bg-[#2C2C2C] border border-white/20 shadow-2xl transition-all duration-300 hover:border-white/40 cursor-pointer">
                  
                  {/* Image Container */}
                  <div className="w-full h-full flex items-center justify-center p-6 bg-[#2C2C2C]">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Overlay with Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                    <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-start gap-3 text-left">
                      <Typography variant="h3" color="white" className="font-semibold leading-tight text-lg md:text-xl lg:text-2xl line-clamp-2">
                        {item.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </Typography>
                      <div className="pt-2">
                        <Button text="Read More" href={item.link} showIcon={true} />
                      </div>
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
