"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Solutions() {
  const categories = ["Camshaft", "Cylinder Heads", "Valves", "Hydraulic tappet"];
  const [activeCategory, setActiveCategory] = useState("Camshaft");

  const categoryData: Record<string, { title: string, img: string }[]> = {
    "Camshaft": [
      { title: "HV0495 Et Engineteam", img: "/moto/et-engine/frames/frame1-1.png" },
      { title: "hv0455vr1 et engineteam", img: "/moto/et-engine/frames/frame1-2.png" },
      { title: "hv0497 et engineteam", img: "/moto/et-engine/frames/frame1-3.png" },
      { title: "hv0498 et engineteam", img: "/moto/et-engine/frames/frame1-4.png" },
    ],
    "Cylinder Heads": [
      { title: "RV0068 Et Engineteam", img: "/moto/et-engine/frames/frame2-1.png" },
      { title: "RV0070 Et Engineteam", img: "/moto/et-engine/frames/frame2-2.png" },
      { title: "HL0152 Et Engineteam", img: "/moto/et-engine/frames/frame2-3.png" },
      { title: "RV0058 Et Engineteam", img: "/moto/et-engine/frames/frame2-4.png" },
    ],
    "Valves": [
      { title: "VS0002vr1 Et Engineteam", img: "/moto/et-engine/frames/frame3-1.png" },
      { title: "VI0197 Et Engineteam", img: "/moto/et-engine/frames/frame3-2.png" },
      { title: "VE0198 Et Engineteam", img: "/moto/et-engine/frames/frame3-3.png" },
      { title: "VG0008 Et Engineteam", img: "/moto/et-engine/frames/frame3-4.png" },
    ],
    "Hydraulic tappet": [
      { title: "VS0002vr1 Et Engineteam", img: "/moto/et-engine/frames/frame4-1.png" }
    ]
  };

  const activeCards = categoryData[activeCategory] || [];

  return (
    <section className="w-full py-16  bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/40 pb-8 lg:pb-12" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Comprehensive Engine Solutions
            </Typography>
            <Typography variant="p" color="white" className=" leading-relaxed max-w-[70%]">
              Discover ET ENGINETEAM's extensive portfolio of precision-engineered engine components, designed to deliver exceptional performance, durability, and reliability. From timing systems and camshafts to cylinder heads, valves, and electrical components, our products meet the highest quality standards for modern automotive applications.
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button text="View Product Range" href="#" showIcon={true} />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-1.5 rounded-lg border transition-all duration-300 ${
                activeCategory === cat 
                  ? "border-white text-white font-semibold bg-transparent" 
                  : "border-white/50 text-white/60 hover:border-white hover:text-white bg-transparent"
              }`}
            >
              <Typography variant="h4" color="inherit">
                {cat}
              </Typography>
            </button>
          ))}
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
            {activeCards.map((card, idx) => (
              <SwiperSlide key={`${activeCategory}-${idx}`} className="h-auto">
                <div className="group relative w-full  rounded-[2rem] overflow-hidden  bg-white cursor-pointer shadow-lg">
                  {/* Image */}
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay (Hover state) */}
                  <div className="absolute inset-0 bg-[#171717]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-center p-8">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-6 text-center">
                      <Typography variant="h4" color="white" className="font-semibold">
                        {card.title}
                      </Typography>
                      <Button text="View Details" href="#" showIcon={true} />
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
