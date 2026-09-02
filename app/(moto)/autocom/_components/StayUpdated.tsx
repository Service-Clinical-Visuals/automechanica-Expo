"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StayUpdated() {
  const cards = [
    {
      img: "/moto/autocam/update1.png",
      title: "Release 2026.07 Highlights",
      date: "7/2/2026",
      category: "Release highlights",
      desc: "A new, big update is here.We are happy to announce that both Abarth and Hyundai are now added to Secure Gateway."
    },
    {
      img: "/moto/autocam/update2.png",
      title: "Get 35% Discount On ICON!",
      date: "5/7/2026",
      category: "Other",
      desc: "Celebrating 35 years of trusted diagnostics with an amazing anniversary offer on ICON. The all-in-one tool."
    }
  ];

  return (
    <section className="relative w-full py-16 bg-[var(--background)] overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col items-center gap-10 lg:gap-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold leading-tight">
            Stay Updated With Autocom
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed  xl:w-[60%]">
            Keep up with the latest product releases, software updates, industry insights, and exclusive offers from Autocom. Discover new diagnostic capabilities, ADAS innovations, and solutions designed to help workshops stay ahead in an ever-evolving automotive industry.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto ">
                <div className="flex flex-col h-full  overflow-hidden border border-white/20 bg-secondary group shadow-xl">
                  {/* Image with specific aspect ratio / size handling */}
                  <div className="w-full flex justify-center bg-secondary">
                    <div className="w-full aspect-[766/298] p-5 relative overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover border border-white/30 "
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow justify-between ">
                    <div className="flex flex-col gap-3">
                      <Typography variant="h3" color="white" className="font-semibold">
                        {card.title}
                      </Typography>
                      <div className="flex items-center gap-2">
                        <Typography variant="span" color="white" className="text-sm opacity-70">
                          {card.date}
                        </Typography>
                        <Typography variant="span" color="none" className="text-sm text-[#23C8FA]">
                          {card.category}
                        </Typography>
                      </div>
                      <Typography variant="p" color="white" className="leading-relaxed opacity-90 mt-2">
                        {card.desc}
                      </Typography>
                    </div>
                    <div className="mt-4">
                      <Button text="Read More" href="#" showIcon={true} />
                    </div>
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
