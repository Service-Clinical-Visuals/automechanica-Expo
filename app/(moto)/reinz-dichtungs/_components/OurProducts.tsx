"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

const products = [
  {
    id: 1,
    name: "Cylinder-Head Gaskets",
    description: "Multi-layer steel (MLS) cylinder-head gaskets - innovative sealing solutions for new engine designs",
    image: "/moto/reinz-dichtungs/1.png",
  },
  {
    id: 2,
    name: "Valve Cover Gaskets",
    description: "Cylinder head cover gaskets withstand high and low temperatures to provide a reliable seal with minimal tightening.",
    image: "/moto/reinz-dichtungs/2.png",
  },
  {
    id: 3,
    name: "Intake Manifold Gasket",
    description: "Modern sealing systems have to deal with more aggressive media, higher temperatures under mechanical stress.",
    image: "/moto/reinz-dichtungs/3.png",
  },
  {
    id: 4,
    name: "Exhaust Manifold Gasket",
    description: "Exhaust manifold gaskets require metal beads where the gas passes through at very high temperatures and low pressure.",
    image: "/moto/reinz-dichtungs/4.png",
  },
  {
    id: 5,
    name: "Secondary Gaskets",
    description: "Secondary gaskets provide a precise fit and reliable sealing to prevent leaks in engine and auxiliary components.",
    image: "/moto/reinz-dichtungs/5.png",
  },
  {
    id: 6,
    name: "Molded Gaskets",
    description: "Molded gaskets are engineered for superior sealing performance, offering excellent durability and precise fitment",
    image: "/moto/reinz-dichtungs/6.png",
  },
  {
    id: 7,
    name: "Carrier Style Gaskets",
    description: "Carrier style gaskets combine advanced sealing materials with a rigid carrier for enhanced stability",
    image: "/moto/reinz-dichtungs/7.png",
  },
  {
    id: 8,
    name: "Electronic Connector Gasket",
    description: "Electronic connector gaskets provide dependable sealing against moisture, dust, and contaminants",
    image: "/moto/reinz-dichtungs/8.png",
  }
];

export default function OurProducts() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="products">
      <div className="custom-container ">
        {/* Header Content */}
        <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
                <h2 className="section-title font-bold text-black font-oswald text-center ">
              Our Product Portfolio
            </h2>
           <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
          </div>
          <p className="text-[#111111] section-text leading-relaxed font-poppins max-w-7xl mx-auto">
            Discover a full range of Victor Reinz® sealing solutions built to OEM standards, including gaskets, seals, and industrial materials. Designed for precise fit, durability, and reliable performance, they help improve engine efficiency and ensure long-lasting protection across automotive and industrial applications.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.products-pagination' }}
            className="pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto">
                <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col h-full overflow-hidden">
                  <div className="flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-oswald font-semibold text-black mb-3 product-text">{product.name}</h3>
                    <p className="text-black section-text leading-relaxed font-poppins mb-6 flex-grow ">
                      {product.description}
                    </p>
                    <div className="flex justify-center mt-auto">
                      <Button href={`#product-${product.id}`} variant="primary" >
                        View Products
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="flex justify-center mt-8">
            <div className="products-pagination flex gap-2 items-center justify-center"></div>
          </div>

          <style jsx global>{`
            .products-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background-color: #d1d5db;
              opacity: 1;
              border-radius: 50%;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .products-pagination .swiper-pagination-bullet-active {
              background-color: var(--primary);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
