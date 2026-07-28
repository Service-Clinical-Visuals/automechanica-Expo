"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Solutions() {
  const categories = ["Starter", "Industrial", "Motive Power", "View All"];
  const [activeCategory, setActiveCategory] = useState("Starter");

  const categoryData: Record<string, { title: string, desc: string, img: string }[]> = {
    "Starter": [
      { title: "Lithium", desc: "Advanced LiFePO4 batteries delivering high CCA, low self-discharge, and reliable performance.", img: "/moto/confinas/products/frame1-1.png" },
      { title: "Gel", desc: "Maintenance-free GEL batteries with a sealed VRLA design for reliable and safe powersports performance.", img: "/moto/confinas/products/frame1-2.png" },
      { title: "AGM", desc: "Maintenance-free AGM batteries with sealed VRLA technology, delivering safe, reliable performance for ride-on mowers.", img: "/moto/confinas/products/frame1-3.png" },
      { title: "Dry", desc: "Reliable 6V and 12V DRY batteries with acid-pack activation, designed for dependable performance across various applications.", img: "/moto/confinas/products/frame1-4.png" },
    ],
    "Industrial": [
      { title: "FP – General Purpose AGM", desc: "FP Series AGM batteries provide reliable standby power for UPS, telecom, security, and emergency systems.", img: "/moto/confinas/products/frame2-1.png" },
      { title: "FPH – High Rate AGM", desc: "FPH Series AGM batteries deliver high-rate power and reliable backup for UPS and data centers.", img: "/moto/confinas/products/frame2-2.png" },
      { title: "FPC – Cyclic AGM", desc: "FPC Series deep cycle AGM batteries deliver reliable cyclic power for mobility and energy storage applications.", img: "/moto/confinas/products/frame2-3.png" },
      { title: "FPG – Cyclic GEL", desc: "Reliable 6V and 12V DRY batteries with acid-pack activation, designed for dependable performance across various applications.", img: "/moto/confinas/products/frame2-4.png" },
    ],
    "Motive Power": [
      { title: "FDC – Deep Cycle Flooded", desc: "FDC Series deep cycle batteries deliver long-lasting power for traction, solar, and industrial applications.", img: "/moto/confinas/products/frame3-1.png" },
      { title: "FDCT – Deep Cycle Tubular", desc: "FDCT Tubular batteries deliver exceptional deep cycle performance for demanding industrial and solar applications", img: "/moto/confinas/products/frame3-2.png" },
      { title: "FDC – AGM Carbon", desc: "FDC AGM Carbon batteries deliver maintenance-free deep cycle power for electric vehicles, solar, marine, and industrial applications.", img: "/moto/confinas/products/frame3-3.png" },
      { title: "FDC – Deep Cycle LiFePO4", desc: "FDC Deep Cycle Lithium batteries deliver lightweight, maintenance-free power with fast charging and long service life.", img: "/moto/confinas/products/frame3-4.png" },
    ]
  };

  const activeCards = activeCategory === "View All" 
    ? [...categoryData["Starter"], ...categoryData["Industrial"], ...categoryData["Motive Power"]]
    : (categoryData[activeCategory] || []);

  return (
    <section className="w-full py-16 min-[3500px]:py-[120px] bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[1440px]:gap-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center gap-6 text-center" data-aos="fade-up">
           <div className="flex items-center gap-4 w-full mx-auto justify-center">
             <div className="h-0.5 bg-primary w-12 sm:w-24"></div>
             <Typography variant="h2" color="dark" className="font-bold shrink-0">
               Explore Our Product Range
             </Typography>
             <div className="h-0.5 bg-primary w-12 sm:w-24"></div>
           </div>
          
           <div className="w-full h-px bg-primary/20 sm:hidden"></div>

           <Typography variant="p" color="muted" className="leading-relaxed w-full min-[1440px]:max-w-[80%]">
             FULBAT offers a comprehensive portfolio of high-performance batteries engineered to meet the needs of automotive, industrial, and motive power applications. From starter batteries to advanced lithium solutions, every product is designed to deliver exceptional reliability, efficiency, and long-lasting performance.
           </Typography>
           
           <div className="w-full h-[2px] bg-primary hidden sm:block mt-2"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 border transition-colors duration-300 ${
                activeCategory === cat 
                  ? "border-primary bg-primary text-white font-semibold" 
                  : "border-primary/60 bg-white text-dark hover:border-primary hover:bg-primary/5"
              }`}
            >
              <Typography variant="h5" className={activeCategory === cat ? "text-white " : "text-dark "}>
                {cat}
              </Typography>
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div 
          className="w-full mt-4" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <Swiper
            key={activeCategory} // Force re-render to reset pagination dots on category change
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {activeCards.map((card, idx) => (
              <SwiperSlide key={`${activeCategory}-${idx}`} className="!h-auto">
                <div className="group relative w-full h-full flex flex-col bg-white border border-gray-100 shadow-md p-5">
                  
                  {/* Image Block */}
                  <div className="w-full aspect-[351/273] mb-6 flex items-center justify-center overflow-hidden bg-white">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-[90%] h-[90%] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Block */}
                  <div className="flex flex-col gap-3 flex-1 text-left">
                    <Typography variant="h4" color="dark" className="font-bold leading-tight">
                      {card.title}
                    </Typography>
                    <Typography variant="p" color="dark" className="leading-relaxed">
                      {card.desc}
                    </Typography>
                  </div>

                  {/* Button Block */}
                  <div className="mt-auto mx-auto pt-6 self-start">
                    <Button text="View Product" href="#" showIcon={false} />
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
