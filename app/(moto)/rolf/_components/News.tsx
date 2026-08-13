"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function News() {
  const newsItems = [
    {
      date: "22 May 2026",
      title: "Progress through sustainability: ROLF...",
      excerpt: "We are delighted to announce a groundbreaking strategic partnership following...",
      img: "/moto/rolf/news1.png"
    },
    {
      date: "March 23, 2026",
      title: "When passion knows no bounds: ROLF meets...",
      excerpt: "When Georges Wenger, owner of the Swiss company 'Carrosserie Georges Wenger...",
      img: "/moto/rolf/news2.png"
    },
    {
      date: "March 8, 2026",
      title: "Full speed ahead into the 2026 season...",
      excerpt: "Full speed ahead into the 2026 season: ROLF Lubricants GmbH & Niklas Vogel!...",
      img: "/moto/rolf/news3.png"
    },
    {
      date: "January 23, 2026",
      title: "ROLF LUBRICANTS GMBH at the Lubricants...",
      excerpt: "ROLF LUBRICANTS GMBH at the Lubricant Expo ME: Networking and Innovation in Dubai...",
      img: "/moto/rolf/news4.png"
    },
  ];

  return (
    <section className="relative w-full py-16  overflow-hidden bg-[url('/moto/rolf/bg3.png')] bg-cover bg-center">
      {/* Dark overlay for background pattern */}
      <div className="absolute inset-0 bg-[#232323]/90 z-0"></div>

      <div className="custom-container relative z-10 flex flex-col gap-8 ">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/20 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:w-[70%]">
            <Typography variant="h2" color="white" className="leading-tight">
              Latest News & Events
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              Stay connected with the latest updates from ROLF Lubricants GmbH. Explore company news, global exhibitions, strategic partnerships, product innovations, motorsport achievements, and industry events as we continue to expand our international presence and drive the future of high-performance lubrication solutions.
            </Typography>
          </div>
          <div className="flex-shrink-0 mb-1 lg:mb-2">
            <Button text="Read Latest News" href="#" showIcon={true} />
          </div>
        </div>

        {/* Swiper Block */}
        <div className="w-full relative mt-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              1536: { slidesPerView: 4 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {newsItems.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="w-full h-full bg-[#171717] flex flex-col border border-white/10 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  {/* Image Container with padding to match design */}
                  <div className="w-full aspect-[4/3] overflow-hidden p-4 pb-0">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="flex flex-col gap-3 p-5 flex-grow">
                    <Typography variant="h3" color="white"  className="font-bold line-clamp-2 leading-snug min-h-[3rem]">
                      {item.title}
                    </Typography>
                    <span className=" text-white/70 font-medium">
                      {item.date}
                    </span>
                    <Typography variant="p" color="white" className="text-sm line-clamp-3 leading-relaxed mt-1">
                      {item.excerpt}
                    </Typography>
                    <a href="#" className="text-[#FFCD00] text-sm font-semibold hover:underline mt-auto pt-2 flex items-center gap-2">
                      Read More &gt;&gt;
                    </a>
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
