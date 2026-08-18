"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function IndustrySolutions() {
  const partners = [
    {
      logo: "/moto/vitobello/partner1.png",
      name: "FIR",
      description: "Associazione Italiana Rettificatori e Meccanici Qualificati is a leading association representing more than 200 qualified Italian companies specializing in engine reconditioning, precision machining, and mechatronic services.",
      link: "#"
    },
    {
      logo: "/moto/vitobello/partner2.png",
      name: "Inforicambi",
      description: "With over 20 million articles and 30 million up-to-date cross-references, Inforicambi facilitates the search for spare parts and provides information such as: prices, cross-references, technical information, pictures and applications.",
      link: "#"
    },
    {
      logo: "/moto/vitobello/partner3.png",
      name: "Kromeda",
      description: "Kromeda provides accurate information sourced from original electronic documents, carefully verified by a team of experts to ensure reliability, consistency, and up-to-date technical data for automotive professionals worldwide and businesses.",
      link: "#"
    },
    {
      logo: "/moto/vitobello/partner4.png",
      name: "Ajusa",
      description: "A leading supplier of original equipment, high-performance parts, and accessories for cars, trucks, vans, SUVs, motorcycles, and boats, delivering trusted quality, reliability, and comprehensive automotive solutions for diverse applications.",
      link: "#"
    },
    {
      logo: "/moto/vitobello/partner5.png",
      name: "TecAlliance",
      description: "TecAlliance provides the independent aftermarket with comprehensive and up-to-date data for the identification of vehicles and their components, both in the passenger car and commercial vehicle sectors, ensuring accurate parts identification worldwide.",
      link: "#"
    },
    {
      logo: "/moto/vitobello/partner6.png",
      name: "ClipParts",
      description: "ClipParts Automotive, developed by Progea, is a simple and straightforward database that enables the quick and accurate identification of car, motorbike, and truck parts with enhanced efficiency, precision, reliability, and convenience.",
      link: "#"
    }
  ];


  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#2C2C2C] overflow-hidden" id="partners">
      <div className="custom-container relative z-10 flex flex-col gap-14 lg:gap-20">

        {/* Header Block: Centered Title & Description */}
        <div className="flex flex-col items-center text-center mx-auto max-w-5xl gap-4 md:gap-5" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight text-3xl md:text-4xl lg:text-5xl">
            Our Official Partners
          </Typography>
          <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-xs md:text-sm max-w-4xl mx-auto">
            Vitobello Ricambi S.r.l. collaborates with leading automotive organizations, technology providers, and industry partners to deliver reliable products, accurate technical information, and innovative solutions. These trusted partnerships strengthen our commitment to quality, efficiency, and excellence across the global automotive aftermarket, ensuring long-term success and customer satisfaction.
          </Typography>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full relative px-2" data-aos="fade-up" data-aos-delay="150">
          <style dangerouslySetInnerHTML={{
            __html: `
            .partners-pagination .swiper-pagination-bullet {
              background-color: white !important;
              opacity: 0.5;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              transition: all 0.3s ease;
              margin: 0 4px !important;
            }
            .partners-pagination .swiper-pagination-bullet-active {
              background-color: #F97316 !important;
              opacity: 1 !important;
              width: 28px;
              border-radius: 4px;
            }
          `}} />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            slidesPerGroup={1}
            rewind={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.partners-pagination-container' }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="w-full pb-10 !pt-12"
          >
            {partners.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative w-full h-full border border-white/20 bg-[#1E1E1E] flex flex-col items-center text-center px-6 pb-8 pt-16 transition-all duration-300 hover:border-white/40">

                  {/* Top Overlapping Logo Box */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-[35%] bg-white flex items-center justify-center border border-gray-200">
                    <img
                      src={card.logo}
                      alt={card.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent && parent.children.length === 1) {
                          const span = document.createElement('span');
                          span.innerText = card.name;
                          span.className = 'text-black font-bold text-2xl font-sans';
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>

                  {/* Content Box */}
                  <div className="flex flex-col items-center gap-4 flex-grow w-full">
                    <Typography variant="h3" color="white" className="font-semibold text-lg md:text-xl">
                      {card.name}
                    </Typography>
                    <Typography variant="p" color="white" className="text-white/80 text-xs md:text-[13px] leading-relaxed flex-grow">
                      {card.description}
                    </Typography>

                    <a href={card.link} className="text-[#F97316] font-semibold text-sm mt-3 hover:underline transition-all">
                      Visit The Website &gt;&gt;
                    </a>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="partners-pagination-container partners-pagination flex justify-center gap-2 mt-4 w-full"></div>
        </div>

      </div>
    </section>
  );
}
