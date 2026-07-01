"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const products = [
    { title: "PRO-SERIES PADS", image: "/moto/magma-brakes/product1.png" },
    { title: "PREMIUM PADS", image: "/moto/magma-brakes/product2.png" },
    { title: "SEVERE DUTY PADS", image: "/moto/magma-brakes/product3.png" },
    { title: "MAXVALUE PADS", image: "/moto/magma-brakes/product4.png" },
    { title: "PREMIUM SHOES", image: "/moto/magma-brakes/product5.png" },
    { title: "PRO-SERIES ROTORS", image: "/moto/magma-brakes/product6.png" },
    { title: "PREMIUM ROTORS", image: "/moto/magma-brakes/product7.png" },
    { title: "PREMIUM DRUMS", image: "/moto/magma-brakes/product8.png" }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#111111]">
      <div className="custom-container flex flex-col">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4 max-w-full md:max-w-[60%]" data-aos="fade-right">
            <Typography variant="h1" color="white" weight="bold" className="font-oswald uppercase">
              OUR PRODUCTS
            </Typography>
            <Typography variant="p" color="white" className="font-oswald  leading-relaxed">
              Discover MAGMA's comprehensive range of high-performance brake components, engineered to deliver exceptional safety, durability, and reliable stopping power for passenger vehicles, commercial fleets, and demanding driving conditions.
            </Typography>
          </div>

          <div className="shrink-0" data-aos="fade-left">
            <Button
              text="VIEW ALL PRODUCTS"
              href="#products"
              showIcon={false}
            />
          </div>
        </div>

        {/* Separator Line */}
        <hr className="w-full border-t border-[#333333] mb-12" />

        {/* Swiper Carousel */}
        <div className="w-full relative products-swiper-container" data-aos="fade-up">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 2,
              },
              1280: {
                slidesPerView: 4,
                slidesPerGroup: 2,
              },
            }}
            className="products-swiper pb-20"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="flex flex-col h-full p-5 xl:p-7 bg-[#1A1A1A] transition-transform hover:-translate-y-1 duration-300">
                  {/* Image Container (White) */}
                  <div className="w-full aspect-[4/3] p-6 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content Container (Dark) */}
                  <div className="p-6 flex flex-col items-center justify-start gap-4 text-center flex-grow">
                    <Typography variant="h5" color="white" weight="bold" className="font-oswald uppercase tracking-wider line-clamp-2">
                      {product.title}
                    </Typography>
                    <Link
                      href={`#product-${idx}`}
                      className="font-oswald text-[var(--color-primary)] underline text-[14px] md:text-[15px] hover:text-white transition-colors mt-auto"
                    >
                      Read More &gt;&gt;&gt;
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
