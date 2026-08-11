"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const Updates = () => {
  const newsData = [
    {
      id: 1,
      image: "/moto/auto-gh/news1.png",
      title: "It's what you don't see that matters",
      date: "12/02/2026",
    },
    {
      id: 2,
      image: "/moto/auto-gh/news2.png",
      title: "We keep Europe Moving...",
      date: "30/03/2025",
    },
    {
      id: 3,
      image: "/moto/auto-gh/news3.png",
      title: "Every mile count.",
      date: "03/05/2026",
    },
    {
      id: 4,
      image: "/moto/auto-gh/news4.png",
      title: "Every mile count.",
      date: "22/12/2028",
    },
  ];

  return (
    <section id="news" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14 min-[3800px]:gap-20">

        {/* Header Group */}
        <div className="flex flex-col items-center text-center gap-4 w-full xl:w-2/3 mx-auto" data-aos="fade-up">
          <Typography variant="span" color="primary" className="font-bold tracking-wide">
            News And Updates
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Updates, Innovations & Industry Insights
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed mt-2">
            Explore recent developments, industry news, and product highlights from Auto GH as we continue to deliver quality and innovation worldwide.
          </Typography>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 min-[2100px]:gap-10 min-[3800px]:gap-12">
          {newsData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[358/358] overflow-hidden p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col p-6 min-[2100px]:p-8 gap-6 border-t border-gray-100 flex-grow justify-between">
                <Typography variant="h4" color="dark" className="font-semibold line-clamp-2">
                  {item.title}
                </Typography>

                <div className="flex items-center justify-between w-full pt-4">
                  <Typography variant="span" color="muted" className="text-sm">
                    {item.date}
                  </Typography>
                  <a href="#" className="inline-flex items-center group-hover:text-primary transition-colors">
                    <Typography variant="span" color="dark" className="font-medium underline decoration-1 underline-offset-4 group-hover:text-primary mr-2">
                      Read More
                    </Typography>
                    <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="flex justify-center mt-4 min-[2100px]:mt-8" data-aos="fade-up">
          <Button text="Read More" variant="primary" showIcon={false} />
        </div>

      </div>
    </section>
  );
};

export default Updates;
