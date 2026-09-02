"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "Canik Mayor İbrahim SANDIKÇI and Tekkeköy Mayor Mustafa CANDAL visited us.",
      img: "/moto/mc-filter/news1.png",
    },
    {
      title: "H. Zafer ARAL, Chairman of the Board of Directors of Samsun Yurt Savunma",
      img: "/moto/mc-filter/news2.png",
    },
    {
      title: "Tarık ALTUNCU, Chairman of the Board of SAMPA, visited our company.",
      img: "/moto/mc-filter/news3.png",
    },
  ];

  return (
    <section id="news" className="w-full py-12 md:py-16 2xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-16 items-center">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl" data-aos="fade-up">
          <div className="inline-block flex flex-col items-center">
            <Typography variant="h5" color="primary" className="font-bold uppercase tracking-wider text-sm">
              LATEST INSIGHTS
            </Typography>
            <div className="w-full h-[2px] bg-secondary mt-1"></div>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            News & Announcements
          </Typography>
        </div>

        {/* Desktop News Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden shrink-0 bg-gray-50">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 lg:p-8 flex-1">
                <Typography variant="h3" color="dark" className="font-bold mb-6 leading-snug line-clamp-3">
                  {item.title}
                </Typography>

                {/* View More Link */}
                <div className="mt-auto">
                  <a href="#news" className="flex items-center gap-2 text-primary font-bold tracking-wide hover:opacity-80 transition-opacity">
                    View More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
