"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    image: "/moto/gl-oil/p1.png",
    category: "Coperate",
    date: "February 2020",
    title: "Turnover and profits increased in 2019. Lubricants also recorded positive results",
    link: "#",
  },
  {
    id: 2,
    image: "/moto/gl-oil/p2.png",
    category: "Events",
    date: "April 2020",
    title: "Gloil invites readers to participate in the Siferr Fair",
    link: "#",
  },
  {
    id: 3,
    image: "/moto/gl-oil/p3.png",
    category: "Coperate",
    date: "Nov 2020",
    title: "Research and innovation applied to lubricants",
    link: "#",
  },
];

const Premium = () => {
  return (
    <section id="premium" className="w-full py-16 xl:py-24 bg-secondary">
      <div className="custom-container flex flex-col gap-12 xl:gap-16 items-center">

        {/* Title */}
        <div className="text-center max-w-3xl min-[2500px]:max-w-[80%] min-[3800px]:max-w-[90%] mx-auto">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Explore Our Complete Range of<br className="hidden sm:block" /> Premium Engine Oils
          </Typography>
        </div>

        {/* News Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col bg-[#111111] rounded-2xl border border-white/25 p-4 lg:p-5 transition-transform hover:-translate-y-2 duration-300 shadow-xl group cursor-pointer ${index === 2 ? 'md:col-span-2 md:w-[calc(50%-12px)] md:justify-self-center lg:col-span-1 lg:w-full lg:justify-self-auto' : ''
                }`}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta Info */}
              <div className="flex justify-between items-center mb-4">
                <Typography color="white" variant="p" className="bg-primary !font-primary !text-black !font-semibold text-xs md:text-sm px-4 py-1 rounded">
                  {item.category}
                </Typography>
                <Typography color="white" className="text-primary footer-body ">
                  {item.date}
                </Typography>
              </div>

              {/* Title */}
              <Typography variant="h3" color="white" className="font-bold leading-snug mb-8 line-clamp-3">
                {item.title}
              </Typography>

              {/* Read More Link */}
              <div className="mt-auto flex items-center gap-2 text-primary group-hover:text-primary-hover transition-colors">
                <Typography color="primary" className="font-semibold text-lg underline">Read More</Typography>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Premium;
