"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      img: "/moto/freccia/news1.png",
      date: "May 20, 2026",
      title: "Freccia at Automechanika Frankfurt 2024"
    },
    {
      img: "/moto/freccia/news2.png",
      date: "April 10, 2026",
      title: "New Product Line Launch"
    },
    {
      img: "/moto/freccia/news3.png",
      date: "March 15, 2025",
      title: "Expanding Our Global Manufacturing"
    }
  ];

  return (
    <section id="news" className="w-full py-16  bg-white">
      <div className="custom-container flex flex-col items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center  mx-auto mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-secondary"></div>
            <Typography variant="h6" color="secondary" className="uppercase font-semibold tracking-wider">
              NEWS & UPDATES
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="font-bold mb-4">
            Updates, Innovations & Industry Insights
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            Explore recent developments, industry news, and product highlights from Freccia International as we continue to deliver quality and innovation worldwide.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex flex-col xl:flex-row border border-gray-800 rounded-sm overflow-hidden bg-white hover:shadow-md transition-shadow xl:min-h-[160px]">
              <div className="w-full xl:w-1/2 aspect-square  shrink-0 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full xl:w-1/2 p-4 xl:p-6 flex flex-col justify-center">
                <Typography variant="span" color="muted" className="font-medium text-xs xl:text-sm mb-2 block">
                  {item.date}
                </Typography>
                <Typography variant="h5" color="dark" className="font-medium mb-4 flex-grow leading-tight">
                  {item.title}
                </Typography>
                <div className="flex items-center gap-2 cursor-pointer group w-max">
                  <Typography variant="h6" color="dark" className=" underline  group-hover:text-primary transition-colors">
                    Read More
                  </Typography>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Button text="Read More News" showIcon={true} />
        </div>

      </div>
    </section>
  );
};

export default News;
