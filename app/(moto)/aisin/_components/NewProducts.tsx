"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";

const newProducts = [
  {
    image: "/moto/aisin/p5.png",
    title: "EGR Valve",
    desc: "Reduces NOx emissions recirculating exhaust gases, Improving engine efficiency and performance.",
  },
  {
    image: "/moto/aisin/p6.png",
    title: "ADVICS BRAKE PAD WEAR INDICATORS",
    desc: "ADVICS brake pad wear indicators are monitoring components designed to alert drivers & workshops when brake pads reach their wear limit.",
  },
  {
    image: "/moto/aisin/p7.png",
    title: "DCT Kit",
    desc: "AISIN's aftermarket DCT kits deliver key advantages, making them a preferred choice worldwide.",
  },
  {
    image: "/moto/aisin/p8.png",
    title: "ADVIC Brake Disk",
    desc: "ADVICS brake discs are friction components that work together with brake pads to convert kinetic energy into heat, ensuring controlled and stable vehicle deceleration.",
  },
  {
    image: "/moto/aisin/p9.png",
    title: "ADVICS Brake Pads",
    desc: "AISIN's aftermarket DCT kits deliver key advantages, making them a preferred choice worldwide.",
  },
  {
    image: "/moto/aisin/p10.png",
    title: "ADVICS Brake Booster",
    desc: "ADVICS brake boosters reduce pedal effort and improve braking comfort, response, and control with OE-level reliability.",
  },
];

export default function NewProducts() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full py-16 lg:py-24 bg-white relative z-10">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 ">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-primary"></div>
              <span className="section-text font-manrope text-primary font-semibold">
              Our New Product
            </span>
          </div>
          
            <h2 className="section-title font-manrope font-semibold text-[#202020]">
            Discover Our New Products
          </h2>
          
              <p className="section-text text-[#404040] font-normal font-inter">
            Explore our latest range of innovative products, designed with advanced technology to deliver superior performance, reliability, and efficiency across every application.
          </p>
        </div>
        
        {/* Swiper Slider */}
        <div className="relative ">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              el: '.new-products-pagination',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-primary opacity-50 mx-1 w-2 h-2 inline-block rounded-full',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#F8A122] !opacity-100',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {newProducts.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="w-full h-full border border-gray-200 flex flex-col bg-white transition-colors duration-300 hover:border-[#0ea5e9]">
                  
                  {/* Image Container */}
                  <div className="w-full aspect-[5/4] relative bg-white p-3 flex flex-col items-center justify-center">
                    {/* NEW Badge */}
                    <div className="absolute top-4 left-4 bg-[#F8A122] text-white text-[10px] md:text-xs font-bold px-2 py-1 uppercase rounded-sm z-10">
                      NEW
                    </div>
                    
                    <div className="relative w-full h-full flex items-center justify-center bg-[#F9F9F9] p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div className="flex flex-col items-center text-center p-6 flex-grow">
                    <h3 className="font-manrope font-semibold text-[#202020] icon-text mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-inter text-[#404040] section-text mb-6 flex-grow">
                      {item.desc}
                    </p>
                    <Button className="w-full sm:w-auto px-6 py-2">View Product</Button>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation & Pagination (Below Cards) */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-primary hover:text-opacity-70 transition-opacity flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"></path>
                <path d="M12 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <div className="new-products-pagination flex items-center justify-center !w-auto"></div>
            
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="text-primary hover:text-opacity-70 transition-opacity flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
