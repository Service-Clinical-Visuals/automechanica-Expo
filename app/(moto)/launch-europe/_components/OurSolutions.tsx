"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OurSolutions() {
  const products = [
    {
      title: "Professional Diagnosis",
      text: "Advanced diagnostic Tools for accurate fault detection and complete system analysis",
      image: "/moto/launch-europe/p1.png",
    },
    {
      title: "SDS",
      text: "Smart Diagnostic Service for remote diagnosis, guided functions and technical support.",
      image: "/moto/launch-europe/p2.png",
    },
    {
      title: "Accessories",
      text: "High-quality accessories and adapters for a wide range of diagnostic applications.",
      image: "/moto/launch-europe/p3.png",
    },
    {
      title: "Standalone Accessories",
      text: "Specialized standalone tools for TPMS, battery, emissions and other service functions.",
      image: "/moto/launch-europe/p4.png",
    },
    {
      title: "Database",
      text: "Extensive vehicle database with up-to-date coverage and technical information.",
      image: "/moto/launch-europe/p5.png",
    },
    {
      title: "Software",
      text: "Regular software updates for new vehicle coverage, features and improved performance.",
      image: "/moto/launch-europe/p6.png",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="solutions">
      <div className="custom-container">
        
        {/* Header Content */}
        <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="section-title font-heading text-[#111111] mb-6">
            Our Innovative Solutions
          </h2>
          <p className="section-text text-[#111111] font-lato font-normal leading-relaxed">
            Explore our comprehensive range of advanced diagnostic systems, ADAS calibration equipment, wheel alignment solutions, lifting systems, and professional workshop technologies. Engineered for precision, performance, and reliability, our products help automotive professionals streamline diagnostics, improve service efficiency, and meet the demands of today's rapidly evolving vehicle technologies with confidence.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="w-full relative px-2" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="pb-6"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="bg-white border border-gray-200 rounded-2xl drop-shadow-md hover:shadow-md transition-shadow duration-300 flex flex-col h-full overflow-hidden">
                  
                  {/* Image */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h4 className="font-heading section-title1 font-normal text-[#000000] mb-3">
                      {product.title}
                    </h4>
                    <p className="section-text text-[#111111] mb-6 flex-grow font-lato leading-relaxed">
                      {product.text}
                    </p>
                    <Link
                      href="#"
                      className="link font-normal text-[#e30613] font-heading flex items-center gap-1 hover:gap-2 transition-all mt-auto"
                    >
                      View Products <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="flex justify-center mt-10">
            <div className="custom-pagination flex gap-2 items-center justify-center"></div>
          </div>

          <style jsx global>{`
            .custom-pagination .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background-color: #d1d5db;
              opacity: 1;
              border-radius: 50%;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .custom-pagination .swiper-pagination-bullet-active {
              background-color: #e30613; /* Primary Red */
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}
