"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./Container";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    img: "/moto/belif/products/1.png",
    title: "BELCOOL G12 antifreeze conc. 1.5L",
    description: "Advanced G12 coolant concentrate formulated to provide reliable freeze and boil-over protection",
  },
  {
    img: "/moto/belif/products/2.png",
    title: "BELCOOL G12+ antifreeze conc. 1.5L",
    description: "Advanced G12 coolant concentrate formulated to provide reliable freeze and boil-over protection",
  },
  {
    img: "/moto/belif/products/3.png",
    title: "BELCOOL G12++ antifreeze conc. 1.5L",
    description: "Advanced G12 coolant concentrate formulated to provide reliable freeze and boil-over protection",
  },
  {
    img: "/moto/belif/products/4.png",
    title: "BELCOOL G13 antifreeze conc. 1.5L",
    description: "Advanced G12 coolant concentrate formulated to provide reliable freeze and boil-over protection",
  },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="bg-white w-fit mx-auto rounded-lg overflow-hidden flex flex-col items-center h-full" data-aos="fade-up">
      <div className="w-full max-w-[375px] mx-auto">
        <img src={product.img} alt={product.title} className="w-full h-auto object-contain" />
      </div>

      <div className="w-full max-w-[375px] mx-auto px-6 pt-6 pb-8 flex flex-col items-center text-center flex-1">
        <h3 className="flex flex-col items-center subheading text-[28px]! font-medium! mb-2 pb-2 px-10">
          {product.title}
          <div className="h-1 w-25 bg-primary mt-4" />
        </h3>
        <p className="content mb-4">{product.description}</p>

        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} className="fill-[#F5B301] text-[#F5B301]" />
          ))}
        </div>

        <Link
          href="#"
          className="mt-auto w-full inline-flex items-center justify-center gap-2 content font-bold! text-white! rounded-[10px] bg-gradient-to-r from-[#FF2D16] to-[#991B0D] px-6 py-3 hover:opacity-90 transition-opacity"
        >
          View Product
          <ArrowRight size={18} strokeWidth={2.25} />
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: "url(/moto/belif/products/productsbg.png)" }}
      id="products"
    >
      <Container>
        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10" data-aos="fade-up">
          <div className="flex items-start flex-col">
            <h2 className="heading-white pb-4 inline-block">Our Product</h2>
            <div className="h-1 bg-white w-28" />
          </div>

          <Link
            href="#"
            className="content font-semibold! text-white! inline-flex items-center gap-2 rounded-[10px] bg-[#1A1A1A] px-6 py-3 hover:bg-black transition-colors whitespace-nowrap"
          >
            View All Products
            <ArrowRight size={18} strokeWidth={2.25} />
          </Link>
        </div>

        {/* Product cards - carousel on small screens */}
        <div
          className="md:hidden"
          data-aos="fade-up"
          style={{
            "--swiper-pagination-color": "#1A1A1A",
            "--swiper-pagination-bullet-inactive-color": "#1A1A1A",
            "--swiper-pagination-bullet-inactive-opacity": "0.3",
          } as React.CSSProperties}
        >
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className="pb-10!"
          >
            {products.map((product) => (
              <SwiperSlide key={product.title}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product grid - md and up */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center" data-aos="fade-up">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
