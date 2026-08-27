"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    title: 'Disc Brake Pads',
    desc: 'Engineered with special wear-resistant materials, our brake pads deliver high braking performance...',
    image: '/moto/kalebalata/1.jpg'
  },
  {
    id: 2,
    title: 'Brake Linings',
    desc: 'The ideal solution for brake lining systems. Provides effective braking with high friction force...',
    image: '/moto/kalebalata/2.jpg'
  },
  {
    id: 3,
    title: 'Brake shoe with Linings',
    desc: 'Designed for safe and dependable stopping power, our brake shoes combine premium wear-resistant...',
    image: '/moto/kalebalata/3.jpg'
  },
  {
    id: 4,
    title: 'Brake Discs',
    desc: 'Kale Balata brake discs are designed to provide safe and stable braking performance thanks to their structure...',
    image: '/moto/kalebalata/4.jpg'
  }
];

export default function OurProducts() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="custom-container flex flex-col items-center relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Background Watermark Text */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 kalebalatatext font-normal whitespace-nowrap anton-font pointer-events-none select-none leading-none flex items-center justify-center w-full"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)',
            color: 'transparent',
            zIndex: -1
          }}
          data-aos="fade-in"
        >
          Kale Balata
        </div>

        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-4 mt-8 sm:mt-10 md:mt-12 lg:mt-18 relative z-10">
         <h2 
            className="anton-font text-white section-title fonr-normal leading-tight tracking-wide"
            data-aos="fade-up"
          >
            Our Products
          </h2>
          <p 
            className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            By browsing our product catalog, you can find detailed information about our wide range of products and easily discover the solutions that best suit your needs. With our products that combine quality and performance, we continue to offer a safe and efficient driving experience.
          </p>
        </div>

        {/* Product Cards Slider */}
        <div className="mt-10 md:mt-16 relative w-full max-w-7xl mx-auto" data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.prod-pagination' }}
            className="w-full"
          >
            {products.map((prod) => (
              <SwiperSlide key={prod.id}>
                <div className="w-full relative aspect-[4/3] md:aspect-[4/3] rounded-xl overflow-hidden bg-[#181818] shadow-xl group cursor-pointer">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/[0.24] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex flex-col gap-1">
                      <h4 className="anton-font text-white text-xl md:text-2xl tracking-wide">{prod.title}</h4>
                      <p className="oswald-font text-white/80 text-xs md:text-sm leading-relaxed line-clamp-2">{prod.desc}</p>
                    </div>
                    
                    {/* Arrow Button */}
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F8AC1A] transition-colors">
                      <ArrowUpRight className="text-white group-hover:text-black transition-colors" size={18} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Carousel Pagination Dots */}
          <div className="prod-pagination flex items-center justify-center gap-2 mt-8 md:mt-12 w-full"></div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .prod-pagination .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: rgba(255,255,255,0.3);
              opacity: 1;
              border-radius: 9999px;
              transition: all 0.3s;
              margin: 0 4px !important;
            }
            @media (min-width: 768px) {
              .prod-pagination .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
              }
            }
            .prod-pagination .swiper-pagination-bullet-active {
              width: 40px;
              background: #F8AC1A;
            }
          `}} />
        </div>

      </div>
    </section>
  );
}
