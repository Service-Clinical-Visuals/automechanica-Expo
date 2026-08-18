"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function NewsEvents() {
  const newsItems = [
    {
      title: "Opening the new Factory",
      date: "12 MAY 2025",
      img: "/moto/temel/news-1.jpg",
      href: "#news-1",
    },
    {
      title: "International Women’s Day Celebration at Temel Conta",
      date: "11 July 2025",
      img: "/moto/temel/news-2.jpg",
      href: "#news-2",
    },
    {
      title: "As Temel Conta, We Export %70 of Our Production",
      date: "12 August 2024",
      img: "/moto/temel/news-3.jpg",
      href: "#news-3",
    },
    {
      title: "Passenger Vehicle Gaskets: Engine Performance & Reliable Sealing Solutions",
      date: "20 September 2024",
      img: "/moto/temel/news-4.jpg",
      href: "#news-4",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="news">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center mx-auto gap-3.5 w-full max-w-5xl" data-aos="fade-up">
          <div className="flex flex-col items-center">
            <span className="sub-heading">
              News & Event
            </span>
            <div className="w-10 h-[2px] bg-[var(--color-primary)] mt-1.5" />
          </div>

          <Typography variant="h1" className="font-bold leading-tight mt-1 mx-auto">
            Discover What’s New in Products, Technology, and Innovation
          </Typography>

          <Typography variant="p" className="text-center max-w-3xl lg:max-w-7xl mx-auto">
            Stay informed with our latest developments, including new product launches, technical advancements, and key industry updates. Our News & Updates section keeps you connected with everything happening across our brand—from innovation in engine components to improvements in quality, performance, and global market trends.
          </Typography>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-full border border-gray-200 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-gray-300 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] p-2 bg-[#F7F7F8] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow gap-6">
                <h3 className="font-bold text-[#202020] font-primary line-clamp-3 leading-snug">
                  {item.title}
                </h3>

                {/* Footer: Date + Circle Arrow */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs sm:text-sm text-gray-500 font-secondary font-medium">
                    {item.date}
                  </span>

                  <div className="w-9 h-9 rounded-full border border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white cursor-pointer shadow-sm shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA */}
        <div className="flex justify-center pt-2" data-aos="fade-up" data-aos-delay="200">
          <Button
            text="View all News"
            href="#news"
            variant="outline"
            showIcon={false}
            className="px-8 py-2.5"
          />
        </div>

      </div>
    </section>
  );
}
