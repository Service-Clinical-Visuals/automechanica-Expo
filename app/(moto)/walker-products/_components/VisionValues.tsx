"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function VisionValues() {
  const slides = [
    {
      title: "Improving Through Innovation",
      p1: "Walker Products is always in pursuit of market leadership. By operating as a customer-focused, global company that delivers exceptional quality, innovation and value, we are constantly looking to improve on our products and services.",
      p2: "Our goal is to continuously grow our core business of manufacturing fuel delivery and emission control products, engine sensors and ignition components, to meet the demands of the industry, while always maintaining our focus on OEM accuracy.",
      highlight: "Walker Products is dedicated to serving the global automotive, truck, and Othermotive® markets with unsurpassed quality, coverage, and support.",
      img: "/moto/walker-products/vision.jpg"
    },
    {
      title: "Our Values",
      p1: "Our history of commitment and dedication to quality help inform and guide every decision we make. More than a score is our focus on safety, integrity, our people and our planet. We strive to find better solutions and consistently invest in new technology, R&D and science. Our products not only meet our customers' expectations – they outperform them!",
      p2: "At the heart of our business is our people. We have employees that have spent their lives in our organization and know every aspect of our business. Both office and production personnel, we invest in the right people so we can bring real-world experience to solve the diverse challenges of today and anticipate those of tomorrow.",
      highlight: "At Walker Products, we are committed to doing business the right way — without compromise to quality, integrity, or our people.",
      img: "/moto/walker-products/vision.jpg"
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#2C2C2C] overflow-hidden" id="vision">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block: Title/Desc on Left, Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-white/20" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-4xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Vision & Values
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base">
              At Walker Products, Inc., innovation, quality, and integrity are at the core of everything we do. Through advanced engineering and continuous improvement, we deliver OEM-accurate automotive solutions trusted for reliability, performance, and long-term value.
            </Typography>
          </div>

          <div className="flex-shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Discover Our Vision" href="#vision" showIcon={true} />
          </div>
        </div>

        {/* Vision & Values Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".vision-swiper-pagination"
            }}
            className="w-full"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 items-center py-4">
                  
                  {/* Left Column: Overlapping Dark Card */}
                  <div className="lg:col-span-5 xl:col-span-5 z-20 bg-[#1E1E1E] border border-white/20 p-6 md:p-8 lg:p-10 shadow-2xl flex flex-col gap-4 lg:-mr-14 rounded-sm">
                    <Typography variant="h2" color="white" className="font-semibold leading-tight text-xl md:text-2xl lg:text-3xl">
                      {slide.title}
                    </Typography>
                    
                    <div className="flex flex-col gap-3 text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
                      <p>{slide.p1}</p>
                      <p>{slide.p2}</p>
                      {slide.highlight && (
                        <p className="text-[#F9EA4F] font-semibold leading-relaxed mt-1">
                          {slide.highlight}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: High-Res Vision Image */}
                  <div className="lg:col-span-7 xl:col-span-7 w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] rounded-sm overflow-hidden border border-white/10 shadow-2xl relative bg-[#111] mt-4 lg:mt-0">
                    <img 
                      src={slide.img} 
                      alt={slide.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Container */}
          <div className="vision-swiper-pagination custom-swiper-pagination flex justify-center items-center mt-6"></div>
        </div>

      </div>
    </section>
  );
}
