"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    {
      title: "Oil Filters",
      desc: "Advanced filtration technology keeps the engine oil cleaner for longer, improving performance, durability, and engine life.",
      img: "/moto/purflux/product1.png"
    },
    {
      title: "Air Filters",
      desc: "Built for superior filtration, Purflux air filters help maintain engine power, improve fuel economy, and extend engine life.",
      img: "/moto/purflux/product2.png"
    },
    {
      title: "Diesel Filters",
      desc: "High-performance diesel filters that protect fuel systems from impurities, helping extend engine life.",
      img: "/moto/purflux/product3.png"
    },
    {
      title: "Petrol Filters",
      desc: "Engineered for precise filtration, Purflux petrol filters deliver cleaner fuel, reliable engine protection.",
      img: "/moto/purflux/product4.png"
    },
    {
      title: "Cabin Air Filters",
      desc: "Purflux cabin air filters remove dust, pollen, pollutants, and odors, creating a cleaner, healthier environment.",
      img: "/moto/purflux/product5.png"
    }
  ];

  return (
    <section id="products" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 w-full" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Our Product Portfolio
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            Discover Purflux's premium range of filters, engineered to deliver OE-quality performance and superior air purification. Designed to capture dust, pollen, pollutants, and harmful particles, our filters help create a cleaner, healthier, and more comfortable driving environment.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full pb-8 round-swiper-pagination"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden group hover:shadow-md transition-shadow">
                  {/* Image Section */}
                  <div className="w-full aspect-[4/3] bg-white border-b border-gray-100 flex items-center justify-center p-4">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    <Typography variant="h4" color="dark" className="font-bold mb-3">
                      {product.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                      {product.desc}
                    </Typography>
                    <div className="w-full flex justify-center mt-auto">
                      <Button text="View Product" href="#" showIcon={false} className="!px-6 !py-2" />
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
