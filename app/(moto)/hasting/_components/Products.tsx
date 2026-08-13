"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Products = () => {
  const products = [
    {
      title: "Piston Rings",
      desc: "At Hastings, we manufacture a bold and broad offering of piston rings one that spans thousands of applications for virtually any engine.",
      img: "/moto/hasting/n1.png",
    },
    {
      title: "OEM",
      desc: "Hastings delivers what the world wants in piston rings - precision, performance, and a robust offering that covers every category and possible applications.",
      img: "/moto/hasting/n2.png",
    },
    {
      title: "Aftermarket",
      desc: "At Hastings, we manufacture a bold and broad offering of piston rings one that spans thousands of applications for virtually any engine.",
      img: "/moto/hasting/n1.png",
    },
  ];

  return (
    <section id="products" className="w-full py-10 xl:py-16 min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container max-w-[1920px] flex flex-col gap-10 xl:gap-14">

        {/* Top Header - Centered */}
        <div className="flex flex-col items-center text-center gap-4 mb-4">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
            <Typography variant="h4" color="primary" className="font-bold">
              Our Product Range
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-tight" data-aos="fade-up" data-aos-delay="100">
            Our Comprehensive Product Solutions
          </Typography>
        </div>

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
                <div className="flex flex-col h-full bg-[#f8f9fa] shadow-sm hover:shadow-md transition-shadow group">

                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shrink-0" data-aos="fade-in">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 text-left relative">
                    <Typography variant="h3" color="primary" className="font-bold mb-3" data-aos="fade-up">
                      {product.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="100">
                      {product.desc}
                    </Typography>

                    {/* Link */}
                    <div className="mt-auto" data-aos="fade-up" data-aos-delay="200">
                      <Link href="#products" className="inline-flex items-center gap-1.5 text-primary hover:text-secondary transition-colors font-bold group/link">
                        <span className="text-sm border-b-2 border-primary group-hover/link:border-secondary transition-colors pb-[1px]">View Product</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Product Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col h-full bg-[#f8f9fa] shadow-sm hover:shadow-md transition-shadow group">

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shrink-0" data-aos="fade-in" data-aos-delay={index * 100}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 xl:p-10 text-left relative">
                <Typography variant="h3" color="primary" className="font-bold mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                  {product.title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed mb-8" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                  {product.desc}
                </Typography>

                {/* Link */}
                <div className="mt-auto" data-aos="fade-up" data-aos-delay={index * 100 + 300}>
                  <Link href="#products" className="inline-flex items-center gap-1.5 text-primary hover:text-secondary transition-colors font-bold group/link">
                    <span className="text-[15px] border-b-2 border-primary group-hover/link:border-secondary transition-colors pb-[1px]">View Product</span>
                    <ArrowUpRight className="w-[18px] h-[18px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
