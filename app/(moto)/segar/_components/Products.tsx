"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Battery");
  const swiperRef = useRef<any>(null);

  const categories = [
    "Battery",
    "Lighting Group",
    "AVAS (VEHICLE WARNING SYSTEM)",
    "View All"
  ];

  const products = [
    // Battery
    {
      image: "/moto/segar/p1.png",
      title: "Taxi",
      category: "Battery",
    },
    {
      image: "/moto/segar/p2.png",
      title: "SHD Heavy Duty",
      category: "Battery",
    },
    {
      image: "/moto/segar/p3.png",
      title: "MF for European Passenger Cars",
      category: "Battery",
    },
    {
      image: "/moto/segar/p4.png",
      title: "Deep Discharge GEL",
      category: "Battery",
    },
    // Lighting Group
    {
      image: "/moto/segar/p5.png",
      title: "Halogen Bulb",
      category: "Lighting Group",
    },
    {
      image: "/moto/segar/p6.png",
      title: "Miniature Bulbs",
      category: "Lighting Group",
    },
    {
      image: "/moto/segar/p7.png",
      title: "Xenon ( HID ) Bulbs",
      category: "Lighting Group",
    },
    // AVAS
    {
      image: "/moto/segar/p8.png",
      title: "AVAS ( 12V-24V )",
      category: "AVAS (VEHICLE WARNING SYSTEM)",
    },
    {
      image: "/moto/segar/p9.png",
      title: "Multi AVAS ( 12V-24V )",
      category: "AVAS (VEHICLE WARNING SYSTEM)",
    }
  ];

  const filteredProducts = activeCategory === "View All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container relative">

        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-12" data-aos="fade-up">

          {/* Left Text */}
          <div className="xl:w-1/2">
            <h3 className="text-[#DF1222] roboto-font font-semibold section-text mb-4">
              Our Solutions
            </h3>
            <p className="outfit-font text-[#404040] section-text leading-relaxed">
              Seger Horns has grown into a leading force in the Turkish automotive sub-industry, contributing significantly to the national economy while establishing a strong global presence. The company's journey began in 1981 in Bursa, starting as a modest workshop focused on copper wire production.
            </p>
          </div>

          {/* Right Categories */}
          <div className="xl:w-1/2 flex flex-wrap justify-start xl:justify-end gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
                className={`px-6 py-2.5 rounded-[4px] border border-[#DF1222] roboto-font font-semibold transition-colors section-text ${activeCategory === cat
                  ? "bg-[#DF1222] text-white"
                  : "bg-transparent text-[#DF1222] hover:bg-red-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Swiper Area with Navigation */}
        <div className="relative group" data-aos="fade-up" data-aos-delay="200">

          {/* Custom Nav Prev */}
          <button
            className="hidden lg:flex absolute left-[-20px] lg:left-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#DF1222] items-center justify-center text-[#DF1222] hover:bg-[#DF1222] hover:text-white transition-colors bg-white shadow-sm"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft size={20} strokeWidth={2} />
          </button>

          <Swiper
            key={activeCategory} // Forces Swiper to remount when category changes
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            loop={filteredProducts.length > 4}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-4"
          >
            {filteredProducts.map((product, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col w-full h-full bg-white border border-[#CCCCCCCC] rounded-sm p-6 text-center group transition-shadow hover:shadow-md">
                  {/* Image Container */}
                  <div className="w-full h-full border border-[#CCCCCC]/20 mb-6 bg-[#CCCCCC]/20 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400 rounded-sm">Image</div>' }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="card-title text-[#202020] roboto-font font-semibold mb-6">
                    {product.title}
                  </h3>

                  {/* Link */}
                  <Link href="#" className="text-[#DF1222] outfit-font card-text font-semibold hover:underline mt-auto flex items-center justify-center gap-2">
                    View Product <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Nav Next */}
          <button
            className="hidden lg:flex absolute right-[-20px] lg:right-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#DF1222] items-center justify-center text-[#DF1222] hover:bg-[#DF1222] hover:text-white transition-colors bg-white shadow-sm"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight size={20} strokeWidth={2} />
          </button>

        </div>

        {/* Pagination indicator & Bottom Button */}
        <div className="flex flex-col items-center mt-10 gap-6">
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: Math.max(1, Math.ceil(filteredProducts.length / 4)) }).map((_, idx) => (
              <div
                key={idx}
                className={`h-0.5 rounded-full transition-all duration-300 ${Math.floor(activeIndex / 4) === idx
                  ? 'w-[44px] bg-[#DF1222]'
                  : 'w-[20px] bg-gray-300'
                  }`}
              ></div>
            ))}
          </div>

          <Link
            href="#"
            className="px-8 py-2 rounded-[4px] border border-[#DF1222] text-[#DF1222] roboto-font font-semibold hover:bg-[#DF1222] hover:text-white transition-colors flex items-center gap-2 btn-text mt-2"
          >
            View All <ArrowRight size={18} strokeWidth={2} />
          </Link>
        </div>

      </div>
    </section>
  );
}
