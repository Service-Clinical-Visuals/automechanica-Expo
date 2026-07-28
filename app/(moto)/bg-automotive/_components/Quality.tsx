"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function Quality() {
  const newsItems = [
    {
      title: "New Timing kit Range\nExpansion",
      date: "12 MAY 2025",
      image: "/moto/bg-automotive/News1.png",
      isNew: true
    },
    {
      title: "BGA at Automechanika\nBirmingham 2025",
      date: "11 July 2025",
      image: "/moto/bg-automotive/News2.png"
    },
    {
      title: "Company Update - Spring\n2025",
      date: "12 August 2024",
      image: "/moto/bg-automotive/News3.png"
    },
    {
      title: "New Update in - Customer\nSupport",
      date: "20 September 2024",
      image: "/moto/bg-automotive/News4.png"
    }
  ];

  return (
    <section className="py-20 xl:py-20 bg-white text-center">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center mb-6" data-aos="fade-up">
          <div className="inline-flex flex-col">
            <Typography variant="h4" className="text-[#185E2D] orbitron-font font-semibold tracking-widest text-[15px] uppercase  pb-0.5">NEWS & UPDATES</Typography>
            <div className="w-1/2 h-[2px] bg-[#185E2D] self-start"></div>
          </div>
          <Typography variant="h2" className="section-title text-[#202020] orbitron-font font-semibold leading-tight">
            Discover What's New in Products, Technology, and Innovation
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography variant="p" className="max-w-7xl mx-auto text-[#191919] font-['Open_Sans'] section-text mb-10 leading-relaxed tracking-wider" data-aos="fade-up" data-aos-delay="100">
          Stay informed with our latest developments, including new product launches, technical advancements, and key industry updates. Our News & Updates section keeps you connected with everything happening across our brand—from innovation in engine components to improvements in quality, performance, and global market trends.
        </Typography>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-left mb-12" data-aos="fade-up" data-aos-delay="200">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-start h-full relative group rounded-sm transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image container */}
              <div className="w-full aspect-video relative overflow-hidden rounded-t-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.isNew && (
                  <div className="absolute top-3 left-3 bg-[#FBB03B] text-white text-[11px] tracking-wide font-bold px-3 py-1 rounded-sm">
                    New
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col w-full border-x border-b border-black rounded-b-sm">
                <Typography variant="h3" className="text-[#202020] font-bold text-[14px] leading-snug font-['Montserrat'] mb-1 whitespace-pre-line">
                  {item.title}
                </Typography>

                <div className="flex items-center justify-between mt-1">
                  <Typography variant="span" className="text-[#666666] text-[15px] font-['Open_Sans']">{item.date}</Typography>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#185E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div data-aos="fade-up" data-aos-delay="300">
          <Button href="#" variant="primary" className="!bg-[#185E2D] hover:!bg-[#154620] !font-['Montserrat'] !font-medium !rounded-md !px-6 !py-2.5 inline-flex items-center gap-2">
            View All News
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
