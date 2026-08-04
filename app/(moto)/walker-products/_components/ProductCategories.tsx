"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";

interface ProductCard {
  title: string;
  tag: string;
  img: string;
}

export default function ProductCategories() {
  const categories = ["Automotive", "Commercial Vehicle", "Othermotive®"];
  const [activeCategory, setActiveCategory] = useState("Automotive");

  const categoryData: Record<string, ProductCard[]> = {
    "Automotive": [
      { title: "Air Charge Temperature Sensors", tag: "Engine", img: "/moto/walker-products/automotive-1.jpg" },
      { title: "Air Conditioning Pressure Sensors", tag: "Engine", img: "/moto/walker-products/automotive-2.jpg" },
      { title: "Coil-On-Plug Boots", tag: "Ignition", img: "/moto/walker-products/automotive-3.jpg" },
      { title: "Ignition Distributor Caps & Rotors", tag: "Ignition", img: "/moto/walker-products/automotive-4.jpg" },
      { title: "Fuel Injection Control Pressure Sensors", tag: "Fuel", img: "/moto/walker-products/automotive-5.jpg" },
      { title: "Fuel Injector Seal Repair Kits", tag: "Fuel", img: "/moto/walker-products/automotive-6.jpg" },
      { title: "Exhaust Gas Recirculation Valves", tag: "Emission", img: "/moto/walker-products/automotive-7.jpg" },
    ],
    "Commercial Vehicle": [
      { title: "HD Idle Air Control/Throttle Air Bypass Valves", tag: "Engine", img: "/moto/walker-products/commercial-1.jpg" },
      { title: "HD Camshaft / Crankshaft Position Sensors", tag: "Engine", img: "/moto/walker-products/commercial-2.jpg" },
      { title: "HD Exhaust Gas Temperature Sensors", tag: "Emission", img: "/moto/walker-products/commercial-3.jpg" },
      { title: "HD Exhaust Gas Recirculation Valves", tag: "Emission", img: "/moto/walker-products/commercial-4.jpg" },
      { title: "HD Ignition Coils", tag: "Ignition", img: "/moto/walker-products/commercial-5.jpg" },
    ],
    "Othermotive®": [
      { title: "Manifold Absolute Pressure Sensors", tag: "Marine", img: "/moto/walker-products/othermotive-1.jpg" },
      { title: "Throttle Position Sensors", tag: "Marine", img: "/moto/walker-products/othermotive-2.jpg" },
      { title: "Fuel Injection Repair Kits", tag: "Motorcycles", img: "/moto/walker-products/othermotive-3.jpg" },
      { title: "Engine Coolant Temperature Sensors", tag: "Motorcycles", img: "/moto/walker-products/othermotive-4.jpg" },
      { title: "Manifold Absolute Pressure Sensors", tag: "Agricultural", img: "/moto/walker-products/othermotive-5.jpg" },
      { title: "Nox Sensors", tag: "Agricultural", img: "/moto/walker-products/othermotive-6.jpg" },
    ],
  };

  const activeCards = categoryData[activeCategory] || [];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="products">
      <div className="custom-container flex flex-col gap-8 lg:gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto gap-4 border-b border-white/20 pb-8 lg:pb-10 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-7xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Product Categories
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base">
              Walker Products, Inc. offers a comprehensive range of fuel delivery, emission control, engine management, and ignition components engineered to meet or exceed OEM standards. Backed by ISO 9001 and IATF 16949 certified manufacturing, our products deliver exceptional quality, reliable performance, and broad vehicle coverage for the global automotive aftermarket.
            </Typography>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-sm border text-sm md:text-base font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "border-primary bg-primary text-[#171717] shadow-md" 
                    : "border-white/30 text-white hover:border-white hover:text-white bg-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Swiper Slider */}
        <div 
          className="w-full mt-2" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <Swiper
            key={activeCategory}
            modules={[Autoplay, Pagination]}
            spaceBetween={18}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1440: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="w-full pb-14 custom-swiper-pagination"
          >
            {activeCards.map((card, idx) => (
              <SwiperSlide key={`${activeCategory}-${idx}`} className="h-auto">
                <div className="group relative w-full border border-white/20 bg-[#2C2C2C] p-3 sm:p-3.5 flex flex-col justify-between h-full transition-all duration-300 hover:border-white/40 shadow-xl cursor-pointer">
                  {/* Image Container - Compact Small Size */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/60 flex items-center justify-center">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Card Bottom: Title on Left, Category Pill on Right */}
                  <div className="flex items-end justify-between gap-2.5 my-3 py-1">
                    <div className="text-white font-primary font-semibold text-xs sm:text-sm lg:text-[17px] 2xl:text-[24px] leading-snug line-clamp-2 text-left">
                      {card.title}
                    </div>
                    <div className="inline-flex items-center gap-1 bg-[#121212] hover:bg-[#252525] border border-white/25 px-5.5 py-2 xl:px-7.5 xl:py-3 rounded-md text-white text-[11px] sm:text-xs lg:text-[20px] 2xl:text-[24px] font-semibold shrink-0 transition-colors">
                      <span>{card.tag}</span>
                      <ArrowUpRight className="w-3 h-3 text-white" strokeWidth={2.5} />
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
