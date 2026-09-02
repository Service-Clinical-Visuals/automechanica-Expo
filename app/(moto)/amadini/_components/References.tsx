"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AmadiniButton from "./AmadiniButton";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  { id: 1, title: "Heaters / Glow Plugs", desc: "For over 30 years, our heaters have been synonymous with ORIGINAL QUALITY and excellent service. Our diesel...", image: "/moto/amadini/1.png" },
  { id: 2, title: "Filters", desc: "As specialists in fuel system spare parts, Amadini offers universal fuel filters (Gasoline and Diesel) in various formats...", image: "/moto/amadini/2.png" },
  { id: 3, title: "Spare parts fittings / Fittings", desc: "In addition to mechanical fuel pumps and universal gasoline and diesel filters, we offer a wide range of fittings to facilitate...", image: "/moto/amadini/3.png" },
  { id: 4, title: "Common Rail", desc: "We have a wide assortment of nozzles, elements and valves for diesel injectors. We distribute top quality...", image: "/moto/amadini/4.png" },
  { id: 5, title: "Horns", desc: "We have a wide assortment of horns for automotive, industrial and special vehicles. Horn, electric (12v and 24v...", image: "/moto/amadini/5.png" },
  { id: 6, title: "E. Transfer Pumps", desc: "As a complement to the range of products for industrial vehicles, Amadini offers a wide variety of liquid transfer pumps...", image: "/moto/amadini/6.png" },
  { id: 7, title: "MPP / Air Control Valve", desc: "Idle valves or stepper motors are responsible for regulating the engine's revolutions per minute by releasing the...", image: "/moto/amadini/7.png" },
  { id: 8, title: "Brakes", desc: "Amadini, exclusive distributor for Spain and Portugal of the SAMKO-LPR brand, Original Equipment manufacturer...", image: "/moto/amadini/8.png" },
  { id: 9, title: "Pressure Regulator", desc: "Amadini, as a specialist in diesel injection spare parts, offers among our product range Bosch Common Rail pressure...", image: "/moto/amadini/9.png" },
];

export default function References() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden px-4 xl:px-16">
      <div className="custom-container">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b-2 border-gray-300 pb-8">
          <div className="max-w-5xl">
          <h2 className="section-title font-semibold text-[#2a2a2a] leading-tight mb-4">
              All Our References
            </h2>
            <p className="text-[#4a4a4a] section-text leading-relaxed max-w-5xl">
              Explore Amadini's range of automotive components engineered for quality, reliability, and performance. From ignition systems and fuel management to braking, filtration, engine components, and electrical solutions, our products deliver dependable performance for passenger and commercial vehicles.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <AmadiniButton
              href="/amadini/products"
              variant="primary"
            >
              Explore Products
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1V13M13 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </AmadiniButton>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative pb-12">
          <style dangerouslySetInnerHTML={{ __html: `
            .amadini-swiper-pagination .swiper-pagination-bullet {
              width: 40px;
              height: 6px;
              border-radius: 4px;
              background-color: #E5E7EB;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .amadini-swiper-pagination .swiper-pagination-bullet-active {
              background-color: #005484;
              width: 60px;
            }
          `}} />
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.amadini-swiper-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow group">
                  
         
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain  h-full w-full p-2"
                      />
                  

                  {/* Content Container */}
                  <div className="flex flex-row items-center justify-between mt-auto w-full gap-10 pt-4">
                    <div className="flex flex-col flex-grow">
                      <h3 className="card-text font-semibold text-[#2a2a2a] mb-2">{item.title}</h3>
                      <p className="text-[#4a4a4a] section-text leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Link 
                        href={`/amadini/products/${item.id}`}
                        className="w-12 h-12 rounded-full bg-[#005484] flex items-center justify-center text-white hover:bg-[#003d61] transition-colors shadow-md"
                      >
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 13L13 1M13 1V13M13 1H1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="amadini-swiper-pagination flex justify-center gap-2 mt-8"></div>
        </div>
        
      </div>
    </section>
  );
}
