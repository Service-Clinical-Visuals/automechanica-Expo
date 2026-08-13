"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductCategories = () => {
  const categories = [
    {
      title: "Engine Oils",
      image: "/moto/eurol/section5.jpg"
    },
    {
      title: "Transmission & Gear Oils",
      image: "/moto/eurol/section52.jpg"
    },
    {
      title: "Industry Oils",
      image: "/moto/eurol/section53.jpg"
    },
    {
      title: "Antifreeze, Coolants & Windshield washer fluids",
      image: "/moto/eurol/section54.jpg"
    },
    {
      title: "Antifreeze, Coolants & Windshield washer fluids",
      image: "/moto/eurol/section55.jpg"
    },
    {
      title: "Hygienic, Cleaning, Equipment & Promo",
      image: "/moto/eurol/section56.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#112C63]" id="product-categories">
      <Container>
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-5xl">
            <Typography variant="h2" color="white" className="font-goldman mb-4 text-3xl md:text-4xl">
              Our Product Categories
            </Typography>
            <Typography variant="body" color="white" className="font-albert text-sm md:text-base leading-relaxed">
              Explore our comprehensive range of engine oils, transmission fluids, industrial lubricants, coolants, greases, additives, and maintenance products engineered to deliver reliable performance across automotive, commercial, and industrial applications.
            </Typography>
          </div>

          <div className="flex gap-2 shrink-0">
            <button className="swiper-button-prev-cat bg-secondary text-white hover:bg-secondary-hover transition-colors flex items-center justify-center w-12 h-12">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-cat bg-secondary text-white hover:bg-secondary-hover transition-colors flex items-center justify-center w-12 h-12">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Cards */}
        <div className="mb-10 relative w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev-cat',
              nextEl: '.swiper-button-next-cat',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {categories.map((category, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-4">
                <div className="bg-white h-[450px] md:h-[500px] group cursor-pointer overflow-hidden flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                  <div className="p-6 h-[250px] md:h-[338px] overflow-hidden shrink-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="w-full max-w-md mx-auto px-4 h-px bg-black/30 mt-2 2xl:mt-5 shrink-0" />

                  <div className="p-6 flex justify-between items-center bg-white grow border-[8px] border-white border-t-0">
                    <Typography variant="h5" color="none" className="font-goldman text-[#112C63]">
                      {category.title}
                    </Typography>

                    <div className="bg-secondary border border-[#112C63] text-white w-10 h-10 xl:h-12 xl:w-12 flex items-center justify-center shrink-0 hover:bg-secondary-hover transition-colors">
                      <ArrowUpRight size={20} className="xl:h-7 xl:w-7" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center font-goldman mt-3 ">
          <Button text="View All Products" />
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
