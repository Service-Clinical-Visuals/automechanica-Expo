"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'automotive' | 'industrial' | 'all'>('automotive');

  const automotiveProducts = [
    { id: 1, title: 'CATALYSTS REGENERATED WITH METAL SUBSTRATES', image: '/moto/brain-srl/frame11.png' },
    { id: 2, title: 'CATALYTIC CONVERTERS FOR CARS WITH GAS/LPG SYSTEMS', image: '/moto/brain-srl/frame12.png' },
    { id: 3, title: 'HEAT-TREATED PARTICULATE FILTERS CLEANED', image: '/moto/brain-srl/frame13.png' },
    { id: 4, title: 'CERAMIC PARTICULATE FILTERS SPECIFICALLY FOR CARS', image: '/moto/brain-srl/frame14.png' }
  ];

  const industrialProducts = [
    { id: 5, title: 'WELDABLE METAL SUBSTRATE CATALYTIC CONVERTERS', image: '/moto/brain-srl/frame21.png' },
    { id: 6, title: 'SUBSTRATES FOR INDUSTRIAL DIESEL ENGINES', image: '/moto/brain-srl/frame22.png' },
    { id: 7, title: 'SUBSTRATES FOR THE SELECTIVE REDUCTION OF NITROGEN OXIDES (SCR)', image: '/moto/brain-srl/frame23.png' }
  ];

  const allProducts = [...automotiveProducts, ...industrialProducts];

  let displayProducts = automotiveProducts;
  if (activeTab === 'industrial') displayProducts = industrialProducts;
  if (activeTab === 'all') displayProducts = allProducts;

  return (
    <section className="w-full bg-primary py-16  flex flex-col">
      <div className="custom-container px-4 md:px-8 mx-auto w-full">

        {/* Top Header & Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-8  border-b border-white pb-6" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:w-[60%] xl:w-1/2">
            <Typography variant="h2" color="white" font="bebas" className="uppercase tracking-wide">
              OUR PRODUCT RANGE
            </Typography>
            <Typography variant="p" color="white" font="lato" className="leading-relaxed">
              Explore our diverse product range designed to enhance performance and reduce emissions. Discover innovative solutions that make a positive impact on the environment.
            </Typography>
          </div>

          <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
            <button
              onClick={() => setActiveTab('automotive')}
              className={`px-6 py-1 md:px-7 md:py-2 button font-['Bebas_Neue',_sans-serif] tracking-wider transition-all duration-300 rounded-tl-[1.25rem] rounded-br-[1.25rem] rounded-tr-none rounded-bl-none ${activeTab === 'automotive'
                ? 'bg-white text-primary border border-white'
                : 'bg-transparent text-white border border-white hover:bg-white/10'
                }`}
            >
              AUTOMOTIVE
            </button>
            <button
              onClick={() => setActiveTab('industrial')}
              className={`px-6 py-1 md:px-7 md:py-2 button font-['Bebas_Neue',_sans-serif] tracking-wider transition-all duration-300 rounded-tl-[1.25rem] rounded-br-[1.25rem] rounded-tr-none rounded-bl-none ${activeTab === 'industrial'
                ? 'bg-white text-primary border border-white'
                : 'bg-transparent text-white border border-white hover:bg-white/10'
                }`}
            >
              INDUSTRIAL
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-1 md:px-7 md:py-2 button font-['Bebas_Neue',_sans-serif] tracking-wider transition-all duration-300 rounded-tl-[1.25rem] rounded-br-[1.25rem] rounded-tr-none rounded-bl-none ${activeTab === 'all'
                ? 'bg-white text-primary border border-white'
                : 'bg-transparent text-white border border-white hover:bg-white/10'
                }`}
            >
              VIEW ALL CATEGORIES
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative">
          {/* Add a key to force re-render swiper when tabs change to avoid pagination bugs */}
          <Swiper
            key={activeTab}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1440: { slidesPerView: 4, spaceBetween: 20 },
              1920: { slidesPerView: 4, spaceBetween: 24 },
              2500: { slidesPerView: 4, spaceBetween: 30 },
              3800: { slidesPerView: 4, spaceBetween: 40 },
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination-lines',
            }}
            className="w-full !pb-8"
          >
            {displayProducts.map((product, index) => (
              <SwiperSlide key={`${product.id}-${index}`} className="!h-auto pb-4 !flex flex-col">
                <div
                  className="bg-white flex flex-col p-6 shadow-lg rounded-none w-full flex-1 min-h-[488px]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <div className="w-full aspect-[4/3] max-h-[400px] mb-6 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <Typography variant="h4" color="primary" font="bebas" className="uppercase text-center tracking-wide leading-snug mb-4">
                      {product.title}
                    </Typography>

                    <div className="flex justify-center mt-auto w-full">
                      <Button text="EXPLORE OUR PRODUCT" showIcon={true} className="!w-full max-w-[280px]" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination-lines flex justify-center items-center mt-6"></div>
        </div>

      </div>
    </section>
  );
}
