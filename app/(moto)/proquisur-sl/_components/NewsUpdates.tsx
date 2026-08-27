"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

export default function NewsUpdates() {
  const newsItems = [
    {
      title: "PRO 50% VCS-2: Antifreeze specifically designed for Volvo",
      date: "12 MAY 2025",
      image: "/moto/proquisur-sl/news-1.png"
    },
    {
      title: "In Winter, every detail counts...",
      date: "11 July 2025",
      image: "/moto/proquisur-sl/news-2.png"
    },
    {
      title: "MAX BLUE DIRECT CAR: Effective maintenance for Adblue....",
      date: "12 August 2024",
      image: "/moto/proquisur-sl/news-3.png"
    },
    {
      title: "Marine Engine solutions | Protection & nautical performance",
      date: "20 September 2024",
      image: "/moto/proquisur-sl/news-4.png"
    }
  ];

  return (
    <section className="py-20 xl:py-20 bg-white text-center border-t border-gray-100">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center mb-6" data-aos="fade-up">
          <Typography variant="span" className="!text-[#6FB420] font-bold text-sm tracking-wide">
            News & Updates
          </Typography>
          <Typography variant="h2" className="section-title text-[#202020] manrope font-bold leading-tight">
            Discover What's New in Products, Technology, and Innovation
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography variant="p" className="max-w-7xl mx-auto text-[#494949] inter section-text mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Stay informed with our latest developments, including new product launches, technical advancements, and key industry updates. Our News & Updates section keeps you connected with everything happening across our brand—from innovation in engine components to improvements in quality, performance, and global market trends.
        </Typography>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-left mb-12" data-aos="fade-up" data-aos-delay="200">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-start h-full border border-black group rounded-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                {/* Fallback gray bg if image doesn't exist */}
                <div className="w-full h-full bg-[#E5E5E5] absolute inset-0"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow w-full">
                <Typography variant="h3" className="text-[#202020] font-bold responsive-text-base md:text-lg manrope leading-snug line-clamp-3 mb-6">
                  {item.title}
                </Typography>

                <div className="mt-auto flex items-center justify-between w-full text-[#7A7A7A]">
                  <span className="font-semibold responsive-text-sm inter">{item.date}</span>
                  <ArrowUpRight size={18} className="text-[#6FB420]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center">
          <Button href="#" variant="primary" className="!rounded-sm !px-8 !py-3 w-auto">
            <span className="flex items-center gap-2 text-sm font-semibold">
              Read All News <ArrowUpRight size={16} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
