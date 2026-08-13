"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function News() {
  const [activeIndex, setActiveIndex] = useState(0);
  const newsItems = [
    {
      date: "17.06.2023",
      title: "One more prize with Rexoil'e",
      image: "/moto/rexoil/news1.png",
      link: "#"
    },
     {
      date: "02.06.2022",
      title: "We are at Automechanika - ISTANBUL...",
      image: "/moto/rexoil/news6.png",
      link: "#"
    },
    {
      date: "19.03.2020",
      title: "REXOIL is once again among the top...",
      image: "/moto/rexoil/news3.png",
      link: "#"
    },
    {
      date: "25.08.2022",
      title: "Türkiye Lider Marka Ödülleri '2022",
      image: "/moto/rexoil/news5.png",
      link: "#"
    },
   {
      date: "08.06.2023",
      title: "We are at Automechanika - ISTANBUL...",
      image: "/moto/rexoil/news2.png",
      link: "#"
    },
    {
      date: "10.09.2022",
      title: "2022 Crescents and Stars of Packaging",
      image: "/moto/rexoil/news4.png",
      link: "#"
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f9f9f9]">
      <div className="custom-container">
        
        {/* Header */}
        <div className="text-center max-w-7xl mx-auto mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="section-title font-semibold text-[#11121B] mb-4 leading-[1.2] exo-2">
            Latest News & Updates
          </h2>
          <p className="section-text text-[#515151] niramit leading-[1.8]">
            Stay up to date with the latest news from REXOIL, including new product launches, industry insights, company announcements, exhibitions, and business milestones. Explore our latest innovations, partnerships, and achievements as we continue to deliver high-quality lubricant solutions and drive excellence in the automotive industry.
          </p>
        </div>

        {/* News Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            }
          }}
          className="w-full pb-16 news-swiper"
        >
          {newsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div 
                className="bg-white rounded-xl p-5  transition-shadow border border-gray-100 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                {/* Image */}
                <div className="w-full rounded-lg mb-6 relative aspect-square hover:scale-[1.03] transition-transform duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <span className="text-gray-400 text-[16px] md:text-[18px] 3xl:text-[20px] niramit font-semibold mb-3 block">
                    {item.date}
                  </span>
                  <h3 className="product-card-title font-semibold text-[#333333] mb-2 exo-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="h-[1px] w-full bg-[#E4E4E4] mb-4"></div>
                  <div className="mt-auto">
                     <a 
                       href={item.link} 
                       className="product-card-text text-[#333333] font-semibold niramit text-[14px] md:text-[15px] hover:text-[#A27F41] transition-colors underline decoration-2 underline-offset-4"
                     >
                       Read More
                     </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom 3-Bar Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8" data-aos="fade-up">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex % 3 === i ? 'bg-[#A27F41]' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
