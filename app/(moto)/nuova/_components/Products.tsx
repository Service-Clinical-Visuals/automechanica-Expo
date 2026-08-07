"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight, Disc, LayoutGrid, Settings, AlertCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    {
      id: "01",
      title: "Brakes",
      img: "/moto/nuova/product1.png",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] text-white">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-3.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          <path d="M15 4l2-1.5c1.5 1.5 2.5 3.5 2.5 5.5h-2.5C17 6.5 16.2 5 15 4z" />
        </svg>
      ),
      link: "#products"
    },
    {
      id: "02",
      title: "Clutches",
      img: "/moto/nuova/product2.png",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] text-white">
          <path d="M5 6v12h2V13h4v5h2v-5h4v5h2V6h-2v5h-4V6h-2v5H7V6H5z" />
          <circle cx="6" cy="4.5" r="2" />
          <circle cx="12" cy="4.5" r="2" />
          <circle cx="18" cy="4.5" r="2" />
          <circle cx="6" cy="19.5" r="2" />
          <circle cx="12" cy="19.5" r="2" />
          <circle cx="18" cy="19.5" r="2" />
        </svg>
      ),
      link: "#products"
    },
    {
      id: "03",
      title: "Concentric Slave Cylinders",
      img: "/moto/nuova/product3.png",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] text-white">
          <path d="M10.5 4l.4 1.2c.4.1.8.3 1.1.6l1.2-.4 1.2 1.2-.4 1.2c.2.4.4.8.6 1.1l1.2.4v1.7l-1.2.4c-.1.4-.3.8-.6 1.1l.4 1.2-1.2 1.2-1.2-.4c-.4.2-.8.4-1.1.6l-.4 1.2H8.8l-.4-1.2c-.4-.1-.8-.3-1.1-.6l-1.2.4-1.2-1.2.4-1.2c-.2-.4-.4-.8-.6-1.1L3.5 11V9.3l1.2-.4c.1-.4.3-.8.6-1.1l-.4-1.2 1.2-1.2 1.2.4c.4-.2.8-.4 1.1-.6l.4-1.2h1.7zm-1 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          <path d="M19.5 13.5l.3.9c.3.1.5.2.7.4l.9-.3.8.8-.3.9c.2.3.3.5.4.7l.9.3v1.2l-.9.3c-.1.3-.2.5-.4.7l.3.9-.8.8-.9-.3c-.3.2-.5.3-.7.4l-.3.9h-1.2l-.3-.9c-.3-.1-.5-.2-.7-.4l-.9.3-.8-.8.3-.9c-.2-.3-.3-.5-.4-.7l-.9-.3v-1.2l.9-.3c.1-.3.2-.5.4-.7l-.3-.9.8-.8.9.3c.3-.2.5-.3.7-.4l.3-.9h1.2zm-.6 2.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      ),
      link: "#products"
    },
    {
      id: "04",
      title: "C.V.JOINTS",
      img: "/moto/nuova/product4.png",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] text-white">
          <path d="M13 5h-2v6h2V5zm0 8h-2v2h2v-2z" />
          <path d="M6.5 8c0-3 2.5-5.5 5.5-5.5S17.5 5 17.5 8v2h2V8c0-4.1-3.4-7.5-7.5-7.5S4.5 3.9 4.5 8v6h2V8z" />
          <path d="M3.5 15l2 4h13l2-4h-17zm2.5 5h12l1 2h-14l1-2z" />
        </svg>
      ),
      link: "#products"
    },
    {
      id: "05",
      title: "Brake Disc",
      img: "/moto/nuova/product5.png",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] text-white">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm-1-10h2v4h-2V9zm0 6h2v2h-2v-2z" />
          <path d="M5 6.5A10 10 0 0 0 5 17.5l2-1.5a8 8 0 0 1 0-8L5 6.5z" />
          <path d="M19 6.5A10 10 0 0 1 19 17.5l-2-1.5a8 8 0 0 0 0-8L19 6.5z" />
        </svg>
      ),
      link: "#products"
    },
    {
      id: "06",
      title: "Timing Kits with Water Pump",
      img: "/moto/nuova/product6.png",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] text-white">
          <path d="M18.9 9.2l-2.4-3.6A2 2 0 0 0 14.8 5H9.2a2 2 0 0 0-1.7.6L5.1 9.2C4.5 9.4 4 10.1 4 11v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6c0-.9-.5-1.6-1.1-1.8zM6.5 9l2-3h7l2 3h-11z" />
          <path d="M22 14v-2l-1.2-.4c-.1-.3-.3-.6-.5-.9l.7-1-1.4-1.4-1 .7c-.3-.2-.6-.4-.9-.5L17.3 7h-2l-.4 1.2c-.3.1-.6.3-.9.5l-1-.7-1.4 1.4.7 1c-.2.3-.4.6-.5.9L10.6 12v2l1.2.4c.1.3.3.6.5.9l-.7 1 1.4 1.4 1-.7c.3.2.6.4.9.5l.4 1.2h2l.4-1.2c.3-.1.6-.3.9-.5l1 .7 1.4-1.4-.7-1c.2-.3.4-.6.5-.9l1.2-.4zM16.3 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      ),
      link: "#products"
    },
    {
      id: "07",
      title: "Brake Hoses & Cables",
      img: "/moto/nuova/product7.png",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] text-white">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm-1.5-9.5v5h1.2v-2h1.6v2h1.2v-5h-1.2v1.8h-1.6v-1.8h-1.2z" />
          <path d="M5 6.5A10 10 0 0 0 5 17.5l2-1.5a8 8 0 0 1 0-8L5 6.5z" />
          <path d="M19 6.5A10 10 0 0 1 19 17.5l-2-1.5a8 8 0 0 0 0-8L19 6.5z" />
        </svg>
      ),
      link: "#products"
    },
  ];

  return (
    <section id="products" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center gap-4 xl:max-w-[70%] mx-auto">
          <Typography variant="h2" color="dark" className="font-bold leading-tight" data-aos="fade-up">
            Our Products
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Explore our wide range of automotive components, designed with advanced technology and quality standards to deliver reliable performance, durability, and safety across various vehicle systems.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="custom-swiper-pagination w-full pb-8" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              3800: { slidesPerView: 4 },
            }}
            className="w-full !pb-16 min-[3800px]:!pb-24"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="h-auto px-2 py-4">
                <div className="flex flex-col h-full bg-white border border-gray-100 shadow-[0_0_15px_rgba(0,0,0,0.08)] hover:shadow-[0_0_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 overflow-visible group">

                  {/* Image Container with Border and Padding */}
                  <div className="relative w-full aspect-square p-6 min-[3800px]:p-12 bg-white flex items-center justify-center shrink-0">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full p-4 min-[3800px]:p-8 object-contain border border-gray-200 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Red Icon Overlay exactly on the bottom border */}
                    <div className="absolute -bottom-7 min-[3800px]:-bottom-[50px] left-1/2 -translate-x-1/2 w-14 h-14 min-[3800px]:w-[160px] min-[3800px]:h-[160px] rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-sm">
                      {product.icon}
                    </div>
                  </div>

                  {/* Content Below */}
                  <div className="flex flex-col flex-1 px-4 pt-12 min-[3800px]:pt-20 pb-8 text-center">
                    <Typography variant="h3" color="dark" className="font-bold mb-3 min-[3800px]:mb-6">
                      {product.title}
                    </Typography>
                    <span className="flex items-center justify-center gap-2 text-primary text-sm min-[3800px]:text-2xl font-bold hover:text-primary-hover transition-colors mt-auto">
                      View Products <ArrowRight className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8" />
                    </span>
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
