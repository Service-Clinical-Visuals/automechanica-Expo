"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    {
      title: "Valve Train",
      desc: "Reliable valve train components designed to enhance engine efficiency and durability.",
      img: "/moto/motive-components/frame1.png",
    },
    {
      title: "Cylinder Heads",
      desc: "High-performance cylinder heads designed to deliver efficient operation and long-term durability.",
      img: "/moto/motive-components/frame2.png",
    },
    {
      title: "Bottom End",
      desc: "Durable bottom end components built to support smooth engine operation and long-lasting performance.",
      img: "/moto/motive-components/frame3.png",
    },
    {
      title: "Timing",
      desc: "Advanced timing components built for smooth engine operation and long-lasting durability.",
      img: "/moto/motive-components/frame4.png",
    },
    {
      title: "Gaskets & Seals",
      desc: "Precision gaskets and seals built to ensure secure sealing and long-lasting performance.",
      img: "/moto/motive-components/frame5.png",
    },
    {
      title: "Lubrication",
      desc: "Quality lubrication components built to reduce wear and improve efficiency.",
      img: "/moto/motive-components/frame6.png",
    },
    {
      title: "Cooling",
      desc: "Engineered cooling components for efficient heat control and dependable performance.",
      img: "/moto/motive-components/frame7.png",
    },
    {
      title: "Pumps",
      desc: "High-quality pump components designed for efficient performance and lasting reliability.",
      img: "/moto/motive-components/frame8.png",
    },
  ];

  return (
    <section id="products" className="w-full py-16 bg-[#F8F9FA] overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Typography variant="h1" color="dark" className="font-bold leading-tight" data-aos="fade-right">
              Our Product Categories
            </Typography>
            <div className="w-[70%]  border-b-[4px] rounded-full border-[#F47621]" data-aos="fade-right" data-aos-delay="100"></div>
          </div>
          
          <div className="flex items-center">
            <div className="flex flex-col items-start lg:items-end gap-4 text-left lg:text-right">
              <Typography variant="p" color="muted" className="max-w-full" data-aos="fade-left" data-aos-delay="200">
                Delivering premium aftermarket engine components engineered
              </Typography>
              <div data-aos="fade-left" data-aos-delay="300">
                <Button text="View all Categories" href="#products" className="!py-2 !px-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Universal Swiper Slider */}
        <div className="custom-swiper-pagination w-full pb-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3, slidesPerGroup: 3 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="w-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="h-auto pb-4 pt-4">
                <div className="flex flex-col h-full bg-[#FFFFFF] rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden group">
                  
                  {/* Image Container */}
                  <div className="w-full aspect-[16/9] bg-white overflow-hidden shrink-0 flex items-center justify-center p-4 lg:p-6">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 lg:p-5 text-left relative">
                    <Typography variant="h4" color="dark" className="font-bold mb-2">
                      {product.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed mb-6 ">
                      {product.desc}
                    </Typography>
                    
                    {/* Know More Button */}
                    <div className="mt-auto flex justify-end">
                      <Button 
                         text="Know more" 
                         href="#products" 
                         className="!py-2 !px-5"
                      />
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
};

export default Products;
