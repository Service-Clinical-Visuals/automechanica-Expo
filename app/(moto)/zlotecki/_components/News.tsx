"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const newsItems = [
    {
      title: "Types of pin fit in the piston.",
      img: "/zlotecki/c1.png",
    },
    {
      title: "Measuring the nominal diameter of the piston, and the mounting clearance.",
      img: "/zlotecki/c2.png",
    },
    {
      title: "Measuring the hardness of the piston pin.",
      img: "/zlotecki/c3.png",
    },
  ];

  return (
    <section id="news" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[3800px]:gap-24">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 min-[3800px]:gap-8">
          <Typography variant="h2" color="dark" className="font-bold leading-tight max-w-4xl min-[3800px]:max-w-7xl" data-aos="fade-up" data-aos-delay="100">
            Precision Pistons and Piston Rings for Reliable Engine Performance
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-3xl min-[3800px]:max-w-6xl" data-aos="fade-up" data-aos-delay="200">
            Discover our comprehensive range of premium pistons and piston rings, engineered to deliver exceptional durability, efficient combustion, and reliable engine performance.
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
              <SwiperSlide key={index} className="h-auto pb-8">
                <div className="flex flex-col gap-6 items-center text-center group h-full">
                  {/* Image */}
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md border-2 border-primary/10 shrink-0 bg-[#F7F7F7]" data-aos="fade-in">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <Typography variant="h3" color="dark" className="font-bold">
                      {item.title}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop News Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 min-[3800px]:gap-16">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 min-[3800px]:gap-12 items-center text-center group">

              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl min-[3800px]:rounded-[40px] shadow-md border-2 border-primary/10 shrink-0 bg-[#F7F7F7]" data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Content */}
              <div className="px-4 min-[3800px]:px-8" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                <Typography variant="h3" color="dark" className="font-bold">
                  {item.title}
                </Typography>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
