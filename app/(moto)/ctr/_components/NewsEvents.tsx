"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function NewsEvents() {
  const newsItems = [
    {
      title: "[Exhibition] Automechanika Frankfurt 2026.",
      date: "12 MAY 2026",
      img: "/moto/ctr/news-1.png",
      isNew: true,
      href: "#news",
    },
    {
      title: "CTR Takes the Lead! Tech Seminar",
      date: "11 July 2025",
      img: "/moto/ctr/news-2.png",
      isNew: false,
      href: "#news",
    },
    {
      title: "CTR 2024 Steer Star Conference",
      date: "12 August 2024",
      img: "/moto/ctr/news-3.png",
      isNew: false,
      href: "#news",
    },
    {
      title: "[Exhibition] Thailand Auto Parts & Accessories(TAPA) 2023.",
      date: "20 September 2024",
      img: "/moto/ctr/news-4.png",
      isNew: false,
      href: "#news",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="news">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center mx-auto gap-3.5 w-full" data-aos="fade-up">
          <div className="flex flex-col items-center">
            <span className="sub-heading">
              NEWS & UPDATES
            </span>
            <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
          </div>

          <Typography variant="h2" className="font-bold leading-tight mt-1 mx-auto text-center">
            Discover What’s New in Products, Technology, and Innovation
          </Typography>

          <Typography variant="p" className="text-center max-w-[80%] mx-auto leading-relaxed">
            Stay informed with our latest developments, including new product launches, technical advancements, and key industry updates. Our News & Updates section keeps you connected with everything happening across our brand—from innovation in engine components to improvements in quality, performance, and global market trends.
          </Typography>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-full border border-gray-200/90 rounded-xl bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-gray-300 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] bg-[#F8F9FA] overflow-hidden flex items-center justify-center">
                {item.isNew && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[var(--color-primary)] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                    New
                  </span>
                )}
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${idx == 0 ? "object-contain" : "object-cover"}`}
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow gap-4">
                <h4 className="font-bold text-[var(--color-heading)] font-primary leading-snug line-clamp-2 min-h-[2.75rem]">
                  {item.title}
                </h4>

                {/* Footer: Date + Arrow */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-secondary font-medium">
                    {item.date}
                  </span>

                  <ArrowRight className="w-4 h-4 text-[var(--color-primary)] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA */}
        <div className="flex justify-center pt-2" data-aos="fade-up" data-aos-delay="200">
          <Button
            text="View All News"
            href="#news"
            variant="outline"
            showIcon={true}
            className="px-8 py-2.5 text-sm sm:text-base font-semibold"
          />
        </div>

      </div>
    </section>
  );
}

