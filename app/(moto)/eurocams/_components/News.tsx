"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function News() {
  const newsItems = [
    {
      id: 1,
      image: "/moto/eurocams/news1.png",
      title: "7 Common Engine Problems",
      date: "3 February 2026",
      excerpt: "Your vehicle's engine has a lot of moving components. It is a complicated piece of kit.",
      link: "#",
    },
    {
      id: 2,
      image: "/moto/eurocams/news2.png",
      title: "Why You Should Use High Quality Engine Parts",
      date: "25 November 2025",
      excerpt: "The engine is the heart of your vehicle. If your engine isn't working properly, then your vehicle...",
      link: "#",
    },
    {
      id: 3,
      image: "/moto/eurocams/news3.png",
      title: "Cylinder Head Covers 101: Everything You Need...",
      date: "25 November 2025",
      excerpt: "Here at Eurocams, we specialise in offering high-quality vehicle components. This includes...",
      link: "#",
    },
    {
      id: 4,
      image: "/moto/eurocams/news4.png",
      title: "Tappet Issues Explained: Common Problems And",
      date: "26 October 2025",
      excerpt: "Don't let tappets' small stature fool you - they're a much-needed part of your car's engine...",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 px-4" data-aos="fade-up">
          <Typography variant="h1" className="text-white font-bold mb-4">
            Latest News & Insights
          </Typography>
          <Typography variant="p" color="white" className="xl:max-w-[80%] leading-relaxed">
            Stay informed with the latest updates from Eurocams, including company news, product launches, technical articles, industry insights, and automotive events. Discover expert guidance on engine components, maintenance, and emerging technologies while exploring the innovations that continue to drive quality, performance, and growth across the global automotive aftermarket.
          </Typography>
        </div>

        {/* News Carousel */}
        <div className="mb-10">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            navigation={{ prevEl: '.news-prev', nextEl: '.news-next' }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 4, slidesPerGroup: 1 },
            }}
            className="pb-4"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div 
                  className="bg-white h-full flex flex-col shadow-lg transition-transform hover:-translate-y-2 duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="w-full h-[240px] xl:h-[280px] p-4 pb-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 xl:p-8 flex flex-col flex-grow">
                <Typography variant="h4" className="text-black font-bold mb-3 leading-tight line-clamp-2">
                  {item.title}
                </Typography>
                
                <Typography variant="span" className="text-gray-500 font-bold text-xs mb-4 uppercase tracking-wider block">
                  {item.date}
                </Typography>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-4"></div>

                <Typography variant="p" color="muted" className=" leading-relaxed mb-6 flex-grow line-clamp-3">
                  {item.excerpt}
                </Typography>

                <Link href={item.link} className="inline-block mt-auto">
                  <Typography variant="span" className="text-primary underline font-bold hover:underline underline-offset-4">
                    Read More &gt;&gt;
                  </Typography>
                </Link>
              </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-4">
          <Button text="Discover More" variant="primary" showIcon={true} />
          
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors cursor-pointer shadow-md news-prev">
              <ArrowLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors cursor-pointer shadow-md news-next">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
