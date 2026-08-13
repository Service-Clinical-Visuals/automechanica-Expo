"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const newsItems = [
    {
      title: "Automechanika Dubai Exhibition",
      img: "/moto/donmez/n1.png",
    },
    {
      title: "Strategy and Vision Conference",
      img: "/moto/donmez/n2.png",
    },
    {
      title: "DEU Quality Society Technical Trip",
      img: "/moto/donmez/n3.png",
    },
    {
      title: "DEU Career Fair Participation",
      img: "/moto/donmez/n4.png",
    },
  ];

  return (
    <section id="news" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[3800px]:gap-24">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[95%] lg:max-w-[80%] mx-auto">
          <Typography variant="h2" color="dark" className="font-bold leading-tight" data-aos="fade-up">
            Inside Dönmez
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Stay informed with the latest company news, industry insights, product innovations, and engineering expertise. Explore articles that highlight our commitment to quality, technology, and the evolving commercial vehicle industry.
          </Typography>
        </div>

        {/* Mobile & Tablet Swiper Slider */}
        <div className="block xl:hidden custom-swiper-pagination w-full pb-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto pb-4">
                <div className="flex flex-col h-full bg-white border border-gray-100 shadow-lg overflow-hidden">

                  {/* Image */}
                  <div className="w-full aspect-[4/3] overflow-hidden shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 relative bg-white">
                    <div className="flex-1 flex items-center justify-center min-h-[60px]">
                      <Typography variant="h3" color="dark" className="font-bold text-center">
                        {item.title}
                      </Typography>
                    </div>

                    {/* Read Blog Button */}
                    <div className="mt-6 flex justify-center w-full">
                      <Button text="Read Blog" variant="primary" showIcon={false} className="w-[80%] rounded-lg py-2" />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop News Grid (4 columns) */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-6 min-[3800px]:gap-12">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col h-full bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>

              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 min-[3800px]:p-10 relative bg-white">
                <div className="flex-1 flex items-center justify-center min-h-[60px] min-[3800px]:min-h-[100px]">
                  <Typography variant="h3" color="dark" className="font-bold text-center leading-snug">
                    {item.title}
                  </Typography>
                </div>

                {/* Read Blog Button */}
                <div className="mt-6 min-[3800px]:mt-10 flex justify-center w-full">
                  <Button text="Read Blog" variant="primary" showIcon={false} className="w-[80%] rounded-lg py-2 min-[3800px]:py-4 min-[3800px]:rounded-2xl" />
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
