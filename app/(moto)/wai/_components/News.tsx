"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const News = () => {
  const newsData = [
    {
      img: "/moto/wai/news1.png",
      date: "July 21, 2026",
      title: "WAI Adds 109 New Part Numbers in Q2 2026",
      text: "WAI adds 109 new part numbers in Q2 2026, expanding aftermarket coverage.",
    },
    {
      img: "/moto/wai/news2.png",
      date: "May 23, 2026",
      title: "WAI Expands with ACI Automotive Acquisition",
      text: "WAI expands its product portfolio with the acquisition of ACI Automotive.",
    },
    {
      img: "/moto/wai/news3.png",
      date: "May 23, 2026",
      title: "WAI Shortlisted for CAT Award 2025",
      text: "WAI shortlisted for Supplier of the Year at the CAT Awards 2025.",
    },
  ];

  return (
    <section id="news" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 lg:gap-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 w-full lg:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            News & Updates
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Explore the latest from WAI, including new product launches, technical insights, and updates designed to support aftermarket professionals and industry advancements.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-[3800px]:gap-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {newsData.map((news, idx) => (
            <div key={idx} className="group relative w-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">

              {/* Image Section */}
              <div className="relative w-full p-4 rounded-3xl aspect-[4/3] overflow-hidden ">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-6 sm:p-8 flex-grow bg-white text-left">
                <Typography variant="span" color="muted" className="text-sm font-medium mb-4">
                  {news.date}
                </Typography>
                <Typography variant="h3" color="dark" className="font-bold mb-3 leading-snug">
                  {news.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                  {news.text}
                </Typography>

                <Link href="#" className="mt-auto self-end">
                  <Typography variant="p" color="primary" className="font-bold underline underline-offset-4 hover:text-primary-hover transition-colors">
                    Read More
                  </Typography>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;

