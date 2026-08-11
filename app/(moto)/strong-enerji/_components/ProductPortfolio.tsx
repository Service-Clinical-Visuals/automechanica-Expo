"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./Button";

const brandsData = [
  { id: "route", name: "Route Lubricants", logo: "/moto/strong-enerji/brand1.png" },
  { id: "quax", name: "Quax Lubricants", logo: "/moto/strong-enerji/brand2.png" },
  { id: "zeeon", name: "Zeeon Lubricants", logo: "/moto/strong-enerji/brans3.png" },
];

const productsData = [
  { title: "Antifreeze", subtitle: "2 Products", image: "/moto/strong-enerji/p1.png", brand: "route" },
  { title: "Brake Fluids", subtitle: "3 Products", image: "/moto/strong-enerji/p2.png", brand: "route" },
  { title: "Heavy Duty Vehicle Engine Oils", subtitle: "8 Products", image: "/moto/strong-enerji/p6.png", brand: "quax" },
  { title: "Motorcycle Oils", subtitle: "3 Products", image: "/moto/strong-enerji/p7.png", brand: "quax" },
  { title: "Passenger Car Engine Oils", subtitle: "2 Products", image: "/moto/strong-enerji/p5.png", brand: "zeeon" },
];

export default function ProductPortfolio() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeBrand, setActiveBrand] = useState("route");

  // Filter products based on selected brand
  const filteredProducts = productsData.filter(product => product.brand === activeBrand);

  return (
    <section className="w-full py-16 md:py-24 bg-[#0d0f1c]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12">
          
          {/* Left Column: Our Brands */}
          <div className="xl:col-span-4 flex-shrink-0" data-aos="fade-right">
            <div className="bg-[#0c1e40] rounded-xl p-8 flex flex-col items-center shadow-lg h-full">
              <h2 className="card-title oswald font-semibold text-white mb-4 text-center">Our Brands</h2>
              <div className="w-full h-px bg-gray-600 mb-8"></div>
              
              <div className="flex flex-col gap-4 w-full mb-8 flex-grow">
                {brandsData.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => {
                      setActiveBrand(brand.id);
                      if (swiperRef.current) {
                        swiperRef.current.slideTo(0);
                      }
                    }}
                    className={`bg-white rounded-lg p-4 flex items-center justify-center h-30 shadow transition-all cursor-pointer ${
                      activeBrand === brand.id ? "border-b-4 border-[#d8a341]" : "border-b-4 border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img src={brand.logo} alt={brand.name} className="object-contain h-full w-full" />
                  </button>
                ))}
              </div>

              <Button href="#" variant="solid-gold">
                Explore All Products
              </Button>
            </div>
          </div>

          {/* Right Column: Product Portfolio Slider */}
          <div className="xl:col-span-8 flex flex-col overflow-hidden" data-aos="fade-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
              <h2 className="section-title oswald font-semibold text-white mb-4 sm:mb-0">Our Product Portfolio</h2>
              
              {/* Custom Navigation */}
              {/* <div className="flex items-center space-x-3">
                <button 
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowRight size={20} />
                </button>
              </div> */}
            </div>
            
            <div className="w-full h-px bg-gray-400 mb-8"></div>

            {/* Slider */}
            <div className="w-full relative">
              <Swiper
                key={activeBrand} // Force re-render of Swiper when active brand changes
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={40}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                  1280: { slidesPerView: 2 },
                }}
                className="w-full"
              >
                {filteredProducts.map((product, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <Link href="#" className="block w-full  h-[500px] relative rounded-2xl overflow-hidden group">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end text-white">
                        <h3 className="card-title font-bold mb-2 font-[family-name:var(--font-oswald)]">{product.title}</h3>
                        <p className="text-sm text-gray-300 font-[family-name:var(--font-dm-sans)]">{product.subtitle}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
