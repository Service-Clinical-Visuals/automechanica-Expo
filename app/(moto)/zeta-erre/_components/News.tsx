"use client";

import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";

const newsItems = [
  {
    image: "/moto/zeta-erre/news/1.png",
    date: "April 23,2026",
    title: "New Zeta-Erre headquarters in Carinaro: greater production capacity for the aftermarket",
  },
  {
    image: "/moto/zeta-erre/news/2.png",
    date: "June 22,2022",
    title: "ZETA-ERRE returns to AUTOPROMOTEC 2022",
  },
  {
    image: "/moto/zeta-erre/news/3.png",
    date: "July 2, 2019",
    title: "AUTOPROMOTEC 2019",
  },
  {
    image: "/moto/zeta-erre/news/4.png",
    date: "June 24, 2019",
    title: "AUTOPROMOTEC Bologna 2019",
  },
  {
    image: "/moto/zeta-erre/news/5.png",
    date: "October 23, 2018",
    title: "ZETA-ERRE at the Rome Fair",
  },
  {
    image: "/moto/zeta-erre/news/6.png",
    date: "October 22, 2018",
    title: "AUTOMECHANIKA fair at Francoforte",
  },
];

export default function News() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="news">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="heading mb-4">Latest News &amp; Insights</h2>
          <p className="content">
            Stay informed with the latest updates from Zeta-Erre, including company news, product
            launches, industry developments, and technical insights. Explore how we continue to
            innovate and deliver reliable transmission solutions for the automotive aftermarket.
          </p>
        </div>

        <div className="custom-swiper-pagination" data-aos="fade-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="pb-8">
                <div className="relative bg-white h-full border-3 border-[#EAEAEA] flex flex-col">
                  <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 pr-15 pb-15 flex-1">
                    <p className="content mb-2 text-[16px]!">{item.date}</p>
                    <h3 className="subheading font-bold! text-[24px]! leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute -bottom-3 -right-3 flex items-center justify-center w-24 h-24 rounded-full bg-white border-3 border-[#EAEAEA] border-b-0 border-r-0 -m-1!">
                    <a
                      href="#"
                      aria-label={`Read more about ${item.title}`}
                      className="flex items-center justify-center w-18 h-18 rounded-full bg-[#F5A623] text-[#1A1A1A] hover:bg-[#e0961c] transition-colors"
                    >
                      <ArrowRight size={30} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
