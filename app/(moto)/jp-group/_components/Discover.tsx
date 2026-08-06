"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiBox } from "react-icons/fi";
import { FaCar, FaHorse } from "react-icons/fa";
import { SiPorsche, SiVolkswagen } from "react-icons/si";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderData = [
  {
    id: 1,
    image: "/moto/jp-group/part1.png",
    title: "All New Parts",
    subtitle: "See the latest parts for all new cars",
    icon: <FiBox className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14  text-[#E11313]" />,
  },
  {
    id: 2,
    image: "/moto/jp-group/part2.png",
    title: "All Contemporary Cars",
    subtitle: "See the latest parts for all Contemporary Cars",
    icon: <FaCar className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14  text-[#E11313]" />,
  },
  {
    id: 3,
    image: "/moto/jp-group/part3.png",
    title: "All Classic Cars",
    subtitle: "See the latest parts for all Classic Cars",
    icon: <FaCar className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14 text-[#E11313]" />,
  },
  {
    id: 4,
    image: "/moto/jp-group/part4.png",
    title: "Porsche Classics",
    subtitle: "See the latest parts for all Porsche Classics",
    icon: <SiPorsche className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14 text-[#E11313]" />,
  },
  {
    id: 5,
    image: "/moto/jp-group/part5.png",
    title: "VW Classic",
    subtitle: "See the latest parts for all VW Classic",
    icon: <SiVolkswagen className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14 text-[#E11313]" />,
  },
  {
    id: 6,
    image: "/moto/jp-group/part6.jpg",
    title: "Mustang Classic",
    subtitle: "See the latest parts for all Mustang Classic",
    icon: <FaHorse className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14 text-[#E11313]" />,
  }
];

const Discover = () => {
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <section className="w-full py-16 bg-white relative overflow-hidden" id="discover">
      <div className="custom-container flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 min-[2500px]:mb-20 min-[3800px]:mb-32" data-aos="fade-up">
          {/* Left: Headers */}
          <div className="flex flex-col gap-2 min-[2500px]:gap-4 min-[3800px]:gap-6">
            <Typography variant="h4" color="primary" className="font-bold uppercase">
              New Parts
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold">
              Discover Our New Parts
            </Typography>
            <Typography variant="p" color="dark" className="text-gray-600">
              High-quality parts for every vehicle. Explore our latest additions.
            </Typography>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-6 min-[2500px]:gap-12 shrink-0">
            <div ref={(node) => setPaginationEl(node)} className="discover-pagination-wrapper flex items-center"></div>
            <div className="flex items-center gap-3 min-[2500px]:gap-6">
              <button ref={(node) => setPrevEl(node)} className="w-10 h-10 min-[2500px]:w-16 min-[2500px]:h-16 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-400 hover:border-gray-400 transition-colors">
                <ArrowLeft className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8" />
              </button>
              <button ref={(node) => setNextEl(node)} className="w-10 h-10 min-[2500px]:w-16 min-[2500px]:h-16 rounded-full border border-[#E11313] flex items-center justify-center text-[#E11313] hover:text-white hover:bg-[#E11313] transition-colors">
                <ArrowRight className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            slidesPerGroup={2}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
              2500: { slidesPerView: 4, spaceBetween: 48 },
              3800: { slidesPerView: 4, spaceBetween: 64 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            navigation={{
              prevEl: prevEl,
              nextEl: nextEl,
            }}
            pagination={{
              el: paginationEl,
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"><span class="bullet-inner">${index + 1}</span></span>`;
              }
            }}
            className="w-full "
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col h-full bg-white border border-gray-100 rounded-sm overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] group hover:-translate-y-1 transition-transform duration-300">
                  {/* Image Container */}
                  <div className="relative w-full aspect-square bg-gray-50 border-b border-gray-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                    {/* NEW Badge */}
                    <div className="absolute top-4 left-4 bg-[#E11313] text-white text-[10px] min-[2500px]:text-base uppercase font-bold px-3 py-1 min-[2500px]:px-6 min-[2500px]:py-2 rounded-full z-10 shadow-sm">
                      New
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute -bottom-6 left-6 w-15 h-15 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-27 min-[3800px]:h-27 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.1)] z-20">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-10 pb-6 px-6 min-[2500px]:pt-16 min-[2500px]:pb-10 min-[2500px]:px-10 flex flex-col flex-1">
                    <Typography variant="h3" color="dark" className="font-bold mb-2">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="mb-6 flex-1">
                      {item.subtitle}
                    </Typography>

                    <div className="flex items-center text-dark font-bold text-sm min-[2500px]:text-xl min-[3800px]:text-3xl cursor-pointer group/btn w-fit">
                      View All Parts
                      <ArrowRight className="w-4 h-4 min-[2500px]:w-8 min-[2500px]:h-8 ml-2 text-[#E11313] group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Button */}
        <div className="mt-1  flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <Button
            text="View all Category"
            variant="primary"
            href="#categories"
            className="!bg-white hover:!bg-[#E11313] min-[2500px]:text-xl min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:text-3xl min-[3800px]:px-16 min-[3800px]:py-6"
          />
        </div>

      </div>
    </section>
  );
};

export default Discover;
