"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const newsItems = [
    {
      date: "JULY 17, 2025",
      title: "New NOx sensor references!",
      desc: "We are introducing brand new NOx sensor references covering FIAT, DAF and VW. From now on.",
      img: "/moto/ampro/news1.png",
    },
    {
      date: "JULY 08, 2025",
      title: "New additive Tank references!",
      desc: "We present brand new additive tank references for PSA. Available from August: These high-quality additive tanks.",
      img: "/moto/ampro/news2.png",
    },
    {
      date: "JULY 17, 2025",
      title: "Upcoming emission technologies!",
      desc: "We launch new solutions for cleaner mobility. Available now: Reliable emission components with OE-level quality.",
      img: "/moto/ampro/news3.png",
    },
  ];

  return (
    <section id="news" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <Typography variant="h4" color="secondary" className="font-bold uppercase tracking-wider text-sm">
              UP TO DATE
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-tight " data-aos="fade-up" data-aos-delay="100">
            Latest updates and innovations from AMPRO Technologie GmbH.
          </Typography>
        </div>

        {/* Mobile & Tablet Swiper Slider */}
        <div className="block lg:hidden custom-swiper-pagination w-full pb-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="w-full"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto pb-4">
                <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden group">
                  
                  {/* Image */}
                  <div className="w-full p-3 aspect-[4/3] overflow-hidden shrink-0" data-aos="fade-in">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 relative">
                    <Typography variant="h6" color="muted" className="mb-2 tracking-wide" data-aos="fade-up">
                      {item.date}
                    </Typography>
                    <Typography variant="h3" color="dark" className="font-bold mb-3" data-aos="fade-up" data-aos-delay="100">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="200">
                      {item.desc}
                    </Typography>
                    
                    {/* Circular Button */}
                    <div className="mt-auto flex justify-end" data-aos="fade-up" data-aos-delay="300">
                      <a href="#news" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors shadow-sm">
                        <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop News Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              
              {/* Image */}
              <div className="w-full p-3 aspect-[4/3] overflow-hidden shrink-0" data-aos="fade-in" data-aos-delay={index * 100}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 relative">
                <Typography variant="h6" color="muted" className="mb-2 tracking-wide" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                  {item.date}
                </Typography>
                <Typography variant="h3" color="dark" className="font-bold mb-3" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                  {item.title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 300}>
                  {item.desc}
                </Typography>
                
                {/* Circular Button */}
                <div className="mt-auto flex justify-end" data-aos="fade-up" data-aos-delay={index * 100 + 400}>
                  <a href="#news" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors shadow-sm">
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2} />
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
