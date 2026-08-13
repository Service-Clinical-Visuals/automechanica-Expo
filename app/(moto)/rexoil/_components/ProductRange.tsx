"use client";

import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ProductRange() {
  const products = [
    {
      title: "Automotive Lubricants",
      desc: "Synthetic and mineral based engine oils developed to meet the performance requirements of new generation engines.",
      image: "/moto/rexoil/product1.png",
      link: "View Products"
    },
    {
      title: "Industrial lubricants",
      desc: "We develop the most suitable mineral oils for the equipment you use in your iron-steel, petrochemical, energy, metalworking...",
      image: "/moto/rexoil/product2.png",
      link: "View Products"
    },
    {
      title: "Process oils",
      desc: "Turkey also among the top three suppliers of plastic Our team located the rubber process oils, agriculture, paper, textile dyes...",
      image: "/moto/rexoil/product3.png",
      link: "View Products"
    },
    {
      title: "Greases",
      desc: "Industrial and multi-purpose greases produced with high quality base oils and performance enhancing additives...",
      image: "/moto/rexoil/product4.png",
      link: "View Products"
    },
     {
      title: "Marine Oils",
      desc: "REXOIL Marine Oils deliver reliable lubrication and superior protection for marine engines Formulated to resist corrosion",
      image: "/moto/rexoil/product5.png",
      link: "View Products"
    }, {
      title: "Other Products",
      desc: "Reliable automotive fluids including Antifreeze, Long Life Antifreeze, and Brake Fluid, designed for temperature control...",
      image: "/moto/rexoil/product6.png",
      link: "View Products"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-5xl" data-aos="fade-right">
            <h2 className="section-title font-semibold text-[#11121B] mb-4 leading-[1.2] exo-2">
              Our Product Range
            </h2>
            <p className="section-text text-[#515151] niramit leading-[1.8]">
              REXOIL offers a complete range of high-performance lubricants and specialty products engineered to deliver superior protection, reliable performance.
            </p>
          </div>
          <div className="shrink-0" data-aos="fade-left">
            <Button variant="primary-outline" className="!px-6 !py-2.5">
              View All Products
            </Button>
          </div>
        </div>

        {/* Product Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            }
          }}
          className="w-full pb-12 pt-2 px-2"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div 
                className="border border-gray-100 rounded-xl p-4 bg-white shadow-[0_3px_6px_rgba(0,0,0,0.06)]  transition-all duration-300 flex flex-col h-full mb-2"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >
                <div className="w-full  rounded-lg overflow-hidden mb-3 relative flex items-center justify-center hover:scale-[1.05] transition-all duration-300 ">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className=" w-full h-full object-contain "
                  />
                </div>
                <h3 className="product-card-title font-semibold text-[#11121B] mb-3 exo-2">
                  {product.title}
                </h3>
                <p className="product-card-text text-[#515151] niramit mb-6 flex-grow leading-[1.6] line-clamp-3">
                  {product.desc}
                </p>
                <a 
                  href="#" 
                  className="card-title text-[#A27F41] font-semibold niramit btn-text hover:text-[#8b6b37] transition-colors mt-auto mb-3 inline-block underline decoration-2 underline-offset-4"
                >
                  {product.link}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
