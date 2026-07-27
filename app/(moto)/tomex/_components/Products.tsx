"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const productsData = [
  {
    image: "/moto/tomex/product1-1.png",
    title: "Brake pads and discs",
    desc: "Brake pads are the basic part that makes up the disc brake system. In addition to brake discs, it..."
  },
  {
    image: "/moto/tomex/product1-2.png",
    title: "Brake shoes",
    desc: "Brake shoes are fundamental parts of a drum brake system. Friction linings attached to the shoes..."
  },
  {
    image: "/moto/tomex/product1-3.png",
    title: "Speciality chemicals",
    desc: "State-of-the-art chemicals for brake system hygiene, degreasing and removal of contaminants..."
  },
  {
    image: "/moto/tomex/product1-4.png",
    title: "Wear sensors",
    desc: "Brake pad condition monitoring component. Brake pad wear sensors help prevent the car from losing its..."
  },
  {
    image: "/moto/tomex/product1-5.png",
    title: "Accessory kits",
    desc: "Complete accessory kits for fast and convenient installation of brake shoes. They guarantee..."
  },
  {
    image: "/moto/tomex/product1-6.png",
    title: "ABS sensors",
    desc: "High-quality wheel speed sensors (ABS = Anti-Lock Braking System). ABS sensors have a direct..."
  }
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16  bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-6  mb-6" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-extrabold uppercase">
            complete Braking solutions
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            Discover the comprehensive braking product range from TOMEX BRAKES Sp. z o.o. Sp. K., engineered to deliver safety, reliability, and long-lasting performance. From brake pads and discs to sensors, specialty chemicals, and installation accessories, our portfolio meets the demands of modern passenger and commercial vehicles while ensuring dependable braking in every condition.
          </Typography>
          <div className="w-[90%] h-px bg-black/35 mt-2"></div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="custom-swiper-pagination pb-12 w-full"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              }
            }}
          >
            {productsData.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white border border-gray-300 h-full flex flex-col p-1">
                  
                  {/* Image Box */}
                  <div className="w-full   flex items-center justify-center p-6 mb-6">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Content Box */}
                  <div className="flex flex-col flex-grow gap-3 px-5">
                    <Typography variant="h3" color="dark" className="font-extrabold text-xl capitalize">
                      {product.title}
                    </Typography>
                    
                    <div className="w-full h-[1px] bg-gray-200 my-1"></div>
                    
                    <Typography variant="p" color="muted" className="leading-relaxed flex-grow">
                      {product.desc}
                    </Typography>
                    
                    <Link href="#product-details" className="mt-2 mb-5 inline-block group w-max">
                      <Typography variant="span" color="primary" className="font-bold underline tracking-wide group-hover:opacity-80 transition-opacity">
                        Read More &gt;&gt;
                      </Typography>
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
};

export default Products;
