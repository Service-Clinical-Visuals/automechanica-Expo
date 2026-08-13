"use client";

import React, { useState } from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export default function News() {
  const [activeCategory, setActiveCategory] = useState<"Corporate" | "Technical">("Corporate");
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const newsItems = [
    {
      category: "Corporate",
      title: "AUTOMECHANIKA DUBAI 2025",
      desc: "We Are Proud And Thankful For One More Successful Presence To Automechanika Dubai 2025 Show In World Trade Center Of Dubai 9-11 December. Continuing Our Journey To Growth, It Was A Great Pleasure To Meet Again With Old And New Costumers And Discuss About The Global Market Of Lubricants And The Trends For The Upcoming Years.",
      image: "/moto/slider/section8.png"
    },
    {
      category: "Corporate",
      title: "AUTOMECHANIKA DUBAI 2023",
      desc: "We Are Proud And Thankful For One More Successful Presence To Automechanika Dubai 2023 Show In World Trade Center Of Dubai 2-4 October. Continuing Our Journey To Growth, It Was A Great Pleasure To Meet Again With Old And New Costumers And Discuss About The Global Market Of Lubricants And The Trends For The Upcoming Years.",
      image: "/moto/slider/news2.png"
    },
    {
      category: "Technical",
      title: "THE ESSENTIAL GUIDE TO GREASE: CLASSIFICATION, TYPES, AND BASICS",
      desc: "Grease Is One Of The Most Essential Lubricants In A Variety Of Mechanical And Industrial Applications. It Is Crucial For Reducing Friction And Extending Equipment Life As Well As Ensuring Smooth Operation. In This Article We Will Explore The World Of Grease, Analyzing Its Types, Properties, And Classifications, Including NLGI Grades And Service Classifications.",
      image: "/moto/slider/news3.png"
    },
    {
      category: "Technical",
      title: "THE ROLE OF HIGH-QUALITY ENGINE OIL / LUBRICANT IN MODERN ENGINES",
      desc: "This Article Analyzes Why Choosing The Right Oil Is Crucial For Your Engine's Efficiency, Efficiency, And Performance. Understanding The Role And Benefits Of A Premium Engine Lubricant Is Important For Everyone Who Seeks To Enhance Their Engine's Life And Reduce Maintenance Costs.",
      image: "/moto/slider/news4.png"
    }
  ];

  const filteredNews = newsItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category: "Corporate" | "Technical") => {
    setActiveCategory(category);
    setActiveIndex(0);
    swiperInstance?.slideTo(0);
  };

  return (
    <section className="py-20 bg-white md:py-32 w-full bg-white">
      <Container>
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="relative mb-1 flex flex-col items-start">
            <div className="absolute top-0 left-0 h-[40px] md:h-[70px] overflow-hidden">
              <span className="font-bebas text-[80px] md:text-[130px] leading-none text-[#2B2B2B]">
                06
              </span>
            </div>
            <div className="pt-[40px] md:pt-[70px] relative z-10">
              <Typography variant="h2" color="primary" className="font-bebas tracking-wide leading-none uppercase">
                OUR NEWS
              </Typography>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            {/* Corporate Button */}
            <button
              onClick={() => handleCategoryChange("Corporate")}
              className={`flex items-center justify-center gap-3 border-2 rounded-[14px] px-8 py-3.5 font-bebas text-[22px] tracking-wide shadow-sm transition-colors ${activeCategory === "Corporate"
                ? "border-primary text-primary hover:bg-primary/5 bg-white"
                : "border-gray-200 text-[#4A4A4A] hover:border-gray-300 bg-white"
                }`}
            >
              <img src="/moto/slider/Vector.png" alt="Corporate" className={`w-5 h-5 object-contain ${activeCategory === "Corporate" ? "" : "opacity-50"}`} />
              CORPORATE
            </button>
            {/* Technical Button */}
            <button
              onClick={() => handleCategoryChange("Technical")}
              className={`flex items-center justify-center gap-3 border-2 rounded-[14px] px-8 py-3.5 font-bebas text-[22px] tracking-wide shadow-sm transition-colors ${activeCategory === "Technical"
                ? "border-primary text-primary hover:bg-primary/5 bg-white"
                : "border-gray-200 text-[#4A4A4A] hover:border-gray-300 bg-white"
                }`}
            >
              <img src="/moto/slider/Vector (1).png" alt="Technical" className={`w-5 h-5 object-contain ${activeCategory === "Technical" ? "" : "opacity-50"}`} />
              TECHNICAL
            </button>
          </div>
        </div>

        {/* Gray Divider */}
        <div className="w-full h-[1px] bg-gray-400 mb-12" />

        {/* Swiper Content */}
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {filteredNews.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="w-full relative" data-aos="fade-right">
                  <img src={item.image} alt={item.title} className="w-full h-[300px] md:h-[400px] object-cover" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start" data-aos="fade-left">
                  <Typography className="text-primary mb-2 text-[18px]" weight="bold">{item.category}</Typography>
                  <Typography variant="h3" className="font-bebas text-[#4A4A4A] tracking-wide mb-6 uppercase text-[32px] md:text-[40px] leading-none">
                    {item.title}
                  </Typography>
                  <Typography className="text-[#4A4A4A] leading-relaxed mb-8 text-[16px] font-medium">
                    {item.desc}
                  </Typography>

                  <Button text="OUR CAPABILITIES" variant="dark" className="!px-6 !py-2.5" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Lines */}
        <div className="flex items-center justify-center gap-2 mt-16">
          {filteredNews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperInstance?.slideTo(idx)}
              className={`h-1.5 rounded-none transition-all duration-300 ${activeIndex === idx ? "w-12 bg-primary" : "w-12 bg-[#4A4A4A]"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
