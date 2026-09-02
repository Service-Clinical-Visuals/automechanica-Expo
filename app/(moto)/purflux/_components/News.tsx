"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const News = () => {
  const newsItems = [
    {
      img: "/moto/purflux/news1.png",
      date: "17\nOct",
      title: "Purflux introduces its first battery filters for hybrid vehicles"
    },
    {
      img: "/moto/purflux/news2.png",
      date: "02\nFeb",
      title: "Discover the range extension on Transmission Filters"
    },
    {
      img: "/moto/purflux/news3.png",
      date: "01\nJan",
      title: "PURFLUX GROUP launches a new range of Purflux filters for automatic gearboxes"
    },
    {
      img: "/moto/purflux/news4.png",
      date: "22\nJan",
      title: "New FCA Group “FireFly” engines equipped with PURFLUX GROUP innovative oil filter"
    }
  ];

  return (
    <section id="news" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 w-full" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Latest News & Insights
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            Stay informed with the latest AUTOPART news, product innovations, company updates, and industry insights. Discover our newest technologies, sustainability initiatives, and developments shaping the future of battery manufacturing.
          </Typography>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden group hover:shadow-md transition-shadow h-full">

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date Overlay */}
                <div className="absolute bottom-0 right-0 bg-primary text-white flex flex-col items-center justify-center p-3 min-w-[3.5rem]">
                  {item.date.split('\n').map((line, i) => (
                    <Typography variant="h5" color="white" key={i} className={`block leading-none font-primary ${i === 0 ? 'text-xl mb-1' : 'text-sm'}`}>
                      {line}
                    </Typography>
                  ))}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-5 sm:p-6">
                <Typography variant="h5" color="primary" className=" tracking-tight leading-snug mb-6">
                  {item.title}
                </Typography>

                <div className="mt-auto flex justify-end">
                  <Link href="#" className="text-primary hover:text-primary-hover font-medium underline underline-offset-4 text-sm transition-colors">
                    Read
                  </Link>
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
