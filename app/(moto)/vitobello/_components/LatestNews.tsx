"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function LatestNews() {
  const newsItems = [
    {
      title: "Vitobello Ricambi celebrates 50 years!",
      description: "This year Vitobello Ricambi during the company Christmas lunch, wanted to celebrate together with all its employees and their families the event of 50...",
      img: "/moto/vitobello/news1.png",
      link: "#"
    },
    {
      title: "Vittoria Bussi set a new #UCI Hour Record...",
      description: "Vitobello Ricambi srl supported with great pleasure @vittoriabussi , the fastest woman in the world!!! After so many months of hard work...",
      img: "/moto/vitobello/news2.png",
      link: "#"
    },
    {
      title: "Vitobello Ricambi S.r.l. announces the...",
      description: "Vitobello Ricambi S.r.l. is pleased to announce the collaboration with the professional athlete Vittoria Bussi, born in Rome on 19...",
      img: "/moto/vitobello/news3.png",
      link: "#"
    },
    {
      title: "Vitobello Ricambi sponsors 13th Parts...",
      description: "Vitobello Ricambi sponsors the 13th edition of the Parts Aftermarket Congress, the annual aftermarket conference organised... ",
      img: "/moto/vitobello/news4.png",
      link: "#"
    },
    {
      title: "Vitobello Ricambi cheers on Michele Pirro!",
      description: "A partnership has been signed again for 2019 with rider Michele Pirro, lined up by the Barni Racing Team for the CIV Championship and by Ducati...",
      img: "/moto/vitobello/news5.png",
      link: "#"
    },
    {
      title: "BRAND NEW ENGINE AUDI – VW 1.4 BENZ 16V... ",
      description: "Vitobello Ricambi Srl introduces a brand-new 1.4L 16V petrol engine for Audi, Volkswagen, and SEAT vehicles. Supplied in a semi-complete...",
      img: "/moto/vitobello/news6.png",
      link: "#"
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="news">
      <style>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: white !important;
          opacity: 0.5;
          border-radius: 9999px;
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          width: 28px;
          background-color: #F97316 !important; /* Orange pill */
          opacity: 1 !important;
        }
      `}</style>
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-white/10" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-7xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Check Out The Latest News
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base mt-2">
              Stay informed with the latest news from Vitobello Ricambi S.r.l., featuring company milestones, product launches, strategic partnerships, industry events, sponsorships, and automotive innovations. Explore how we continue to strengthen our presence in the global automotive aftermarket through quality, innovation, and customer-focused solutions.
            </Typography>
          </div>

          <div className="flex-shrink-0 pb-10" data-aos="fade-left" data-aos-delay="100">
            <Button text="Latest Updates" href="#gallery" showIcon={true} />
          </div>
        </div>

        {/* News Grid (Slider) */}
        <div data-aos="fade-up" data-aos-delay="150" className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            rewind={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 }
            }}
            className="w-full !pb-14"
          >
            {newsItems.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group h-full flex flex-col w-full bg-[#1E1E1E] border border-white/50 p-6 rounded-sm hover:border-white/50 transition-colors">

                  {/* Image */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-white mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/moto/vitobello/g4.jpg' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-grow">
                    <Typography variant="h3" color="white" className="font-semibold text-lg md:text-xl leading-snug">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="white" className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.description}
                    </Typography>
                  </div>

                  <div className="mt-auto mb-5">
                    <Button text="Read the Post" href="#gallery" showIcon={true} />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
