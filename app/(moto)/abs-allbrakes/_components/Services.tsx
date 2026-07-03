"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      img: "/moto/abs-allbrakes/service1.png",
      title: "Personal\nStock Advice",
      desc: "Maximize your profitability with expert stock management and data-driven insights. Using market data from 30+ international markets, ABS helps you optimize inventory, improve product availability, reduce excess stock, and make smarter stocking decisions for better business performance.",
    },
    {
      img: "/moto/abs-allbrakes/service2.png",
      title: "100% CERTIFIED\nQUALITY",
      desc: "Our products comply with stringent European regulations and undergo extensive long-term wear testing to ensure consistent performance. Combined with in-depth analysis of used components, this rigorous quality process guarantees exceptional durability, reliability, and safety.",
    },
    {
      img: "/moto/abs-allbrakes/service3.png",
      title: "Marketing\nSupport",
      desc: "Furthermore, do you need help to market the ABS products in your region? Whether you're looking for the latest marketing materials—be it digital or print—or attractive and unique customer relationship gifts, we've got you covered!",
    },
    // {
    //   img: "/moto/abs-allbrakes/service4.png",
    //   title: "Private\nLabel Handling",
    //   desc: "Want to enter a niche market with your own private label? We are here to help—you choose how to promote and package your products before making them available for sale, while we ensure consistent quality, reliable supply, and professional support throughout.",
    // },
  ];

  const loopedServices = [...services, ...services];

  // Pure CSS mask guarantees the gap NEVER distorts on 4K monitors
  const MASK = "[mask-image:radial-gradient(circle_at_0_0,transparent_75px,black_76px)] [-webkit-mask-image:radial-gradient(circle_at_0_0,transparent_75px,black_76px)]";

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden" id="services">
      <div className="custom-container">
        <div className="text-center max-w-[70%] mx-auto mb-16" data-aos="fade-up">
          <Typography variant="h2" className="text-black mb-4 font-bold">
            Our Services
          </Typography>
          <Typography variant="p" className="">
            We offer more than premium automotive parts. Our value-added services include expert support, certified quality, reliable logistics, private label solutions, and flexible distribution options to help your business grow with confidence.
          </Typography>
        </div>

        <div className="relative pt-6" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="!pb-16 !pt-4 !px-4"
          >
            {loopedServices.map((service, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                {/* Outer wrapper applies the drop shadow to the masked card shape */}
                <div className="relative h-full w-full flex flex-col drop-shadow-[0_4px_15px_rgba(0,0,0,0.08)]">

                  {/* The White Card with Perfect Circle Cutout */}
                  <div className={`absolute inset-0 bg-white rounded-xl ${MASK} z-0`} />

                  {/* Icon badge — fixed aspect ratio guarantees perfect circle on any screen */}
                  <div className="absolute  top-[-5px] left-[-5px] bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center shadow-[2px_2px_1px_1px_rgba(0,0,0,0.08)] ">
                    <div className="absolute  w-[85px] h-[85px] bg-[var(--color-primary)] rounded-full flex items-center justify-center p-4 z-20 shadow-md">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col pt-[15px] pb-10 px-6 2xl:px-8">
                    {/* Title */}
                    <div className="pl-[85px] min-h-[60px] 2xl:min-h-[80px] flex items-center mb-4 lg:mb-6">
                      <Typography
                        variant="h4"
                        className="font-oswald font-semibold text-[#242424] leading-tight text-[18px] xl:text-[20px] 2xl:text-[24px]"
                      >
                        {service.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </Typography>
                    </div>

                    <Typography
                      variant="p"
                      color="dark"
                      className="font-lato leading-relaxed mt-4 mb-2 flex-grow text-[#555] px-2 text-[14px] 2xl:text-[16px]"
                    >
                      {service.desc}
                    </Typography>

                    <Link
                      href="#"
                      className="font-oswald text-[var(--color-primary)] font-bold text-[16px] 2xl:text-[18px] underline tracking-wide mt-auto inline-block w-fit transition-colors px-2"
                    >
                      Learn More &gt;&gt;&gt;
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                onClick={() => swiperInstance?.slideToLoop(i)}
                className={`w-8 h-2 rounded-full cursor-pointer transition-all ${(activeIndex % 3) === i ? "bg-[var(--color-primary)]" : "bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}