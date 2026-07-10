"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const sustainabilityData = [
  {
    title: "Environmental",
    image: "/moto/metelli-group/section31.png",
    description: "Committed to a more sustainable future through ISO 14001-certified environmental management, energy-efficient solutions, renewable energy adoption, digital innovation, and EcoVadis Silver ESG recognition."
  },
  {
    title: "Social",
    image: "/moto/metelli-group/section32.png",
    description: "Metelli S.p.A. values people as its greatest asset, promoting health, safety, well-being, lifelong learning, and ethical responsibility while supporting inclusive partnerships and local communities."
  },
  {
    title: "Governance",
    image: "/moto/metelli-group/section33.png",
    description: "Metelli S.p.A. promotes solid, transparent and responsible corporate governance, integrating ethical principles, sustainability and strategic control to balance the interests of stakeholders with an effective decision-making process."
  }
];

export default function Sustainability() {
  return (
    <section className="relative w-full py-16 bg-[#F5F5F5]" data-aos="fade-up">
      <div className="custom-container flex flex-col">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-6 mb-8 border-b border-gray-300 pb-10">
          <div className="flex flex-col w-full lg:w-2/3 max-w-[90%] order-1">
            <Typography variant="h1" font="oswald" color="primary" className="mb-4 tracking-wide font-bold">
              Committed to Sustainable Growth
            </Typography>
            <Typography variant="p" font="lato" className="text-gray-600 leading-relaxed max-w-[95%] md:max-w-[85%]">
              At Metelli Group, sustainability drives everything we do. Through strong Environmental, Social, and Governance (ESG) principles, we protect the environment, support our people, uphold ethical business practices, and create lasting value for a more sustainable future.
            </Typography>
          </div>
          <div className="order-2 flex lg:justify-end lg:w-1/3 pt-1">
            <Button text="Our Sustainability" variant="primary" href="#" />
          </div>
        </div>

        {/* Sustainability Swiper Slider */}
        <div className="w-full relative pb-12 mt-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination-lines-sus',
              renderBullet: function (index, className) {
                return `<span class="${className} !w-12 !h-1.5 !rounded-full !inline-block !mx-1 transition-colors cursor-pointer bg-gray-300"></span>`;
              },
            }}
            className="w-full"
          >
            {sustainabilityData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto pb-4 px-1">
                <div className="flex flex-col group h-full" data-aos="fade-up" data-aos-delay={Math.min(index * 100, 300)}>
                  <div className="w-full aspect-[79/43] relative overflow-hidden rounded-md mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center px-4 flex flex-col flex-grow">
                    <Typography variant="h2" font="oswald" color="primary" className="font-bold mb-3">
                      {item.title}
                    </Typography>
                    <Typography variant="p" font="lato" className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Container matching the custom UI */}
          <div className="custom-pagination-lines custom-pagination-lines-sus absolute bottom-0 left-0 right-0 flex gap-2 justify-center z-10"></div>
        </div>

      </div>
    </section>
  );
}
