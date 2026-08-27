"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./Container";

import "swiper/css";
import "swiper/css/pagination";

type TabKey = "engine-cooling" | "air-conditioning";

const tabs: { key: TabKey; label: string }[] = [
  { key: "engine-cooling", label: "Engine Cooling" },
  { key: "air-conditioning", label: "Air Conditioning" },
];

const productsByTab: Record<TabKey, { img: string; title: string }[]> = {
  "engine-cooling": [
    { img: "/moto/dasis/products/ec1.png", title: "Radiator Engine Cooling" },
    { img: "/moto/dasis/products/ec2.png", title: "Fan Motor Cooling" },
    { img: "/moto/dasis/products/ec3.png", title: "Fan Couplings" },
    { img: "/moto/dasis/products/ec4.png", title: "Water Pump" },
  ],
  "air-conditioning": [
    { img: "/moto/dasis/products/ac1.png", title: "Climate Condenser" },
    { img: "/moto/dasis/products/ac2.png", title: "Air Conditioning Compressor" },
    { img: "/moto/dasis/products/ac3.png", title: "Evaporator" },
    { img: "/moto/dasis/products/ac4.png", title: "Water Pump" },
  ],
};

function ProductCard({ product }: { product: { img: string; title: string } }) {
  return (
    <div className="bg-white flex flex-col h-full" data-aos="fade-in">
      <div className="bg-white flex items-center justify-center p-4">
        <img
          src={product.img}
          alt={product.title}
          className="w-full! h-auto object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-5 pt-1 pb-10 px-3">
        <h3 className="heading text-primary text-[28px]! md:text-[16px] text-center">
          {product.title}
        </h3>
        <Link
          href="#"
          className="heading-white rounded-tr-[16px] rounded-bl-[16px] text-[24px]! uppercase text-white bg-primary px-9 py-1.5 hover:bg-primary-hover transition-colors"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState<TabKey>("engine-cooling");
  const products = productsByTab[activeTab];

  return (
    <section className="relative w-full bg-primary py-10 md:py-24" id="products">
      <Container>
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white">
          <h2 className="heading-white text-[20px] md:text-[24px]">Our Product Range</h2>

          <div className="flex items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`heading-white text-[24px]! uppercase px-5 py-2.5 rounded-tr-[16px] rounded-bl-[16px] transition-colors ${
                  activeTab === tab.key
                    ? "bg-secondary text-white"
                    : "bg-white text-black! text-primary hover:bg-white/90"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product carousel - small screens */}
        <div
          className="sm:hidden"
          style={{
            "--swiper-pagination-color": "#DB020D",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
          } as React.CSSProperties}
        >
          <Swiper
            key={activeTab}
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

        {/* Product grid - sm and up */}
        <div className="hidden sm:grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
