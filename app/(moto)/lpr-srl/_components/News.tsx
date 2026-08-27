"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      img: "/moto/lpr-srl/news1.jpg",
      date: "September 2022 - New Driveshafts Range",
      desc: "New driveshaft range featuring 1,063 SKUs, manufactured with high-quality materials and backed by a 2-year warranty to ensure reliable performance.",
    },
    {
      img: "/moto/lpr-srl/news2.jpg",
      date: "October 2023 - Stellantis Supplier Awards",
      desc: "LPR was recognized by Stellantis for operational excellence, strong aftermarket performance, and commitment to delivering quality automotive solutions.",
    },
  ];

  return (
    <section id="news" className="w-full py-16 min-[2100px]:py-20 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[2100px]:gap-16 min-[3800px]:gap-20 items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 w-full" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Latest News & Updates
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[50%]  mt-2 text-sm">
            Our OE-quality automotive components are engineered for safety, durability, and reliable performance, delivering trusted solutions for the global aftermarket.
          </Typography>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16 w-full" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex flex-col xl:flex-row h-full">
                {/* Image */}
                <div className="w-full xl:w-[45%] h-64 xl:h-auto min-[2100px]:min-h-[300px] min-[3800px]:min-h-[400px] aspect-auto shrink-0">
                  <img src={item.img} alt={item.date} className="w-full h-full object-cover" />
                </div>
                {/* Content */}
                <div className="w-full xl:w-[55%] p-6 xl:p-8 min-[2100px]:p-12 min-[3800px]:p-16 flex flex-col relative justify-between gap-6 min-[2100px]:gap-8 min-[3800px]:gap-12 flex-1">
                  <div className="flex flex-col gap-3">
                    <Typography variant="h3" color="dark" className="font-bold  leading-snug">
                      {item.date}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed">
                      {item.desc}
                    </Typography>
                  </div>
                  {/* Arrow Button */}
                  <div className="self-end sm:absolute sm:bottom-6 sm:right-6 w-10 h-10 min-[2100px]:w-14 min-[2100px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#12943E99] flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer shrink-0 mt-4 sm:mt-0">
                    <ArrowRight className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
          <Button text="View All" href="#news" showIcon={false} />
        </div>

      </div>
    </section>
  );
};

export default News;
