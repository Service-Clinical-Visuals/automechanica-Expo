"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      img: "/moto/lpr-srl/product1.jpg",
      title: "Braking Systems",
      desc: "Reliable brake pads for safe, smooth, and efficient stopping.",
    },
    {
      img: "/moto/lpr-srl/product2.jpg",
      title: "Clutch Systems",
      desc: "Built for reliable and precise gear changes.",
    },
    {
      img: "/moto/lpr-srl/product3.jpg",
      title: "Transmission Solutions",
      desc: "Built for reliable power transmission and performance.",
    },
    {
      img: "/moto/lpr-srl/product4.jpg",
      title: "Engine Cooling Solutions",
      desc: "Delivers reliable coolant circulation and engine cooling.",
    },
    {
      img: "/moto/lpr-srl/product1.jpg",
      title: "Braking Systems",
      desc: "Reliable brake pads for safe, smooth, and efficient stopping.",
    },
    {
      img: "/moto/lpr-srl/product2.jpg",
      title: "Clutch Systems",
      desc: "Built for reliable and precise gear changes.",
    },
    {
      img: "/moto/lpr-srl/product3.jpg",
      title: "Transmission Solutions",
      desc: "Built for reliable power transmission and performance.",
    },
    {
      img: "/moto/lpr-srl/product4.jpg",
      title: "Engine Cooling Solutions",
      desc: "Delivers reliable coolant circulation and engine cooling.",
    },
  ];

  return (
    <section id="products" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 w-full" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Our Products
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[50%] mx-auto text-sm">
            Our OE-quality automotive components are engineered for safety, durability, and reliable performance, delivering trusted solutions for the global aftermarket.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.products-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              2100: { slidesPerView: 4 },
              3800: { slidesPerView: 4 },
            }}
            className="w-full !pb-12"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="w-full flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group overflow-hidden relative pb-14">
                  {/* Image */}
                  <div className="w-full aspect-[4/3]  flex items-center justify-center p-3">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-ful rounded-2xl object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center text-center p-6 gap-3 flex-grow">
                    <Typography variant="h3" color="dark" className="font-bold">
                      {product.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="text-sm">
                      {product.desc}
                    </Typography>
                  </div>

                  {/* Icon Button */}
                  <div className="absolute bottom-5 right-5 w-7 h-7 min-[2100px]:w-10 min-[2100px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 min-[2100px]:bottom-8 min-[2100px]:right-8 min-[3800px]:bottom-12 min-[3800px]:right-12 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer hover:bg-primary-hover transition-colors">
                    <ArrowRight className="w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Pagination Container */}
            <div className="products-pagination custom-swiper-pagination !mt-8"></div>
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Products;
