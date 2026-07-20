"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutionsData = [
  { 
    id: 1, 
    image: "/moto/eurocams/solution1.png", 
    title: "Camshafts", 
    desc: "Available in induction-hardened, segmented or chilled cast steel." 
  },
  { 
    id: 2, 
    image: "/moto/eurocams/solution2.png", 
    title: "Camshaft Carriers", 
    desc: "Supplied as a complete assembly, the camshaft is assembled inside the carrier." 
  },
  { 
    id: 3, 
    image: "/moto/eurocams/solution3.png", 
    title: "Intake & Exhaust Valves", 
    desc: "Bimetallic construction with chrome plated stem for high wear resistance." 
  },
  { 
    id: 4, 
    image: "/moto/eurocams/solution4.png", 
    title: "Cylinder Head Covers", 
    desc: "Manufactured in PA66-GF30 for maximum longevity, our range of cylinder head covers the a broad..." 
  },
  { 
    id: 5, 
    image: "/moto/eurocams/solution5.png", 
    title: "Hydraulic Tappets", 
    desc: "Available in bucket and pedestal types, with DLC coating used where necessary." 
  },
  { 
    id: 6, 
    image: "/moto/eurocams/solution6.png", 
    title: "Mechanical Tappets", 
    desc: "Available in various heights, and shimmed bucket, pedestal, and roller types." 
  },
  { 
    id: 7, 
    image: "/moto/eurocams/solution7.png", 
    title: "Rocker Arms", 
    desc: "Both solid and roller types available, with some versions featuring integrated hydraulic lifters" 
  },
  { 
    id: 8, 
    image: "/moto/eurocams/solution8.png", 
    title: "Rocker Shafts", 
    desc: "Our rocker shafts provide essential support and smooth operation for your engine's..." 
  },
  { 
    id: 9, 
    image: "/moto/eurocams/solution9.png", 
    title: "Shims & Thrust Pads", 
    desc: "Designed for accuracy and durability, our shims and thrust pads provide essential support and..." 
  },
];

export default function Solutions() {
  return (
    <section className="py-16  bg-secondary">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 px-4" data-aos="fade-up">
          <Typography variant="h1" className="text-white font-bold mb-4">
            Complete Engine Component Solutions
          </Typography>
          <Typography variant="p" color="white" className="max-w-[70%] leading-relaxed ">
            Eurocams offers a comprehensive range of precision-engineered engine components designed for exceptional durability, reliable performance, and long service life across diverse vehicle applications, meeting the highest standards of quality and reliability.
          </Typography>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-12"></div>

        {/* Swiper Carousel */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".solutions-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="pb-12"
          >
            {solutionsData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex flex-col h-full gap-6">
                  
                  {/* Image Card with Inverted Corner */}
                  <div className="relative border-2 border-secondary rounded-3xl overflow-hidden w-full aspect-[4/3] group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full bg-white h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    
                    {/* The Inverted Cutout (Top Right) */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-bl-3xl flex items-center justify-center">
                      <svg className="absolute top-0 -left-[24px] w-[24px] h-[24px] text-secondary fill-current stroke-current stroke-[1.5px]" viewBox="0 0 24 24">
                        <path d="M0 0 L24 0 L24 24 A24 24 0 0 0 0 0 Z" />
                      </svg>
                      <svg className="absolute -bottom-[24px] right-0 w-[24px] h-[24px] text-secondary fill-current stroke-current stroke-[1.5px]" viewBox="0 0 24 24">
                        <path d="M0 0 L24 0 L24 24 A24 24 0 0 0 0 0 Z" />
                      </svg>
                      <Link href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-lg relative z-10 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 duration-300">
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Content Below Image */}
                  <div className="flex flex-col gap-2 px-2">
                    <Typography variant="h3" className="text-white font-bold tracking-wide">
                      {item.title}
                    </Typography>
                    <Typography variant="p" className="text-gray-200 text-sm md:text-base leading-relaxed font-oswald">
                      {item.desc}
                    </Typography>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="solutions-pagination custom-swiper-pagination w-full flex justify-center mt-4"></div>
        </div>

      </div>
    </section>
  );
}
