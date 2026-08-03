"use client";

import React, { useState, useMemo } from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SolutionItem {
  title: string;
  subtext: string;
  img: string;
  tag?: string;
}

export default function Solutions() {
  const categories = ["Products", "Components", "Hardware", "View All"];
  const [activeCategory, setActiveCategory] = useState("Products");

  const categoryData: Record<string, SolutionItem[]> = {
    "Products": [
      {
        title: "Starters",
        subtext: "Precision-fit starters engineered for reliable cranking power across multiple applications.",
        img: "/moto/wai/frame11.png",
        tag: "Rotating Electrical"
      },
      {
        title: "Window Regulators",
        subtext: "Precision-engineered regulators for smooth, quiet, and reliable window operation.",
        img: "/moto/wai/frame12.png",
        tag: "Small Motor"
      },
      {
        title: "Engine Management",
        subtext: "Mass air flow sensors for precise airflow control and reliable engine performance.",
        img: "/moto/wai/frame13.png",
        tag: "Engine managment" // matching the typo in the design request
      },
    ],
    "Components": [
      {
        title: "Alternator Housings",
        subtext: "Standard alternator component designed for Delco 10DN and 10SI series applications.",
        img: "/moto/wai/frame21.png"
      },
      {
        title: "Armatures",
        subtext: "12-24V CW rotation starter component designed for Delco 30MT series applications.",
        img: "/moto/wai/frame22.png"
      },
      {
        title: "Baffles",
        subtext: "OE-design component for Delco CS130 alternator applications.",
        img: "/moto/wai/frame23.png"
      },
    ],
    "Hardware": [
      {
        title: "Abrasives",
        subtext: "120 grit abrasive roll for rust removal, polishing, and shaft finishing applications.",
        img: "/moto/wai/frame31.png"
      },
      {
        title: "Lubricants",
        subtext: "OE-grade anti-friction bearing lubricant for automotive and industrial applications.",
        img: "/moto/wai/frame32.png"
      },
      {
        title: "Solder",
        subtext: "89-601 100% NEW 60/40 rosin-core solder for reliable electrical connections.",
        img: "/moto/wai/frame33.png"
      },
    ]
  };

  const activeCards = useMemo(() => {
    if (activeCategory === "View All") {
      return [
        ...categoryData["Products"],
        ...categoryData["Components"],
        ...categoryData["Hardware"]
      ];
    }
    return categoryData[activeCategory] || [];
  }, [activeCategory]);

  const renderCard = (card: SolutionItem, idx: number) => (
    <div key={`${card.title}-${idx}`} className="group relative w-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image Section */}
      <div 
        className="relative w-full bg-[#E8F3FA] p-6 flex items-center justify-center"
        style={{ aspectRatio: "533 / 334" }}
      >
        {card.tag && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md z-10 shadow-sm">
            <Typography variant="p" color="white" className="font-semibold tracking-wide">
              {card.tag}
            </Typography>
          </div>
        )}
        <img
          src={card.img}
          alt={card.title}
          className={`object-contain drop-shadow-lg transition-transform duration-500 ${
            card.tag 
              ? "w-full h-full group-hover:scale-105" 
              : "w-[75%] h-[75%] group-hover:scale-110"
          }`}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center text-center p-6 sm:p-8 flex-grow bg-white">
        <Typography variant="h3" color="dark" className="font-bold mb-3">
          {card.title}
        </Typography>
        <Typography variant="p" color="muted" className="text-sm sm:text-base leading-relaxed mb-6 flex-grow">
          {card.subtext}
        </Typography>
        <Link href="#" className="mt-auto">
          <Typography variant="p" color="primary" className="font-bold underline underline-offset-4 hover:text-primary-hover transition-colors">
            Read More
          </Typography>
        </Link>
      </div>
    </div>
  );

  return (
    <section id="products" className="w-full py-16 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="custom-container flex flex-col items-center gap-5 ">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 w-full lg:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Engineered Automotive Solutions
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            High-quality automotive products and components engineered for reliable performance and global aftermarket needs.
          </Typography>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-1" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 font-oswald sm:px-8 py-2.5 transition-all duration-300 ${isActive
                  ? "text-primary font-bold"
                  : "text-gray-600 hover:text-primary font-medium"
                  }`}
              >
                <Typography variant="h4" color={isActive ? "primary" : "muted"} className={`font-inherit ${isActive ? "underline" : ""}`}>
                  {cat}
                </Typography>
              </button>
            );
          })}
        </div>

        {/* Cards Grid / Swiper */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="200">
          {activeCategory === "View All" ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full pb-16"
              style={{
                "--swiper-pagination-color": "var(--color-primary)",
                "--swiper-pagination-bullet-inactive-color": "#9ca3af",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
              } as React.CSSProperties}
            >
              {activeCards.map((card, idx) => (
                <SwiperSlide key={`swiper-${idx}`} className="!h-auto flex">
                  {renderCard(card, idx)}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {activeCards.map((card, idx) => renderCard(card, idx))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
