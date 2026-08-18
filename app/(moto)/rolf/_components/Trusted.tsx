"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Trusted() {
  const trustedItems = [
    { title: "BMW", img: "/moto/rolf/car/car1.png" },
    { title: "Mercedes-Benz", img: "/moto/rolf/car/car2.png" },
    { title: "Volvo", img: "/moto/rolf/car/car3.png" },
    { title: "Land Rover, Jaguar", img: "/moto/rolf/car/car4.png" },
    { title: "Daimler Truck", img: "/moto/rolf/car/car5.png" },
    { title: "Deutz", img: "/moto/rolf/car/car6.png" },
    { title: "Cummins", img: "/moto/rolf/car/car7.png" },
    { title: "Evonik", img: "/moto/rolf/car/car8.png" },
    { title: "Man", img: "/moto/rolf/car/car9.png" },
    { title: "PRI", img: "/moto/rolf/car/car10.png" },
  ];

  return (
    <section className="relative w-full py-16 bg-[#232323] overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/20 pb-8 lg:pb-12" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <Typography variant="h2" color="white" className="leading-tight mb-2">
              Trusted By Leading Industry Standards
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              ROLF Lubricants are developed to meet the rigorous requirements of leading global automotive and industrial manufacturers. Our products comply with internationally recognized approvals and specifications, ensuring reliable performance, superior engine protection, and compatibility across a wide range of passenger cars, commercial vehicles, and industrial equipment.
            </Typography>
          </div>
          <div className="flex-shrink-0 mb-1 lg:mb-2">
            <Button text="Our Quality Standards" href="#" showIcon={true} />
          </div>
        </div>

        {/* Swiper Block */}
        <div className="w-full relative mt-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1536: { slidesPerView: 3 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {trustedItems.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full aspect-[533/501]  overflow-hidden cursor-pointer">
                  {/* Image */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay (Hover state) */}
                  <div className="absolute inset-0 bg-[#171717]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center text-center pb-2">
                      <Typography variant="h2" color="white" className="font-semibold">
                        {item.title}
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
