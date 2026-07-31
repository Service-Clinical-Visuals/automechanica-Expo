"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    {
      id: "01",
      title: "NOx sensors",
      desc: "Measures NOx emissions for better engine performance and compliance.",
      img: "/moto/ampro/product1.png",
    },
    {
      id: "02",
      title: "Urea pumps",
      desc: "Delivers AdBlue® accurately for efficient emission control.",
      img: "/moto/ampro/product2.png",
    },
    {
      id: "03",
      title: "Urea dosing modules",
      desc: "Injects the precise amount of urea solution into the vehicle's exhaust aftertreatment system.",
      img: "/moto/ampro/product3.png",
    },
  ];

  return (
    <section id="products" className="w-full py-16  bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2" data-aos="fade-right">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <Typography variant="h4" color="secondary" className="font-bold uppercase tracking-wider text-sm">
                PRODUCTS
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight" data-aos="fade-right" data-aos-delay="100">
              Our Products Range
            </Typography>
          </div>
          
          <div className="flex items-center">
            <div className="flex flex-col items-start lg:items-end gap-3 text-left lg:text-right">
              <Typography variant="h3" color="muted" weight="semibold" className="italic  " data-aos="fade-left" data-aos-delay="200">
                Quality solutions for modern emission control systems.
              </Typography>
              <div data-aos="fade-left" data-aos-delay="300">
                <Button text="VIEW ALL PRODUCTS" href="#products" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Swiper Slider */}
        <div className="block lg:hidden custom-swiper-pagination w-full pb-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="w-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="h-auto pb-4">
                <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden group">
                  
                  {/* Image Container with Number Overlay */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shrink-0" data-aos="fade-in">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Number Overlay */}
                    <div className="absolute bottom-2 left-4 z-10 pointer-events-none select-none">
                      <span className="number">{product.id}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 text-center relative">
                    <Typography variant="h3" color="dark" className="font-bold mb-3" data-aos="fade-up">
                      {product.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="100">
                      {product.desc}
                    </Typography>
                    
                    {/* Circular Button at bottom right */}
                    <div className="mt-auto flex justify-end" data-aos="fade-up" data-aos-delay="200">
                      <a href="#products" className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors shadow-md">
                        <ArrowRight className="w-6 h-6" strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Product Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden group">
              
              {/* Image Container with Number Overlay */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shrink-0" data-aos="fade-in" data-aos-delay={index * 100}>
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Number Overlay */}
                <div className="absolute bottom-2 left-4 z-10 pointer-events-none select-none">
                  <span className="number">{product.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 text-center relative">
                <Typography variant="h3" color="dark" className="font-bold mb-3" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                  {product.title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                  {product.desc}
                </Typography>
                
                {/* Circular Button at bottom right */}
                <div className="mt-auto flex justify-end" data-aos="fade-up" data-aos-delay={index * 100 + 300}>
                  <a href="#products" className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors shadow-md">
                    <ArrowRight className="w-6 h-6" strokeWidth={2} />
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
