"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Parts() {
  return (
    <section className="w-full py-12 md:py-16 bg-white" data-aos="fade-up">
      <div className="custom-container flex flex-col">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-3 border-b border-gray-300  gap-6">
          <div className="flex flex-col gap-4 max-w-[70%]">
            <Typography variant="h1" color="dark" weight="bold" className="font-primary">
              Airstal automotive parts
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Airstal Automotive Parts specializes in the remanufacturing of automotive air conditioning compressors. Since 2006, we have continuously improved our processes, becoming a trusted leader in Poland and international markets through quality, innovation, and reliable solutions.
            </Typography>
          </div>
          <Button text="Explore More" href="#" />
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ">
          <div className="w-full h-full py-5  overflow-hidden lg:col-span-6" data-aos="fade-right">
            <img src="/moto/airstal/section3.png" alt="Airstal Parts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="flex flex-col gap-6 py-5 lg:col-span-6" data-aos="fade-left">
            <Typography variant="h3" color="dark" weight="bold" className="font-primary leading-tight">
              Precision Cooling. Reliable Performance. Built to Last.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed mb-2">
              Airstal Automotive Parts is an independent European company specializing in the remanufacturing of automotive air conditioning compressors. Since our establishment, we have built a strong reputation through continuous innovation, technical expertise, and an unwavering commitment to quality. Today, Airstal proudly serves customers throughout Europe and beyond, delivering dependable, sustainable, and cost-effective compressor solutions trusted by distributors, workshops, and automotive professionals worldwide.
            </Typography>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-0.5 bg-primary text-white rounded-full shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Specialized Expertise – Focused exclusively on automotive air conditioning compressor remanufacturing, delivering reliable solutions backed by years of industry experience.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-0.5 bg-primary text-white rounded-full shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Advanced Remanufacturing Process – Every compressor is carefully disassembled, cleaned, inspected, rebuilt, and tested to restore OEM-level performance.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-5 border-t border-gray-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="flex flex-col gap-4 lg:col-span-6">
            <Typography variant="h3" color="dark" weight="bold" className="font-primary">
              Awards, Certifications & Industry Recognition
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has earned Airstal prestigious industry awards and internationally recognized certifications. These achievements reflect our dedication to maintaining the highest standards in automotive air conditioning manufacturing and remanufacturing.
            </Typography>
          </div>

          <div className="w-full relative px-2 lg:col-span-6 flex flex-col custom-swiper-pagination" data-aos="fade-up">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={1}
              pagination={{ el: '.my-custom-pagination', clickable: true }}
              breakpoints={{
                320: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 16 },
                640: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 20 },
                1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 24 },
              }}
              rewind={true}
              loop={false}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="w-full pt-4"
            >
              {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num}>
                  <div className="bg-white border border-gray-100 shadow-sm rounded-md p-4 sm:p-6 aspect-[4/3] md:aspect-video xl:aspect-[4/3] flex items-center justify-center group hover:shadow-md transition-shadow">
                    <img src={`/moto/airstal/icon${num}.png`} alt={`Award ${num}`} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Separate Pagination Container */}
            <div className="my-custom-pagination  w-full mt-2 flex items-center justify-center"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
