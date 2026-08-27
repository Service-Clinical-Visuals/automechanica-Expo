"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "John Deere 6 Cyl Cylinder Head Gasket",
    image: "/moto/birlik/p1.png",
  },
  {
    id: 2,
    name: "OM902/906 Cylinder Head Gasket",
    image: "/moto/birlik/p2.png",
  },
  {
    id: 3,
    name: "Mercedes Benz OM471 133Ø Cylinder Head Gasket",
    image: "/moto/birlik/p3.png",
  },
  {
    id: 4,
    name: "1.8 Ltr. 20V 4 Cyl. 82,5 Ø Cylinder Head Gasket",
    image: "/moto/birlik/p3.png",
  },
  {
    id: 5,
    name: "Mot.F 2 L 1011   2 Cyl. 91 Ø Cylinder Head Gasket",
    image: "/moto/birlik/p3.png",
  },
  {
    id: 6,
    name: "HH 403-11, 403C-21   3 Cyl.  75 Ø Cylinder Head Gasket",
    image: "/moto/birlik/p3.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6" data-aos="fade-up">
          <div className="max-w-5xl flex flex-col gap-4">
          <h2 className="sora-font section-title font-semibold text-[#212121]">
              Our Featured Products
            </h2>
            <p className="manrope-font section-text text-[#444444] leading-relaxed">
              Explore our featured range of cylinder head gaskets and sealing components, developed to provide superior engine protection, precise fitment, and dependable performance. Every product is manufactured to meet high-quality standards
            </p>
          </div>
          <Button href="#" className="flex-shrink-0">
            Explore Products
          </Button>
        </div>

        {/* Products Grid */}
        {/* Products Slider */}
        <div className="w-full relative " data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="product-categories-swiper w-full !pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <div className="flex flex-col h-full bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="w-full aspect-[4/3] p-4 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex flex-col flex-1 items-center justify-between text-center p-8 gap-6 border-t border-gray-100">
                    <h4 className="sora-font card-text font-semibold text-[#212121] min-h-[3rem] flex items-center justify-center">
                      {product.name}
                    </h4>
                    <Link 
                      href="#" 
                      className="manrope-font font-semibold section-text text-[#1f5dd2] hover:text-[#1546a3] transition-colors"
                    >
                      Explore Products
                    </Link>
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
