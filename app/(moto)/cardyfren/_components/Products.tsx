"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Button from "./Button";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const products = [
  { id: 1, name: "ZF Planetary Pinion Gear", image: "1.png" },
  { id: 2, name: "ZF Sprocket", image: "2.png" },
  { id: 3, name: "ZF Sun Pinion Shaft", image: "3.png" },
  { id: 4, name: "JCB loader trunnion", image: "4.png" },
  { id: 5, name: "JCB Steering Knuckle", image: "5.png" },
  { id: 6, name: "JCB Planetary Pinion", image: "6.png" },
  { id: 7, name: "JCB Differential Housing", image: "7.png" },
  { id: 8, name: "JCB Sprocket Mounting Plate", image: "8.png" },
];

export default function Products() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Title and Description */}
        <div className="text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="section-title font-normal text-black mb-6 font-heading">
            Our Product Portfolio
          </h2>
          <p className="text-black section-text leading-relaxed font-body mb-8">
            Discover a comprehensive range of precision-engineered driveline components designed to deliver reliable power transmission, exceptional durability, and long-lasting performance. From CV joints and cardan shafts to universal joints, couplings, and transmission solutions, every product is manufactured to meet the highest quality standards for automotive, industrial, agricultural, marine, railway, and construction applications.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="cardyfren-products-swiper !pb-16"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="py-2">
                {/* Product Card */}
                <div className="flex flex-col h-[500px] min-[2560px]:h-[400px] bg-transparent group px-2 drop-shadow-lg min-[2560px]:drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:drop-shadow-lg min-[2560px]:hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 border-t border-gray-100/70 mb-8">
                  
                  {/* MOBILE, TABLET, AND LAPTOP VIEW (< 2560px) */}
                  <div className="w-full flex-1 bg-white rounded-t-[4px] flex-col relative z-0 flex min-[2560px]:hidden">
                     {/* Cyan Image Wrapper */}
                     <div className="w-full h-full relative flex justify-center items-center">
                          <img 
                            src={`/moto/cardyfren/${product.image}`} 
                            alt={product.name} 
                            className="object-contain w-full h-full " 
                          />
                     </div>
                     {/* Text Area */}
                     <div className="w-full h-[45%] flex flex-col items-center justify-start px-4 pb-2 pt-6">
                        <h3 className="text-center footer-title font-normal text-black font-heading leading-tight line-clamp-2">
                          {product.name}
                        </h3>
                     </div>
                  </div>

                  {/* 2K & 4K VIEW (>= 2560px) */}
                  <div className="w-full h-full bg-white rounded-[4px] flex-col relative z-0 hidden min-[2560px]:flex">
                     {/* Image Wrapper */}
                     <div className="w-full h-[55%] relative flex justify-center items-center">
                          <img 
                            src={`/moto/cardyfren/${product.image}`} 
                            alt={product.name} 
                            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" 
                          />
                     </div>
                     {/* Text Area */}
                     <div className="w-full h-[45%] flex flex-col items-center justify-start px-4 pb-2 pt-6">
                        <h3 className="text-center footer-title font-normal text-black font-heading leading-tight line-clamp-2">
                          {product.name}
                        </h3>
                     </div>
                  </div>

                  {/* Bottom Notch Area - MOBILE / LAPTOP (< 2560px) */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[1px] z-20 block min-[2560px]:hidden">
                    <div
                      className="
                        bg-white
                        p-[4px]
                        rounded-[3px]
                        shadow-[0_1px_4px_rgba(0,0,0,0.18)]
                        [clip-path:inset(-10px_-10px_0_-10px)]
                      "
                    >
                      <Button
                        className="
                          !bg-[#28b7ff]
                          hover:!bg-[#28b7ff]
                          !text-white
                          !border-none
                          !rounded-[3px]
                          !shadow-none
                          !font-normal
                          !btn-text
                          !px-[12px]
                          !py-[6px]
                          !min-h-0
                          !w-auto
                          whitespace-nowrap
                        "
                      >
                        View Product
                      </Button>
                    </div>
                  </div>

                  {/* Bottom Notch Area - 2K & 4K (>= 2560px) */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[18px] z-20 hidden min-[2560px]:block">
                    <div
                      className="
                        bg-white
                        p-[5px]
                        rounded-[4px]
                        shadow-[0_4px_8px_rgba(0,0,0,0.15)]
                        [clip-path:inset(0px_-15px_-15px_-15px)]
                      "
                    >
                      <Button
                        className="
                          !bg-[#28b7ff]
                          hover:!bg-[#28b7ff]
                          !text-white
                          !border-none
                          !rounded-[3px]
                          !shadow-none
                          !font-normal
                          !btn-text
                          !px-[12px]
                          !py-[6px]
                          !min-h-0
                          !w-auto
                          whitespace-nowrap
                        "
                      >
                        View Product
                      </Button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
