"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    {
      id: "01",
      title: "Clutch Set",
      img: "/moto/donmez/p1.png",
    },
    {
      id: "02",
      title: "Flywheel",
      img: "/moto/donmez/p2.png",
    },
    {
      id: "03",
      title: "Clutch Discs",
      img: "/moto/donmez/p3.png",
    },
    {
      id: "04",
      title: "Pressure Plates",
      img: "/moto/donmez/p4.png",
    },
  ];

  return (
    <section id="products" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-20">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center gap-4 xl:max-w-[70%]  mx-auto">
          <Typography variant="h2" color="dark" className="font-bold" data-aos="fade-up">
            Our Products
          </Typography>

          <Typography variant="p" color="dark" className="leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Dönmez Debriyaj offers a comprehensive range of precision-engineered drivetrain and engine components designed to meet the demanding requirements of commercial vehicles. Manufactured with advanced technologies and stringent quality control, every product is built to deliver exceptional durability, consistent performance, and long service life. From clutch systems to turbochargers, our solutions are trusted by OEMs, distributors, and aftermarket professionals across global markets.
          </Typography>
        </div>

        {/* Product Cards Container (Dark Background) */}
        <div className="w-full bg-secondary rounded-[32px] min-[3800px]:rounded-[64px] p-8 md:p-12 lg:p-16 min-[3800px]:p-24" data-aos="fade-up" data-aos-delay="200">

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
                  <div className="flex flex-col h-full bg-white/10 rounded-2xl border border-white/5 overflow-hidden group p-6">

                    {/* Image Container */}
                    <div className="relative w-full aspect-square overflow-hidden shrink-0 flex items-center justify-center">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-[90%] h-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex items-center justify-between mt-6">
                      <Typography variant="h3" color="white" className="font-bold">
                        {product.title}
                      </Typography>

                      {/* Circular Outlined Button */}
                      <a href="#products" className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors shrink-0">
                        <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Product Grid (4 columns) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 min-[3800px]:gap-12">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col h-full bg-white/10 rounded-2xl border border-white/5 overflow-hidden group p-6 min-[3800px]:p-10 transition-transform duration-300 hover:-translate-y-2">

                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex items-center justify-between mt-6 min-[3800px]:mt-10">
                  <Typography variant="h3" color="white" className="font-bold">
                    {product.title}
                  </Typography>

                  {/* Circular Outlined Button */}
                  <a href="#products" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors shrink-0">
                    <ArrowUpRight className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={2} />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;
