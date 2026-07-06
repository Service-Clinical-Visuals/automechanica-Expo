"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const News = () => {
  const newsItems = [
    {
      title: "Hybrid vehicles: a relevant solution for the future?",
      date: "October 2026",
      desc: "Discover the first article in our new saga dedicated to the powertrains of tomorrow! Let's start with the hybrid vehicle."
    },
    {
      title: "Participation in Automechanika Frankfurt",
      date: "August 2024",
      desc: "Our teams will be present at the Automechanika Frankfurt trade fair in Germany."
    },
    {
      title: "The end of a myth: the ban of maintaining your vehicle",
      date: "August 2024",
      desc: "What if we told you that you could have your vehicle serviced outside the manufacturer's network without the risk of losing your warranty?"
    },
    {
      title: "Do our coils still have a future?",
      date: "May 2026",
      desc: "Changes in the automotive world are forcing us to question the future of our products."
    }
  ];

  const renderCard = (item: any, index: number) => (
    <div
      key={index}
      className="group  flex flex-col justify-between p-6 rounded-[2rem] border-[1.5px] border-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] transition-colors duration-300 min-h-[420px] cursor-pointer h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div>
        <Typography variant="h4" color="dark" className="font-semibold text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300 mb-6 leading-snug">
          {item.title}
        </Typography>
        <Typography variant="p" className=" text-black group-hover:text-white/90 transition-colors duration-300 mb-6  tracking-normal">
          {item.date}
        </Typography>
        <Typography variant="p" color="dark" weight="normal" className=" group-hover:text-white/80 transition-colors duration-300 ">
          {item.desc}
        </Typography>
      </div>

      <div className="mt-5 pt-3 flex w-full">
        <div className="w-full flex justify-center">
          <Button text="View Details" variant="secondary" className="w-full" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="news" className="py-10 md:py-15 mb-10 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col  items-center justify-center text-center " data-aos="fade-up">
          <div className="relative inline-block  mb-10">
            <Typography variant="h2" color="dark" className="font-semibold">
              Our Recent News
            </Typography>
            <div className="absolute -left-4 md:-left-6 -bottom-1 w-16 md:w-20 h-1 rounded-xl bg-[var(--color-primary)]"></div>
          </div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {newsItems.map((item, index) => renderCard(item, index))}
        </div>

        {/* Mobile View: Swiper */}
        <div className="block md:hidden pb-10" data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full h-full pb-12"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                {renderCard(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default News;
