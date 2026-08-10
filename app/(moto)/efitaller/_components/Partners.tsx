"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Partners() {
  const categories = [
    {
      title: "Diagnostics",
      image: "/moto/efitaller/partner1.png",
      desc: "Multi-brand equipment with European, American and Asian coverage.",
      link: "#"
    },
    {
      title: "ADAS",
      image: "/moto/efitaller/partner2.png",
      desc: "Calibration and adjustment of advanced driver assistance systems.",
      link: "#"
    },
    {
      title: "Alignment",
      image: "/moto/efitaller/partner3.png",
      desc: "Wheel aligners and lifts for precision geometry.",
      link: "#"
    },
    {
      title: "ATF",
      image: "/moto/efitaller/partner5.png",
      desc: "ATF oil change and automatic transmission maintenance.",
      link: "#"
    },
    {
      title: "Batteries",
      image: "/moto/efitaller/partner6.png",
      desc: "Lead and lithium battery diagnostics and charging.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14" data-aos="fade-up">
          {/* Top title */}
          <div className="flex flex-col mb-1 w-fit">
            <span className="text-[#C2D500] font-semibold section-text inter-font">Our range</span>
          </div>

          <h2 className="section-title text-[#404040] sora-font font-semibold mb-4">
            Equipment by category
          </h2>
          <p className="inter-font text-[#404040] section-text max-w-4xl mx-auto leading-relaxed">
            Our product range offers a comprehensive selection of high-quality automotive components designed for performance, durability, and reliability. Engineered with precision and built to meet modern industry standards, each product ensures consistent efficiency across a wide range of applications.
          </p>
        </div>

        <style>{`
          .partners-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .partners-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background-color: #e5e7eb !important; /* Tailwind gray-200 */
            opacity: 1;
            border-radius: 9999px;
            transition: all 0.3s ease;
            margin: 0 !important;
            cursor: pointer;
          }
          .partners-pagination .swiper-pagination-bullet-active {
            background-color: #C2D500 !important;
          }
          .partners-prev.swiper-button-disabled,
          .partners-next.swiper-button-disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
        `}</style>

        {/* Cards Slider */}
        <div className="w-full px-4 md:px-10 mx-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.partners-next',
              prevEl: '.partners-prev',
            }}
            pagination={{
              el: '.partners-pagination',
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
            }}
            className="pb-4"
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group transition-all hover:shadow-md pb-6" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
                  {/* Image Container */}
                  <div className="w-full h-auto aspect-square[3/2] overflow-hidden p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400 rounded-md">Image</div>' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-6 pt-4 flex flex-col flex-grow">
                    <h3 className="card-title text-[#404040] sora-font font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#404040] inter-font section-text leading-relaxed mb-4 flex-grow">
                      {item.desc}
                    </p>

                    <div className="flex justify-end mt-auto">
                      <a href={item.link} className="w-auto h-auto rounded-full bg-[#f4f7d9] flex items-center justify-center text-[#C2D500] hover:bg-[#C2D500] hover:text-white transition-colors">
                        <img src="/moto/efitaller/arrow.png" alt="Read more" className="w-auto h-auto object-contain" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Placeholder slide to force the second page to only show 2 items on large screens */}
            <SwiperSlide className="hidden lg:block invisible pointer-events-none" />
          </Swiper>
        </div>

        {/* Pagination & Button */}
        <div className="flex flex-col items-center mt-12 gap-8">
          <div className="flex justify-center items-center gap-6">
            <button className="partners-prev text-[#C2D500] hover:text-[#a0af00] transition-colors" aria-label="Previous slide">
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>

            <div className="partners-pagination"></div>

            <button className="partners-next text-[#C2D500] hover:text-[#a0af00] transition-colors" aria-label="Next slide">
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
