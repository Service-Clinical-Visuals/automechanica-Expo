"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const productData: Record<string, any[]> = {
  "AGM Battery": [
    { title: "70 Ah L3 EFB", image: "/esan/frame11.png" },
    { title: "72 Ah L3 EFB", image: "/esan/frame12.png" },
    { title: "80 Ah LB4", image: "/esan/frame13.png" },
  ],
  "Marine Battery": [
    { title: "62 Ah L2", image: "/esan/frame31.png" },
    { title: "200 Ah C", image: "/esan/frame32.png" },
    { title: "240 Ah C", image: "/esan/frame33.png" },
    { title: "225 Ah C", image: "/esan/frame34.png" },
  ],
  "Car Battery": [
    { title: "70 Ah L3 EFB", image: "/esan/frame21.png" },
    { title: "72 Ah L3 EFB", image: "/esan/frame22.png" },
    { title: "80 Ah LB4", image: "/esan/frame23.png" },
    { title: "Esan Traction Battery", image: "/esan/frame24.png" },
  ],
  "Other": [
    { title: "62 Ah L2", image: "/esan/frame11.png" },
    { title: "200 Ah C", image: "/esan/frame21.png" },
    { title: "240 Ah C", image: "/esan/frame31.png" },
    { title: "225 Ah C", image: "/esan/frame12.png" },
  ]
};

const Products = () => {
  const tabs = ["AGM Battery", "Marine Battery", "Car Battery", "Other"];
  const [activeTab, setActiveTab] = useState("AGM Battery");
  const swiperRef = useRef<SwiperType | null>(null);

  const currentProducts = productData[activeTab] || [];

  return (
    <section id="products" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white flex flex-col items-center overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 min-[2100px]:gap-6 min-[3800px]:gap-12" data-aos="fade-up">
          <Typography variant="h4" color="primary" className="font-bold tracking-wide">
            Our Product Range
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Advanced Battery Solutions for Modern Power Needs
          </Typography>
          <Typography variant="p" color="dark" className="max-w-[70%] min-[3800px]:max-w-[80%] mx-auto min-[3800px]:text-3xl leading-relaxed opacity-80">
            Our product range offers a diverse selection of high-quality solutions designed to meet the demands of modern vehicles, ensuring reliability, performance, and efficiency across every application.
          </Typography>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 min-[2100px]:mt-12 min-[3800px]:mt-20 mb-12 min-[2100px]:mb-16 min-[3800px]:mb-24" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 min-[2100px]:px-10 min-[2100px]:py-3 min-[3800px]:px-16 min-[3800px]:py-5 rounded-[4px] font-semibold transition-all duration-300 min-[3800px]:text-2xl border ${activeTab === tab
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-primary/50 hover:border-primary hover:bg-primary hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Swiper Grid */}
        <div className="w-full relative" data-aos="fade-up">
          <Swiper
            key={activeTab} // Force re-render on tab change to reset swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              3800: { slidesPerView: 4, spaceBetween: 48 }
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full pb-8"
          >
            {currentProducts.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="flex flex-col bg-white border border-gray-200 rounded-[4px] overflow-hidden h-full">
                  {/* Top Image Container */}
                  <div className="w-full aspect-[4/3] relative bg-[#F8F9FA]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain mix-blend-multiply p-8 min-[3800px]:p-16 transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  {/* Bottom Content Container */}
                  <div className="flex flex-col p-6 min-[3800px]:p-10 gap-6 min-[3800px]:gap-10 border-t border-gray-100 flex-grow">
                    <Typography variant="h4" color="dark" className="font-bold min-[3800px]:text-4xl">
                      {product.title}
                    </Typography>

                    <div className="mt-auto self-start">
                      <button className="px-6 py-2 min-[3800px]:px-10 min-[3800px]:py-4 border border-primary text-primary font-semibold rounded-[4px] hover:bg-primary hover:text-white transition-colors duration-300 text-sm min-[3800px]:text-xl">
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & View All Action */}
          <div className="flex items-center justify-center gap-6 mt-6 min-[3800px]:mt-12">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#0088CC] text-[#0088CC] flex items-center justify-center hover:bg-[#0088CC] hover:text-white transition-colors z-10"
            >
              <ArrowLeft className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" />
            </button>

            <button className="px-6 py-2.5 min-[3800px]:px-10 min-[3800px]:py-4 border border-[#0088CC] text-[#0088CC] font-bold rounded-[4px] flex items-center gap-2 hover:bg-[#0088CC] hover:text-white transition-colors duration-300 text-sm min-[3800px]:text-xl group">
              View All Batteries
              <ArrowRight className="w-4 h-4 min-[3800px]:w-6 min-[3800px]:h-6 group-hover:text-white" strokeWidth={2} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#0088CC] text-[#0088CC] flex items-center justify-center hover:bg-[#0088CC] hover:text-white transition-colors z-10"
            >
              <ArrowRight className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
