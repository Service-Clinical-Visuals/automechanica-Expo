"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    date: "Jul 10, 2026",
    title: "Excellence Recognized: Dana Neu-Ulm Earns GM Supplier Quality Excellence Award",
    image: "/moto/reinz-dichtungs/n1.png",
  },
  {
    id: 2,
    date: "Jun 18, 2026",
    title: "Backstage at Victor Reinz®: Workshops Experience OE Quality First-Hand",
    image: "/moto/reinz-dichtungs/n2.png",
  },
  {
    id: 3,
    date: "Apr 27, 2026",
    title: "Dana Neu-Ulm receives PACCAR Quality Achievement Award",
    image: "/moto/reinz-dichtungs/n3.png",
  },
  {
    id: 4,
    date: "Apr 21, 2026",
    title: "Dana Battery Housing Gasket Advances Clean Disassembly and Lower EV Repair Costs",
    image: "/moto/reinz-dichtungs/n4.png",
  },
  {
    id: 5,
    date: "Mar 05, 2026",
    title: "Dana Metallic Bipolar Plate Accelerates Cost-Efficient Green Hydrogen",
    image: "/moto/reinz-dichtungs/n5.png",
  },
  {
    id: 6,
    date: "Mar 04, 2026",
    title: "Growing Together – Dana Neu-Ulm Celebrates Its Long‑Standing Companions ",
    image: "/moto/reinz-dichtungs/n6.png",
  },
   {
    id: 7,
    date: "Nov 13, 2026",
    title: "Dana at Automechanika Dubai 2025: Victor Reinz® Strengthens Middle East Presence",
    image: "/moto/reinz-dichtungs/n7.png",
  },
   {
    id: 8,
    date: "Nov 11, 2026",
    title: "Best of REINZOSIL® With Victoria — Sealing Has Never Been So Easy",
    image: "/moto/reinz-dichtungs/n8.png",
  }
];

export default function LatestNews() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="news">
      <div className="custom-container px-4">
        
        {/* Header Content */}
        <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
                <h2 className="section-title font-bold text-black font-oswald text-center ">
              Our Latest News & Insights
            </h2>
            <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
          </div>
          <p className="section-text text-black font-poppins leading-relaxed max-w-7xl mx-auto">
            Stay up to date with the latest company news, product launches, industry developments, and upcoming events. Discover how our innovations, achievements, and milestones continue to shape the future of automotive excellence.
          </p>
        </div>

        {/* News Carousel */}
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
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.news-pagination' }}
            className="pb-12"
          >
            {newsItems.map((news) => (
              <SwiperSlide key={news.id} className="!h-auto">
                <div className="bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-md transition-shadow duration-300 flex flex-col h-full overflow-hidden group">
                   <div className="flex items-center justify-center">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <span className="text-xs text-black font-poppins mb-2">{news.date}</span>
                    <h3 className="font-oswald font-normal text-black news-text mb-4 text-lg leading-snug flex-grow">
                      {news.title}
                    </h3>
                    <div className="mt-auto text-right">
                      <Link href={`#news-${news.id}`} className="text-[#ff383c] section-text font-poppins underline-offset-2 underline">
                        Read
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="flex justify-center mt-8">
            <div className="news-pagination flex gap-2 items-center justify-center"></div>
          </div>

          <style jsx global>{`
            .news-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background-color: #d1d5db;
              opacity: 1;
              border-radius: 50%;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .news-pagination .swiper-pagination-bullet-active {
              background-color: var(--primary);
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}
