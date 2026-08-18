"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "./Button";

const products = [
  { name: "Brake Pads", image: "/moto/asimco/1.png" },
  { name: "Brake Shoes", image: "/moto/asimco/2.png" },
  { name: "Brake Discs", image: "/moto/asimco/3.png" },
  { name: "Rubber Parts", image: "/moto/asimco/4.png" },
  { name: "Radiators", image: "/moto/asimco/5.png" },
  { name: "Brake Fluids", image: "/moto/asimco/6.png" },
  { name: "Horns", image: "/moto/asimco/7.png" },
  { name: "Fuel Pumps", image: "/moto/asimco/8.png" },
  { name: "Shock Absorbers", image: "/moto/asimco/9.png" },
];

export default function Products() {
  return (
    <section className="py-20 lg:py-32 bg-white text-black overflow-hidden">
      <div className="custom-container">
        
        {/* Header Content */}
        <div className="text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title teko-font text-black font-medium  mb-6">
            Brake System Solutions
          </h2>
          <p className="section-text text-[#111111] inter-font leading-relaxed">
            Engineered for safety, precision, and long-lasting performance, ASIMCO's brake system components are designed to meet OEM-quality standards for a wide range of passenger and commercial vehicles. From brake pads to brake calipers, every product is manufactured with advanced materials and rigorous quality testing to deliver reliable stopping power, enhanced durability, and consistent performance on every journey.
          </p>
        </div>

        {/* Products Slider */}
        <div data-aos="fade-up" data-aos-delay="200" className="products-swiper-container ">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-bullet-custom',
              bulletActiveClass: 'swiper-bullet-custom-active',
              
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="pt-8 pb-20">
                <div className="relative w-full px-2 lg:px-4">
                  {/* Black Tray (Background) */}
                  <div className="absolute bottom-0 left-0 w-full h-[55%] lg:h-[60%] bg-[#111111] rounded-sm z-0" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center w-full px-6">
                 
                      <div className="relative w-full h-full pb-6">
                       <img
                       src={product.image}
                       alt={product.name}
                       className="object-contain drop-shadow-xl"
                      />
                      </div>
                    
                    {/* Text and Button */}
                    <div className="flex flex-col items-center pb-6">
                      <h3 className="product-title teko-font text-white font-medium mb-4 tracking-wide text-center">
                        {product.name}
                      </h3>
                      <Button href="#" variant="primary" className="!px-6 !py-1 !text-base">
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
