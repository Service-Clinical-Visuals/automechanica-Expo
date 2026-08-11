"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const products = [
    {
      img: "/moto/petronas/a1.png",
      title: "PETRONAS Hydraulic Fluids",
      text: "PETRONAS hydraulics are specialised lubricants designed to provide exceptional anti-wear protection and significantly extended oil life, helping businesses..."
    },
    {
      img: "/moto/petronas/a2.png",
      title: "PETRONAS Gear Oils",
      text: "PETRONAS gear oils are formulated to provide excellent anti-wear protection, resist oxidation, and separate from water quickly, enabling extended oil life..."
    },
    {
      img: "/moto/petronas/a3.png",
      title: "PETRONAS Diesel Engine Oil",
      text: "PETRONAS Urania with StrongTech™ technology is engineered to stay stronger for longer, which helps heavy-duty vehicles go further by extending..."
    },
    {
      img: "/moto/petronas/a4.png",
      title: "PETRONAS Gas Engine Oils",
      text: "PETRONAS gas engine oils are formulated to deliver excellent TBN retention, minimise engine wear, and maintain engine cleanliness, resulting in..."
    },
    {
      img: "/moto/petronas/a5.png",
      title: "PETRONAS Greases",
      text: "PETRONAS provides a streamlined yet robust range of industrial greases, designed to simplify daily operations and ensure effective lubrication under varying conditions."
    },
    {
      img: "/moto/petronas/a6.png",
      title: "PETRONAS Turbine oils",
      text: "PETRONAS' Jenteram Series oils, designed for steam and gas turbines, exceed industry standards, offering superior protection against wear, rust, and foam for..."
    },
    {
      img: "/moto/petronas/a7.png",
      title: "PETRONAS Compressor Oils",
      text: "PETRONAS compressor oils, infused with superior anti-wear and anti-oxidant additives, offer up to 12,000 service hours, ensuring protection against..."
    },
    {
      img: "/moto/petronas/a8.png",
      title: "PETRONAS Transmission & Final Drive Fluids",
      text: "PETRONAS Tutela transmission and final drive fluids are engineered to boost efficiency, withstand harsh conditions, and extend component lifespan..."
    }
  ];

  return (
    <section className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-14">

        {/* Header Block */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 border-b border-white/40 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%] order-1">
            <Typography variant="h2" color="white" className="font-semibold">
              Our Products
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed ">
              PETRONAS Industrial Solutions develops and delivers a comprehensive range of high-performance lubricants and greases, engineered to optimise equipment performance and enhance efficiency across diverse sectors such as construction, general manufacturing, mining, and power generation.
            </Typography>
          </div>
          <div className="order-2 mt-4 xl:mt-0 shrink-0">
            <Button text="View All Products" href="#" showIcon={true} />
          </div>
        </div>

        {/* Swiper Slider */}
        <div
          className="w-full mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            "--swiper-pagination-color": "var(--color-primary)",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
          } as React.CSSProperties}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1536: { slidesPerView: 3 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-[#111111] w-full h-full flex flex-col border border-white/40 overflow-hidden cursor-pointer shadow-lg hover:border-primary transition-colors duration-300">
                  {/* Card Image */}
                  <div className="w-full aspect-[16/10] p-3 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-99"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="flex flex-col p-6 lg:p-8 flex-grow justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <Typography variant="h3" color="white" className=" font-semibold">
                        {product.title}
                      </Typography>
                      <Typography variant="p" color="white" className="leading-relaxed ">
                        {product.text}
                      </Typography>
                    </div>
                    <Link href="#" className="inline-block mt-2">
                      <Typography variant="p" color="primary" className="font-semibold hover:underline underline-offset-4">
                        Read More {">>"}
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
}
