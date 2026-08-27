"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

export default function Solutions() {
  const products = [
    {
      title: "Cylinder Head Gaskets",
      desc: "Cylinder Head Gaskets in OEM quality – composite or multi-layer steel",
      img: "/moto/elvis/frame1.png"
    },
    {
      title: "Oil pan gaskets",
      desc: "Elwis Royal oil pan gaskets are in the highest quality that the market can offer and respecting all the...",
      img: "/moto/elvis/frame2.png"
    },
    {
      title: "Other Gasket Spareparts",
      desc: "Elwis Royal offers high-quality Gasket Spareparts manufactured accordingly to the OE standards",
      img: "/moto/elvis/frame3.png"
    },
    {
      title: "Conversion Sets",
      desc: "Conversion Sets with the perfect and right composition of gaskets and replacement parts...",
      img: "/moto/elvis/frame4.png"
    },
    {
      title: "Intake Manifold Gaskets",
      desc: "Elwis Royal only use the finest quality of rubber such as Viton, NBR, silicone and steel in its OE equivalent...",
      img: "/moto/elvis/frame5.png"
    },
    {
      title: "Valve Cover Gaskets",
      desc: "A wide range of Valve Cover Gaskets is available in the Elwis Royal brand, and its...",
      img: "/moto/elvis/frame6.png"
    },
    {
      title: "Valve Stem Seals",
      desc: "Valve Stem Seals in Viton rubber and OE quality",
      img: "/moto/elvis/frame7.png"
    },
    {
      title: "Head Gasket Sets",
      desc: "Head Gasket Sets are the perfect and right composition of gaskets and replacement parts to re-build...",
      img: "/moto/elvis/frame8.png"
    },
    {
      title: "Exhaust Manifold Gaskets",
      desc: "Elwis Royal only use the finest quality of rubber such as Viton, NBR, silicone and steel in its OE equivalent...",
      img: "/moto/elvis/frame9.png"
    }
  ];

  return (
    <section className="w-full py-16 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-40 bg-[#111111] overflow-hidden">
      <div className="custom-container flex flex-col gap-12 lg:gap-16 min-[2500px]:gap-24 min-[3800px]:gap-32">
        
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center gap-6 min-[2500px]:gap-10 min-[3800px]:gap-12 text-center mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold leading-tight">
            Comprehensive Gasket & Sealing Solutions
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[70%] ">
            Explore Elwis Royal's extensive range of OEM-quality gaskets, seals, and engine repair solutions, engineered to deliver exceptional sealing performance, precision fitment, and long-lasting reliability. From cylinder head gaskets and manifold gaskets to complete gasket sets and oil seals, our comprehensive portfolio is designed to meet the evolving needs of the global automotive aftermarket.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div 
          className="w-full mt-2" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={3}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 3, spaceBetween: 24 },
              1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, slidesPerGroup: 3, spaceBetween: 24 },
              1536: { slidesPerView: 4, slidesPerGroup: 3, spaceBetween: 24 },
              2500: { slidesPerView: 4, slidesPerGroup: 3, spaceBetween: 48 },
              3800: { slidesPerView: 4, slidesPerGroup: 3, spaceBetween: 64 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {products.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full h-[350px] md:h-[400px] xl:h-[450px] 2xl:h-[497px] min-[2500px]:h-[700px] min-[3800px]:h-[1000px] rounded-3xl overflow-hidden bg-[#F2F2F2] cursor-pointer shadow-lg flex items-center justify-center ">
                  {/* Image */}
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full scale-103 object-cover transition-transform duration-700 group-hover:scale-107"
                  />
                  
                  {/* Dark Overlay (Hover state) */}
                  <div className="absolute inset-0 bg-[#222222] opacity-0 group-hover:opacity-70 transition-all duration-500 p-6 flex flex-col justify-between z-10">
                    
                    {/* Top Right Arrow */}
                    <div className="w-full flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-transform duration-300 group-hover:bg-white/30">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-2">
                      <Typography variant="h4" color="white" className="font-semibold text-left">
                        {card.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-white/70 text-left line-clamp-3">
                        {card.desc}
                      </Typography>
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
