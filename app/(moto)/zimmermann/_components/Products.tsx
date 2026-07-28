"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./Container";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    image: "/moto/zimmermann/products/1.png",
    title: "Brake Discs and Pads",
    description: "The best braking effect is achieved when all components work together optimally.",
  },
  {
    image: "/moto/zimmermann/products/2.png",
    title: "Brake Pads",
    description: "Engineered with premium materials to ensure smooth, quiet, and efficient braking.",
  },
  {
    image: "/moto/zimmermann/products/3.png",
    title: "Pre-Assembled Brake Shoe Kit Z",
    description: "High-quality brake shoes engineered for reliable performance efficient drum braking.",
  },
  {
    image: "/moto/zimmermann/products/4.png",
    title: "Standard Brake Discs",
    description: "Premium brake discs engineered for precision, safety, and lasting performance.",
  },
  {
    image: "/moto/zimmermann/products/5.png",
    title: "Sports Brake Discs",
    description: "Premium brake discs engineered for precision, safety, and lasting performance.",
  },
  {
    image: "/moto/zimmermann/products/6.png",
    title: "FusionZ Brake Discs",
    description: "High-performance composite brake discs designed for precision and durability.",
  },
  {
    image: "/moto/zimmermann/products/7.png",
    title: "Light Commercial Brake Discs",
    description: "Precision brake discs designed for vans and light commercial vehicles.",
  },
  {
    image: "/moto/zimmermann/products/8.png",
    title: "Measuring Device for Brake Discs",
    description: "Reliable measurement solution for verifying brake disc condition and performance.",
  },
];

export default function Products() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24" id="products">
      <Container>
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3.5 h-3.5 bg-secondary shrink-0" />
            <h2 className="heading uppercase">Our Product Range</h2>
          </div>
          <p className="content max-w-[1300px]">
            Discover Zimmermann&apos;s comprehensive range of premium brake components, engineered
            with German precision to deliver outstanding safety, performance, and reliability for
            passenger cars and light commercial vehicles.
          </p>
        </div>

        <div
          className="products-swiper-wrap"
          style={
            {
              "--swiper-pagination-color": "#FD0000",
              "--swiper-pagination-bullet-inactive-color": "#D1D5DB",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            } as CSSProperties
          }
          data-aos="fade-up"
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
              1280: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            className="pb-14"
          >
            {products.map((product) => (
              <SwiperSlide key={product.title} className="h-auto">
                <div className="flex flex-col h-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center text-center flex-1 px-6 py-7">
                    <h3 className="heading text-[24px]! leading-[24px]! mb-3">{product.title}</h3>
                    <p className="content text-[16px]! text-[#555555]! mb-6 flex-1">
                      {product.description}
                    </p>

                    <div className="heading mb-4">
                      <Link
                        href="#"
                        className="inline-block bg-secondary hover:bg-secondary-hover text-white! text-[16px]! tracking-[1px]! leading-[20px]! uppercase px-6 py-2.5 rounded transition-colors"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
