"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Button from "./Button";


const partners = [
  { id: 1, image: "b1.png" },
  { id: 2, image: "b2.png" },
  { id: 3, image: "b3.png" },
  { id: 4, image: "b4.png" },
  { id: 5, image: "b5.png" },
  { id: 6, image: "b6.png" },
  { id: 7, image: "b7.png" },
  { id: 8, image: "b8.png" },
];

export default function Partners() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container mb-12">
        {/* Title and Description */}
        <div className="text-center max-w-7xl mx-auto" data-aos="fade-up">
            <h2 className="section-title font-normal text-black mb-6 font-heading">
            Our Partners
          </h2>
          <p className="text-black section-text leading-relaxed font-body mb-8">
            At Cardyfren, we believe strong partnerships are the foundation of long-term success. We collaborate with trusted manufacturers, distributors, and industry professionals across the automotive, industrial, agricultural, marine, railway, construction, and wind energy sectors. These relationships enable us to deliver high-quality driveline solutions that meet the evolving needs of customers worldwide.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full bg-[#151515] py-[10px]" data-aos="fade-up" data-aos-delay="100">
        <div className="w-full border-y-[2px] border-white py-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView="auto"
            loop={true}
            speed={4000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="cardyfren-marquee-swiper"
          >
            {/* Multiply the partners array heavily to ensure smooth infinite looping on 4K and Ultrawide screens */}
            {[...partners, ...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <SwiperSlide key={`${partner.id}-${index}`} className="!w-auto">
                <div className="bg-white w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center p-2">
                  <div className="relative w-full h-full">
                    <img 
                      src={`/moto/cardyfren/${partner.image}`}
                      alt={`Partner Logo ${partner.id}`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="custom-container mt-12" data-aos="fade-up" data-aos-delay="200">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
                  <p className="text-black section-text leading-relaxed font-body max-w-[80%]">

              Our commitment to quality, reliability, and customer satisfaction has earned the trust of partners around the globe. By working closely with our network, we continue to expand our product offerings, maintain consistent quality standards, and provide innovative solutions that drive performance, efficiency, and lasting value for every application.
            </p>
            <div className="flex-shrink-0">
              <Button className="bg-[#28b7ff] hover:bg-[#1fa1e6] text-white text-[13px] px-8 py-3 rounded-md transition-colors font-bold font-heading whitespace-nowrap shadow-md">
                View All Brands
              </Button>
            </div>
         </div>
      </div>
    </section>
  );
}
