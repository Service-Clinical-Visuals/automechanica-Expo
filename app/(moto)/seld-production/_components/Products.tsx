"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./Container";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  "/moto/seld-production/products/1.png",
  "/moto/seld-production/products/2.png",
  "/moto/seld-production/products/3.png",
  "/moto/seld-production/products/4.png",
  "/moto/seld-production/products/5.png",
  "/moto/seld-production/products/6.png",
];

const productGroups = [
  [products[0], products[3]],
  [products[1], products[4]],
  [products[2], products[5]],
];

function ProductCard({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      {images.map((img) => (
        <div key={img} className="overflow-hidden">
          <img src={img} alt="SELD Production product" className="w-full h-auto block" />
        </div>
      ))}
    </div>
  );
}

export default function Products() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Heading */}
        <div className="max-w-[1000px] mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="heading mb-6">We design and manufacture all types of High Performance Products</h2>
          <p className="content">
            Our premium Fuel Additives are engineered to deliver outstanding performance, protection, and efficiency across a wide range of industries and applications. From passenger cars and commercial vehicles to heavy industrial equipment, motorsport, public works machinery, agricultural vehicles, marine engines, transport fleets, and ski lift systems.
          </p>
        </div>

        {/* Product cards - carousel on small screens */}
        <div
          className="md:hidden"
          data-aos="fade-up"
          style={{
            "--swiper-pagination-color": "#012F90",
            "--swiper-pagination-bullet-inactive-color": "#012F90",
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
            {productGroups.map((images, i) => (
              <SwiperSlide key={i}>
                <ProductCard images={images} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product cards - grid on sm and up */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {productGroups.map((images, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <ProductCard images={images} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
