"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    {
      title: "Wheel Aligner for Cars",
      desc: "Advanced alignment solutions for passenger vehicles with high accuracy and reliability.",
      img: "/moto/koch/s1.jpg",
    },
    {
      title: "Wheel Aligner for Commercial Vehicles",
      desc: "Heavy-duty alignment systems designed for trucks and commercial fleets.",
      img: "/moto/koch/s2.jpg",
    },
    {
      title: "Toe Aligner for Agricultural Machinery",
      desc: "Specialized alignment solutions for agricultural machinery and large vehicles.",
      img: "/moto/koch/s3.jpg",
    },
  ];

  return (
    <section id="products" className="w-full py-20  overflow-hidden">
      <div className="custom-container flex flex-col gap-12">

        {/* Header (Centered) */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Wheel Alignment Solutions
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed">
            Precision-engineered alignment systems designed for cars, commercial vehicles, and agricultural machinery, delivering accurate measurements, improved performance, and reliable workshop efficiency.
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
              <SwiperSlide key={index} className="h-auto pb-6">
                <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group relative transition-shadow hover:shadow-lg">

                  <div className="w-full aspect-video p-4 shrink-0" data-aos="fade-in">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6 text-center pb-12">
                    <Typography variant="h4" color="dark" className="font-bold mb-2" data-aos="fade-up">
                      {product.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed text-sm" data-aos="fade-up" data-aos-delay="100">
                      {product.desc}
                    </Typography>
                  </div>

                  {/* Absolute positioned red button */}
                  <a href="#products" className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors shadow-md z-10" data-aos="fade-up" data-aos-delay="200">
                    <ArrowUpRight className="w-7 h-7" strokeWidth={2} />
                  </a>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Product Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group relative transition-shadow hover:shadow-lg">

              <div className="w-full aspect-[4/3] p-4 shrink-0" data-aos="fade-in" data-aos-delay={index * 100}>
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 text-center pb-16">
                <Typography variant="h4" color="dark" className="font-bold mb-3" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                  {product.title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed text-sm" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                  {product.desc}
                </Typography>
              </div>

              {/* Absolute positioned red button */}
              <a href="#products" className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors shadow-md z-10" data-aos="fade-up" data-aos-delay={index * 100 + 300}>
                <ArrowUpRight className="w-7 h-7" strokeWidth={2} />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
