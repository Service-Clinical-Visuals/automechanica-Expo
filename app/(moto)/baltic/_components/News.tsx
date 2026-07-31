"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Calendar, ArrowUpRight } from "lucide-react";

const newsData = [
  {
    image: "/moto/baltic/news1.jpg",
    badge: "Event",
    icon: "/moto/baltic/vector1.png",
    title: "Sirvintos marathon 2025",
    desc: "On June 28, a fun sporting event took place in Sirvintos — the Sirvintos Marathon. The event is intended for both beginners or sports enthusiasts Who want to test themselves...",
    date: "July 16, 2025"
  },
  {
    image: "/moto/baltic/news2.jpg",
    badge: null,
    icon: "/moto/baltic/vector2.png",
    title: "Small steps towards sustainability",
    desc: "We all understand the importance Of sustainability in the company's activities. so we try step by step to implement sustainable.",
    date: "June 01, 2026"
  },
  {
    image: "/moto/baltic/news3.jpg",
    badge: null,
    icon: "/moto/baltic/vector3.png",
    title: "\"Lithuanian Export Prize\" 2023 awards",
    desc: "March 28 at the ceremony Of awarding the annual \"Lithuanian Export Prize\" awards of the Lithuanian Chamber of Commerce.",
    date: "March 30, 2025"
  },
  {
    image: "/moto/baltic/news4.png",
    badge: null,
    icon: "/moto/baltic/vector4.png",
    title: "Happy Easter!",
    desc: "Our production and warehouse will be closed from 8th till 16th of April.",
    date: "March 29, 2025"
  }
];

const News = () => {
  return (
    <section id="news" className="w-full py-16 min-[3200px]:py-[120px] bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4" data-aos="fade-up">
          <Typography variant="h4" color="primary" className="font-bold">
            News & Events
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Don't miss the important NEWS
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-[70%] mt-2">
            Stay informed with our latest updates, achievements, and key developments. From company milestones to industry insights, explore what's happening across our journey.
          </Typography>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow h-full group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10  rounded-full min-[3200px]:h-[80px] min-[3200px]:w-[80px] bg-primary flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <img src={item.icon} alt="icon" className="w-5 h-5 min-[3200px]:h-[40px] min-[3200px]:w-[40px] object-contain brightness-0 invert" />
                  </div>
                  <Typography variant="h4" color="dark" className="font-bold leading-tight">
                    {item.title}
                  </Typography>
                </div>

                <Typography variant="p" color="muted" className="text-sm leading-relaxed mb-6">
                  {item.desc}
                </Typography>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--color-primary)]">
                    <Calendar className="w-5 h-5 min-[3200px]:h-10 min-[3200px]:w-10 " />
                    <span className="text-sm font-semibold min-[3200px]:text-2xl">{item.date}</span>
                  </div>
                  <div className="w-8 h-8 min-[3200px]:h-14 min-[3200px]:w-14 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 min-[3200px]:h-10 min-[3200px]:w-10" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
          <Button text="View All News" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default News;
