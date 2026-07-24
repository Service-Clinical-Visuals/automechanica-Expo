"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const products = [
  { img: "/moto/ows/product1.png", title: "Performance 3-in-1 System" },
  { img: "/moto/ows/product2.png", title: "Aircon Treatment" },
  { img: "/moto/ows/product3.png", title: "Premium Z Edition" },
  { img: "/moto/ows/product4.png", title: "Car Care Kit Products" },
  { img: "/moto/ows/product5.png", title: "Performance Additives" },
  { img: "/moto/ows/product6.png", title: "Engine Decarbonizers" },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center text-center gap-6">
        
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 " data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Our Products
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed max-w-[70%]">
            OWS offers a comprehensive range of premium automotive additives, lubricants, and technical spray solutions engineered to enhance vehicle performance, protect critical components, and ensure long-lasting reliability. Developed with German engineering expertise, every product is designed to meet the demands of modern vehicles and professional automotive applications.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-10 relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Scrollbar]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            scrollbar={{
              el: '.ows-scrollbar',
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 4 }, // large pc
            }}
            className="w-full !pb-4"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="group w-full aspect-[375/460] relative overflow-hidden cursor-pointer transition-all duration-300">
                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    {/* Text slides up on hover */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-left">
                      <Typography variant="h4" color="white" className="font-bold mb-2">
                        {product.title}
                      </Typography>
                      <a href="#" className="text-white/80 hover:text-white text-sm font-semibold flex items-center gap-1 transition-colors">
                        View All <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Footer Area for Pagination and Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-10 gap-4 sm:gap-0">
             {/* Custom Scrollbar track */}
             <div className="ows-scrollbar w-full sm:w-[40%] md:w-[30%] xl:w-[25%] h-[6px] bg-gray-200 rounded-full overflow-hidden relative cursor-pointer">
                 {/* Swiper injects the thumb here */}
             </div>
             
             {/* View Categories Link */}
             <a href="#" className="text-black underline hover:text-primary text-md font-bold flex items-center gap-1 transition-colors tracking-wide">
                View Categories &gt;
             </a>
          </div>
        </div>
      </div>

      {/* Global styles for the swiper scrollbar thumb */}
      <style dangerouslySetInnerHTML={{__html: `
        .ows-scrollbar .swiper-scrollbar-drag {
           background: #9C76A2 !important;
           border-radius: 9999px !important;
           height: 100% !important;
        }
      `}} />
    </section>
  );
};

export default Products;
