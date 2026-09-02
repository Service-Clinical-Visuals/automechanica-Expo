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
      title: "We Develop Something Beyond Technology...\nPassion!",
      desc: "Passion for cars drives InterCar and Nuova Tecnodelta to deliver high-quality automotive components for leading manufacturers.",
      img: "/moto/nuova/news1.png",
    },
    {
      title: "One Group, Two Brands,\nThe Same Passion.",
      desc: "Driven by automotive passion, InterCar and Nuova Tecnodelta deliver high-quality components for leading car manufacturers.",
      img: "/moto/nuova/news2.png",
    },
    {
      title: "INTERCAR AND NUOVA TECNODELTA: A WINNING COMBINATION",
      desc: "InterCar and Nuova Tecnodelta combine their expertise to deliver reliable, high-quality Made in Italy automotive solutions.",
      img: "/moto/nuova/news3.png",
    },
  ];

  return (
    <section id="news" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[3800px]:gap-20">

        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center gap-4 xl:max-w-[60%] mx-auto">
          <Typography variant="h2" color="dark" className="font-bold leading-tight" data-aos="fade-up">
            Latest News
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Stay updated with Nuova Tecnodelta's latest innovations, company developments, and industry highlights, showcasing new advancements, achievements, and milestones.
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
                <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">

                  {/* Image */}
                  <div className="w-full p-4 min-[3800px]:p-8 shrink-0" data-aos="fade-in">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full aspect-video object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 px-6 pb-6 pt-2 min-[3800px]:px-10 min-[3800px]:pb-10 min-[3800px]:pt-4 relative text-left">
                    <Typography variant="h3" color="dark" className="font-bold mb-3 whitespace-pre-line" data-aos="fade-up" data-aos-delay="100">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed mb-6 flex-1" data-aos="fade-up" data-aos-delay="200">
                      {item.desc}
                    </Typography>

                    {/* Read More Link */}
                    <div className="mt-auto flex justify-end" data-aos="fade-up" data-aos-delay="300">
                      <a href="#news" className="text-primary text-sm font-semibold hover:text-primary-hover transition-colors">
                        Read More
                      </a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop News Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 min-[3800px]:gap-16">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">

              {/* Image */}
              <div className="w-full p-4 min-[3800px]:p-8 shrink-0" data-aos="fade-in" data-aos-delay={index * 100}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-video object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 pb-6 pt-2 min-[3800px]:px-10 min-[3800px]:pb-10 min-[3800px]:pt-4 relative text-left">
                <Typography variant="h3" color="dark" className="font-bold mb-3 whitespace-pre-line" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                  {item.title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed mb-6 flex-1" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                  {item.desc}
                </Typography>

                {/* Read More Link */}
                <div className="mt-auto flex justify-end" data-aos="fade-up" data-aos-delay={index * 100 + 300}>
                  <Typography variant="p" color="primary" className="text-primary underline font-semibold hover:text-primary-hover transition-colors">
                    Read More
                  </Typography>
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
