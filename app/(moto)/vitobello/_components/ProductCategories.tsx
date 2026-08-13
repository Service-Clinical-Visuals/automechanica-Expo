"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductCategories() {
  const productSlides = [
    {
      left: {
        title: "Camshafts, Rocker Arms, Tappets",
        description: "Camshafts, rocker arms and valve lifters are fundamental components of internal combustion engines, directly influencing engine performance and efficiency.",
        img: "/moto/vitobello/p1.png",
      },
      right: {
        title: "Complete Engines",
        description: "Vitobello Ricambi S.r.l. provides a wide range of complete engines, offering a reliable, drop-in solution for vehicle restoration and repair.",
        img: "/moto/vitobello/p2.png",
      }
    },
    {
      left: {
        title: "Connecting Rods",
        description: "Connecting rods are subjected to immense stress during engine operation, requiring premium materials and precision manufacturing for lasting durability.",
        img: "/moto/vitobello/p3.png",
      },
      right: {
        title: "Crankshafts",
        description: "Precision engineered crankshafts to ensure optimal engine performance, reduced vibration, and long-term reliability under demanding conditions.",
        img: "/moto/vitobello/p4.png",
      }
    },
    {
      left: {
        title: "Cylinder Heads",
        description: "High-quality cylinder heads designed to restore efficiency and reliability to your engine, ensuring perfect compression and thermal management.",
        img: "/moto/vitobello/p5.png",
      },
      right: {
        title: "Engine Blocks",
        description: "Durable and precisely machined engine blocks serving as the solid foundation for complete engine rebuilding and comprehensive overhauls.",
        img: "/moto/vitobello/p6.png",
      }
    },
    {
      left: {
        title: "Flywheels & Pulleys",
        description: "Premium flywheels and pulleys designed for perfectly balanced and efficient engine operation across all RPM ranges.",
        img: "/moto/vitobello/p7.png",
      },
      right: {
        title: "Engine Bearings & Gaskets",
        description: "Comprehensive gasket sets and premium engine bearings designed for complete engine rebuilding and long-lasting maintenance.",
        img: "/moto/vitobello/p8.jpg",
      }
    }
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#27292A] overflow-hidden" id="products">
      <div className="custom-container flex flex-col gap-8 lg:gap-12">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto gap-4 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-6xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Our Products
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base mt-2">
              Explore the comprehensive product range from Vitobello Ricambi S.r.l., featuring premium engine components, transmission parts, and automotive spare parts for a wide variety of vehicle applications. Engineered for quality, reliability, and performance, our products support professional repair, maintenance, and engine rebuilding needs while ensuring long-lasting durability, precise fitment, and dependable everyday performance.
            </Typography>
          </div>
        </div>

        {/* Swiper Slider */}
        <div
          className="w-full mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full pb-14 custom-swiper-pagination"
          >
            {productSlides.map((slide, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-6 h-full">

                  {/* Left Card */}
                  <div className="group relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#111] border border-white/50 transition-colors duration-500 flex items-center justify-center cursor-pointer shadow-lg rounded-sm">
                    <img
                      src={slide.left.img}
                      alt={slide.left.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 lg:p-10 text-left z-10 translate-y-4 group-hover:translate-y-0">
                      <Typography variant="h3" color="white" className="font-bold text-lg md:text-xl lg:text-[22px] mb-2 leading-tight mt-auto">
                        {slide.left.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-white/80 text-xs md:text-sm leading-relaxed mb-5 line-clamp-2 md:line-clamp-3 max-w-xl">
                        {slide.left.description}
                      </Typography>
                      <div className="inline-block">
                        <Button text="Learn More" href="#learn-more" showIcon={true} className="!py-2 ! !gap-3" />
                      </div>
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className="group relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#111] border border-white/50 transition-colors duration-500 flex items-center justify-center cursor-pointer shadow-lg rounded-sm">
                    <img
                      src={slide.right.img}
                      alt={slide.right.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 lg:p-10 text-left z-10 translate-y-4 group-hover:translate-y-0">
                      <Typography variant="h3" color="white" className="font-bold text-lg md:text-xl lg:text-[22px] mb-2 leading-tight mt-auto">
                        {slide.right.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-white/80 text-xs md:text-sm leading-relaxed mb-5 line-clamp-2 md:line-clamp-3 max-w-xl">
                        {slide.right.description}
                      </Typography>
                      <div className="inline-block">
                        <Button text="Learn More" href="#learn-more" showIcon={true} className="!py-2 !gap-3" />
                      </div>
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
